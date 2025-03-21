import highlightServices from '@/json/highlight_services.json';
import { Button, Card, Container, Flex, List, Stack, ThemeIcon } from '@mantine/core';
import { IconArrowRight, IconCircleCheck } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'nextjs-toploader/app';

const ServicesSection = () => {
  const router = useRouter();
  const tg = useTranslations('Global');
  const t = useTranslations('HomePage');

  const handleMoreDetailServices = () => {
    router.push('/services');
  };

  return (
    <Card className={'tw-py-8'}>
      <Container size={'xl'} w={'100%'}>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1
          }}
          viewport={{ once: true }}
        >
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align={{ base: 'center', md: 'start' }}
            gap={60}
          >
            <Image
              src={'https://cdn.bagiwebsite.com/assets/images/highlight_services.webp'}
              width={350}
              height={400}
              alt="Services"
            />
            <Stack align="start" gap="lg">
              <h2 className="tw-text-2xl md:tw-text-4xl tw-font-semibold">
                {t('our_services.title')}
              </h2>
              <p className="tw-max-w-2xl tw-text-gray-500">{t('our_services.description')}</p>

              <List
                spacing="md"
                className="tw-text-gray-500"
                center
                icon={
                  <ThemeIcon color="lime" size={24} radius="xl">
                    <IconCircleCheck size={16} />
                  </ThemeIcon>
                }
              >
                {highlightServices.map((item, index) => (
                  <List.Item key={index}>{t(item)}</List.Item>
                ))}
              </List>

              <motion.div
                whileHover={{
                  scale: 1.1
                }}
                whileTap={{
                  scale: 1.1
                }}
                transition={{
                  duration: 0.2,
                  ease: 'easeInOut'
                }}
              >
                <Button
                  radius={'xl'}
                  px={'xl'}
                  rightSection={
                    <motion.div
                      animate={{
                        x: [0, 5, 0]
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    >
                      <IconArrowRight />
                    </motion.div>
                  }
                  onClick={handleMoreDetailServices}
                >
                  {tg('more_detail')}
                </Button>
              </motion.div>
            </Stack>
          </Flex>
        </motion.div>
      </Container>
    </Card>
  );
};

export default ServicesSection;
