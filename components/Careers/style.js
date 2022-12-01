import styled from "styled-components";

export const CareersContainer = styled.section`
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    padding: 3.75rem 1rem;

    h2 {
        font-family: 'Saira', sans-serif;
        font-size: 3rem;
        line-height: 45px;
        color: ${({theme}) => theme.primary};
        margin-bottom: 2rem;
    }
`;

export const CareerCard = styled.div`
    border: 3px solid ${({theme}) => theme.primary};
    margin-bottom: 2rem;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({theme}) => theme.primary};

    .career__card__img {
        margin-left: -50px;
    }
    .career__card__txt {
        max-width: 580px;
        width: 100%;
        padding: 0 1.56rem;

        h3 {
            font-family: 'Saira', sans-serif;
            font-size: 1.87rem;
        }
        p {
            font-family: 'Saira', sans-serif;
            margin-bottom: 1rem;
        }
        a {
            display: flex;
            font-family: 'Saira', sans-serif;
            font-weight: 700;
            background-color: ${({theme}) => theme.secondary};
            padding: 0.43rem 1.5rem;
            border-radius: 10px;
            width: max-content;
            margin-left: auto;
        }
    }

    @media screen and (max-width: 980px){
        flex-direction: column;
        position: relative;
        max-width: 580px;
        width: 100%;
        padding: 1.5rem;

        .career__card__img {
            display: none;
        }
        .career__card__txt {
            display: flex;
            flex-direction: column;
            align-items: center;

            a {
                margin-left: unset;
            }
        }
    }
`;