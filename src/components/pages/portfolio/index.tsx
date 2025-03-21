'use client';
import { ActionIcon, Container, Group } from '@mantine/core';
import { IconLayoutGrid, IconListDetails } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { memo, useState } from 'react';
import SkeletonDetails from './PortfolioDetails/SkeletonDetails';
import SkeletonGallery from './PortfolioGallery/SkeletonGallery';

const PortfolioGallery = dynamic(() => import('./PortfolioGallery'), {
  ssr: false,
  loading: () => <SkeletonGallery />
});

const PortfolioDetails = dynamic(() => import('./PortfolioDetails'), {
  ssr: false,
  loading: () => <SkeletonDetails />
});

type TLayout = 'gallery' | 'details';

const Portfolio = () => {
  const t = useTranslations('Portfolio');
  const [layout, setLayout] = useState<TLayout>('gallery');

  return (
    <>
      {/* Bagian Hero */}
      <header className="tw-flex tw-flex-col md:tw-justify-center tw-h-screen">
        <div className="tw-container tw-mx-auto tw-text-center tw-mb-10 md:tw-mb-0 md:tw-absolute md:tw-inset-0 md:tw-flex md:tw-items-center md:tw-justify-center md:tw-z-10">
          <h1 className="tw-text-3xl md:tw-text-6xl lg:tw-text-8xl xl:tw-text-9xl tw-text-center tw-tracking-[0.4em] tw-text-white">
            {t('title')}
          </h1>
        </div>

        <figure className="tw-relative tw-flex-1 md:tw-h-full">
          <Image
            src="https://cdn.bagiwebsite.com/assets/images/bussiness_people.webp"
            alt="Seorang pebisnis sedang bekerja di depan laptop"
            fill
            priority
            className="tw-object-cover tw-object-top"
            blurDataURL="https://cdn.bagiwebsite.com/assets/images/placeholder.svg"
          />
          <figcaption className="tw-hidden">
            Portfolio bisnis dan proyek-proyek yang telah dikerjakan.
          </figcaption>
          <div className="tw-absolute tw-inset-0 tw-bg-black tw-opacity-40"></div>
        </figure>
      </header>

      {/* Bagian Konten */}
      <main>
        <section className="tw-my-10 tw-flex tw-w-full">
          <Container size="xl" w="100%" mih={400}>
            <Group justify="space-between" align="end" mb={{ base: 30, md: 60 }}>
              <motion.h2
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="tw-text-4xl md:tw-text-6xl lg:tw-text-8xl tw-tracking-[0.4em]"
              >
                {t('projects')}
              </motion.h2>

              <nav aria-label="Tampilan proyek">
                <Group mb={8}>
                  <ActionIcon
                    variant={layout === 'gallery' ? 'light' : 'transparent'}
                    size="lg"
                    onClick={() => setLayout('gallery')}
                    aria-label="Tampilkan proyek dalam bentuk galeri"
                  >
                    <IconLayoutGrid size={24} />
                  </ActionIcon>
                  <ActionIcon
                    variant={layout === 'details' ? 'light' : 'transparent'}
                    size="lg"
                    onClick={() => setLayout('details')}
                    aria-label="Tampilkan proyek dalam bentuk daftar detail"
                  >
                    <IconListDetails size={24} />
                  </ActionIcon>
                </Group>
              </nav>
            </Group>

            {layout === 'details' ? <PortfolioDetails /> : <PortfolioGallery />}
          </Container>
        </section>
      </main>
    </>
  );
};

export default memo(Portfolio);
