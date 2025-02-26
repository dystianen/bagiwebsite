'use client';
import {
  ActionIcon,
  Anchor,
  Box,
  Button,
  Container,
  Flex,
  Group,
  Image,
  SimpleGrid
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconExternalLink, IconLayoutGrid, IconListDetails } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { memo, useState } from 'react';
import portfolio from '../../json/portofolio.json';

type TLayout = 'gallery' | 'details';

const Portfolio = () => {
  const t = useTranslations('Portfolio');
  const isMobile = useMediaQuery('(max-width: 62em)');
  const [layout, setLayout] = useState<TLayout>('gallery');

  return (
    <>
      <section className="tw-mt-32">
        <Flex gap={40} direction={'column'}>
          <Container size={'xl'}>
            <h1 className="tw-text-4xl md:tw-text-6xl lg:tw-text-8xl tw-text-center tw-tracking-[0.4em]">
              {t('title')}
            </h1>
          </Container>
          <div className="tw-relative tw-h-[700px] lg:tw-h-[600px]">
            <Image
              src={'https://cdn.bagiwebsite.com/assets/images/about_us.jpg'}
              alt="about-us"
              w={'100%'}
              h={'100%'}
              className="tw-object-cover"
            />
            <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-black tw-opacity-50"></div>{' '}
          </div>
        </Flex>
      </section>

      <section className="tw-my-10 tw-flex tw-w-full">
        <Container size={'xl'} w={'100%'}>
          <Group justify="space-between" align="end" mb={60}>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1
              }}
              viewport={{ once: true }}
              className="tw-text-4xl md:tw-text-6xl lg:tw-text-8xl tw-tracking-[0.4em]"
            >
              {t('projects')}
            </motion.h1>

            <Group>
              <ActionIcon
                variant={layout === 'gallery' ? 'light' : 'transparent'}
                size={'xl'}
                onClick={() => setLayout('gallery')}
              >
                <IconLayoutGrid size={32} />
              </ActionIcon>
              <ActionIcon
                variant={layout === 'details' ? 'light' : 'transparent'}
                size={'xl'}
                onClick={() => setLayout('details')}
              >
                <IconListDetails size={32} />
              </ActionIcon>
            </Group>
          </Group>

          {layout === 'details' && (
            <Flex direction={'column'} gap={80} w={'100%'} pos={'relative'}>
              {portfolio.map((it, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.5
                  }}
                  viewport={{ once: true }}
                >
                  <Flex gap={'xl'} direction={isMobile ? 'column' : 'row'}>
                    <div className="sm:tw-w-[600px] tw-overflow-hidden tw-rounded-xl tw-shadow-xl">
                      <Image
                        src={it.img}
                        alt={it.title}
                        className="tw-w-full tw-h-auto tw-object-cover tw-transition-transform tw-duration-700 hover:tw-scale-105"
                      />
                    </div>

                    <Flex
                      direction={'column'}
                      align={isMobile ? 'start' : 'center'}
                      gap={'sm'}
                      w={'100%'}
                    >
                      <h1 className="tw-text-2xl tw-font-bold">{it.title}</h1>
                      <p
                        className={`tw-text-gray-500 ${isMobile ? 'tw-text-left' : 'tw-text-center'}`}
                      >
                        {t(it.desc)}
                      </p>
                      <Button
                        radius={'xl'}
                        mt={'sm'}
                        leftSection={<IconExternalLink />}
                        component="a"
                        href={it.href}
                        target={it.href === '#' ? '_self' : '_blank'}
                      >
                        {t('open_web')}
                      </Button>
                    </Flex>
                  </Flex>
                </motion.div>
              ))}
            </Flex>
          )}

          {layout === 'gallery' && (
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
              {portfolio.map((it, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.5
                  }}
                  viewport={{ once: true }}
                  className="tw-relative"
                >
                  <div className="xs:tw-w-[800px] tw-overflow-hidden tw-rounded-md tw-shadow-xl tw-relative tw-group">
                    <Image
                      src={it.img}
                      alt={it.title}
                      className="tw-w-full tw-h-auto tw-object-cover tw-transition-transform tw-duration-700 group-hover:tw-scale-105"
                    />

                    <div className="tw-absolute tw-bottom-0 tw-left-0 tw-w-full tw-bg-gradient-to-t tw-from-black/80 tw-to-transparent tw-text-white tw-px-4 tw-py-4 tw-rounded-b-lg">
                      <Box w={'max-content'}>
                        <Anchor href={it.href} target="_blank" underline="never" c="white">
                          <Group align="center">
                            <h1 className="tw-font-semibold tw-text-none tw-no-underline">
                              {it.title}
                            </h1>
                            <IconExternalLink color="white" />
                          </Group>
                        </Anchor>
                      </Box>
                    </div>
                  </div>
                </motion.div>
              ))}
            </SimpleGrid>
          )}
        </Container>
      </section>
    </>
  );
};

export default memo(Portfolio);
