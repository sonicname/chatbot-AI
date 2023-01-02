import { useEffect, useRef } from 'react';

const useScrollToRef = (dependency: any) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    elementRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [dependency]);

  return {
    elementRef,
  };
};

export default useScrollToRef;
