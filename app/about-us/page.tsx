'use client';
import { Badge, Card, Container, Flex, Image, SimpleGrid, Text } from '@mantine/core';
import { IconQuoteFilled } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { memo } from 'react';
import ourTeams from '../json/teams.json';

const AboutUs = () => {
  return (
    <>
      <section className="tw-mt-32">
        <Flex gap={40} direction={'column'}>
          <Container size={'xl'}>
            <h1 className="tw-text-3xl md:tw-text-6xl lg:tw-text-8xl tw-text-center tw-tracking-[0.4em]">
              BAGIWEBSITE
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
            <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-black tw-opacity-50"></div>
          </div>
        </Flex>
      </section>

      <section className="tw-my-10 tw-flex tw-w-full">
        <Container size={'xl'} w={'100%'}>
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5
            }}
            viewport={{ once: true }}
          >
            <Flex direction={'column'} align={'center'} mb={40} gap={16}>
              <h1 className="tw-text-2xl md:tw-text-4xl tw-text-center tw-font-semibold">Visi</h1>
              <p className="tw-max-w-2xl tw-text-center tw-text-gray-500">
                Menjadi mitra terpercaya dalam solusi digital yang inovatif, membantu bisnis
                berkembang dengan teknologi terkini dan memberikan dampak positif bagi setiap klien.
              </p>
            </Flex>
          </motion.div>

          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5
            }}
            viewport={{ once: true }}
          >
            <Flex direction={'column'} align={'center'} mb={40} gap={16}>
              <h1 className="tw-text-2xl md:tw-text-4xl tw-text-center tw-font-semibold">Misi</h1>
              <Card withBorder radius={'lg'}>
                <ol className="tw-max-w-3xl tw-text-gray-500 tw-flex tw-flex-col tw-gap-4">
                  <li>
                    1. Memberikan layanan pembuatan website, aplikasi, dan solusi digital lainnya
                    yang disesuaikan dengan kebutuhan bisnis klien.
                  </li>
                  <li>
                    2. Membangun kemitraan yang kuat dan berkelanjutan dengan klien untuk mendukung
                    pertumbuhan dan kesuksesan mereka di dunia digital.
                  </li>
                  <li>
                    3. Selalu menghadirkan solusi dengan teknologi terbaru dan inovatif untuk
                    memberikan hasil terbaik dan meningkatkan efisiensi bagi setiap klien.
                  </li>
                  <li>
                    4. Menyediakan layanan pelanggan yang cepat dan efisien, siap membantu klien
                    dalam setiap tahap pengembangan dan pengelolaan proyek.
                  </li>
                  <li>
                    5. Fokus pada kepuasan klien dengan menyampaikan solusi yang tepat, hasil yang
                    memuaskan, dan nilai terbaik untuk investasi mereka.
                  </li>
                </ol>
              </Card>
            </Flex>
          </motion.div>
        </Container>
      </section>
      <section className=" tw-flex tw-w-full tw-items-center tw-py-10">
        <Container size={'xl'} w={'100%'}>
          <Flex direction={'column'} justify={'center'} align={'center'} gap={16}>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1
              }}
              viewport={{ once: true }}
            >
              <Flex direction={'column'} align={'center'} mb={40} gap={16}>
                <h1 className="tw-text-2xl md:tw-text-4xl tw-text-center tw-font-semibold">
                  Tim Kami
                </h1>
                <p className="tw-max-w-3xl tw-text-gray-500 tw-text-center">
                  BagiWebsite didukung oleh tim profesional yang berpengalaman di bidang teknologi
                  digital. Dengan keahlian dalam pengembangan website, aplikasi, dan solusi digital,
                  kami bekerja sama untuk menciptakan hasil terbaik yang sesuai dengan kebutuhan dan
                  tujuan bisnis klien kami.
                </p>
              </Flex>
            </motion.div>

            <SimpleGrid cols={{ base: 2, lg: 4 }}>
              {ourTeams.map((it, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.5 * index
                  }}
                  viewport={{ once: true }}
                >
                  <Card shadow="sm" radius="md" p={{ base: 'sm', lg: 'md' }}>
                    <Card.Section>
                      <Image
                        src={it.image}
                        h={{ base: 150, md: 300 }}
                        w={{ base: '100%', md: 300 }}
                        alt="Norway"
                        style={{
                          filter: 'grayscale(40%)'
                        }}
                      />
                    </Card.Section>

                    <Flex direction={'column'} gap={5} mt={'sm'}>
                      <Text fw={600}>{it.name}</Text>
                      <Badge color="pink">{it.position}</Badge>
                    </Flex>
                  </Card>
                </motion.div>
              ))}
            </SimpleGrid>
          </Flex>
        </Container>
      </section>
      <section className=" tw-flex tw-w-full tw-items-center tw-bg-slate-50 tw-py-10">
        <Container size={'xl'} w={'100%'}>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1
            }}
            viewport={{ once: true }}
          >
            <Flex direction={'column'} justify={'center'} align={'center'} gap={16}>
              <h1 className="tw-text-2xl md:tw-text-4xl tw-text-center tw-font-semibold">Quotes</h1>
              <p className="tw-max-w-4xl tw-text-center tw-text-gray-500">
                Saat kita masih diberi kesempatan bangun di pagi hari, itu berarti Tuhan masih
                memberi kesempatan kepada kita untuk melakukan pekerjaan yang harus kita lakukan
              </p>
              <IconQuoteFilled size={30} />
            </Flex>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default memo(AboutUs);
