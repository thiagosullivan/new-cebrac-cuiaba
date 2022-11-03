import React from 'react';
import { FormContainer, FormContent } from './style';

function Form() {
  return (
    <FormContainer>
        <h3>Inscreva-se</h3>

        <FormContent>
            <div className='form__inputs'>
                <label>
                    Nome Completo*
                    <input type="text" />
                </label>
                <label>
                    E-mail*
                    <input type="text" />
                </label>
                <label>
                    Telefone*
                    <input type="tel" />
                </label>
                <label>
                    Estado*
                    <input type="tel" />
                </label>
                <label>
                    Unidade*
                    <input type="tel" />
                </label>
                <label>
                    Curso*
                    <input type="tel" />
                </label>
            </div>
            <div>
                <p>Declaro que li e concordo com a política de privacidade, bem como com o tratamento dos meus dados para fins de prospecção dos serviços educacionais prestados pela Proz Educação e demais instituições de ensino do mesmo grupo econômico.</p>
                <button type="submit">Enviar</button>
            </div>
        </FormContent>
    </FormContainer>
  )
}

export default Form