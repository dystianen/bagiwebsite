'use client';
import ReviewCard from '@/components/ReviewCard';
import review from '@/json/review.json';
import { Container, Flex, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Marquee from 'react-fast-marquee';

const ReviewsSection = () => {
  const isMobile = useMediaQuery('(max-width: 62em)');
  const t = useTranslations('HomePage');

  return (
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
  );
};

export default ReviewsSection;
