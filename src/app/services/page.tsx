import ServicesComp from '@/src/components/pages/ServicesComp';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { FC } from 'react';

export async function generateMetadata({
  params
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.lang, namespace: 'Global' });

  return { title: t('services') };
}

const Services: FC = () => <ServicesComp />;

export default Services;
