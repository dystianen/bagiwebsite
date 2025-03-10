'use client';
import LanguagePicker from '@/components/LanguagePicker';
import ToggleThemes from '@/components/ToggleThemes';
import { Burger, Button, Container, Divider, Drawer, Flex, Group, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const tg = useTranslations('Global');
  const route = usePathname();
  const [opened, { toggle }] = useDisclosure();

  const menu = [
    { href: '/about-us', label: tg('about_us') },
    { href: '/services', label: tg('services') },
    { href: '/portfolio', label: tg('portfolio') }
  ];

  const handleClickContactUs = () => {
    window.open(
      'https://wa.me/+6287763832505?text=Halo, saya ingin mengetahui informasi lebih lanjut mengenai layanan dari bagiwebsite.com!'
    );
  };

  return (
    <header
      className={`tw-fixed tw-w-full tw-top-0 tw-z-50 tw-bg-[var(--mantine-color-body)] ${opened ? '' : 'tw-shadow-sm'}`}
    >
      <Container
        size="xl"
        className="tw-flex tw-justify-between tw-items-center tw-h-20 md:tw-h-24"
      >
        <div className="tw-flex tw-gap-6 tw-items-center">
          <Link
            href={'/'}
            onClick={() => {
              if (opened) toggle();
            }}
          >
            <Flex gap={4} align="end">
              <Image
                src="https://cdn.bagiwebsite.com/assets/images/logo_bagiwebsite.png"
                blurDataURL="https://cdn.bagiwebsite.com/assets/images/placeholder.svg"
                alt="logo-bagiwebsite"
                width={30}
                height={30}
              />
              <h2 className="tw-font-bold tw-text-2xl">BAGIWEBSITE</h2>
            </Flex>
          </Link>
          <div className="tw-hidden lg:tw-flex tw-items-center sm:tw-gap-4 lg:tw-gap-6">
            <Divider orientation="vertical" />
            <nav>
              <ul className="tw-flex sm:tw-gap-4 lg:tw-gap-8">
                {menu.map((it, index) => (
                  <li key={index} className="tw-relative tw-list-none">
                    <Link href={it.href} className="tw-relative tw-inline-block">
                      {it.label}
                      <motion.div
                        className="tw-absolute tw-bottom-0 tw-h-[2px] tw-bg-[#1859c5] tw-transform tw--translate-x-1/2"
                        initial={{ scaleX: 0 }}
                        animate={route === it.href ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ width: '100%' }}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <Group align="center">
          <Group className="xxs:tw-hidden tw-flex">
            <ToggleThemes />
            <LanguagePicker />
          </Group>

          <Button
            size="md"
            variant="outline"
            radius="xl"
            leftSection={<IconBrandWhatsapp />}
            className="tw-hidden lg:tw-block"
            onClick={handleClickContactUs}
          >
            {tg('contact_us')}
          </Button>
          <Burger
            opened={opened}
            onClick={toggle}
            aria-label="Toggle navigation"
            className="tw-block lg:tw-hidden"
          />
        </Group>

        <Drawer
          opened={opened}
          onClose={toggle}
          title="Authentication"
          position="top"
          top={100}
          zIndex={9}
          styles={{
            content: {
              height: 'max-content'
            }
          }}
          overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        >
          <Flex direction="column" gap={32}>
            <nav className="tw-mt-8">
              <ul className="tw-flex tw-flex-col tw-gap-8">
                {menu.map((it, index) => (
                  <li key={index} className="tw-relative tw-list-none">
                    <Link
                      href={it.href}
                      onClick={toggle}
                      className="tw-relative tw-inline-block tw-pb-1"
                    >
                      {it.label}
                      <motion.div
                        className="tw-absolute tw-bottom-0 tw-h-[2px] tw-bg-[#1c7ed6] tw-transform tw--translate-x-1/2"
                        initial={{ scaleX: 0 }}
                        animate={route === it.href ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ width: '100%' }}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Stack>
              <Group className="xxs:tw-flex tw-hidden">
                <ToggleThemes />
                <LanguagePicker />
              </Group>
              <Button
                size="md"
                variant="outline"
                w={'max-content'}
                radius={'xl'}
                leftSection={<IconBrandWhatsapp />}
                onClick={handleClickContactUs}
              >
                {tg('contact_us')}
              </Button>
            </Stack>
          </Flex>
        </Drawer>
      </Container>
    </header>
  );
};

export default Header;
