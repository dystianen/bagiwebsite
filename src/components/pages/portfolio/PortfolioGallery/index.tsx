'use client';
import { Anchor, Box, Group, SimpleGrid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconExternalLink } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import portfolio from '../../../../json/portofolio.json';

const PortfolioGallery = () => {
  const isTablet = useMediaQuery('(max-width: 62em)'); // 992px
  const isMobile = useMediaQuery('(max-width: 46em)'); // 768px

  return (
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
                priority={index < 3}
                blurDataURL="https://cdn.bagiwebsite.com/assets/images/placeholder.svg"
              />
            </Box>

            <div className="md:tw-h-32 tw-absolute tw-bottom-0 tw-left-0 tw-w-full tw-bg-gradient-to-t tw-from-black/80 tw-to-transparent tw-text-white tw-p-2 md:tw-p-4 tw-flex tw-items-end">
              <Anchor href={it.href} target="_blank" underline="never" c="white" w={'max-content'}>
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
  );
};

export default PortfolioGallery;
