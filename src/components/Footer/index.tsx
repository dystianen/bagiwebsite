'use client';
import { Card, Container, Flex, Grid } from '@mantine/core';
import Image from 'next/image';

const Footer = () => {
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
                <p>
                  Kami menyediakan layanan pembuatan website, aplikasi, dan solusi digital lainnya.
                </p>
                <Flex gap={16}>
                  {sosmed.map((it, index) => (
                    <Image key={index} src={it.icon} alt={it.icon} width={30} height={30} />
                  ))}
                </Flex>
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 6, md: 2 }}>
              <div className="tw-flex tw-flex-col tw-gap-2">
                <a href="#">About</a>
                <a href="#">Features</a>
                <a href="#">Works</a>
                <a href="#">Career</a>
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 6, md: 2 }}>
              <div className="tw-flex tw-flex-col tw-gap-2">
                <a href="#">Customer Support</a>
                <a href="#">Delivery Details</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 6, md: 2 }}>
              <div className="tw-flex tw-flex-col tw-gap-2">
                <a href="#">Account</a>
                <a href="#">Manage Deliveries</a>
                <a href="#">Orders</a>
                <a href="#">Payments</a>
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 6, md: 2 }}>
              <div className="tw-flex tw-flex-col tw-gap-2">
                <a href="#">Free eBooks</a>
                <a href="#">Development Tutorial</a>
                <a href="#">How to - Blog</a>
                <a href="#">Youtube Playlist</a>
              </div>
            </Grid.Col>
          </Grid>
          <p className="tw-mt-6">BAGIWEBSITE &copy;2024, All Rights Reserved</p>
        </Container>
      </Card>
    </footer>
  );
};

export default Footer;
