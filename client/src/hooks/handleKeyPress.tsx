import { useEffect } from 'react';

const handleKeyPress = (keycode: string, func: () => void) => {
  useEffect(() => {
    const handleEnterKey = (e: KeyboardEvent) => {
      if (e.code != keycode) return;
      func();
    };
    window.addEventListener('keypress', handleEnterKey);

    return () => window.removeEventListener('keypress', handleEnterKey);
  }, []);
};

export default handleKeyPress;
