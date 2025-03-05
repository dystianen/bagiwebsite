import PortfolioComp from '@/src/components/pages/PortfolioComp';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { FC } from 'react';

export async function generateMetadata({
  params: { lang }
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: lang, namespace: 'Global' });

  return { title: t('portfolio') };
}

const Portfolio: FC = () => <PortfolioComp />;

export default Portfolio;
