import React, { useEffect, useState } from 'react'
import "./ImageSlider.css"

const image1 = "https://dubaiexch247.com/images/slider/slider1.jpg"
const image2 = "https://dubaiexch247.com/images/slider/slider2.jpg"
const image3 = "https://dubaiexch247.com/images/slider/slider3.jpg"
const image4 = "https://dubaiexch247.com/images/slider/slider4.jpg"
const image5 = "https://dubaiexch247.com/images/slider/slider5.jpg"
const image6 = "https://dubaiexch247.com/images/slider/slider6.jpg"






export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const sliderImage = [image1, image2, image3, image4, image5, image6]

const len = sliderImage.length - 1;

const ImageSlider = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        // console.log("inside image slider useev")
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 2000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className="slider_container">
            <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
            {/* <Arrows
                prevSlide={() =>
                    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
                }
                nextSlide={() =>
                    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
                }
            /> */}
            <Dots
                activeIndex={activeIndex}
                sliderImage={sliderImage}
                onclick={(activeIndex) => setActiveIndex(activeIndex)}
            />
        </div>
    )
}

// const Arrows = ({ prevSlide, nextSlide }) => {
//     return (
//         <div className="arrows">
//             <span className="prev" onClick={prevSlide}>
//                 &#10094;
//             </span>
//             <span className="next" onClick={nextSlide}>
//                 &#10095;
//             </span>
//         </div>
//     )
// }


const Dots = ({ activeIndex, onclick, sliderImage }) => {
    return (
        <div className="all-dots d-flex-center">
            {sliderImage.map((slide, index) => (
                <span
                    key={index}
                    className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
                    onClick={() => onclick(index)}
                ></span>
            ))}
        </div>
    )
}






const SliderContent = ({ activeIndex, sliderImage }) => {

    return (
        <section className='homeSlider'>
            {sliderImage.map((slide, index) => (
                <div
                    key={index}
                    className={index === activeIndex ? "slides active" : "inactive"}
                >
                    <img className="slide-image" src={slide} alt="" />

                    {/* <h2 className="slide-title">{slide.title}</h2>
                    <h3 className="slide-text">{slide.description}</h3> */}
                </div>
            ))}

            {/* <div className='slide-title'>
                <h2> Your search for the best rental in <span > {cityUrl !== undefined && capitalizeFirstLetter(cityUrl)} </span> ends here!</h2>
                <button onClick={handleSlide} className='getStartedBtn br10 fw400'>Get Started!</button>
            </div> */}
        </section>
    )
}

export default ImageSlider