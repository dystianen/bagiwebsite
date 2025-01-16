'use client';
import {
  Alert,
  Button,
  Card,
  Container,
  Divider,
  Flex,
  Group,
  SimpleGrid,
  Stack
} from '@mantine/core';
import { IconCheck, IconInfoCircle } from '@tabler/icons-react';
import services from '../json/services.json';

export default function AboutUs() {
  const handleClickService = (keyword: string) => {
    window.open(
      `https://api.whatsapp.com/send?phone=+6287763832505&text=Halo, saya ingin memesan layanan ${keyword}!`
    );
  };

  return (
    <>
      <section className="tw-mt-32">
        <Container size={'xl'}>
          <Flex gap={24} direction={'column'} align={'center'} w={'100%'}>
            <h1 className="tw-text-4xl md:tw-text-6xl lg:tw-text-8xl tw-text-center tw-tracking-[0.4em]">
              SERVICES
            </h1>
            <p className="tw-max-w-5xl tw-text-center tw-text-gray-500">
              Kami menawarkan berbagai layanan pembuatan dan pengelolaan website yang dirancang
              untuk memenuhi kebutuhan Anda, Semua layanan kami dilengkapi dengan fitur terbaik,
              harga kompetitif, dan dukungan penuh untuk memastikan hasil maksimal.
            </p>
            <Alert
              className="tw-max-w-4xl"
              variant="light"
              color="yellow"
              title="Free Konsultasi"
              icon={<IconInfoCircle />}
            >
              <p className="tw-text-black/80">
                Tidak yakin harus mulai dari mana? Tim ahli kami siap membantu Anda memahami
                kebutuhan proyek Anda tanpa biaya tambahan! Dapatkan saran terbaik sebelum memulai
                proyek Anda bersama kami.
              </p>
            </Alert>
          </Flex>
        </Container>
        <Divider w={'100%'} mt={'xl'} />
      </section>

      <section className="tw-my-10 tw-flex tw-w-full">
        <Container size={'xl'} w={'100%'}>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }}>
            {services.map((it, index) => (
              <Card key={index} shadow="md" radius="md">
                <Stack justify="space-between" h={'100%'}>
                  <Stack>
                    <h1 className="tw-text-xl tw-font-semibold">{it.name}</h1>
                    <ol>
                      {it.features.map((feature, idx) => (
                        <Group key={idx} wrap="nowrap" align="start" gap={'xs'}>
                          <div>
                            <IconCheck color="green" />
                          </div>
                          <li key={idx}>{feature}</li>
                        </Group>
                      ))}
                    </ol>
                  </Stack>
                  <Stack>
                    <div>
                      <p>Price</p>
                      <h1 className="tw-text-lg tw-font-semibold">{it.price_range}</h1>
                      <span className="tw-text-amber-500 tw-italic">* Diskon {it.discount}</span>
                    </div>
                    <Button radius={'xl'} onClick={() => handleClickService(it.name)}>
                      Pesan Sekarang
                    </Button>
                  </Stack>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </section>
    </>
  );
}
