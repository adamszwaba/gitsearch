import * as React from 'react';

export type UserData = { name: string; bio: string };

export type Repository = {
  name: string;
  url: string;
  stargazers_count: number;
};

export type GitUser = {
  loading: boolean;
  data?: UserData;
  repos: Array<Repository>;
};

export type ISearchContext = {
  user: GitUser;
  setLoading: (isLoading: boolean) => void;
  setUserData: (data?: UserData) => void;
  setRepos: (repos: Repository[]) => void;
};

const iUserState: GitUser = { repos: [], loading: false };

const initialState: ISearchContext = {
  user: iUserState,
  setLoading: () => {},
  setUserData: () => {},
  setRepos: () => {},
};

const SearchContext = React.createContext<ISearchContext>(initialState);

export const useSearchContext = () => React.useContext(SearchContext);

export const SearchProvider: React.FC = ({ children }) => {
  const [userData, setUserData] = React.useState<UserData>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [repos, setRepos] = React.useState<Repository[]>([]);

  return (
    <SearchContext.Provider
      value={{
        user: { loading, data: userData, repos },
        setLoading,
        setUserData,
        setRepos,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
