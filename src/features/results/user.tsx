import { Box, Avatar, Text } from '@chakra-ui/react';
import React from 'react';
import { UserData } from '../search/search-context';

type Props = { user: UserData };

const User: React.FC<Props> = ({ user }) => {
  const { name, avatar_url, bio } = user;
  return (
    <>
      <Box display="flex">
        <Avatar
          borderRadius="12"
          w="16"
          h="16"
          marginRight="4"
          name={name}
          src={avatar_url}
        />
        <Text
          display="flex"
          alignItems="flex-end"
          fontStyle="normal"
          fontWeight="500"
          fontSize="18px"
          maxWidth="120px"
          lineHeight="24px"
          letterSpacing="0.15px"
          color="rgba(0,0,0,0.87)"
        >
          {name}
        </Text>
      </Box>
      <Text
        marginTop="4"
        color="#828282"
        fontSize="14px"
        lineHeight="19px"
        letterSpacing="0.4px"
      >
        {bio}
      </Text>
    </>
  );
};

export default User;
