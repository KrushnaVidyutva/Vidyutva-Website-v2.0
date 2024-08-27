import React, { useEffect, useState } from 'react';
import "./carousel.css";

const Carousel: React.FC = () => {
    const [slideIndex, setSlideIndex] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex(prevIndex => (prevIndex % 2) + 1);
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        showSlides(slideIndex);
    }, [slideIndex]);

    const showSlides = (n: number) => {
        const slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
        const dots = document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>;
        if (slides.length === 0) return;
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[n - 1].style.display = "block";
        dots[n - 1].className += " active";
    };

    const currentSlide = (n: number) => {
        setSlideIndex(n);
    };

    return (
        <div>
            <div className="slideshow-container">
                <div className="mySlides fade h-[100%] overflow-hidden">
                    <img src="/images/kazam/Banner_Image/image1.png" className='w-[100%]' alt="Slide 1" />
                </div>
                <div className="mySlides fade h-[100%] overflow-hidden">
                    <img src="/images/kazam/Banner_Image/image2.png" className='w-[100%]' alt="Slide 2" />
                </div>
                <div className='text-center absolute bottom-[.5rem] left-[50%] -translate-x-[50%]'>
                    <span className="dot" onClick={() => currentSlide(1)}></span>
                    <span className="dot" onClick={() => currentSlide(2)}></span>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
