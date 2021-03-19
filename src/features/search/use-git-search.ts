import * as React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import useFetch from 'use-http';
import { Repository, UserData, useSearchContext } from './search-context';

const validationSchema = yup.object({ name: yup.string().min(1) });

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useGitSearch = () => {
  const { setLoading, setRepos, setUserData } = useSearchContext();
  const [userName, setUsername] = React.useState<string>('');
  const { response, get, loading, error } = useFetch(
    'https://api.github.com/users'
  );
  const { handleSubmit, register, formState } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data: { name: string }) => {
    setUsername(data.name);
  };

  React.useEffect(() => {
    async function fetchUser() {
      setRepos([]);
      setUserData();
      setLoading(true);
      try {
        const userData: UserData = await get(`${userName}`);
        let repos: Repository[] = [];
        const { avatar_url, name, bio } = userData;
        if (response.ok) {
          setUserData({ avatar_url, name, bio });
          repos = await get(`${userName}/repos`);
          repos.sort(
            (repoA, repoB) => repoB.stargazers_count - repoA.stargazers_count
          );
          setRepos(repos);
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    if (userName !== '') fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName, get, response]);
  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    loading: formState.isSubmitting || loading,
    error,
  };
};

export default useGitSearch;
