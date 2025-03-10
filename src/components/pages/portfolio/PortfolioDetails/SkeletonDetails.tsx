import { Flex, Skeleton } from '@mantine/core';

const SkeletonDetails = () => {
  return (
    <Flex direction="column" gap={40} w="100%" pos="relative">
      {Array.from({ length: 3 }).map((_, index) => (
        <Flex key={index} gap="xl" direction="row" align="center">
          <Skeleton height={300} width={600} radius="xl" />
          <Flex direction="column" align="center" gap="sm" w="100%">
            <Skeleton height={30} width="60%" />
            <Skeleton height={20} width="80%" />
            <Skeleton height={20} width="90%" />
            <Skeleton height={40} width={120} radius="xl" mt="sm" />
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default SkeletonDetails;
