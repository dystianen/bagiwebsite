'use client';
import services from '@/json/services.json';
import {
  Alert,
  Button,
  Card,
  Container,
  Divider,
  Flex,
  List,
  SimpleGrid,
  Stack,
  ThemeIcon
} from '@mantine/core';
import { IconBrandWhatsapp, IconCircleCheck, IconInfoCircle } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { memo } from 'react';

const Services = () => {
  const tg = useTranslations('Global');
  const t = useTranslations('Services');

  const handleClickService = (keyword: string) => {
    window.open(
      `https://api.whatsapp.com/send?phone=+6287763832505&text=Halo, saya ingin memesan layanan ${keyword}!`
    );
  };

  return (
    <>
      <header className="tw-mt-32">
        <Container size={'xl'}>
          <Flex gap={24} direction={'column'} align={'center'} w={'100%'}>
            <h1 className="tw-text-4xl md:tw-text-6xl lg:tw-text-8xl tw-text-center tw-tracking-[0.4em]">
              {t('title')}
            </h1>
            <p className="tw-max-w-5xl tw-text-center tw-text-gray-500">{t('content')}</p>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1
              }}
              viewport={{ once: true }}
            >
              <Alert
                className="tw-max-w-4xl"
                variant="light"
                color="yellow"
                title={t('consultation.title')}
                icon={<IconInfoCircle aria-label="Info" />}
              >
                {t('consultation.content')}
              </Alert>
            </motion.div>
          </Flex>
        </Container>
        <Divider w={'100%'} mt={'xl'} />
      </header>

      <main>
        <section className="tw-my-10 tw-flex tw-w-full">
          <Container size={'xl'} w={'100%'}>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }}>
              {services.map((it, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.2 * index
                  }}
                  viewport={{ once: true }}
                  className="tw-h-full"
                >
                  <Card shadow="md" radius="md" h={'100%'}>
                    <Stack justify="space-between" h={'100%'}>
                      <Stack>
                        <h3 className="tw-text-xl tw-font-semibold">{t(it.name)}</h3>
                        <List
                          spacing="md"
                          className="tw-text-gray-500"
                          center
                          icon={
                            <ThemeIcon color="lime" size={24} radius="xl">
                              <IconCircleCheck size={16} aria-label="Check" />
                            </ThemeIcon>
                          }
                        >
                          {it.features.map((item, i) => (
                            <List.Item key={i}>{t(item)}</List.Item>
                          ))}
                        </List>
                      </Stack>
                      <Button
                        radius={'xl'}
                        leftSection={<IconBrandWhatsapp aria-label="WhatsApp" />}
                        onClick={() => handleClickService(t(it.name))}
                        aria-label={`Pesan layanan ${t(it.name)}`}
                      >
                        {tg('contact_us')}
                      </Button>
                    </Stack>
                  </Card>
                </motion.article>
              ))}
            </SimpleGrid>
          </Container>
        </section>
      </main>
    </>
  );
};

export default memo(Services);
