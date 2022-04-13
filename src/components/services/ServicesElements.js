import styled from "styled-components";


export const ServicesContainer = styled.div`
    margin: 0.5px 0 0 0.5px;
    height: 475px;
    width: 100%;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #6568f4;
    transition: 0.3s ease-in;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 2 auto;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px {
        grid-template-columns: 1fr 1fr;
    }


    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ServicesCardSport = styled.div`
    margin: 10px;
    height: 425px;
    width: 300px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    background-color: #65B0F4;
    transition: 0.3s ease-in;
    box-shadow: 2px;
    align-items: center;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`
export const ServicesCardMusic = styled.div`
    margin: 10px;
    height: 425px;
    width: 300px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    background-color: #65B0F4;
    transition: 0.3s ease-in;
    box-shadow: 2px;
    align-items: center;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`
export const ServicesCardTheatre = styled.div`
    margin: 10px;
    height: 425px;
    width: 300px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    background-color: #65B0F4;
    transition: 0.3s ease-in;
    box-shadow: 2px;
    align-items: center;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`
export const ServicesCardRewards = styled.div`
    margin: 10px;
    height: 425px;
    width: 300px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    background-color: #65B0F4;
    transition: 0.3s ease-in;
    box-shadow: 2px;
    align-items: center;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;
    align-items: center;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    align-items: center;
`

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`

