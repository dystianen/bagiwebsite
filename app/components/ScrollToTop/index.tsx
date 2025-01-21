'use client';
import { Affix, Button, Transition } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { IconChevronsUp } from '@tabler/icons-react';

const ScrollToTop = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: 20, right: 0 }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <Button
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
            variant="transparent"
            radius="xl"
          >
            <IconChevronsUp size={50} />
          </Button>
        )}
      </Transition>
    </Affix>
  );
};

export default ScrollToTop;
