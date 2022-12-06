import styled from "styled-components";

export const DepoimentsContainer = styled.section`
    max-width: 1300px;
    width: 95%;
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

    .swiper-wrapper {
        align-items: center;
    }

    .depo_tablet {
        display: none;
    }
    .depo_mobile {
        display: none;
    }

    @media screen and (max-width: 980px){
        .depo_desk {
            display: none;   
        }
        .depo_tablet {
            display: block;
        }
    }
    @media screen and (max-width: 660px){
        .depo_tablet {
            display: none;   
        }
        .depo_mobile {
            display: block;
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
        overflow-y: scroll;
        max-height: 300px;
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
        width: 120px;
        height: 120px;
        position: absolute;
        z-index: 2;
        right: -20px;
        top: 83%;

        span {
            border-radius: 50%;
        }
    }

    @media screen and (max-width: 660px){
        max-width: unset;
        
        .depo__img {
            right: 20px;
        }
    }
`;