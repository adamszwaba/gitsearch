import { Link } from '@chakra-ui/react';
import React from 'react';
import { Repository } from '../search/search-context';

type Props = { repo: Repository };

const Repo: React.FC<Props> = ({ repo }) => (
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

export default Repo;
