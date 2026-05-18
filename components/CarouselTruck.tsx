import { useState, useEffect, useCallback } from "react";
import { useSwipeable } from "react-swipeable";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

interface CarouselTruckProps {
  img?: string;
  slides?: string[];
}

export default function CarouselTruck({ img, slides: slidesProp }: CarouselTruckProps) {
  const [slides, setSlides] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (slidesProp && slidesProp.length > 0) {
      setSlides(slidesProp);
      setCurrentIndex(0);
    } else if (img) {
      setSlides([img]);
      setCurrentIndex(0);
    }
  }, [img, slidesProp]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((i) => (i === 0 ? Math.max(slides.length - 1, 0) : i - 1));
  }, [slides.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((i) =>
      slides.length === 0 || i === slides.length - 1 ? 0 : i + 1
    );
  }, [slides.length]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
  });

  const currentSlide = slides[currentIndex];

  return (
    <div className="group relative m-auto h-screen w-full max-w-[1400px] pt-16">
      {!currentSlide ? (
        <div className="h-full w-full bg-gray-800" />
      ) : (
        <>
          <div
            {...swipeHandlers}
            style={{ backgroundImage: `url(${currentSlide})` }}
            className="h-full w-full bg-cover bg-center bg-gray-800 duration-500"
          />
          {slides.length > 1 && (
            <>
              <div className="absolute left-5 top-[50%] -translate-y-1/2 cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
              </div>
              <div className="absolute right-5 top-[50%] -translate-y-1/2 cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
              </div>
              <div className="absolute top-4 flex w-full justify-center">
                {slides.map((_, slideIndex) => (
                  <div
                    key={slideIndex}
                    onClick={() => setCurrentIndex(slideIndex)}
                    className={`cursor-pointer text-2xl ${
                      currentIndex === slideIndex
                        ? "text-blue-500"
                        : "text-white/60"
                    }`}
                  >
                    <RxDotFilled />
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

