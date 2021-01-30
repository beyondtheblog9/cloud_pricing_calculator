import React from 'react';
import styled from 'styled-components';

import NavigationMenu from '../components/NavigationMenu';
import PageFooter from '../components/PageFooter';

const PageDesign = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  margin: 0;
`;

const MainBody = styled.div`
  width: 100%;
  float: right;
  transition: all 0.5s ease;
  background: #E5E5E5;
  font-family: "Montserrat", Arial, sans-serif;
  letter-spacing: 0.02em;
  line-height: 150%;
  text-align: justify;
`;


export default ({children}) => {
  return (
    <PageDesign>
        <MainBody>
            <NavigationMenu />
            {children}
            <PageFooter /> 
        </MainBody>
    </PageDesign>
  )
};