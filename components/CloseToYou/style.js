import { darken } from "polished";
import styled from "styled-components";

export const CloseToYouContainer = styled.section`
    display: flex;
    align-items: center;
    margin-bottom: 3.1rem;

    .close__col1 {
        background-color: ${({theme}) => theme.primary};
        max-width: 950px;
        width: 100%;
        min-height: 800px;
        padding: 2.8rem 4.3rem 2.8rem 0;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        margin-right: 1rem;
        
        .close__col1__content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            margin-left: auto;
            max-width: 510px;
            width: 100%;

            .close__title {
                color: ${({theme}) => theme.white};
                display: flex;
                align-items: center;
                justify-content: flex-start;
    
                h2 {
                    font-family: 'Saira', sans-serif;
                    line-height: 25px;
                    margin-left: 1rem;
                }
            }
            h3 {
                font-family: 'Saira', sans-serif;
                color: ${({theme}) => theme.white};
                margin-top: 1rem;
                line-height: 20px;
                margin-bottom: 2rem;
            }
            form {
                display: flex;
                flex-direction: column;
                width: 100%;          
    
                label {
                    display: flex;
                    flex-direction: column;
                    font-size: 0.87rem;
                    font-family: 'Saira', sans-serif;
                    color: ${({theme}) => theme.white};
                    margin-bottom: 1.56rem;
                    margin-left: 15px;
    
                    input {
                        width: 100%;
                        height: 50px;
                        border-radius: 10px;
                        border: none;
                        outline: none;
                        font-family: 'Saira', sans-serif;
                        padding-left: 1.25rem;
                        font-size: 1rem;
                        margin-left: -15px;
                        margin-top: .3rem;
                    }
                }
    
                div {
                    display: flex;
                    justify-content: space-between;

                    p {
                        font-size: 1.75rem;
                        font-family: 'Saira', sans-serif;
                        font-weight: 700;
                        color: ${({theme}) => theme.white};
                        line-height: 25px;
                    }

                    button {
                        padding: 0.7rem;
                        border-radius: 10px;
                        border: none;
                        background-color: ${({theme}) => theme.secondary};
                        border-bottom: 5px solid ${({ theme }) => darken(0.15, theme.secondary)};
                        transition: all 100ms ease-in;
                        color: ${({theme}) => theme.white};
                        font-family: 'Saira', sans-serif;
                        font-weight: 700;
                        font-size: 1.12rem;

                        &:hover {
                            background-color: ${({ theme }) => darken(0.15, theme.secondary)};
                            border-bottom: 5px solid ${({ theme }) => darken(0.25, theme.secondary)};
                        }
                    }
                }
            }
        }

    }
    .close__col2 {
        background-color: ${({theme}) => theme.primary};
        max-width: 400px;
        width: 100%;
        
        form {
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            width: 100%;

            label {
                display: flex;
                flex-direction: column;
                color: ${({theme}) => theme.white};
                font-family: 'Saira', sans-serif;
                font-size: 0.75rem;
                font-weight: 300;
                margin-bottom: 10px;
                
                input {
                    border: none;
                    outline: none;
                    height: 35px;
                    border-radius: 5px;
                    margin-top: 2px;
                }
                
            }
            .form__checkbox {
                display: flex;
                flex-direction: row;
                align-items: flex-start;

                input {
                    margin-right: 10px;
                    height: auto;
                }
                p {
                    text-align: justify;
                    font-family: 'Saira', sans-serif;
                    line-height: 15px;
                    margin-bottom: .5rem;
                }
            }

            p {
                text-align: justify;
                font-family: 'Saira', sans-serif;
                font-weight: 300;
                color: ${({theme}) => theme.white};
                line-height: 20px;
                margin-bottom: 1rem;
                

                a {
                    font-family: 'Saira', sans-serif;
                    text-decoration: underline;
                    font-weight: 600;
                }
            }

            button {
                padding: 1.25rem;
                border: none;
                border-radius: 50px;
                font-family: 'Saira', sans-serif;
                font-size: 1.05rem;
                color: ${({theme}) => theme.third};
                font-weight: 600;
                background-color: ${({theme}) => theme.secondary};
            }
        }
    }
`;