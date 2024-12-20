import { useEffect } from 'react';
import { useRouter } from 'next/router';

const App = () => {
  const router = useRouter();
  useEffect(() => {
    localStorage.setItem("authenticated", "false");
    router.push('/login');
  }, []);

  return null;
};

export default App;
