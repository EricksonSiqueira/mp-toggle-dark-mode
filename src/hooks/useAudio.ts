import { useEffect, useState } from 'react';

export default function useAudio() {
  const [clickAudio, setClickAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    setClickAudio(new Audio('/audios/click.wav'));
  }, []);

  return { clickAudio };
}
