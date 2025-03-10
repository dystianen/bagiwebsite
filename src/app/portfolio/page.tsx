import Portfolio from '@/src/components/pages/portfolio';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Global' });

  return {
    title: t('portfolio'),
    alternates: {
      canonical: 'https://bagiwebsite.com/portfolio'
    }
  };
}

export default Portfolio;
