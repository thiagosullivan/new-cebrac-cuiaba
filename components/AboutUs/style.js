import styled from "styled-components";

export const AboutUsContainer = styled.section`
    max-width: 1300px;
    width: 100%;
    margin: 0 auto 5rem;
    padding: 0 1rem;

    h1 {
        font-size: 48px;
        font-weight: 600;
        font-family: 'Saira',sans-serif;
        color: ${({theme}) => theme.primary};
        margin-bottom: 4rem;
    }

    .about__img {
        max-width: 800px;
        margin: 0 auto;
        margin-bottom: 2rem;
    }
    .about__txt {
        p {
            font-family: 'Saira',sans-serif;
            font-size: 1.3rem;
            line-height: 1.8;
            text-align: justify;
            margin-bottom: 1rem;
        }
    }
`