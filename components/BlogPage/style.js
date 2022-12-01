import styled from "styled-components";
import theme from "../../styles/theme";

export const BlogPostContainer = styled.section`
    max-width: 1300px;
    width: 95%;
    margin: 4rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 48px;
        font-weight: 600;
        font-family: 'Saira',sans-serif;
        color: ${({theme}) => theme.primary};
        margin-bottom: 2rem;
    }

    .paginationBtns {
        display: flex;
        align-items: center;
    }

    .paginationBtns li {
        font-size: 1.5rem;
        margin: .5rem;
        cursor: pointer;
    }

    .paginationBtns li a {
        display: flex;
        color: ${({theme}) => theme.primary};
    }

    .paginationActive {
        background-color: ${({theme}) => theme.primary};;
        padding: 5px;
        box-shadow: 0 5px 5px rgba(0,0,0,.2);
        font-weight: 400;
    }

    .paginationActive a {
        color: ${({theme}) => theme.white} !important;
        font-weight: 600;
    }
`

export const PostCard = styled.div`
    /* max-width: 600px; */
    width: 100%;
    display: flex;
    align-items: flex-start;
    margin-bottom: 2rem;

    .post__card__img {
        border-radius: 20px;
        overflow: hidden;
        width: 250px;
        height: 250px;
        min-width: 225px;
        position: relative;
        margin-right: 2rem;
    }
    .post__card__txt {
        max-width: 600px;
        width: 100%;

        font-family: 'Saira',sans-serif;
        
        h2 {
            margin-bottom: 1rem;
            font-family: 'Saira',sans-serif;
            line-height: 1.2;
        }
        p {
            font-weight: 400;
            font-family: 'Saira',sans-serif;
            text-align: justify;
        }
        a {
            cursor: pointer;
            
            &:hover {
                opacity: .8;
            }
            
            &:last-child {
                margin-left: auto;
                display: block;
                width: max-content;
                padding: .5rem;
                background-color: ${({theme}) => theme.primary};
                font-family: 'Saira',sans-serif;
                color: ${({theme}) => theme.white};
                border-radius: 10px;
            }
        }

        @media screen and (max-width: 920px){

        }
    }

    @media screen and (max-width: 590px){
        flex-direction: column;
        align-items: center;

        .post__card__img {
            margin-right: 0;
            margin-bottom: 2rem;
        }
        .post__card__txt {
            h2 {
                text-align: center;
            }
        }
    }
`