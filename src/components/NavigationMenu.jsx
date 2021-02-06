import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Header = styled.div`
    position: relative;
    width: 100%;
    height: 88px;
    left: 0px;
    top: 0px;

    background: #FDFDFD;
`;
const Logo = styled.div`
    position: relative;
    height: 44px;
    left: 140px;
    top: 28px;

    font-family: "Montserrat", Arial, sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 44px;

    display: flex;
    align-items: center;

    color: #0078E7;
`;
const Menu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 13px 45px;

    position: absolute;
    width: 638px;
    height: 26px;
    left: 522px;
    top: 28px;
`;
const StyledLink = styled(props => <Link {...props} />)`
    color: inherit; 
    text-decoration: none;
    outline: none;
    
`;
const MenuList = styled.div`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 29px;
    display: flex;
    align-items: center;
    text-align: center;
    color: rgba(0, 0, 0, 0.7);
    padding: 15px;
`;
const ContactButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 13px 19px;

    position: absolute;
    width: 210px;
    height: 70px;
    right: 120px;
    top: 14px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 19px;
    line-height: 33px;
    padding: 0px 50px;
    border: none;
    outline: none;
    color: #0078E7;
    background: #FFFFFF;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
    border-radius: 29.5px;
`;

const NavigationMenu = () => {
    return(
        <Header>
            <Logo><StyledLink to = '/'>CALCI CLOUD</StyledLink></Logo>
            <Menu>
                    <MenuList style={{  height: `29px`, left: `45px`, right: `517px`, top: `13px` }}><StyledLink to = '/'>Home</StyledLink></MenuList>
                    <MenuList style={{  height: `29px`, left: `186px`, right: `227px`, top: `13px` }}><StyledLink to = '/calculator'>Pricing Calculator</StyledLink></MenuList>
                    <MenuList style={{  height: `29px`, left: `476px`, right: `45px`, top: `13px` }}><StyledLink to = '/about'>About Us</StyledLink></MenuList>
            </Menu>
            <ContactButton><StyledLink to = '/contact'>Contact Us</StyledLink></ContactButton>
        </Header>
    )
};

export default NavigationMenu