import { Avatar, Card, Flex, Rating } from '@mantine/core';

type TReviewCard = {
  name: string;
  rating: number;
  comment: string;
};

const ReviewCard = ({ name, rating, comment }: TReviewCard) => {
  return (
    <Card withBorder w={{ base: 300, md: 400 }} h={{ base: 250, md: 160 }} radius={'lg'} m={8}>
      <Flex direction={{ base: 'column', md: 'row' }} gap={16}>
        <Avatar radius="xl" size={50} />
        <Flex direction={'column'} gap={6}>
          <h5 className="tw-font-bold">{name}</h5>
          <Rating value={rating} readOnly />
          <p>{comment}</p>
        </Flex>
      </Flex>
    </Card>
  );
};

export default ReviewCard;
