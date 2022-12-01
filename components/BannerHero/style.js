import styled from "styled-components";

export const BannerHeroContainer = styled.section`
    display: flex;
    justify-content: center;
    margin-top: 3.65rem;
    background: url('https://raw.githubusercontent.com/thiagosullivan/new-cebrac-cuiaba/main/assets/bg-1.png');
    background-repeat-y: no-repeat;
    background-position: 0 50%;
    background-size: 214px;

    .banner__Hero {
        border-radius: 30px;
        overflow: hidden;
        max-width: 1098px;
        width: 100%;
        height: 592px;

        .banner__hero__img {
            width: 1098px;
            height: 592px;
            position: relative;
        }
    }
`;