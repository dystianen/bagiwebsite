'use client';
import ReviewsSection from '@/components/pages/home/ReviewsSection';
import ServicesSection from '@/components/pages/home/ServicesSection';
import SkeletonWhyUs from '@/components/pages/home/WhyUs/SkeletonWhyUs';
import portfolio from '@/json/portofolio.json';
import { Button, Card, Container, Divider, Flex, Grid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconArrowDown, IconBuildings, IconBusinessplan, IconUser } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { memo, useRef } from 'react';
import Marquee from 'react-fast-marquee';

const WhyChooseUs = dynamic(() => import('@/components/pages/home/WhyUs'), {
  ssr: false,
  loading: () => <SkeletonWhyUs />
});

const Home = () => {
  const t = useTranslations('HomePage');
  const isMobile = useMediaQuery('(max-width: 62em)');

  const refWhyUs = useRef<HTMLInputElement>(null);
  const scrollToWhyUs = () => {
    if (refWhyUs.current != null) {
      window.scrollTo({
        top: refWhyUs.current.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const halfLength = Math.ceil(portfolio.length / 2);
  const firstHalf = portfolio.slice(0, halfLength);
  const secondHalf = portfolio.slice(halfLength);

  const renderProps = isMobile
    ? {
        widthImage: 150,
        heightImage: 150
      }
    : {
        widthImage: 300,
        heightImage: 260
      };

  return (
    <>
      <section className="tw-bg-pattern-wave tw-bg-cover tw-bg-no-repeat">
        <Container
          size={'xl'}
          className="tw-flex tw-justify-center tw-gap-4 tw-items-center tw-overflow-hidden"
        >
          <Grid gutter={'xl'} align="center" w={'100%'}>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Flex direction={'column'} gap={'xl'} justify={'center'} pr={{ base: 0, md: 50 }}>
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5
                  }}
                  viewport={{ once: true }}
                >
                  <Card withBorder radius={'xl'} w={'max-content'} py={5}>
                    {t('services')}
                  </Card>
                </motion.div>
                <motion.h1
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.5
                  }}
                  viewport={{ once: true }}
                  className="tw-text-3xl lg:tw-text-6xl tw-font-bold"
                >
                  {t('title')}
                </motion.h1>
                <motion.p
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.5
                  }}
                  viewport={{ once: true }}
                  className="tw-text-gray-500"
                >
                  {t('desc')}
                </motion.p>

                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -5
                  }}
                  whileTap={{
                    scale: 0.95
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut'
                  }}
                  className="tw-w-max"
                >
                  <Button
                    size="lg"
                    radius={'xl'}
                    w={'max-content'}
                    style={{
                      outline: '2px solid var(--mantine-primary-color-filled)',
                      outlineOffset: 'calc(.125rem* var(--mantine-scale))'
                    }}
                    onClick={scrollToWhyUs}
                    rightSection={
                      <motion.div
                        animate={{
                          y: [0, -5, 0]
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                      >
                        <IconArrowDown />
                      </motion.div>
                    }
                  >
                    {t('see_advantages')}
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5
                  }}
                  viewport={{ once: true }}
                >
                  <Card shadow={'sm'} radius={'md'}>
                    <Flex
                      gap={{ base: 'md', md: 'xl' }}
                      justify={'space-around'}
                      className="tw-text-gray-500"
                    >
                      <Flex direction={'column'} gap={4} align={'center'}>
                        <IconUser size={isMobile ? 30 : 40} />
                        <h5 className="tw-text-lg">{t('individuals')}</h5>
                      </Flex>
                      <Divider orientation="vertical" />
                      <Flex direction={'column'} gap={4} align={'center'}>
                        <IconBusinessplan size={isMobile ? 30 : 40} />
                        <h5 className="tw-text-lg">{t('bussiness')}</h5>
                      </Flex>
                      <Divider orientation="vertical" />
                      <Flex direction={'column'} gap={4} align={'center'}>
                        <IconBuildings size={isMobile ? 30 : 40} />
                        <h5 className="tw-text-lg">{t('companies')}</h5>
                      </Flex>
                    </Flex>
                  </Card>
                </motion.div>
              </Flex>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              >
                <Flex
                  direction={{ base: 'column', md: 'row' }}
                  className="tw-h-auto lg:tw-h-[100dvh]"
                  gap={10}
                >
                  <Marquee
                    direction={isMobile ? 'right' : 'down'}
                    style={{ overflowX: 'visible' }}
                    className="tw-w-full tw-h-max"
                  >
                    {firstHalf.map((it, index: number) => (
                      <Card
                        key={index}
                        p={0}
                        h={{ base: 'max-content', md: 280 }}
                        radius="md"
                        shadow="sm"
                        className="tw-flex tw-justify-center tw-items-center"
                      >
                        <Image
                          src={it.img}
                          alt={it.title}
                          width={renderProps.widthImage}
                          height={renderProps.heightImage}
                          style={{ objectFit: 'contain' }}
                          priority={index === 0}
                          loading={index === 0 ? 'eager' : 'lazy'}
                          placeholder="blur"
                          blurDataURL="https://cdn.bagiwebsite.com/assets/images/placeholder.svg"
                        />
                      </Card>
                    ))}
                  </Marquee>
                  <Marquee
                    direction={isMobile ? 'left' : 'up'}
                    style={{ overflowX: 'visible' }}
                    className="tw-w-full tw-h-max"
                  >
                    {secondHalf.map((it, index: number) => (
                      <Card
                        key={index}
                        p={0}
                        h={{ base: 'max-content', md: 280 }}
                        radius="md"
                        shadow="sm"
                        className="tw-flex tw-justify-center tw-items-center"
                      >
                        <Image
                          src={it.img}
                          alt={it.title}
                          width={renderProps.widthImage}
                          height={renderProps.heightImage}
                          style={{ objectFit: 'contain' }}
                          priority={index === 0}
                          loading={index === 0 ? 'eager' : 'lazy'}
                          placeholder="blur"
                          blurDataURL="https://cdn.bagiwebsite.com/assets/images/placeholder.svg"
                        />
                      </Card>
                    ))}
                  </Marquee>
                </Flex>
              </motion.div>
            </Grid.Col>
          </Grid>
        </Container>
      </section>

      <section
        ref={refWhyUs}
        className="tw-my-20 tw-flex tw-items-center tw-justify-center tw-w-full"
      >
        <WhyChooseUs />
      </section>

      <ServicesSection />

      <ReviewsSection />
    </>
  );
};

export default memo(Home);
