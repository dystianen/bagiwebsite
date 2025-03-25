import whyUs from '@/json/whyus.json';
import { Card, Container, Flex, SimpleGrid } from '@mantine/core';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const WhyUs = () => {
  const t = useTranslations('HomePage');

  return (
    <section>
      <Container size="xl" w="100%">
        <motion.header
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Flex direction="column" align="center" mb={40} gap={16}>
            <h2 className="tw-text-2xl md:tw-text-4xl tw-text-center tw-font-semibold">
              {t('why_us')}
            </h2>
            <p className="tw-max-w-2xl tw-text-center tw-text-gray-500">{t('desc_why_us')}</p>
          </Flex>
        </motion.header>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
          {whyUs.map((it, index) => (
            <motion.article
              key={index}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Card shadow="sm" radius="md">
                <Flex gap={4} direction="column">
                  <Image
                    src={it.icon}
                    alt={t(it.title)}
                    width={640}
                    height={427}
                    placeholder="blur"
                    blurDataURL="https://cdn.bagiwebsite.com/assets/images/placeholder.svg"
                    fetchPriority="low"
                    loading="lazy"
                  />
                  <h3 className="tw-text-xl tw-font-bold">{t(it.title)}</h3>
                  <p className="tw-text-gray-500">{t(it.description)}</p>
                </Flex>
              </Card>
            </motion.article>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
};

export default WhyUs;
