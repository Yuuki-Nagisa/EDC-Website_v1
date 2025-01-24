"use client";

import "./Carousel.css";
import { useState, useEffect } from "react";
import Image from "next/image";

// Define slides outside the component to avoid re-creating them on each render
const slides = [
    {
        image: "1.jpg",
        alt: "Slide 1",
    },
    {
        image: "2.jpg",
        alt: "Slide 2",
    },
    {
        image: "3.jpg",
        alt: "Slide 3",
    },
    {
        image: "4.jpg",
        alt: "Slide 4",
    },
];
export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentSlide(
            (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
        );
    };

    // Auto-play the slides
    useEffect(() => {
        const intervalId = setInterval(() => {
            handleNext();
        }, 3000); // Adjust the interval as needed

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, [currentSlide]);

    return (
        <section className="carousel">
            <div id="carousel">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`item ${
                            index === currentSlide ? "active" : ""
                        }`}
                    >
                        {slide.image ? (
                            <Image
                                src={`/assets/carousel-img/${slide.image}`}
                                alt={slide.alt}
                                width="100"
                                height="50"
                                quality={100}
                                priority= {true}
                            />
                        ) : (
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: slide.content,
                                }}
                            />
                        )}
                    </div>
                ))}
            </div>

            <button className="carousel-prev" onClick={handlePrev}>
                &#10094;
            </button>
            <button className="carousel-next" onClick={handleNext}>
                &#10095;
            </button>
        </section>
    );
}
