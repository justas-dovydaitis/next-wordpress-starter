import { FaMoon, FaSun } from 'react-icons/fa';

import { useTheme } from 'next-themes';

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button className="cursor-pointer" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'dark' ? <FaSun size="1em" /> : <FaMoon size="1em" />}
    </button>
  );
};

export default ThemeSwitch;
