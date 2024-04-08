import React from 'react';
import IntroData from '../../data/intro/intro.json';
import Intro from '../../components/Intro/Intro.jsx';
import SwiperSlider, {SwiperSlide} from "../../components/swiper"

const IntroSlider =  () => {
    const swiperOption = {
        loop: true,
        speed: 1000,
        spaceBetween: 0,
        slidesPerView: 1,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        navigation: true,
    }
    return (
        <div className="intro-slider-wrap section">
            <SwiperSlider effect="fade" className="intro-slider" options={swiperOption}>
                {IntroData &&
                    IntroData.map((single, key) => {
                        return(
                            <SwiperSlide key={key}>
                                <Intro data={single} key={key} />
                            </SwiperSlide>
                        ); 
                    })}
            </SwiperSlider>
        </div>
    )
}

export default IntroSlider
