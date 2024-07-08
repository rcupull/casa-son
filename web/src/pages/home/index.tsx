import { useAuth } from 'features/api-slices/useAuth';
import { useEffect } from 'react';

export const Home = () => {
  const { authSignIn } = useAuth();

  useEffect(() => {
    authSignIn.fetch({ email: 'caca', password: 'mas caca' });
  }, []);

  return <>{authSignIn.data.message}</>;
};
