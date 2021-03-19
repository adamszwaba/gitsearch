import * as React from 'react';
import {
  Box,
  Button,
  ChakraProvider,
  Container,
  extendTheme,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';

import { SearchIcon } from '@chakra-ui/icons';

const theme = extendTheme({
  fonts: {
    body: `Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    heading: `Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: `Roboto, SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
  },
  styles: {
    Input: {
      variants: {
        filled: {
          backgroundColor: '#F0F3F4',
        },
      },
    },
    global: {
      body: {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        fontSize: '16px',
      },
      html: {
        backgroundColor: '#FBFCFD',
      },
    },
  },
  colors: {
    main: '#452CDC',
  },
  shadows: {
    base: '0px 2px 7px rgba(0, 0, 0, 0.1)',
  },
});

export const MyApp: React.FC = () => {
  console.log(theme);
  return (
    <ChakraProvider theme={theme}>
      <Box shadow="base">
        <Container padding="6" height="84px">
          <FormControl display="flex" flexDirection="row">
            <InputGroup>
              <InputLeftElement pointerEvents="none" height="9" width="8">
                <SearchIcon color="#4F4F4F" w="15.71px" h="15.71px" />
              </InputLeftElement>
              <Input
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
              isLoading={false}
              loadingText="Searching"
            >
              Search
            </Button>
          </FormControl>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default MyApp;
