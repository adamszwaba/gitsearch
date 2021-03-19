import * as React from 'react';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { useForm } from 'react-hook-form';
import useFetch from 'use-http';
import { Repository, UserData, useSearchContext } from './search-context';

const validationSchema = Joi.object({ name: Joi.string().min(1) });

const useGitSearch = () => {
  const { setLoading, setRepos, setUserData } = useSearchContext();
  const [userName, setUsername] = React.useState<string>('');
  const { response, get, loading, error } = useFetch(
    'https://api.github.com/users'
  );
  const { handleSubmit, register, formState } = useForm({
    mode: 'onSubmit',
    resolver: joiResolver(validationSchema),
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
        if (response.ok) {
          setUserData(userData);
          repos = await get(`${userName}/repos`);
          repos.sort(
            (repoA, repoB) => repoB.stargazers_count - repoA.stargazers_count
          );
          setRepos(repos);
        }
      } catch (err) {
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
