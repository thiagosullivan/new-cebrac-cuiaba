import { darken, lighten } from "polished";
import styled from "styled-components";

export const HeaderContainer = styled.header`

`;

export const HeaderTop = styled.div`
    background-color: ${({theme}) => theme.primary};
    color: ${({theme}) => theme.white};
    padding: 1rem;

    .header__content {
        max-width: 1300px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .header__flag {
            p {
                margin-left: 10px;
                font-weight: 400;
            }
        }

        div {
            display: flex;
            align-items: center;
        }
    }
    p {
        font-family: 'Saira', sans-serif;
        font-weight: 700;
        margin-right: 1rem;
    }
    a {
        padding: 0.7rem;
        border-radius: 10px;
        background-color: ${({theme}) => theme.secondary};
        border-bottom: 5px solid ${({ theme }) => darken(0.15, theme.secondary)};
        transition: all 100ms ease-in;

        &:hover {
            background-color: ${({ theme }) => darken(0.15, theme.secondary)};
            border-bottom: 5px solid ${({ theme }) => darken(0.25, theme.secondary)};
        }
    }
    .header__btn__wpp {
        background-color: ${({theme}) => theme.green};
        border-bottom: 5px solid ${({ theme }) => darken(0.15, theme.green)};
        display: flex;
        align-items: center;
        margin-right: 1rem;
        transition: all 100ms ease-in;

        svg {
            margin-right: 0.3rem;
        }

        &:hover {
            background-color: ${({ theme }) => darken(0.15, theme.green)};
            border-bottom: 5px solid ${({ theme }) => darken(0.25, theme.green)};
        }
    }

    @media screen and (max-width: 740px){
        .header__content {
            flex-direction: column;

            .header__flag {
                margin-bottom: 1rem;
            }

            div {
                a {
                    text-align: center;
                }
            }
        }
    }

    @media screen and (max-width: 580px){
        .header__content {
            div {
                a {
                    svg {
                        display: none;
                    }
                    font-size: .8rem;
                }
            }
            p {
                font-size: .7rem;
                margin-right: 10px;
                font-weight: 400;
            }
        }
    }
`;

export const HeaderBottom = styled.div`
    padding: 0.6rem;

    .header__content {
        max-width: 1300px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    span {
        cursor: pointer;
    }

    nav {
        display: flex;
        align-items: center;

        ul {
            display: flex;

            li {
                margin: 0 1.56rem;
                font-family: 'Saira', sans-serif;
                font-weight: 400;
                font-size: 1.2rem;
                color: ${({theme}) => theme.primary};
                display: flex;
                align-items: center;
                position: relative;
                
                a {
                    display: flex;
                    align-items: center;
                    font-family: 'Saira', sans-serif;
                    font-weight: 400;
                    font-size: 1.2rem;
                }

                svg {
                    font-size: 2.2rem;
                }

                &:hover {
                    color: ${({ theme }) => lighten(0.2, theme.primary)};
                }

                &:hover nav {
                    display: block;
                    animation: dropDownAnimation 200ms ease-in-out forwards;
                }
                &:hover nav ul li {
                }

                nav {
                    position: absolute;
                    top: 100%;
                    background-color: ${({theme}) => theme.primary};
                    border-radius: 10px;
                    width: max-content;
                    display: none;
                    overflow: hidden;
                    z-index: 9;
                    
                    ul {
                        display: flex;
                        flex-direction: column;
                        width: 100%;

                        li {
                            color: ${({theme}) => theme.white};
                            border-bottom: 2px solid ${({theme}) => theme.white};
                            width: 100%;                            
                            margin: 0;
                            font-family: 'Saira', sans-serif;
                            font-weight: 400;
                            font-size: 1.2rem;

                            &:last-child {
                                border-bottom: none;
                            }

                            &:hover {
                                background-color: ${({ theme }) => darken(0.15, theme.primary)};
                                color: ${({theme}) => theme.white};
                            }

                            a {
                                padding: 0.8rem;
                            }
                        }
                    }
                }
            }
        }
    }

    @keyframes dropDownAnimation {
        0% {
            opacity: 0;
            transform: translateY(-100px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media screen and (max-width: 980px){
        display: none;
    }
`;

export const SearchHeader = styled.div`
    margin-left: 1.56rem;

    svg {
        font-size: 1.6rem;
        color: ${({theme}) => theme.primary};
    }
`;

export const DropDownHeader = styled.div`
    
`

export const HeaderMobileBottom = styled.div`
    padding: 1rem;
    display: none;

    .header__content {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .mobileHamb {
            cursor: pointer;
            color: ${({theme}) => theme.primary};
            font-size: 2rem;
        }

        .mobileOpen {
            transform: translateX(0px) !important;
            padding: 2rem;
        }
        
        nav {
            position: absolute;
            background-color: ${({theme}) => theme.white};
            box-shadow: 0 5px 5px rgba(0,0,0,.3);
            padding: 1rem;
            /* max-width: 500px; */
            width: 100%;
            z-index: 9;
            height: 100vh;
            top: 0;
            left: 0;
            transform: translateX(-1000px);
            transition: all 150ms ease-in;

            .mobileClose {
                cursor: pointer;
                position: absolute;
                right: 1rem;
                top: 1rem;
                z-index: 9;
                color: ${({theme}) => theme.primary};
                font-size: 2rem;
            }

            ul {
                color: ${({theme}) => theme.primary};
                display: flex;
                flex-direction: column;
                justify-content: center;

                li {
                    font-family: 'Saira', sans-serif;
                    font-weight: 400;
                    font-size: 1.2rem;
                    margin: .5rem 0;

                    div {
                        /* display: none; */
                        padding: .5rem 0 .5rem .5rem;
                        border-left: 1px solid rgba(0,0,0,.1);
                        margin: 1rem;

                        li {
                            border-bottom: none;
                        }
                    }

                    /* &:hover div {
                        display: block;
                        animation: dropDownAnimation 200ms ease-in-out forwards;
                    } */
                }
            }
        }
    }

    @media screen and (max-width: 980px){
        display: block;
    }
`