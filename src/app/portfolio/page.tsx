import PortfolioComp from '@/src/components/pages/PortfolioComp';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { FC } from 'react';

export async function generateMetadata(locale: string): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Global' });

  return { title: t('portfolio') };
}

const Portfolio: FC = () => <PortfolioComp />;

export default Portfolio;
