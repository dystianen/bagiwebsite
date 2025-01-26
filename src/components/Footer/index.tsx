'use client';
import { Card, Container, Flex, Grid, Tooltip } from '@mantine/core';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const t = useTranslations('Footer');
  const sosmed = [
    {
      icon: '/assets/icons/whatsapp.png',
      label: 'Whatsapp',
      href: 'https://api.whatsapp.com?phone=+6287763832505'
    },
    {
      icon: '/assets/icons/gmail.png',
      label: 'Email',
      href: 'mailto:websitebagi@gmail.com'
    },
    {
      icon: '/assets/icons/instagram.png',
      label: 'Instagram',
      href: '#'
    },
    {
      icon: '/assets/icons/facebook.png',
      label: 'Facebook',
      href: '#'
    },
    {
      icon: '/assets/icons/linkedin.png',
      label: 'Linkedin',
      href: '#'
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
                    <Link key={index} href={it.href}>
                      <Tooltip label={it.label} withArrow>
                        <Image src={it.icon} alt={it.icon} width={30} height={30} />
                      </Tooltip>
                    </Link>
                  ))}
                </Flex>
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 6, md: 2 }}>
              <div className="tw-flex tw-flex-col tw-gap-2">
                <Link href="/about_us">{t('about')}</Link>
                <Link href="/portfolio">{t('features')}</Link>
                <Link href="#">{t('works')}</Link>
                <Link href="#">{t('career')}</Link>
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 6, md: 2 }}>
              <div className="tw-flex tw-flex-col tw-gap-2">
                <Link href="#">{t('customer_support')}</Link>
                <Link href="#">{t('delivery_details')}</Link>
                <Link href="#">{t('terms_conditions')}</Link>
                <Link href="#">{t('privacy_policy')}</Link>
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 6, md: 2 }}>
              <div className="tw-flex tw-flex-col tw-gap-2">
                <Link href="#">{t('account')}</Link>
                <Link href="#">{t('manage_deliveries')}</Link>
                <Link href="#">{t('orders')}</Link>
                <Link href="#">{t('payments')}</Link>
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 6, md: 2 }}>
              <div className="tw-flex tw-flex-col tw-gap-2">
                <Link href="#">{t('free_ebooks')}</Link>
                <Link href="#">{t('development_tutorial')}</Link>
                <Link href="#">{t('how_to_blog')}</Link>
                <Link href="#">{t('youtube_playlist')}</Link>
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
