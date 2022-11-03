import Link from 'next/link'
import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa'
import { FooterContainer } from './style'

function Footer() {
  return (
    <FooterContainer>
        <div className='footer__top'>
            <div className='footer__top__col1'>
                <p>Ainda não é aluno? <br/> Inscreva-se</p>
                <a className='header__btn__wpp' href="https://google.com.br">
                    <FaWhatsapp />
                    Pelo Whats
                </a>
                <Link href="/">
                    Pelo site
                </Link>
            </div>
            <div className='footer__top__col2'>
                <p>A Proz</p>
                <div>
                    <Link href="/">
                        Quem Somos
                    </Link>
                    <Link href="/">
                        Blog
                    </Link>

                    <Link href="/">
                        Canal de Ética
                    </Link>
                    <Link href="/">
                        Trabalhe Conosco
                    </Link>
                </div>
            </div>
            <div className='footer__top__col3'>
                <p>Cursos Técnicos</p>
                <div>
                    <Link href="/">Área da Saúde</Link>
                    <Link href="/">Área de Tecnologia</Link>
                    <Link href="/">Área de Gestão</Link>
                    <Link href="/">Cursos de Aprimoramento</Link>
                    <Link href="/">Cursos de Capacitação</Link>
                </div>
            </div>
            <div className='footer__top__col4'>
                <Link href="/">
                    <a>Unidades <br/>São Paulo</a>
                </Link>
                <Link href="/">
                    <a>Unidades <br/>Minas Gerais</a>
                </Link>
                <Link href="/">
                    <a>Unidades <br/>Paraná</a>
                </Link>
                <Link href="/">
                    <a>Encontre <br/>a Unidade<br/> mais próxima</a>
                </Link>
            </div>
            <div className='footer__top__col5'>
                <p>Siga nossas redes</p>
                <a href="https://google.com.br">
                    <FaFacebookSquare />
                </a>
                <a href="https://google.com.br">
                    <FaInstagramSquare />
                </a>
                <a href="https://google.com.br">
                    <FaWhatsappSquare />
                </a>
            </div>
        </div>
        <div className='footer__bottom'>
            <p>© 2022 CEBRAC Cuiabá - Desenvolvido por <a href="https://digitalcloudbrasil.com.br/">Digital Cloud Brasil</a>.</p>
        </div>
    </FooterContainer>
  )
}

export default Footer