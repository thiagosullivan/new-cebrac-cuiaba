import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { BiSearch } from 'react-icons/bi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { DropDownHeader, HeaderBottom, HeaderContainer, HeaderTop, SearchHeader } from './style';
import LogoHeader from '../../assets/cebrac-logo.webp';

function Header() {
  return (
    <HeaderContainer>
        <HeaderTop>
            <div className='header__content'>
                <p>Ainda não é aluno?</p>
                <a className='header__btn__wpp' href="https://google.com.br">
                    <FaWhatsapp />
                    Inscreva-se pelo Whats
                </a>
                <Link href="/">
                    Increva-se pelo site
                </Link>
            </div>
        </HeaderTop>
        <HeaderBottom>
            <div className='header__content'>
                <Link href="/">
                    <Image src={LogoHeader} alt="Logo Header" width={151} height={42} />
                </Link>
                <nav>
                    <ul>
                        <li><Link href="/">Quem Somos</Link></li>
                        <li>
                            Cursos
                            <RiArrowDropDownLine />
                            <nav>
                                <ul>
                                    <li><Link href="/">Cursos Técnicos</Link></li>
                                    <li><Link href="/">Cursos de Capacitação</Link></li>
                                    <li><Link href="/">Cursos de Aprimoramento</Link></li>
                                </ul>
                            </nav>
                        </li>
                        <li>
                            Unidades
                            <RiArrowDropDownLine />
                            <nav>
                                <ul>
                                    <li><Link href="/">Cuiabá</Link></li>
                                    <li><Link href="/">Londrina</Link></li>
                                    <li><Link href="/">Montes Claros</Link></li>
                                </ul>
                            </nav>
                        </li>
                        <li><Link href="/">Blog</Link></li>
                        <li><Link href="/">Proz Empresas</Link></li>
                        <li><Link href="/">Proz Saúde</Link></li>
                    </ul>
                    <SearchHeader>
                        <BiSearch />
                    </SearchHeader>
                </nav>
            </div>
        </HeaderBottom>
    </HeaderContainer>
  )
}

export default Header