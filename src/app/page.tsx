'use client';
import {
  Button,
  Card,
  Container,
  Divider,
  Flex,
  Grid,
  List,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import {
  IconArrowDown,
  IconArrowRight,
  IconBuildings,
  IconBusinessplan,
  IconCircleCheck,
  IconUser
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'nextjs-toploader/app';
import { memo, useRef } from 'react';
import Marquee from 'react-fast-marquee';
import ReviewCard from '../components/ReviewCard';
import highlightServices from '../json/highlight_services.json';
import portfolio from '../json/portofolio.json';
import review from '../json/review.json';
import whyUs from '../json/whyus.json';

const Home = () => {
  const router = useRouter();
  const t = useTranslations('HomePage');
  const tg = useTranslations('Global');
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

  const handleMoreDetailServices = () => {
    router.push('/services');
  };

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
      <section className="tw-bg-pattern-wave tw-bg-cover">
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
                        <h1 className="tw-text-lg">{t('individuals')}</h1>
                      </Flex>
                      <Divider orientation="vertical" />
                      <Flex direction={'column'} gap={4} align={'center'}>
                        <IconBusinessplan size={isMobile ? 30 : 40} />
                        <h1 className="tw-text-lg">{t('bussiness')}</h1>
                      </Flex>
                      <Divider orientation="vertical" />
                      <Flex direction={'column'} gap={4} align={'center'}>
                        <IconBuildings size={isMobile ? 30 : 40} />
                        <h1 className="tw-text-lg">{t('companies')}</h1>
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
                          objectFit="contain"
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
                          objectFit="contain"
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

      <section ref={refWhyUs} className="tw-my-20 tw-flex tw-items-center tw-w-full">
        <Container size={'xl'} w={'100%'}>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1
            }}
            viewport={{ once: true }}
          >
            <Flex direction={'column'} align={'center'} mb={40} gap={16}>
              <h1 className="tw-text-2xl md:tw-text-4xl tw-text-center tw-font-semibold">
                {t('why_us')}
              </h1>
              <p className="tw-max-w-2xl tw-text-center tw-text-gray-500">{t('desc_why_us')}</p>
            </Flex>
          </motion.div>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
            {whyUs.map((it, index) => (
              <motion.div
                key={index}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.1 * index
                }}
                viewport={{ once: true }}
              >
                <Card shadow="sm" radius={'md'}>
                  <Flex gap={4} direction={'column'}>
                    <Image
                      src={it.icon}
                      alt="bagiwebsite"
                      width={640}
                      height={427}
                      blurDataURL="https://cdn.bagiwebsite.com/assets/images/placeholder.svg"
                    />
                    <h1 className="tw-text-xl tw-font-bold">{t(it.title)}</h1>
                    <p className="tw-text-gray-500">{t(it.description)}</p>
                  </Flex>
                </Card>
              </motion.div>
            ))}
          </SimpleGrid>
        </Container>
      </section>

      <Card className={'tw-py-8'}>
        <Container size={'xl'} w={'100%'}>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1
            }}
            viewport={{ once: true }}
          >
            <Flex
              direction={{ base: 'column', md: 'row' }}
              align={{ base: 'center', md: 'start' }}
              gap={60}
            >
              <Image
                src={'https://cdn.bagiwebsite.com/assets/images/highlight_services.png'}
                width={350}
                height={400}
                alt="Services"
              />
              <Stack align="start" gap="lg">
                <h1 className="tw-text-2xl md:tw-text-4xl tw-font-semibold">
                  {t('our_services.title')}
                </h1>
                <p className="tw-max-w-2xl tw-text-gray-500">{t('our_services.description')}</p>

                <List
                  spacing="md"
                  className="tw-text-gray-500"
                  center
                  icon={
                    <ThemeIcon color="lime" size={24} radius="xl">
                      <IconCircleCheck size={16} />
                    </ThemeIcon>
                  }
                >
                  {highlightServices.map((item, index) => (
                    <List.Item key={index}>{t(item)}</List.Item>
                  ))}
                </List>

                <motion.div
                  whileHover={{
                    scale: 1.1
                  }}
                  whileTap={{
                    scale: 1.1
                  }}
                  transition={{
                    duration: 0.2,
                    ease: 'easeInOut'
                  }}
                >
                  <Button
                    radius={'xl'}
                    px={'xl'}
                    rightSection={
                      <motion.div
                        animate={{
                          x: [0, 5, 0]
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                      >
                        <IconArrowRight />
                      </motion.div>
                    }
                    onClick={handleMoreDetailServices}
                  >
                    {tg('more_detail')}
                  </Button>
                </motion.div>
              </Stack>
            </Flex>
          </motion.div>
        </Container>
      </Card>

      <section className="tw-h-[500px] tw-my-10 tw-flex tw-items-center tw-w-full">
        <Container size={'xl'} w={'100%'}>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1
            }}
            viewport={{ once: true }}
            style={{ width: '100%' }}
          >
            <Flex direction={'column'} align={'center'} mb={40} gap={16}>
              <Text className="tw-text-2xl md:tw-text-4xl tw-text-center tw-font-semibold">
                {t('reviews.reviews_header.title')}
              </Text>
              <Text className="tw-max-w-2xl tw-text-center tw-text-gray-500">
                {t('reviews.reviews_header.description')}
              </Text>
            </Flex>

            <Marquee gradient={!isMobile} gradientColor={'var(--mantine-color-body)'}>
              {review.map((it, index) => (
                <ReviewCard key={index} name={it.name} rating={it.rating} comment={t(it.comment)} />
              ))}
            </Marquee>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default memo(Home);
