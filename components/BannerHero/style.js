import styled from "styled-components";

export const BannerHeroContainer = styled.section`
    display: flex;
    justify-content: center;
    margin: 3.65rem auto 0;
    background: url('https://raw.githubusercontent.com/thiagosullivan/new-cebrac-cuiaba/main/assets/bg-1.1.png');
    background-repeat-y: no-repeat;
    background-position: 0 50%;
    background-size: 214px;
    width: 95%;

    .banner__Hero {
        border-radius: 30px;
        overflow: hidden;
        max-width: 1098px;
        width: 100%;
        height: 592px;

        .banner__hero__img {
            max-width: 1098px;
            width: 100%;
            height: 592px;
            position: relative;
        }
    }

    @media screen and (max-width: 980px){
        .banner__Hero {
            height: 500px;

            .banner__hero__img {
                height: 500px;
            }
        }
    }
    @media screen and (max-width: 720px){
        margin-top: .5rem;
        
        .banner__Hero {
            height: 400px;

            .banner__hero__img {
                height: 400px;
            }
        }
    }
    @media screen and (max-width: 560px){
        .banner__Hero {
            height: 300px;

            .banner__hero__img {
                height: 300px;
            }
        }
    }
`;