import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AdmImg from '../../assets/trilha-administração-min.jpeg';
import BlzImg from '../../assets/trilha-beleza-min.jpeg';
import SaudeImg from '../../assets/trilha-saude-min.jpeg';
import TecImg from '../../assets/trilha-tecnologia-min.jpeg';
import LangImg from '../../assets/trilha-idiomas2-min.jpg';
import { CareerCard, CareersContainer } from './style';

function Careers() {
  return (
    <CareersContainer>
        <h2>Trilhas de Desenvolvimento</h2>
        <CareerCard id="saude">
            <div className='career__card__img'>
                <Image src={SaudeImg} alt="Trilha de Saúde" fill="true" />
            </div>
            <div className='career__card__txt'>
                <h3>Trilha de Saúde</h3>
                <p>Os cursos da trilha de saúde são indicados para pessoas que têm aptidão para cuidar de outras pessoas, interessam-se pelo funcionamento do corpo humano e pela promoção da saúde. É uma ótima opção para quem quer mudar de área profissional ou busca um trabalho reconhecido e bem remunerado.</p>
                <Link href="/#form">
                    Inscreva-se
                </Link>
            </div>
        </CareerCard>
        <CareerCard id="empresas">
            <div className='career__card__img'>
                <Image src={AdmImg} alt="Trilha de Empresas" fill />
            </div>
            <div className='career__card__txt'>
                <h3>Trilha de Empresas</h3>
                <p>Excelente opção para quem ainda não definiu sua carreira ou área de atuação. Nesta trilha são trabalhadas as rotinas de uma empresa, focando a execução prática das tarefas que envolvem cada uma das áreas administrativas. Se você busca conhecimento prático, quer conhecer a operação de uma empresa ou pretende empreender, você precisa fazer esta trilha.</p>
                <Link href="/#form">
                    Inscreva-se
                </Link>
            </div>
        </CareerCard>
        <CareerCard id='idiomas'>
            <div className='career__card__img'>
                <Image src={LangImg} alt="Trilha de Idiomas" fill />
            </div>
            <div className='career__card__txt'>
                <h3>Trilha de Idiomas</h3>
                <p>Na trilha de idiomas nosso aluno conquistará um diferencial de mercado e ampliará as suas chances de conquistar um emprego com ótimos salários. Nesta trilha ele aprenderá, na prática e de forma aplicada, o idioma inglês e conquistará fluência em um segundo idioma de forma rápida, simples e divertida.</p>
                <Link href="/#form">
                    Inscreva-se
                </Link>
            </div>
        </CareerCard>
        <CareerCard id='tecnologias'>
            <div className='career__card__img'>
                <Image src={TecImg} alt="Trilha de Tecnologias" fill />
            </div>
            <div className='career__card__txt'>
                <h3>Trilha de Tecnologias</h3>
                <p>Excelente opção para quem gosta de informática, tecnologia e equipamentos eletrônicos. Nesta trilha nosso aluno aprenderá tudo sobre montagem e desmontagem de computadores, celulares, tablets, informática aplicada, robótica e muito mais. O grande diferencial desta trilha é a “pegada empreendedora”, onde, por meio de vivências e situações problemas, nosso aluno será convidado a montar o seu próprio negócio.</p>
                <Link href="/#form">
                    Inscreva-se
                </Link>
            </div>
        </CareerCard>
        <CareerCard id='beleza'>
            <div className='career__card__img'>
                <Image src={BlzImg} alt="Trilha da Beleza" fill />
            </div>
            <div className='career__card__txt'>
                <h3>Trilha da Beleza</h3>
                <p>Ótima opção para pessoas que pretendem atuar na área da estética e da beleza ou para aqueles que já atuam e querem se profissionalizar. Excelente opção para quem deseja começar a empreender neste segmento ou busca um emprego em salões ou clínicas de estética. A área da beleza contempla um dos mercados em maior evidência no Brasil, com vastas opções de emprego, sendo, atualmente, uma das principais áreas de entrada no mercado de trabalho, com ótimas opções de salário e potencial de ganho.</p>
                <Link href="/#form">
                    Inscreva-se
                </Link>
            </div>
        </CareerCard>
    </CareersContainer>
  )
}

export default Careers