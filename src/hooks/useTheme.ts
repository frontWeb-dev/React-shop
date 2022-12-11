import { useCallback, useState } from 'react';

function useTheme() {
  const [theme, setTheme] = useState('dark');

  const onChangeTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  return {
    theme,
    onChangeTheme,
  };
}

export default useTheme;
