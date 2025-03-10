'use client';
import mission from '@/json/mission.json';
import ourTeams from '@/json/teams.json';
import {
  ActionIcon,
  Badge,
  Box,
  Card,
  Container,
  Flex,
  Group,
  Image as MantineImage,
  SimpleGrid,
  Text
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconBrandLinkedin, IconQuoteFilled } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export default function AboutUs() {
  const t = useTranslations('AboutUs');
  const isMobile = useMediaQuery('(max-width: 62em)');

  const partners = [
    'https://cdn.bagiwebsite.com/assets/images/logo_kelaspintar.svg',
    'https://cdn.bagiwebsite.com/assets/images/logo_pengenumroh.png',
    'https://cdn.bagiwebsite.com/assets/images/logo_idi.png',
    'https://cdn.bagiwebsite.com/assets/images/logo_pertamina.png',
    'https://cdn.bagiwebsite.com/assets/images/logo_stms.png',
    'https://cdn.bagiwebsite.com/assets/images/logo_astra.png'
  ];

  return (
    <>
      <section className="tw-flex tw-flex-col md:tw-justify-center tw-h-[calc(100vh-100px)] md:tw-h-screen">
        {/* Wrapper untuk mobile dan desktop */}
        <div className="tw-container tw-mx-auto tw-text-center tw-mb-10 md:tw-mb-0 md:tw-absolute md:tw-inset-0 md:tw-flex md:tw-items-center md:tw-justify-center md:tw-z-10">
          <h1 className="tw-text-3xl md:tw-text-6xl lg:tw-text-8xl tw-tracking-[0.4em] tw-text-white">
            BAGIWEBSITE
          </h1>
        </div>

        {/* Gambar */}
        <div className="tw-relative tw-flex-1 md:tw-h-full">
          <Image
            src="https://cdn.bagiwebsite.com/assets/images/bussiness_people.jpg"
            blurDataURL="https://cdn.bagiwebsite.com/assets/images/placeholder.svg"
            alt="about-us"
            fill
            priority
            className="tw-object-cover tw-object-top"
          />
          <div className="tw-absolute tw-inset-0 tw-bg-black tw-opacity-40"></div>
        </div>
      </section>

      <section className="tw-my-10 tw-flex tw-w-full">
        <Container size={'xl'} w={'100%'}>
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5
            }}
            viewport={{ once: true }}
          >
            <Flex direction={'column'} align={'center'} mb={40} gap={16}>
              <h1 className="tw-text-2xl md:tw-text-4xl tw-text-center tw-font-semibold">
                {t('vision.title')}
              </h1>
              <p className="tw-max-w-2xl tw-text-center tw-text-gray-500">{t('vision.content')}</p>
            </Flex>
          </motion.div>

          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5
            }}
            viewport={{ once: true }}
          >
            <Flex direction={'column'} align={'center'} mb={40} gap={16}>
              <h1 className="tw-text-2xl md:tw-text-4xl tw-text-center tw-font-semibold">
                {t('mission.title')}
              </h1>
              <Card withBorder radius={'lg'}>
                <ol className="tw-max-w-3xl tw-text-gray-500 tw-flex tw-flex-col tw-gap-4">
                  {mission.map((item, index) => (
                    <Group key={index} wrap="nowrap" align="start">
                      <span>{index + 1}</span>
                      <span>{t(item)}</span>
                    </Group>
                  ))}
                </ol>
              </Card>
            </Flex>
          </motion.div>
        </Container>
      </section>
      <section className="tw-flex tw-w-full tw-items-center tw-py-10">
        <Container size={'xl'} w={'100%'}>
          <Flex direction={'column'} justify={'center'} align={'center'} gap={16}>
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
                  {t('team.title')}
                </h1>
                <p className="tw-max-w-3xl tw-text-gray-500 tw-text-center">{t('team.content')}</p>
              </Flex>
            </motion.div>

            <SimpleGrid cols={{ base: 2, lg: 4 }}>
              {ourTeams.map((it, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.5 * index
                  }}
                  viewport={{ once: true }}
                >
                  <Card shadow="sm" radius="md" p={{ base: 'xs', md: 'sm', lg: 'md' }}>
                    <Card.Section>
                      <Box h={{ base: 180, md: 300 }} w={{ base: '100%', md: 300 }} pos="relative">
                        <Image
                          src={it.image}
                          alt={it.name}
                          fill
                          objectFit="cover"
                          style={{
                            filter: 'grayscale(40%)'
                          }}
                          blurDataURL="https://cdn.bagiwebsite.com/assets/images/placeholder.svg"
                        />
                      </Box>
                    </Card.Section>

                    <Flex direction={'column'} gap={5} mt={{ base: 'xs', md: 'sm' }}>
                      <Group justify="space-between" wrap="nowrap">
                        <Text fz={{ base: 12, md: 16 }} fw={600}>
                          {it.name}
                        </Text>
                        <ActionIcon
                          variant="transparent"
                          component="a"
                          href={it.linkedin}
                          target="_blank"
                        >
                          <IconBrandLinkedin />
                        </ActionIcon>
                      </Group>
                      <Badge color="pink">
                        <Text fz={{ base: 8, md: 12 }}>{it.position}</Text>
                      </Badge>
                    </Flex>
                  </Card>
                </motion.div>
              ))}
            </SimpleGrid>
          </Flex>
        </Container>
      </section>

      <section className="tw-flex tw-items-center tw-w-full tw-h-[300px] md:tw-h-[400px]">
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
                {t('mitra.title')}
              </Text>
            </Flex>
            <Marquee gradient={!isMobile} gradientColor={'var(--mantine-color-body)'}>
              {partners.map((item, index) => (
                <MantineImage
                  key={index}
                  className="tw-object-contain"
                  src={item}
                  alt={item}
                  h={{ base: 50 }}
                  mr={40}
                />
              ))}
            </Marquee>
          </motion.div>
        </Container>
      </section>

      <Card className={`tw-flex tw-w-full tw-items-center  tw-py-10`}>
        <Container size={'xl'} w={'100%'}>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1
            }}
            viewport={{ once: true }}
          >
            <Flex direction={'column'} justify={'center'} align={'center'} gap={16}>
              <h1 className="tw-text-2xl md:tw-text-4xl tw-text-center tw-font-semibold">
                {t('quotes.title')}
              </h1>
              <p className="tw-max-w-4xl tw-text-center tw-text-gray-500">{t('quotes.content')}</p>
              <IconQuoteFilled size={30} />
            </Flex>
          </motion.div>
        </Container>
      </Card>
    </>
  );
}
