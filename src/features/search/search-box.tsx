import React, { ReactElement } from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  FormControl,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
} from '@chakra-ui/react';
import useGitSearch from './use-git-search';

export default function SearchBox(): ReactElement {
  const { register, loading, onSubmit } = useGitSearch();
  return (
    <Box shadow="base">
      <Container as="form" padding="6" height="84px" onSubmit={onSubmit}>
        <FormControl display="flex" flexDirection="row">
          <InputGroup>
            <InputLeftElement pointerEvents="none" height="9" width="8">
              <SearchIcon color="#4F4F4F" w="15.71px" h="15.71px" />
            </InputLeftElement>
            <Input
              name="name"
              ref={register}
              height="9"
              borderRadius="lg"
              fontSize="sm"
              lineHeight="8"
              paddingLeft="8"
              variant="filled"
              type="text"
              placeholder="Search for users"
            />
          </InputGroup>
          <Button
            fontStyle="normal"
            minWidth="16"
            height="9"
            padding="3"
            marginLeft="4"
            fontWeight="bold"
            fontSize="12px"
            lineHeight="12px"
            letterSpacing="0.4px"
            borderRadius="lg"
            backgroundColor="main"
            colorScheme="main"
            type="submit"
            isLoading={loading}
            loadingText="Searching"
          >
            Search
          </Button>
        </FormControl>
      </Container>
    </Box>
  );
}
