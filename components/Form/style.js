import { darken } from "polished";
import styled from "styled-components";

export const FormContainer = styled.section`
    border-radius: 15px;
    background-color: ${({theme}) => theme.secondary};
    max-width: 950px;
    width: 95%;
    margin: 0 auto 3rem;
    position: relative;
    border-radius: 15px;
    overflow: hidden;

    h3 {
        text-align: center;
        padding: 2rem 1rem;
        font-size: 1.62rem;
        font-family: 'Saira', sans-serif;
        color: ${({theme}) => theme.white};
    }
`;

export const FormContent = styled.form`
    background-color: ${({theme}) => theme.primary};
    padding: 2.81rem 1rem;
    width: 100%;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;

    .form__inputs {
        display: grid;
        grid-template-areas:
        "name name email email"
        "tel tel unidade unidade"
        "curso curso curso curso";
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        justify-content: center;
        gap: 15px;
        margin-bottom: 1.5rem;
    
        label {
            display: flex;
            flex-direction: column;
            font-size: 0.75rem;
            font-family: 'Saira', sans-serif;
            color: ${({theme}) => theme.white};
            margin-left: 15px;
    
            &:nth-child(1) {
                grid-area: name;
                max-width: 450px;
                flex: 2;
            }
            &:nth-child(2) {
                grid-area: email;
                max-width: 450px;
                flex: 2;
            }
            &:nth-child(3) {
                grid-area: tel;
                max-width: 450px;
                flex: 4;
            }
            &:nth-child(4) {
                grid-area: unidade;
                flex: 2;
                max-width: 450px;
            }
            &:nth-child(5) {
                grid-area: curso;
                flex: 1;
            }

            input {
                outline: none;
                border: none;
                height: 45px;
                border-radius: 10px;
                margin-left: -15px;
                padding-left: 1rem;
                font-family: 'Saira', sans-serif;
            }
        }

        @media screen and (max-width: 720px){
            grid-template-areas:
            "name"
            "email"
            "tel"
            "unidade"
            "curso";
            grid-template-columns: 1fr;
            
            label {
                max-width: unset !important;
                width: 90%;
                flex: unset !important;
                margin: 0 auto;
            }
        }
    }
    div {
        display: flex;
        align-items: center;

        p {
            grid-area: parag;
            font-size: 0.75rem;
            font-family: 'Saira', sans-serif;
            color: ${({theme}) => theme.white};
            line-height: 15px;
            width: 100%;
        }
        button {
            grid-area: btn;
            width: 150px;
            height: 60px;
            margin-left: 1rem;
            border: none;
            border-radius: 10px;
            background-color: ${({theme}) => theme.secondary};
            border-bottom: 5px solid ${({ theme }) => darken(0.15, theme.secondary)};
            transition: all 100ms ease-in;
            font-size: 1.12rem;
            color: ${({theme}) => theme.white};

            &:hover {
                background-color: ${({ theme }) => darken(0.15, theme.secondary)};
                border-bottom: 5px solid ${({ theme }) => darken(0.25, theme.secondary)};
            }
        }

        @media screen and (max-width: 720px){
            flex-direction: column;

            p {
                max-width: 90%;

            }
            button {
                width: 90%;
                margin-left: 0;
                margin-top: 2rem;
            }
        }
    }
`;