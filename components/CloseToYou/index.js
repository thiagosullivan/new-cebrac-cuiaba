import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LogoCebrac from '../../assets/cebrac-logo.webp';
import FormImg from '../../assets/form-img.jpg';
import { CloseToYouContainer } from './style';

function CloseToYou() {
  return (
    <CloseToYouContainer>
        <div className='close__col1'>
            <div className='close__col1__content'>
                <div className='close__title'>
                    <Image src={LogoCebrac} alt="Logo Cebrac"/>
                    <h2>Perto <br/>de você</h2>
                </div>
                <h3>Conheça as <br/>nossas unidades</h3>
                <form>
                    <label>
                        Unidade
                        <input placeholder='Selecione uma unidade' />
                    </label>
                    <div>
                        <p>Encontre a Unidade <br/>
                        Proz mais próxima!</p>
                        <button>Clique para Buscar</button>
                    </div>
                </form>
            </div>
        </div>
        <div className='close__col2'>
            <Image src={FormImg} alt="Imagem Formulário" />
            <form>
                <label>
                    Nome*
                    <input type="text" />
                </label>
                <label>
                    E-mail*
                    <input type="email" />
                </label>
                <label>
                    Estado*
                    <input type="text" />
                </label>
                <label>
                    Qual sua área de interesse?*
                    <input type="text" />
                </label>
                <label className='form__checkbox'>
                    <input type="checkbox" />
                    <p>Declaro que li e concordo com a política de privacidade, bem como com o tratamento dos meus dados para fins de prospecção dos serviços educacionais prestados pela Proz Educação e demais instituições de ensino do mesmo grupo econômico.</p>                    
                </label>
                <p>Ao informar meus dados, estou ciente das diretrizes da <Link href="/">Política de Privacidade</Link>.</p>
                <button>Quero receber os conteúdos da Proz!</button>
            </form>
        </div>
    </CloseToYouContainer>
  )
}

export default CloseToYou