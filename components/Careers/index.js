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
                <h3>Cursos Técnicos</h3>
                <p>Os cursos técnicos abrem as portas para a profissão que você escolher. São indicados para quem quer ser um profissional capacitado na prática, com foco direto ao mercado de trabalho, garantindo formação para atividades e setores que estão em alta.</p>
                <Link href="/">
                    Ver cursos técnicos
                </Link>
            </div>
        </CareerCard>
        <CareerCard>
            <div className='career__card__img'>
                <Image src={CareerTwo} alt="Carreira dois" />
            </div>
            <div className='career__card__txt'>
                <h3>Cursos de Capacitação</h3>
                <p>Os cursos de capacitação elevam o conhecimento dos alunos que já concluíram o Curso Técnico. Traz aprofundamento sobre um assunto específico da área que o formado já domina. Torna o profissional ainda mais completo e competitivo no mercado de trabalho.</p>
                <Link href="/">
                    Ver cursos de capacitação
                </Link>
            </div>
        </CareerCard>
    </CareersContainer>
  )
}

export default Careers