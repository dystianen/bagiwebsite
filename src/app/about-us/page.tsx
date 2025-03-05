import AboutUsComp from '@/src/components/pages/AboutUsComp';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { FC } from 'react';

export async function generateMetadata({
  params: { lang }
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: lang, namespace: 'Global' });
  return { title: t('about_us') };
}

const AboutUs: FC = () => <AboutUsComp />;

export default AboutUs;
