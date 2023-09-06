import ToggleTheme from '@/components/ToggleTheme';
import { cookies } from 'next/headers';

export default function Home() {
  const cookiesStore = cookies();
  const theme = cookiesStore.get('theme');

  return (
    <main className="transition-colors duration-500 flex min-h-screen flex-col items-center justify-between p-24 bg-zinc-100 dark:bg-zinc-900">
      <ToggleTheme ssrTheme={theme?.value} />
    </main>
  );
}
