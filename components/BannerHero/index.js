import Image from 'next/image';
import React from 'react';
import BannerHeroImg from '../../assets/banner-hero.jpg';
import { BannerHeroContainer } from './style';

function BannerHero() {
  return (
    <BannerHeroContainer>
      <div className='banner__Hero'>
        <Image src={BannerHeroImg} alt="banner" />
      </div>
    </BannerHeroContainer>
  )
}

export default BannerHero