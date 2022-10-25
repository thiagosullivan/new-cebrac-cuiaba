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
        justify-content: right;
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
                    
                    ul {
                        display: flex;
                        flex-direction: column;
                        width: 100%;

                        li {
                            color: ${({theme}) => theme.white};
                            border-bottom: 2px solid ${({theme}) => theme.white};
                            width: 100%;                            
                            margin: 0;

                            &:last-child {
                                border-bottom: none;
                            }

                            &:hover {
                                background-color: ${({ theme }) => darken(0.15, theme.primary)};
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
            transform: translateY(-200px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
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