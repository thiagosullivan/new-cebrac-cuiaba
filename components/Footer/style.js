import { darken, lighten } from "polished";
import styled from "styled-components";

export const FooterContainer = styled.footer`
    margin-top: 5.62rem;

    .footer__top {
        max-width: 1300px;
        width: 100%;
        margin: 0 auto 3rem;
        color: ${({theme}) => theme.primary};
        display: flex;
        justify-content: space-between;

        div {
            max-width: 230px;
            width: 100%;
        }

        .footer__top__col1 {
            border-right: 4px solid ${({ theme }) => lighten(0.5, theme.primary)};
            padding-right: 2.5rem;
            margin-left: 2.5rem;

            p {
                font-family: 'Saira', sans-serif;
                font-weight: 700;
                line-height: 15px;
                margin-bottom: 1rem;
            }
            
            a {
                width: 160px;
                height: 60px;
                border-radius: 10px;
                background-color: ${({theme}) => theme.secondary};
                border-bottom: 5px solid ${({ theme }) => darken(0.15, theme.secondary)};
                transition: all 100ms ease-in;
                display: flex;
                justify-content: center;
                align-items: center;
                color: ${({theme}) => theme.white};
                font-weight: 600;
                font-family: 'Saira', sans-serif;

                &:hover {
                    background-color: ${({ theme }) => darken(0.15, theme.secondary)};
                    border-bottom: 5px solid ${({ theme }) => darken(0.25, theme.secondary)};
                }
            }
            .header__btn__wpp {
                width: 160px;
                height: 60px;
                background-color: ${({theme}) => theme.green};
                border-bottom: 5px solid ${({ theme }) => darken(0.15, theme.green)};
                display: flex;
                align-items: center;
                margin-right: 1rem;
                transition: all 100ms ease-in;
                color: ${({theme}) => theme.white};
                font-weight: 600;
                margin-bottom: 1.12rem;
                font-family: 'Saira', sans-serif;

                svg {
                    margin-right: 0.3rem;
                }

                &:hover {
                    background-color: ${({ theme }) => darken(0.15, theme.green)};
                    border-bottom: 5px solid ${({ theme }) => darken(0.25, theme.green)};
                }
            }
            
            @media screen and (max-width: 980px){
                border-right: none;
                border-bottom: 4px solid #cae7fe;
                padding-bottom: 2rem;
                margin-bottom: 2rem;
                margin-left: 0;
                padding-right: 0;

                .header__btn__wpp {
                    margin-right: 0;
                }
            }
        }

        @media screen and (max-width: 980px){
            flex-direction: column;
            align-items: center;
            text-align: center;
            
            div {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }

    }
    .footer__top__col2 {
        border-right: 4px solid ${({ theme }) => lighten(0.5, theme.primary)};
        padding-right: 2.5rem;
        margin-left: 2.5rem;

        p {
            font-weight: 700;
            font-family: 'Saira', sans-serif;
            line-height: 15px;
            margin-bottom: 1rem;
        }
        div {
            display: flex;
            flex-direction: column;
            
            a {
                font-family: 'Saira', sans-serif;
                transition: all 100ms ease-out;

                &:hover {
                    color: ${({ theme }) => lighten(0.3, theme.primary)};
                }

                &:nth-child(3) {
                    font-weight: 700;
                    margin-top: 2rem;
                };
                &:nth-child(4) {
                    font-weight: 700;
                    margin-top: .5rem;
                };
            }
        }

        @media screen and (max-width: 980px){
            border-right: none;
            border-bottom: 4px solid #cae7fe;
            padding-bottom: 2rem;
            margin-bottom: 2rem;
            margin-left: 0;
            padding-right: 0;
        }
    }
    .footer__top__col3 {
        border-right: 4px solid ${({ theme }) => lighten(0.5, theme.primary)};
        padding-right: 2.5rem;
        margin-left: 2.5rem;

        p {
            font-weight: 700;
            font-family: 'Saira', sans-serif;
            line-height: 15px;
            margin-bottom: 1rem;
        }
        a {
            font-family: 'Saira', sans-serif;
            display: block;
            line-height: 20px;
            transition: all 100ms ease-out;

            &:hover {
                color: ${({ theme }) => lighten(0.3, theme.primary)};
            }

            &:nth-child(4){
                font-weight: 700;
                margin-top: 2rem;
            };
            &:nth-child(5){
                font-weight: 700;
                margin-top: .5rem;
            };
        }

        @media screen and (max-width: 980px){
            border-right: none;
            border-bottom: 4px solid #cae7fe;
            padding-bottom: 2rem;
            margin-bottom: 2rem;
            margin-left: 0;
            padding-right: 0;
        }
    }
    .footer__top__col4 {
        border-right: 4px solid ${({ theme }) => lighten(0.5, theme.primary)};
        padding-right: 2.5rem;
        margin-left: 2.5rem;

        a {
            font-family: 'Saira', sans-serif;
            line-height: 25px;
            font-weight: 700;
            margin-bottom: 1rem;
            display: flex;
            transition: all 100ms ease-out;

            &:hover {
                color: ${({ theme }) => lighten(0.3, theme.primary)};
            }
        }

        @media screen and (max-width: 980px){
            border-right: none;
            border-bottom: 4px solid #cae7fe;
            padding-bottom: 2rem;
            margin-bottom: 2rem;
            margin-left: 0;
            padding-right: 0;
        }
    }
    .footer__top__col5 {
        border-right: 4px solid ${({ theme }) => lighten(0.5, theme.primary)};
        padding-right: 2.5rem;
        margin-left: 2.5rem;

        p {
            font-weight: 700;
            font-family: 'Saira', sans-serif;
            line-height: 15px;
            margin-bottom: 1rem;
        }

        a {
            font-size: 2.5rem;
            margin-right: 10px;
            transition: all 100ms ease-out;

            &:hover {
                color: ${({ theme }) => lighten(0.3, theme.primary)};
            }

            &:last-child {
                margin-right: 0;
            }
        }

        @media screen and (max-width: 980px){
            border-right: none;
            border-bottom: 4px solid #cae7fe;
            padding-bottom: 2rem;
            margin-bottom: 2rem;
            margin-left: 0;
            padding-right: 0;

            a {
                margin-right: 0px;
            }
        }
    }
    .footer__bottom {
        padding: 1rem;
        color: ${({ theme }) => theme.white};
        background-color: ${({ theme }) => theme.primary};

        p {
            font-family: 'Saira', sans-serif;
            text-align: center;

            a {
                font-weight: 700;
                transition: all 100ms ease-in-out;

                 &:hover {
                    color: ${({ theme }) => darken(0.15, theme.white)};
                 }
            }
        }
    }
`;