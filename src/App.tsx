import * as React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import SearchBox from './features/search/search-box';
import { SearchProvider } from './features/search/search-context';

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
  return (
    <ChakraProvider theme={theme}>
      <SearchProvider>
        <SearchBox />
      </SearchProvider>
    </ChakraProvider>
  );
};

export default MyApp;
