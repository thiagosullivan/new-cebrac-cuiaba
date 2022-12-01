import styled from "styled-components";

export const DepoimentsContainer = styled.section`
    max-width: 1300px;
    width: 100%;
    margin: 0 auto 6.87rem;
    background-color: ${({theme}) => theme.secondary};
    border-radius: 20px;
    padding: 2.81rem;

    .close__title {
        display: flex;
        align-items: center;
        color: ${({theme}) => theme.white};
        margin-bottom: 3rem;

        h2 {
            font-family: 'Saira', sans-serif;
            line-height: 25px;
            margin-left: 1rem;
        }
    }
`;

export const DepoimentCard = styled.div`
    background-color: ${({theme}) => theme.white};
    border-radius: 15px;
    max-width: 345px;
    width: 100%;
    padding: 1.68rem;
    position: relative;
    margin-bottom: 5rem;

    p {
        font-family: 'Saira', sans-serif;
        line-height: 25px;
        margin-left: 1rem;
        color: ${({theme}) => theme.primary};
        margin-bottom: 1.87rem;
    }

    .depo__bottom {
        max-width: 65%;
        margin-left: 1rem;
        color: ${({theme}) => theme.primary};
        
        h4 {
            font-family: 'Saira', sans-serif;
            line-height: 20px;
            margin-bottom: .5rem;
        }
        span {
            font-family: 'Saira', sans-serif;
            line-height: 10px;
            font-size: 0.85rem;
        }
    }
    .depo__img {
        width: 145px;
        height: 145px;
        position: absolute;
        z-index: 2;
        right: -40px;
        top: 75%;

        span {
            border-radius: 50%;
        }
    }
`;