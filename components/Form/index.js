import React, { useState } from 'react';
import toast from 'react-hot-toast';
import MaskedInput  from 'react-input-mask';
import { sendContactMail } from '../../services/sendMail';
import theme from '../../styles/theme';
import LoadingScreen from '../LoadingScreen';
import { FormContainer, FormContent } from './style';

function Form() {

    const [ nome, setNome ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ unidade, setUnidade ] = useState('');
    const [ curso, setCurso ] = useState('');
    const [ loading, setLoading ] = useState(false);

    // console.log(nome, email, phone, unidade, curso)

    async function handleSubmit(event){
        event.preventDefault();
    
        if(!nome || !email || !phone || !unidade || !curso){
          toast('Preencha todos os campos para enviar sua mensagem!', {
            style: {
              background: theme.error,
              color: theme.white
            }
          });
    
          return;
        }
    
        try {
          setLoading(true)
          await sendContactMail(nome, email, phone, unidade, curso);
          setNome('');
          setEmail('');
          setPhone('');
          setUnidade('');
          setCurso('');
          toast('Formulário enviado com sucesso!', {
            style: {
              background: theme.success,
              color: theme.white
            }
          });
        } catch {
          toast('Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!', {
            style: {
              background: theme.error,
              color: theme.white
            }
          });
        } finally {
          // router.push('/obrigado')
          setLoading(false)
        }
      }

  return (
    <FormContainer id="form">
        { loading ? <LoadingScreen /> : ''}
        <h3>Inscreva-se</h3>

        <FormContent onSubmit={handleSubmit}>
            <div className='form__inputs'>
                <label>
                    Nome Completo*
                    <input
                        type="text"
                        onChange={({target}) => setNome(target.value)}
                        value={nome}
                    />
                </label>
                <label>
                    E-mail*
                    <input
                        type='email'
                        onChange={({target}) => setEmail(target.value)}
                        value={email}
                    />
                </label>
                <label>
                    Telefone*
                    <MaskedInput
                        mask="(99) 99999-9999"
                        placeholder='(99) 99999-9999'
                        type='tel'
                        onChange={({target}) => setPhone(target.value)}
                        value={phone}
                    />
                </label>
                {/* <label>
                    Estado*
                    <input
                        type="text"
                        onChange={({target}) => setState(target.value)}
                        value={state}
                    />
                </label> */}
                <label>
                    Unidade*
                    <input
                        type="unidade"
                        onChange={({target}) => setUnidade(target.value)}
                        value={unidade}
                    />
                </label>
                <label>
                    Curso*
                    <input
                        type="text"
                        onChange={({target}) => setCurso(target.value)}
                        value={curso}
                    />
                </label>
            </div>
            <div>
                <p>Declaro que li e concordo com a política de privacidade, bem como com o tratamento dos meus dados para fins de prospecção dos serviços educacionais prestados pelo Cebrac e demais instituições de ensino do mesmo grupo econômico.</p>
                <button type="submit">Enviar</button>
            </div>
        </FormContent>
    </FormContainer>
  )
}

export default Form