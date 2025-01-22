'use client';
import { Button, Container, Flex, Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconLink } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { memo } from 'react';
import portfolio from '../../json/portofolio.json';

const Portfolio = () => {
  const t = useTranslations('Portfolio');
  const isMobile = useMediaQuery('(max-width: 62em)');

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
              src={'/assets/images/about_us.jpg'}
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
        <Container size={'lg'} w={'100%'}>
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1
            }}
            viewport={{ once: true }}
            className="tw-text-4xl md:tw-text-6xl lg:tw-text-8xl tw-tracking-[0.4em] tw-mb-14"
          >
            {t('projects')}
          </motion.h1>

          <Flex direction={'column'} gap={80} w={'100%'} pos={'relative'}>
            {portfolio.map((it, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.5
                }}
                viewport={{ once: true }}
              >
                <Flex
                  gap={'xl'}
                  direction={isMobile ? 'column' : index % 2 === 0 ? 'row' : 'row-reverse'}
                >
                  <Image
                    src={it.img}
                    alt={it.title}
                    w={'450px'}
                    className="tw-rounded-xl tw-shadow-xl tw-object-contain"
                  />

                  <Flex direction={'column'} align={'start'} gap={'sm'} w={'100%'}>
                    <h1 className="tw-text-2xl tw-font-bold">{it.title}</h1>
                    <p className="tw-text-gray-500 tw-text-justify">{t(it.desc)}</p>
                    <Button
                      radius={'xl'}
                      mt={'sm'}
                      leftSection={<IconLink />}
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
        </Container>
      </section>
    </>
  );
};

export default memo(Portfolio);
