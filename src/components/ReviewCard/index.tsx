import { Avatar, Card, Flex, Rating } from '@mantine/core';

type TReviewCard = {
  name: string;
  rating: number;
  comment: string;
};

const ReviewCard = ({ name, rating, comment }: TReviewCard) => {
  return (
    <Card
      className="review-card"
      w={{ base: 300, md: 400 }}
      h={{ base: 250, md: 160 }}
      radius="lg"
      shadow="sm"
      m={8}
    >
      <Flex direction={{ base: 'column', md: 'row' }} gap={16}>
        <Avatar
          key={name}
          name={name}
          color="initials"
          allowedInitialsColors={[
            'green',
            'cyan',
            'grape',
            'lime',
            'blue',
            'red',
            'indigo',
            'orange',
            'pink'
          ]}
        />
        <Flex direction={'column'} gap={6}>
          <p className="tw-font-bold tw-text-lg">{name}</p>
          <Rating value={rating} readOnly />
          <p>{comment}</p>
        </Flex>
      </Flex>
    </Card>
  );
};

export default ReviewCard;
