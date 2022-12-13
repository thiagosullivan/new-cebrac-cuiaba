import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import useScrollBlock from '../../hook/pageScroll';
import { FaWhatsapp } from "react-icons/fa";
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { RiArrowDropDownLine } from 'react-icons/ri';
import LogoHeader from '../../assets/cebrac-logo-2.png';
import LogoMt from '../../assets/mt-bandeira.webp';
import { DropDownHeader, HeaderBottom, HeaderContainer, HeaderMobileBottom, HeaderTop, SearchHeader } from './style';

function Header() {

    const [showMenuMobile, setShowMenuMobile] = useState(false);
    const [blockScroll, allowScroll] = useScrollBlock();

    if(showMenuMobile == true){
        blockScroll();
    } else {
        allowScroll();
    }

    // console.log(showMenuMobile)

  return (
    <HeaderContainer>
        <HeaderTop>
            <div className='header__content'>
                <div className='header__flag'>
                    <Image src={LogoMt} alt="Mato Grosso"/>
                    <p>Cuiabá - MT</p>
                </div>
                <div>
                    <p>Ainda não é aluno?</p>
                    <a
                        className='header__btn__wpp'
                        href="http://api.whatsapp.com/send?1=pt_BR&phone=5565992049504"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <FaWhatsapp />
                        Inscreva-se pelo Whats
                    </a>
                    <Link href="/#form">
                        Increva-se pelo site
                    </Link>
                </div>
            </div>
        </HeaderTop>
        <HeaderBottom>
            <div className='header__content'>
                <Link href="/">
                    <Image src={LogoHeader} alt="Logo Header" width={180} height={90} />
                </Link>
                <nav>
                    <ul>
                        <li><Link href="/quem-somos">Quem Somos</Link></li>
                        <li>
                            Cursos
                            <RiArrowDropDownLine />
                            <nav>
                                <ul>
                                <li>
                                        <Link href="/#saude">Trilha de Saúde</Link>                                    
                                    </li>
                                    <li>
                                        <Link href="/#empresas">Trilha de Empresas</Link>                                    
                                    </li>
                                    <li>
                                        <Link href="/#idiomas">Trilha de Idiomas</Link>                                    
                                    </li>
                                    <li>
                                        <Link href="/#tecnologias">Trilha de Tecnologias</Link>                                    
                                    </li>
                                    <li>
                                        <Link href="/#beleza">Trilha da Beleza</Link>
                                    </li>
                                </ul>
                            </nav>
                        </li>
                        <li>
                            Unidades
                            <RiArrowDropDownLine />
                            <nav>
                                <ul>
                                    <li><Link href="/">Cuiabá</Link></li>
                                    <li><a href="https://www.londrinacebrac.com.br/">Londrina</a></li>
                                    <li><a href="https://www.cebraconline.com.br/">Montes Claros</a></li>
                                </ul>
                            </nav>
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com/@cebracast"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                CebraCast
                            </a>
                        </li>
                        <li><Link href="/blog">Blog</Link></li>
                    </ul>
                </nav>
            </div>
        </HeaderBottom>
        <HeaderMobileBottom>
            <div className='header__content'>
                <Link href="/">
                    <Image src={LogoHeader} alt="Logo Header" width={180} height={90} />
                </Link>
                <div className='mobileHamb' onClick={() => setShowMenuMobile(true)}>
                    <AiOutlineMenu />
                </div>
                <nav className={`${showMenuMobile ? 'mobileOpen' : 'mobileClosed'}`}>
                    <div onClick={() => setShowMenuMobile(false)} className='mobileClose'>
                        <AiOutlineClose />
                    </div>
                    <ul>
                        <li onClick={() => setShowMenuMobile(false)}><Link href="/quem-somos">Quem Somos</Link></li>
                        <li>
                            Cursos
                            <div>
                                <ul>
                                    <li onClick={() => setShowMenuMobile(false)}>
                                        <Link href="/#saude">Trilha de Saúde</Link>
                                    </li>
                                    <li onClick={() => setShowMenuMobile(false)}>
                                        <Link href="/#empresas">Trilha de Empresas</Link>
                                    </li>
                                    <li onClick={() => setShowMenuMobile(false)}>
                                        <Link href="/#idiomas">Trilha de Idiomas</Link>
                                    </li>
                                    <li onClick={() => setShowMenuMobile(false)}>
                                        <Link href="/#tecnologias">Trilha de Tecnologias</Link>
                                    </li>
                                    <li onClick={() => setShowMenuMobile(false)}>
                                        <Link href="/#beleza">Trilha da Beleza</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            Unidades
                            <div>
                                <ul>
                                    <li onClick={() => setShowMenuMobile(false)}><Link href="/">Cuiabá</Link></li>
                                    <li onClick={() => setShowMenuMobile(false)}><a href="https://www.londrinacebrac.com.br/">Londrina</a></li>
                                    <li onClick={() => setShowMenuMobile(false)}><a href="https://www.cebraconline.com.br/">Montes Claros</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com/@cebracast"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                CebraCast
                            </a>
                        </li>
                        <li onClick={() => setShowMenuMobile(false)}><Link href="/blog">Blog</Link></li>
                        <div className='header__mobile_social'>
                            <a
                                href="http://api.whatsapp.com/send?1=pt_BR&phone=5565992049504"
                                target="_blank"
                                rel="noreferrer noopener"
                                onClick={() => setShowMenuMobile(false)}
                            >
                                Inscreva-se pelo Whats
                            </a>
                            <div onClick={() => setShowMenuMobile(false)}>
                                <Link href="/#form">
                                    Increva-se pelo site
                                </Link>
                            </div>
                        </div>
                    </ul>
                </nav>
            </div>
        </HeaderMobileBottom>
    </HeaderContainer>
  )
}

export default Header