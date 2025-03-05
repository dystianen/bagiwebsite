import AboutUsComp from '@/src/components/pages/AboutUs';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Global' });

  return { title: t('portfolio') };
}

export default AboutUsComp;
