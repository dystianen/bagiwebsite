'use client';
import { ActionIcon, Anchor, Box, Button, Container, Flex, Group, SimpleGrid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconExternalLink, IconLayoutGrid, IconListDetails } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { memo, useState } from 'react';
import portfolio from '../../json/portofolio.json';

type TLayout = 'gallery' | 'details';

const Portfolio = () => {
  const t = useTranslations('Portfolio');
  const isTablet = useMediaQuery('(max-width: 62em)'); // 992px
  const isMobile = useMediaQuery('(max-width: 46em)'); // 768px
  const [layout, setLayout] = useState<TLayout>('gallery');

  return (
    <>
      <section className="tw-flex tw-flex-col md:tw-justify-center tw-h-[calc(100vh-100px)]">
        {/* Wrapper untuk mobile dan desktop */}
        <div className="tw-container tw-mx-auto tw-text-center tw-mb-10 md:tw-mb-0 md:tw-absolute md:tw-inset-0 md:tw-flex md:tw-items-center md:tw-justify-center md:tw-z-10">
          <h1 className="tw-text-3xl md:tw-text-6xl lg:tw-text-8xl xl:tw-text-9xl tw-text-center tw-tracking-[0.4em]">
            {t('title')}
          </h1>
        </div>

        {/* Gambar */}
        <div className="tw-relative tw-flex-1 md:tw-h-full">
          <Image
            src="https://cdn.bagiwebsite.com/assets/images/bussiness_people.jpg"
            alt="about-us"
            fill
            className="tw-object-cover tw-object-top"
          />
          <div className="tw-absolute tw-inset-0 tw-bg-black tw-opacity-40"></div>
        </div>
      </section>

      <section className="tw-my-10 tw-flex tw-w-full">
        <Container size={'xl'} w={'100%'} mih={400}>
          <Group justify="space-between" align="end" mb={{ base: 30, md: 60 }}>
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

            <Group mb={8}>
              <ActionIcon
                variant={layout === 'gallery' ? 'light' : 'transparent'}
                size={'lg'}
                onClick={() => setLayout('gallery')}
              >
                <IconLayoutGrid size={24} />
              </ActionIcon>
              <ActionIcon
                variant={layout === 'details' ? 'light' : 'transparent'}
                size={'lg'}
                onClick={() => setLayout('details')}
              >
                <IconListDetails size={24} />
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
                  <Flex gap={'xl'} direction={isTablet ? 'column' : 'row'} align={'center'}>
                    <div className="tw-overflow-hidden tw-rounded-xl tw-shadow-xl">
                      <Image
                        src={it.img}
                        alt={it.title}
                        width={600}
                        height={300}
                        className="tw-object-cover tw-transition-transform tw-duration-700 hover:tw-scale-105"
                      />
                    </div>

                    <Flex
                      direction={'column'}
                      align={isTablet ? 'start' : 'center'}
                      gap={'sm'}
                      w={'100%'}
                    >
                      <h1 className="tw-text-2xl tw-font-bold">{it.title}</h1>
                      <p
                        className={`tw-text-gray-500 ${isTablet ? 'tw-text-left' : 'tw-text-center'}`}
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
            <SimpleGrid cols={{ base: 2, sm: 3, md: 3, lg: 4 }} spacing={'xs'}>
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
                  <div className="tw-overflow-hidden tw-rounded-sm tw-shadow-xl tw-relative tw-group">
                    <Box w={{ base: 150, sm: 350, md: 400 }} h={{ base: 135, sm: 200, md: 250 }}>
                      <Image
                        src={it.img}
                        alt={it.title}
                        fill
                        className="tw-w-full tw-h-auto tw-object-cover tw-transition-transform tw-duration-700 group-hover:tw-scale-105"
                      />
                    </Box>

                    <div className="md:tw-h-32 tw-absolute tw-bottom-0 tw-left-0 tw-w-full tw-bg-gradient-to-t tw-from-black/80 tw-to-transparent tw-text-white tw-p-2 md:tw-p-4 tw-flex tw-items-end">
                      <Anchor
                        href={it.href}
                        target="_blank"
                        underline="never"
                        c="white"
                        w={'max-content'}
                      >
                        <Group gap={isTablet ? 4 : 8}>
                          <IconExternalLink size={isMobile ? 18 : 20} color="white" />
                          <h1 className="tw-text-[10px] md:tw-text-sm tw-font-semibold tw-text-none tw-no-underline tw-mt-[5px]">
                            {it.title}
                          </h1>
                        </Group>
                      </Anchor>
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
