import React from 'react';
import styled from 'styled-components';

import reactlogo from "../../assets/react.svg";
import nodejslogo from "../../assets/nodejs.svg";
import gatsby from "../../assets/gatsby.svg";
import graphQl from "../../assets/graphql.svg";

const Footer = styled.div`
  font-family: "Montserrat", Arial, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 34px;

  background: #263238;
  padding: 1.5em 0;
  position: relative;
  color: #ffffff;
  display: block;
  text-align: center;
  `;
const FooterUnorderList = styled.ul`
  margin: 0;
  padding: 0;
`;
const FooterList = styled.li`
  display: inline;
  list-style: none;
  .listText{
    
  }
  img {
    margin: 2px;
    width: 3em;
    padding: 4px 8px;
  }
`;

const PageFooter = () => {
    return(
        <Footer>
            <div>
                Copyright <span dangerouslySetInnerHTML={{ "__html": "&copy;" }}/> {(new Date().getFullYear())}.<br />
                All rights reserved.
            </div>
            <FooterUnorderList>
                <FooterList><a rel ="noopener noreferrer" target="_blank" href = "https://reactjs.org/"><img src={reactlogo} alt="React Logo" /></a></FooterList>
				<FooterList><a rel ="noopener noreferrer" target="_blank" href= "https://nodejs.org/"><img src={nodejslogo} alt="NodeJS Logo" /></a></FooterList>
				<FooterList><a rel ="noopener noreferrer" target="_blank" href= "https://www.gatsbyjs.org/"><img src={gatsby} alt="Gatsby Logo" /></a></FooterList>
				<FooterList><a rel ="noopener noreferrer" target="_blank" href= "https://graphql.org/"><img src={graphQl} alt="GraphQL Logo" /></a></FooterList>
			</FooterUnorderList>
        </Footer>
    )
};

export default PageFooter