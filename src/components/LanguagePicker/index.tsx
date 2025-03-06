'use client';
import { Locale } from '@/src/i18n/config';
import { getUserLocale, setUserLocale } from '@/src/services/locale';
import { Group, Menu, Skeleton, UnstyledButton } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import images from './images';
import classes from './LanguagePicker.module.css';

type TData = {
  value: Locale;
  label: string;
  image: string;
};

const data: TData[] = [
  { value: 'en', label: 'English', image: images.english },
  { value: 'id', label: 'Indonesia', image: images.indonesia }
];

export default function LanguagePicker() {
  const isMobile = useMediaQuery('(max-width: 48em)');
  const [selected, setSelected] = useState<TData>(data[0]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocale = async () => {
      const locale = await getUserLocale();
      const defaultSelected = data.find((it) => it.value === locale);
      if (defaultSelected) {
        setSelected(defaultSelected);
      }
      setLoading(false);
    };
    fetchLocale();
  }, []);

  const onChange = async (item: TData) => {
    setSelected(item);
    await setUserLocale(item.value);
  };

  const items = data.map((item) => (
    <Menu.Item
      key={item.label}
      leftSection={
        <Image
          src={item.image}
          width={20}
          height={20}
          alt={item.label}
          blurDataURL="https://cdn.bagiwebsite.com/assets/images/placeholder.svg"
        />
      }
      onClick={() => onChange(item)}
      className={`${classes.menuItem} ${
        selected.value === item.value ? classes.activeMenuItem : ''
      }`}
    >
      <span className={classes.label}>{item.label}</span>
    </Menu.Item>
  ));

  return (
    <Menu radius="md" width={isMobile ? 200 : 'target'} withinPortal>
      <Menu.Target>
        <Skeleton visible={loading} w={'max-content'} h={32}>
          <UnstyledButton className={classes.control}>
            <Group gap="xs">
              <Image src={selected.image} width={20} height={20} alt="" aria-hidden="true" />
              {!isMobile && <span className={classes.label}>{selected.label}</span>}
            </Group>
            <IconChevronDown size={16} className={classes.icon} stroke={1.5} />
          </UnstyledButton>
        </Skeleton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
}
