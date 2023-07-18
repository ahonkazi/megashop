import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './swiper.scss'
import bannarAdd from '../../assets/images/bannar-ads-1.jpeg'
import bannarAdd2 from '../../assets/images/bannar-ads-2.jpg'
const BannarAds = () => {
    return (
        <div className="bannar-ads relative z-[10]">

            <Swiper
            >
                <SwiperSlide>
                    <div className="slide-box h-[250px]">
                        <img className='h-full object-cover w-full' src={bannarAdd} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-box h-[250px]">
                        <img className='h-full object-cover w-full' src={bannarAdd2} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-box h-[250px]">
                        <img className='h-full object-cover w-full' src={bannarAdd} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-box h-[250px]">
                        <img className='h-full object-cover w-full' src={bannarAdd2} alt="" />
                    </div>
                </SwiperSlide>


            </Swiper>

        </div >
    )
}

export default BannarAds