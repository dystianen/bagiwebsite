'use client';
import { Button, Flex } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconExternalLink } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import portfolio from '../../../../json/portofolio.json';

const PortfolioDetails = () => {
  const t = useTranslations('Portfolio');
  const isTablet = useMediaQuery('(max-width: 62em)'); // 992px

  return (
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
                blurDataURL="https://cdn.bagiwebsite.com/assets/images/placeholder.svg"
              />
            </div>

            <Flex direction={'column'} align={isTablet ? 'start' : 'center'} gap={'sm'} w={'100%'}>
              <h1 className="tw-text-2xl tw-font-bold">{it.title}</h1>
              <p className={`tw-text-gray-500 ${isTablet ? 'tw-text-left' : 'tw-text-center'}`}>
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
  );
};

export default PortfolioDetails;
