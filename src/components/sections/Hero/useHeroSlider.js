import { useCallback, useEffect, useState } from "react";

const AUTOPLAY_DELAY = 6000;

function useHeroSlider(totalSlides) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback(
    (index) => {
      if (totalSlides <= 0) return;
      setActiveIndex((index + totalSlides) % totalSlides);
    },
    [totalSlides]
  );

  const goNext = useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  useEffect(() => {
    if (totalSlides <= 1) return undefined;

    const timer = window.setInterval(goNext, AUTOPLAY_DELAY);
    return () => window.clearInterval(timer);
  }, [goNext, totalSlides]);

  return {
    activeIndex,
    goTo,
    goNext,
    goPrev,
  };
}

export default useHeroSlider;
