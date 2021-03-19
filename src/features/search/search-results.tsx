import { Avatar, Box, Text, Link, Container, VStack } from '@chakra-ui/react';
import { Skeleton } from '@chakra-ui/skeleton';
import React, { ReactElement } from 'react';
import { Repository, UserData, useSearchContext } from './search-context';

const User = ({ user }: { user: UserData }) => {
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

const Repo = ({ repo }: { repo: Repository }) => (
  <Link
    fontSize="sm"
    lineHeight="4"
    color="#2F80ED"
    href={repo.url}
    width="100%"
    padding="4"
    borderRadius="12"
    boxShadow="base"
  >
    {repo.name}
  </Link>
);

const Repos = ({ repositories }: { repositories: Repository[] }) => {
  if (repositories.length) {
    return (
      <VStack spacing={4} marginTop="8">
        <Text
          fontSize="lg"
          alignSelf="start"
          lineHeight="6"
          fontWeight="500"
          color="rgba(0,0,0,0.87)"
        >
          Top repositories
        </Text>
        {repositories.slice(0, 3).map((repo) => (
          <Repo repo={repo} />
        ))}
      </VStack>
    );
  }
  return null;
};

function SearchResults(): ReactElement {
  const {
    user: { loading, data, repos },
  } = useSearchContext();
  return (
    <Container mt="6" backgroundColor="transparent" padding="6">
      <Skeleton isLoaded={!loading}>
        {data && <User user={data} />}
        <Repos repositories={repos} />
      </Skeleton>
    </Container>
  );
}

export default SearchResults;
