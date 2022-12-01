import styled from "styled-components";

export const WhoWeDoContainer = styled.section`
    background-color: ${({theme}) => theme.primary};
    padding: 9rem 1rem 5.6rem;
    margin-top: -60px;

    .who__we__do__content {
        max-width: 900px;
        width: 100%;
        margin: 0 auto;

        h2 {
            font-family: 'Saira', sans-serif;
            font-size: 3rem;
            line-height: 45px;
            color: ${({theme}) => theme.white};
            margin-bottom: 3.2rem;
        }
    }
`

export const WhoWeDoCards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 2rem;
    justify-items: center;
`

export const WhoWeDoCard = styled.div`
    background-color: ${({theme}) => theme.white};
    border-radius: 20px;
    color: ${({theme}) => theme.primary};
    max-width: 350px;
    width: 100%;
    min-height: 290px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;

    h3 {
        font-size: 2rem;
        font-family: 'Saira', sans-serif;
        line-height: 30px;
        margin-bottom: 1rem;
    }
    
    p {
        font-family: 'Saira', sans-serif;

    }

    &:last-child {
        background-color: ${({theme}) => theme.secondary};
        /* border-radius: 20px 20px 100% 20px; */
    }
`