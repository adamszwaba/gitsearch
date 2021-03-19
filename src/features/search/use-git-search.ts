import * as React from 'react';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { useForm } from 'react-hook-form';
import useFetch from 'use-http';

const validationSchema = Joi.object({ name: Joi.string().min(1) });

const useGitSearch = () => {
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
      const userData = await get(`${userName}`);
      if (response.ok) {
        const userRepos = await get(`${userName}/repos`).then((res) =>
          res.sort(
            (
              repoA: { stargazers_count: number },
              repoB: { stargazers_count: number }
            ) => repoB.stargazers_count - repoA.stargazers_count
          )
        );
      }
    }
    if (userName !== '') fetchUser();
  }, [userName, get, response]);
  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    loading: formState.isSubmitting || loading,
    error,
  };
};

export default useGitSearch;
