import Image from 'next/image';
import React from 'react';
import BannerHeroOne from '../../assets/banner-01.jpg';
import BannerHeroTwo from '../../assets/banner-02.jpeg';
import BannerHeroThree from '../../assets/banner-03.jpg';
import { BannerHeroContainer } from './style';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function BannerHero() {
  return (
    <BannerHeroContainer>
      <div className='banner__Hero'>
        {/* <Image src={BannerHeroImg} alt="banner" /> */}
        <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
              <SwiperSlide>
                <div className='banner__hero__img'>
                  <Image src={BannerHeroOne} alt="Banner Image" layout='fill'/>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='banner__hero__img'>
                  <Image src={BannerHeroTwo} alt="Banner Image" layout='fill'/>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='banner__hero__img'>
                  <Image src={BannerHeroThree} alt="Banner Image" layout='fill'/>
                </div>
              </SwiperSlide>
            </Swiper>
      </div>
    </BannerHeroContainer>
  )
}

export default BannerHero