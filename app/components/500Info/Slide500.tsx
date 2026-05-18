import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { CAROUSEL_IMAGES_500 } from "@/lib/truck-carousel-images";

export const Slide500 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideImages = CAROUSEL_IMAGES_500;

  const prevSlide = () => {
    const newIndex =
      currentIndex === 0 ? slideImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex =
      currentIndex === slideImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section className="relative h-screen w-full snap-start snap-always overflow-hidden">
      <div
        style={{ backgroundImage: `url(${slideImages[currentIndex]})` }}
        className="h-full w-full bg-cover bg-center bg-no-repeat"
      />

      <BsChevronCompactLeft
        onClick={prevSlide}
        size={50}
        className="absolute left-5 top-[50%] text-black duration-150 hover:scale-150"
      />
      <BsChevronCompactRight
        onClick={nextSlide}
        size={50}
        className="absolute right-5 top-[50%] text-black duration-150 hover:scale-150"
      />

      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 transform text-4xl">
        <h2>Multiple Applications & Configurations</h2>
      </div>
      <div className="absolute bottom-10 flex w-full justify-center">
        {slideImages.map((_, slideIndex) => (
          <RxDotFilled
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`mx-1 scale-150 ${
              currentIndex === slideIndex ? "text-blue-600" : "text-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
