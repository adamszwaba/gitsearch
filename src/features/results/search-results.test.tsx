import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../../test-utils';
import * as context from '../search/search-context';
import SearchResults from './search-results';

describe('search results', () => {
  render(<SearchResults />);
  const mainScreen = screen.getByRole('main');
  it('show nothing when there is no user data', () => {
    jest.spyOn(context, 'useSearchContext').mockImplementation(() => ({
      user: { loading: false, repos: [] },
      setLoading: () => {},
      setUserData: () => {},
      setRepos: () => {},
    }));
    expect(mainScreen.children.length).toEqual(0);
  });
  it('shows only skeleton when stuff is loading', () => {
    jest.spyOn(context, 'useSearchContext').mockImplementation(() => ({
      user: { loading: true, repos: [] },
      setLoading: () => {},
      setUserData: () => {},
      setRepos: () => {},
    }));
    expect(mainScreen).toBeEmptyDOMElement();
  });
});
