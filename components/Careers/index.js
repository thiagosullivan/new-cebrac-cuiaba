import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CareerOne from '../../assets/career-1.png';
import CareerTwo from '../../assets/career-2.png';
import { CareerCard, CareersContainer } from './style';

function Careers() {
  return (
    <CareersContainer>
        <h2>Carreiras</h2>
        <CareerCard>
            <div className='career__card__img'>
                <Image src={CareerOne} alt="Carreira um" />
            </div>
            <div className='career__card__txt'>
                <h3>Trilha de Saúde</h3>
                <p>Os cursos da trilha de saúde são indicados para pessoas que têm aptidão para cuidar de outras pessoas, interessam-se pelo funcionamento do corpo humano e pela promoção da saúde. É uma ótima opção para quem quer mudar de área profissional ou busca um trabalho reconhecido e bem remunerado.</p>
                <Link href="/">
                    Ver trilha de saúde
                </Link>
            </div>
        </CareerCard>
        <CareerCard>
            <div className='career__card__img'>
                <Image src={CareerTwo} alt="Carreira dois" />
            </div>
            <div className='career__card__txt'>
                <h3>Trilha de Empresas</h3>
                <p>Excelente opção para quem ainda não definiu sua carreira ou área de atuação. Nesta trilha são trabalhadas as rotinas de uma empresa, focando a execução prática das tarefas que envolvem cada uma das áreas administrativas. Se você busca conhecimento prático, quer conhecer a operação de uma empresa ou pretende empreender, você precisa fazer esta trilha.</p>
                <Link href="/">
                    Ver trilha de empresas
                </Link>
            </div>
        </CareerCard>
        <CareerCard>
            <div className='career__card__img'>
                <Image src={CareerOne} alt="Carreira um" />
            </div>
            <div className='career__card__txt'>
                <h3>Trilha de Idiomas</h3>
                <p>Na trilha de idiomas nosso aluno conquistará um diferencial de mercado e ampliará as suas chances de conquistar um emprego com ótimos salários. Nesta trilha ele aprenderá, na prática e de forma aplicada, o idioma inglês e conquistará fluência em um segundo idioma de forma rápida, simples e divertida.</p>
                <Link href="/">
                    Ver trilha de idiomas
                </Link>
            </div>
        </CareerCard>
        <CareerCard>
            <div className='career__card__img'>
                <Image src={CareerTwo} alt="Carreira dois" />
            </div>
            <div className='career__card__txt'>
                <h3>Trilha de Tecnologias</h3>
                <p>Excelente opção para quem gosta de informática, tecnologia e equipamentos eletrônicos. Nesta trilha nosso aluno aprenderá tudo sobre montagem e desmontagem de computadores, celulares, tablets, informática aplicada, robótica e muito mais. O grande diferencial desta trilha é a “pegada empreendedora”, onde, por meio de vivências e situações problemas, nosso aluno será convidado a montar o seu próprio negócio.</p>
                <Link href="/">
                    Ver trilha de tecnologias
                </Link>
            </div>
        </CareerCard>
        <CareerCard>
            <div className='career__card__img'>
                <Image src={CareerOne} alt="Carreira um" />
            </div>
            <div className='career__card__txt'>
                <h3>Trilha da Beleza</h3>
                <p>Ótima opção para pessoas que pretendem atuar na área da estética e da beleza ou para aqueles que já atuam e querem se profissionalizar. Excelente opção para quem deseja começar a empreender neste segmento ou busca um emprego em salões ou clínicas de estética. A área da beleza contempla um dos mercados em maior evidência no Brasil, com vastas opções de emprego, sendo, atualmente, uma das principais áreas de entrada no mercado de trabalho, com ótimas opções de salário e potencial de ganho.</p>
                <Link href="/">
                    Ver trilha da beleza
                </Link>
            </div>
        </CareerCard>
    </CareersContainer>
  )
}

export default Careers