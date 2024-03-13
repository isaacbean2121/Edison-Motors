import {useState} from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';



export const Slide750 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);


    const slideImages = [
    'https://nymaclqvkznzomxrgzwo.supabase.co/storage/v1/object/public/part_asset/750%20Info%202-2.jpg',
    'https://nymaclqvkznzomxrgzwo.supabase.co/storage/v1/object/public/part_asset/750%20Info%202-3.jpg',
    'https://nymaclqvkznzomxrgzwo.supabase.co/storage/v1/object/public/part_asset/750%20Info%202-5.jpg',
    'https://nymaclqvkznzomxrgzwo.supabase.co/storage/v1/object/public/part_asset/750%20Info%204.jpg',
    'https://nymaclqvkznzomxrgzwo.supabase.co/storage/v1/object/public/part_asset/750%20Info%202-4.jpg',
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

            <BsChevronCompactLeft onClick={prevSlide} size={50} className='absolute top-[50%] left-5 text-black hover:scale-150 duration-150'/>
            <BsChevronCompactRight onClick={nextSlide} size={50} className='absolute top-[50%] right-5 text-black hover:scale-150 duration-150'/>

            <div className="absolute bottom-24 text-4xl text-white left-1/2 transform -translate-x-1/2">
              <h2>
                Multiple Applications & Configurations
              </h2>
            </div>
            <div className='absolute bottom-4 w-full flex justify-center'>
            {slideImages.map((_, slideIndex) => (
                <RxDotFilled key={slideIndex} onClick={() => goToSlide(slideIndex)} className={`scale-150 mx-1 ${currentIndex === slideIndex ? 'text-blue-600' : 'text-white'}`} />
            ))}
            </div>
        </div>
        </section>
    )
}