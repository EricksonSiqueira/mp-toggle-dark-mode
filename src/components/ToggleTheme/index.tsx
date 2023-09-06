'use client';

import useAudio from '@/hooks/useAudio';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

export interface ToggleThemeProps {
  ssrTheme: string | undefined;
}

export default function ToggleTheme({ ssrTheme }: ToggleThemeProps) {
  const [theme, setTheme] = useState(ssrTheme ?? 'dark');
  const [moonOpacity, setMoonOpacity] = useState(false);
  const [sunOpacity, setSunOpacity] = useState(false);
  const { clickAudio } = useAudio();

  const [_cookies, setCookie] = useCookies(['theme']);

  console.log(theme);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      setTheme('dark');
      setTimeout(() => {
        setSunOpacity(true);
        setMoonOpacity(false);
      }, 1000);
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
      setTimeout(() => {
        setSunOpacity(false);
        setMoonOpacity(true);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTheme = () => {
    clickAudio?.load();
    clickAudio?.play();
    if (theme === 'light') {
      setCookie('theme', 'dark');
      setTheme('dark');
      document.documentElement.classList.add('dark');
      setTimeout(() => {
        setSunOpacity(true);
        setMoonOpacity(false);
      }, 1000);
    } else {
      setTimeout(() => {
        setSunOpacity(false);
        setMoonOpacity(true);
      }, 1000);
      setCookie('theme', 'light');
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <label className="flex cursor-pointer">
      <input
        type="checkbox"
        className="peer sr-only"
        onChange={toggleTheme}
        checked={theme === 'light'}
      />
      <div className="peer z-10 ease-in-out relative bg-zinc-200 dark:bg-zinc-700 w-16 h-8 rounded-full flex items-center shadow-inner after:peer-checked:animate-sun after:peer-checked:rotate-180 peer-checked:after:left-9 after:animate-moon after:left-1 after:transition-all after:duration-500 after:content-[''] after:w-6 after:h-6 after:bg-zinc-100 after:dark:bg-zinc-900 after:flex after:rounded-full after:absolute after:bg-[url('/sun.svg')] after:dark:bg-[url('/moon.svg')] after:bg-[length:16px_16px] after:bg-no-repeat after:bg-center after:rotate-0" />

      <div
        id="moon"
        className={`peer shadow-inner ${
          moonOpacity ? 'opacity-1' : ' opacity-0'
        } rounded-full absolute top-2 left-2 w-48 h-48 md:w-96 md:h-96 md:top-4 md:left-4 peer-checked:-top-96 peer-checked:-left-96 bg-zinc-200 transition-all duration-1000`}
      />
      <div
        id="sun"
        className={`peer shadow-inner ${
          sunOpacity ? 'opacity-1' : ' opacity-0'
        } rounded-full absolute -top-96 -left-96 w-48 h-48 md:w-96 md:h-96 peer-checked:top-2 md:peer-checked:top-4 md:peer-checked:left-4 peer-checked:left-2 bg-yellow-300 transition-all duration-1000`}
      />
    </label>
  );
}
