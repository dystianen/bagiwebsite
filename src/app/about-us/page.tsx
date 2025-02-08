'use client';
import {
  ActionIcon,
  Badge,
  Box,
  Card,
  Container,
  Flex,
  Group,
  Image,
  SimpleGrid,
  Text
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconBrandLinkedin, IconQuoteFilled } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Marquee from 'react-fast-marquee';
import mission from '../../json/mission.json';
import ourTeams from '../../json/teams.json';

export default function AboutUs() {
  const t = useTranslations('AboutUs');
  const isMobile = useMediaQuery('(max-width: 62em)');

  const partners = [
    '/assets/images/logo_kelaspintar.svg',
    '/assets/images/logo_pengenumroh.png',
    '/assets/images/logo_idi.png',
    '/assets/images/logo_pertamina.png',
    '/assets/images/logo_stms.png',
    '/assets/images/logo_astra.png'
  ];

  return (
    <>
      <section className="tw-mt-32">
        <Flex gap={40} direction={'column'}>
          <Container size={'xl'}>
            <h1 className="tw-text-3xl md:tw-text-6xl lg:tw-text-8xl tw-text-center tw-tracking-[0.4em]">
              BAGIWEBSITE
            </h1>
          </Container>
          <div className="tw-relative tw-h-[700px] lg:tw-h-[600px]">
            {/* Adjust height as needed */}
            <Image
              src={'/assets/images/about_us.jpg'}
              alt="about-us"
              w={'100%'}
              h={'100%'}
              className="tw-object-cover"
            />
            <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-black tw-opacity-50"></div>{' '}
            {/* Black transparent overlay */}
          </div>
        </Flex>
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
                      <Image
                        src={it.image}
                        h={{ base: 150, md: 300 }}
                        w={{ base: '100%', md: 300 }}
                        alt="Norway"
                        style={{
                          filter: 'grayscale(40%)'
                        }}
                      />
                    </Card.Section>

                    <Flex direction={'column'} gap={5} mt={{ base: 'xs', md: 'sm' }}>
                      <Group justify="space-between">
                        <Text fw={600}>{it.name}</Text>
                        <ActionIcon
                          variant="transparent"
                          component="a"
                          href={it.linkedin}
                          target="_blank"
                        >
                          <IconBrandLinkedin />
                        </ActionIcon>
                      </Group>
                      <Badge color="pink">{it.position}</Badge>
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
                <Box key={index} w={{ base: 250, md: 300 }}>
                  <Image src={item} w={200} h={100} className="tw-object-contain" alt={item} />
                </Box>
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
