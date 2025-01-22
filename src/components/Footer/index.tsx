'use client';
import { Card, Container, Flex, Grid } from '@mantine/core';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Footer = () => {
  const t = useTranslations('Footer');
  const sosmed = [
    {
      icon: '/assets/icons/instagram.png'
    },
    {
      icon: '/assets/icons/facebook.png'
    },
    {
      icon: '/assets/icons/linkedin.png'
    }
  ];

  return (
    <footer className="tw-pt-5">
      <Card className="tw-border-t tw-border-gray-300 tw-py-8 tw-rounded-none">
        <Container p={0} size={'xl'} className="tw-flex tw-flex-col tw-gap-2 tw-w-full">
          <Flex gap={4} align={'center'}>
            <Image
              src="/assets/images/logo_bagiwebsite.png"
              alt="BAGIWEBSITE"
              width={30}
              height={30}
            />
            <h1 className="tw-font-bold tw-text-xl">BAGIWEBSITE</h1>
          </Flex>
          <Grid justify="space-between" gutter={{ base: 'xl' }} align="center">
            <Grid.Col span={{ base: 12, md: 4 }}>
              <div className="tw-w-60 tw-flex tw-flex-col tw-gap-4">
                <p>{t('desc')}</p>
                <Flex gap={16}>
                  {sosmed.map((it, index) => (
                    <Image key={index} src={it.icon} alt={it.icon} width={30} height={30} />
                  ))}
                </Flex>
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 6, md: 2 }}>
              <div className="tw-flex tw-flex-col tw-gap-2">
                <a href="#">{t('about')}</a>
                <a href="#">{t('features')}</a>
                <a href="#">{t('works')}</a>
                <a href="#">{t('career')}</a>
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 6, md: 2 }}>
              <div className="tw-flex tw-flex-col tw-gap-2">
                <a href="#">{t('customer_support')}</a>
                <a href="#">{t('delivery_details')}</a>
                <a href="#">{t('terms_conditions')}</a>
                <a href="#">{t('privacy_policy')}</a>
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 6, md: 2 }}>
              <div className="tw-flex tw-flex-col tw-gap-2">
                <a href="#">{t('account')}</a>
                <a href="#">{t('manage_deliveries')}</a>
                <a href="#">{t('orders')}</a>
                <a href="#">{t('payments')}</a>
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 6, md: 2 }}>
              <div className="tw-flex tw-flex-col tw-gap-2">
                <a href="#">{t('free_ebooks')}</a>
                <a href="#">{t('development_tutorial')}</a>
                <a href="#">{t('how_to_blog')}</a>
                <a href="#">{t('youtube_playlist')}</a>
              </div>
            </Grid.Col>
          </Grid>
          <p className="tw-mt-6">BAGIWEBSITE &copy;2024, {t('copyright')}</p>
        </Container>
      </Card>
    </footer>
  );
};

export default Footer;
