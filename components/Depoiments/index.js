import Image from 'next/image';
import React, {useRef, useState} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import LogoCebrac from '../../assets/cebrac-logo.webp';
import data from './data.json';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { DepoimentCard, DepoimentsContainer } from './style';

function Depoiments({depos}) {
  return (
    <DepoimentsContainer>
        <div className='close__title'>
            <Image src={LogoCebrac} alt="Logo Cebrac"/>
            <h2>Quem conhece, <br/>confia</h2>
        </div>
        <div className='depo_desk'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {depos.map ((depo, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <DepoimentCard>
                                <p>&#8243;{depo.depotxt}&#8243;</p>
                                <div className='depo__bottom'>
                                    <h4>{depo.deponame}</h4>
                                    <span>{depo.deporole}</span>
                                </div>
                                <div className='depo__img'>
                                    <Image src={depo.depoimg.url} alt={depo.deponame} layout="fill" />
                                </div>
                            </DepoimentCard>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
        <div className='depo_tablet'>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                pagination={{
                    clickable: true
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {depos.map ((depo, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <DepoimentCard>
                                <p>&#8243;{depo.depotxt}&#8243;</p>
                                <div className='depo__bottom'>
                                    <h4>{depo.deponame}</h4>
                                    <span>{depo.deporole}</span>
                                </div>
                                <div className='depo__img'>
                                    <Image src={depo.depoimg.url} alt={depo.deponame} layout="fill" />
                                </div>
                            </DepoimentCard>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
        <div className='depo_mobile'>
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
                {depos.map ((depo, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <DepoimentCard>
                                <p>&#8243;{depo.depotxt}&#8243;</p>
                                <div className='depo__bottom'>
                                    <h4>{depo.deponame}</h4>
                                    <span>{depo.deporole}</span>
                                </div>
                                <div className='depo__img'>
                                    <Image src={depo.depoimg.url} alt={depo.deponame} layout="fill" />
                                </div>
                            </DepoimentCard>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>

        
    </DepoimentsContainer>
  )
}

export default Depoiments