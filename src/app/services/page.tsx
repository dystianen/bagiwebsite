import ServicesComp from '@/components/pages/Services';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Global' });

  return {
    title: t('services'),
    alternates: {
      canonical: 'https://bagiwebsite.com/services'
    }
  };
}

export default ServicesComp;
