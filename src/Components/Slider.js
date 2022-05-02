import React, { useContext } from 'react'
import Slider from "react-slick";
import { DataContext } from './DataProvider';


const SliderComp = () => {
    const value = useContext(DataContext);
    const [sliderImages] = value.sliderImages;

    const settings = {
        autoplay:true,
        autoplaySpeed:2000,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <Slider {...settings}>
                {sliderImages.map((pic, index) => <img src={pic.src} alt="" key={index} height="700" />)}
            </Slider>
        </div>
    )
}

export default SliderComp