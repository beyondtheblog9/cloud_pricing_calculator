import React from 'react';
import styled from 'styled-components';

import heroimg from "../../assets/hero_image.svg";
import line from "../../assets/line.svg";

const ScreenHeight = styled.div`
    height: 90vh;
`;
const Heading1 = styled.h1`
    position: absolute;
    width: 829px;
    height: 401px;
    left: 268px;
    top: 259px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 63px;
    text-align: left;
    line-height: 77px;
    display: flex;
    align-items: left;
    letter-spacing: 0.01em;
`;
const Heading2 = styled.h2`

position: absolute;
width: 829px;
height: 181px;
left: 268px;
top: 659px;

font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 36px;
line-height: 44px;
display: flex;
align-items: left;
letter-spacing: 0.01em;

color: #4B4444;
`;
const BackgroundImg = styled.img`
    position: absolute;
    width: 477px;
    height: 581px;
    left: 1261px;
    top: 259px;
`;
const LineImg = styled.img`
    position: absolute;
    width: 166px;
    height: 30px;
    left: 273px;
    top: 613px;
`;

const HeroWrap = () => {
    return(
        <ScreenHeight>
            <Heading1>Maximize your profit by choosing the best pricing available on the cloud</Heading1>
            <LineImg src={line} alt="underline" />
            <BackgroundImg src={heroimg} alt="Home image" />
            <Heading2>We help you compare and get the best pricing solutions for services offered at AWS, GCP and Azure.</Heading2>
            
        </ScreenHeight>
        )
};

export default HeroWrap