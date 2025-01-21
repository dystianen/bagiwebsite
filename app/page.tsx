'use client';
import { Button, Card, Container, Divider, Flex, Grid, Image, SimpleGrid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconArrowDown, IconBuildings, IconBusinessplan, IconUser } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { memo, useRef } from 'react';
import Marquee from 'react-fast-marquee';
import ReviewCard from './components/ReviewCard';
import portfolio from './json/portofolio.json';
import review from './json/review.json';
import whyUs from './json/whyus.json';

const Home = () => {
  const isMobile = useMediaQuery('(max-width: 62em)');
  const refWhyUs = useRef<HTMLInputElement>(null);
  const scrollToWhyUs = () => {
    if (refWhyUs.current != null) {
      window.scrollTo({
        top: refWhyUs.current.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const halfLength = Math.ceil(portfolio.length / 2);
  const firstHalf = portfolio.slice(0, halfLength);
  const secondHalf = portfolio.slice(halfLength);

  return (
    <>
      <section className="tw-bg-pattern-wave tw-bg-cover">
        <Container
          size={'xl'}
          className="tw-flex tw-justify-center tw-gap-4 tw-items-center tw-overflow-hidden"
        >
          <Grid gutter={'xl'} align="center" w={'100%'}>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Flex direction={'column'} gap={'xl'} justify={'center'} pr={{ base: 0, md: 50 }}>
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5
                  }}
                  viewport={{ once: true }}
                >
                  <Card withBorder radius={'xl'} w={'max-content'} py={5}>
                    IT Services & Solutions
                  </Card>
                </motion.div>
                <motion.h1
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.5
                  }}
                  viewport={{ once: true }}
                  className="tw-text-3xl lg:tw-text-6xl tw-font-bold"
                >
                  Ubah Ide Anda Menjadi Sesuatu yang Menakjubkan
                </motion.h1>
                <motion.p
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.5
                  }}
                  viewport={{ once: true }}
                  className="tw-text-gray-500"
                >
                  Di <strong>BAGIWEBSITE</strong>, kami menghadirkan solusi digital yang dirancang
                  untuk menginspirasi dan memberikan dampak nyata. Apakah Anda memulai dari nol atau
                  ingin mengubah platform lama, kami membantu Anda menciptakan pengalaman online
                  yang memukau, meningkatkan keterlibatan, dan mendorong pertumbuhan bisnis Anda ke
                  level berikutnya.
                </motion.p>

                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -5
                  }}
                  whileTap={{
                    scale: 0.95
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut'
                  }}
                >
                  <Button
                    size="lg"
                    radius={'xl'}
                    w={'max-content'}
                    style={{
                      outline: '2px solid var(--mantine-primary-color-filled)',
                      outlineOffset: 'calc(.125rem* var(--mantine-scale))'
                    }}
                    onClick={scrollToWhyUs}
                    rightSection={
                      <motion.div
                        animate={{
                          y: [0, -5, 0] // Gerakan ke atas (-5px), kembali ke 0
                        }}
                        transition={{
                          duration: 0.8, // Durasi animasi
                          repeat: Infinity, // Ulang terus-menerus
                          ease: 'easeInOut' // Animasi halus
                        }}
                      >
                        <IconArrowDown />
                      </motion.div>
                    }
                  >
                    Lihat Keunggulan Kami
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5
                  }}
                  viewport={{ once: true }}
                >
                  <Card shadow={'sm'} radius={'md'}>
                    <Flex
                      gap={{ base: 'md', md: 'xl' }}
                      justify={'space-around'}
                      className="tw-text-gray-500"
                    >
                      <Flex direction={'column'} gap={4} align={'center'}>
                        <IconUser size={isMobile ? 30 : 40} />
                        <h1 className="tw-text-lg">Individuals</h1>
                      </Flex>
                      <Divider orientation="vertical" />
                      <Flex direction={'column'} gap={4} align={'center'}>
                        <IconBusinessplan size={isMobile ? 30 : 40} />
                        <h1 className="tw-text-lg">Bussiness</h1>
                      </Flex>
                      <Divider orientation="vertical" />
                      <Flex direction={'column'} gap={4} align={'center'}>
                        <IconBuildings size={isMobile ? 30 : 40} />
                        <h1 className="tw-text-lg">Companies</h1>
                      </Flex>
                    </Flex>
                  </Card>
                </motion.div>
              </Flex>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 1.5
                }}
                viewport={{ once: true }}
              >
                <Flex
                  direction={{ base: 'column', md: 'row' }}
                  className="tw-h-auto lg:tw-h-[100dvh]"
                  gap={10}
                >
                  <Marquee direction={isMobile ? 'right' : 'down'} style={{ overflowX: 'visible' }}>
                    {firstHalf.map((it, index: number) => (
                      <Image
                        key={index}
                        src={it.img}
                        alt="bagiwebsite-profesional-group"
                        className="md:tw-rounded-lg tw-shadow-lg !tw-object-contain tw-bg-white"
                        w={{ base: 150, md: 200, lg: 300 }}
                        h={{ base: 'auto', lg: 280 }}
                        loading="lazy"
                      />
                    ))}
                  </Marquee>
                  <Marquee direction={isMobile ? 'left' : 'up'} style={{ overflowX: 'visible' }}>
                    {secondHalf.map((it, index: number) => (
                      <Image
                        key={index}
                        src={it.img}
                        alt="bagiwebsite-profesional-group"
                        className="md:tw-rounded-lg tw-shadow-lg !tw-object-contain tw-bg-white"
                        w={{ base: 150, md: 200, lg: 300 }}
                        h={{ base: 'auto', lg: 280 }}
                        loading="lazy"
                      />
                    ))}
                  </Marquee>
                </Flex>
              </motion.div>
            </Grid.Col>
          </Grid>
        </Container>
      </section>

      <section ref={refWhyUs} className="tw-my-20 tw-flex tw-items-center tw-w-full">
        <Container size={'xl'} w={'100%'}>
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
                Kenapa Memilih Kami?
              </h1>
              <p className="tw-max-w-2xl tw-text-center tw-text-gray-500">
                Kami menawarkan solusi digital yang profesional, kustom, dan menggunakan teknologi
                terkini untuk memenuhi kebutuhan bisnis Anda. Dengan layanan lengkap dan dukungan
                responsif, kami berkomitmen membantu Anda meraih kesuksesan.
              </p>
            </Flex>
          </motion.div>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
            {whyUs.map((it, index) => (
              <motion.div
                key={index}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.1 * index
                }}
                viewport={{ once: true }}
              >
                <Card shadow="sm" radius={'md'}>
                  <Flex gap={4} direction={'column'}>
                    <Image src={it.icon} alt="bagiwebsite" width={100} height={100} />
                    <h1 className="tw-text-xl tw-font-bold">{it.title}</h1>
                    <p className="tw-text-gray-500">{it.description}</p>
                  </Flex>
                </Card>
              </motion.div>
            ))}
          </SimpleGrid>
        </Container>
      </section>

      <section className="tw-h-[500px] tw-my-10 tw-flex tw-items-center tw-w-full">
        <Container size={'xl'} w={'100%'}>
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
                Apa Kata Mereka Tentang Kami?
              </h1>
              <p className="tw-max-w-2xl tw-text-center tw-text-gray-500">
                Kami selalu berkomitmen untuk memberikan layanan terbaik kepada setiap klien.
                Temukan bagaimana pengalaman mereka bekerja bersama BagiWebsite melalui ulasan jujur
                dan testimoni yang menginspirasi. Kepuasan Anda adalah prioritas kami!
              </p>
            </Flex>

            <Marquee gradient={!isMobile}>
              {review.map((it, index) => (
                <ReviewCard key={index} name={it.name} rating={it.rating} comment={it.comment} />
              ))}
            </Marquee>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default memo(Home);
