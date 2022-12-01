import Image from 'next/image';
import React from 'react';
import AboutUsImg from '../../assets/about-us.jpg';
import { AboutUsContainer } from './style';

function AboutUs() {
  return (
    <AboutUsContainer>
        <h1>Quem Somos</h1>
        <div className='about__img'>
          <Image src={AboutUsImg} alt="Cebrac" />
        </div>
        <div className='about__txt'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed faucibus turpis in eu mi bibendum neque egestas. Et odio pellentesque diam volutpat commodo. In tellus integer feugiat scelerisque varius morbi. Eget sit amet tellus cras adipiscing enim eu turpis egestas. Mattis aliquam faucibus purus in. Justo donec enim diam vulputate ut pharetra sit amet aliquam. Vel pretium lectus quam id leo in vitae turpis massa. Enim praesent elementum facilisis leo vel fringilla. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Felis eget nunc lobortis mattis aliquam faucibus. Interdum varius sit amet mattis. Dapibus ultrices in iaculis nunc sed augue lacus. Venenatis lectus magna fringilla urna porttitor rhoncus dolor. Malesuada proin libero nunc consequat interdum varius. Vestibulum lectus mauris ultrices eros in cursus turpis massa. Risus commodo viverra maecenas accumsan lacus vel.</p>

          <p>Cras ornare arcu dui vivamus arcu felis. Pharetra massa massa ultricies mi quis. Eget arcu dictum varius duis at consectetur. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Enim sed faucibus turpis in eu. Tortor consequat id porta nibh venenatis cras. Amet luctus venenatis lectus magna. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Ut placerat orci nulla pellentesque. Non pulvinar neque laoreet suspendisse interdum consectetur. Quis vel eros donec ac. Dignissim sodales ut eu sem.</p>

          <p>Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Venenatis tellus in metus vulputate eu scelerisque felis. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Lacus laoreet non curabitur gravida arcu ac. Augue lacus viverra vitae congue eu consequat ac felis donec. Morbi leo urna molestie at elementum eu facilisis sed odio. Fusce ut placerat orci nulla. Nec dui nunc mattis enim ut tellus elementum. Purus in mollis nunc sed id semper risus in hendrerit. Lectus sit amet est placerat in egestas erat. Mi quis hendrerit dolor magna eget est lorem ipsum dolor.</p>
        </div>
    </AboutUsContainer>

  )
}

export default AboutUs