import { ActionIcon, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';
import cx from 'clsx';
import classes from './toggle.module.css';

const ToggleThemes = () => {
  const { setColorScheme } = useMantineColorScheme({
    keepTransitions: true
  });
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ActionIcon variant="transparent" color="gray" aria-label="Themes" onClick={toggleColorScheme}>
      {/* {computedColorScheme === 'dark' ? <IconSun /> : <IconMoon />} */}
      <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
      <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
    </ActionIcon>
  );
};

export default ToggleThemes;
