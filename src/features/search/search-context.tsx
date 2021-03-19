import * as React from 'react';

export type GitUser = {
  loading: boolean;
  data?: {
    name: string;
  };
};

export type ISearchContext = {
  user: GitUser;
  changeState: (user: GitUser) => void;
};

const iUserState: GitUser = { loading: false };

const initialState: ISearchContext = {
  user: iUserState,
  changeState: () => {},
};

const SearchContext = React.createContext<ISearchContext>(initialState);

export const useSearchContext = () => React.useContext(SearchContext);

export const SearchProvider: React.FC = ({ children }) => {
  const [state, setState] = React.useState(iUserState);
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context

  return (
    <SearchContext.Provider value={{ user: state, changeState: setState }}>
      {children}
    </SearchContext.Provider>
  );
};
