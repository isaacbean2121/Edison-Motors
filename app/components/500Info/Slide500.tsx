import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

export const Slide500 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Only works with external links. No idea why. The assests work everywhere else so its not a problem with the routs. 
    const slideImages = [
    'https://nymaclqvkznzomxrgzwo.supabase.co/storage/v1/object/public/part_asset/500%20Info%202-1.jpg',
    'https://nymaclqvkznzomxrgzwo.supabase.co/storage/v1/object/public/part_asset/500%20Info%202-2.jpg',
    'https://nymaclqvkznzomxrgzwo.supabase.co/storage/v1/object/public/part_asset/500%20Info%202-3.jpg',
    '/assets/500 Ihttps://nymaclqvkznzomxrgzwo.supabase.co/storage/v1/object/public/part_asset/500%20Info%202-4.jpg',
    'https://nymaclqvkznzomxrgzwo.supabase.co/storage/v1/object/public/part_asset/500%20Info%202-5.jpg',
    ];

    const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slideImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
    const isLastSlide = currentIndex === slideImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
    };

    return (
        <section className="h-screen w-full overflow-hidden relative">
          <div className='w-full h-full'>
            {/* Here we use the image from the slideImages array based on currentIndex */}
            <div style={{ backgroundImage: `url(${slideImages[currentIndex]})` }}
                 className='w-full h-full bg-no-repeat bg-center bg-cover'></div>

            <BsChevronCompactLeft onClick={prevSlide} size={30} className='absolute top-[50%] left-5 text-white'/>
            <BsChevronCompactRight onClick={nextSlide} size={30} className='absolute top-[50%] right-5 text-white'/>

            <div className='absolute bottom-4 w-full flex justify-center'>
              {slideImages.map((_, slideIndex) => (
                <RxDotFilled key={slideIndex} onClick={() => goToSlide(slideIndex)} className={`mx-1 ${currentIndex === slideIndex ? 'text-blue-600' : 'text-white'}`} />
              ))}
            </div>
          </div>
        </section>
    )
}