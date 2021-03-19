import { Container } from '@chakra-ui/react';
import { Skeleton } from '@chakra-ui/skeleton';
import React, { ReactElement } from 'react';
import { useSearchContext } from '../search/search-context';
import Repos from './repos';
import User from './user';

function SearchResults(): ReactElement {
  const {
    user: { loading, data, repos },
  } = useSearchContext();
  return (
    <Container>
      <Skeleton
        as="main"
        data-testid="skeleton"
        isLoaded={!loading}
        mt="6"
        backgroundColor="transparent"
        padding="6"
      >
        {data && <User user={data} />}
        <Repos repositories={repos} />
      </Skeleton>
    </Container>
  );
}

export default SearchResults;
