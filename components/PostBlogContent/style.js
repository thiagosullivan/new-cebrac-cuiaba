import styled from "styled-components";

export const PostBlogContentContainer = styled.div`
    max-width: 1300px;
    width: 100%;
    margin: 0 auto 5rem;
    padding: 0 1rem;

    .postpage__img {
        max-width: 1090px;
        width: 100%;
        height: 620px;
        position: relative;
        border-radius: 20px;
        overflow: hidden;
        margin: 0 auto 2rem;

        @media screen and (max-width: 660px){
            height: 420px;
        }
    }
    span {
        font-family: 'Saira', sans-serif;
        font-size: 1.3rem;
        font-weight: 400;
        color: ${({theme}) => theme.primary};
    }
    h2 {
        margin: 1.5rem 0 3rem;
        font-family: 'Saira', sans-serif;
        font-size: 2rem;
        line-height: 1.2;
        color: ${({theme}) => theme.primary};
    }
    .post__text {
        text-align: justify;

        p, em, strong {
            font-family: 'Saira', sans-serif;
            line-height: 1.5;
            font-size: 1.3rem;
        }
        blockquote {
            padding-left: 1rem;
            border-left: 2px solid rgba(0,0,0,.5);
            margin: 1.5rem;
        }

        img {
            margin: 1rem 0;
        }
    }
    .post__blog__video {
        display: flex;
        justify-content: center;
        margin: 2rem 0;

    }
`