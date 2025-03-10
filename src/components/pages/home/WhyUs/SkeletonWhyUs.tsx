import { Card, Container, Flex, SimpleGrid, Skeleton } from '@mantine/core';

const SkeletonWhyUs = () => {
  return (
    <Container size={'xl'} w={'100%'}>
      <Flex direction={'column'} align={'center'} mb={40} gap={16}>
        <Skeleton height={40} width="50%" radius="md" />
        <Skeleton height={20} width="80%" radius="md" />
      </Flex>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
        {Array.from({ length: 6 }).map((_, index) => (
          <Card key={index} shadow="sm" radius="md">
            <Flex gap={4} direction="column">
              <Skeleton height={200} width="100%" />
              <Skeleton height={20} width="60%" />
              <Skeleton height={14} width="90%" />
            </Flex>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default SkeletonWhyUs;
