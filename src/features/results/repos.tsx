import * as React from 'react';
import { VStack, Text } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { Repository } from '../search/search-context';
import Repo from './repo';

type Props = {
  repositories: Repository[];
};

const Repos: React.FC<Props> = ({ repositories }) => {
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
          <Repo key={nanoid()} repo={repo} />
        ))}
      </VStack>
    );
  }
  return null;
};

export default Repos;
