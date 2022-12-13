import { darken } from "polished";
import styled from "styled-components";

export const ScrollToTopContainer = styled.div`
    position: fixed;
    bottom: 2rem;
    right: 2rem;

    button {
        width: 80px;
        height: 80px;
        border: none;
        background-color: ${({theme}) => theme.secondary};
        box-shadow: 0 5px 5px rgba(0,0,0,.2);
        border-radius: 50%;
        display: block;
        transition: all 150ms ease-in;
    
        svg {
            font-size: 2rem;
            color: ${({theme}) => theme.primary};
        }

    }
    &:hover {
        button {
            box-shadow: 0 0px 6px rgba(0,0,0,.8);
            background-color: ${({theme}) => darken(0.05, theme.secondary)};
        }
    }


    @media screen and (max-width: 650px){
        buttom: 1rem;
        right: 1rem;

        button {
            width: 50px;
            height: 50px;

            svg {
                font-size: 1.4rem;
            }
        }
    }
`;