import { useEffect, useCallback } from 'react';

const useBlur = (
  mainElementRef: React.RefObject<HTMLElement>,
  onBlur: () => void,
  controlElementRef?: React.RefObject<HTMLElement>,
) => {
  const handleBlur = useCallback(
    (event: Event) => {
      const target = event.target as HTMLElement;
      const mainElement = mainElementRef.current;
      const controlElement = controlElementRef?.current;

      if (mainElement && !mainElement.contains(target) && (!controlElement || !controlElement.contains(target))) {
        onBlur();
      }
    },
    [mainElementRef, controlElementRef, onBlur]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleBlur);
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        handleBlur(event);
      }
    });

    return () => {
      document.removeEventListener('mousedown', handleBlur);
      document.removeEventListener('keydown', handleBlur);
    };
  }, [handleBlur]);
};

export default useBlur;