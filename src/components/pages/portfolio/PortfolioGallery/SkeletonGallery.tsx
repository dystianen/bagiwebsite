import { SimpleGrid, Skeleton } from '@mantine/core';

const SkeletonGallery = () => {
  return (
    <SimpleGrid cols={{ base: 2, sm: 3, md: 3, lg: 4 }} spacing={'xs'}>
      {Array.from({ length: 8 }).map((_, index) => (
        <Skeleton key={index} height={250} width="100%" radius="sm" />
      ))}
    </SimpleGrid>
  );
};

export default SkeletonGallery;
