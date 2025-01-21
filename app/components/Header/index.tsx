'use client';
import { Burger, Button, Container, Divider, Drawer, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [opened, { toggle }] = useDisclosure();
  const route = usePathname();

  const menu = [
    {
      href: '/',
      label: 'Home'
    },
    {
      href: '/about-us',
      label: 'About Us'
    },
    {
      href: '/services',
      label: 'Services'
    },
    {
      href: '/portfolio',
      label: 'Portfolio'
    }
    // {
    //   href: '/blog',
    //   label: 'Blog'
    // }
  ];

  const handleClickContactUs = () => {
    window.open(
      'https://api.whatsapp.com/send?phone=+6287763832505&text=Halo, saya ingin mengetahui informasi lebih lanjut mengenai layanan dari bagiwebsite.com!'
    );
  };

  return (
    <header
      className={`tw-fixed tw-w-full tw-top-0 tw-bg-white tw-z-10 ${opened ? '' : 'tw-shadow-sm'}`}
    >
      <Container size={'xl'} className="tw-flex tw-justify-between tw-items-center tw-h-20">
        <div className="tw-flex tw-gap-6 tw-items-center">
          <Flex gap={4} align={'end'}>
            <Image
              src="/assets/images/logo_bagiwebsite.png"
              alt="BAGIWEBSITE"
              width={30}
              height={30}
            />
            <h2 className="tw-font-bold tw-text-2xl">BAGIWEBSITE</h2>
          </Flex>
          <div className="tw-hidden md:tw-flex sm:tw-gap-4 lg:tw-gap-6">
            <Divider orientation="vertical" />
            <nav>
              <ul className="tw-flex sm:tw-gap-4 lg:tw-gap-8">
                {menu.map((it, index) => (
                  <li
                    key={index}
                    className={route === it.href ? 'tw-border-b-2 tw-border-[#1c7ed6]' : ''}
                  >
                    <Link href={it.href}>{it.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <Button
          size="md"
          variant="outline"
          radius={'xl'}
          leftSection={<IconBrandWhatsapp />}
          display={{ base: 'none', sm: 'block' }}
          onClick={handleClickContactUs}
        >
          Contact Us
        </Button>

        <Burger
          opened={opened}
          onClick={toggle}
          aria-label="Toggle navigation"
          display={{ base: 'block', sm: 'none' }}
        />

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
                  <li
                    key={index}
                    className={route === it.href ? 'tw-border-b-2 tw-border-blue-500 tw-w-max' : ''}
                  >
                    <a href={it.href}>{it.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <Button
              size="md"
              variant="outline"
              w={'max-content'}
              radius={'xl'}
              leftSection={<IconBrandWhatsapp />}
              onClick={handleClickContactUs}
            >
              Contact Us
            </Button>
          </Flex>
        </Drawer>
      </Container>
    </header>
  );
};

export default Header;
