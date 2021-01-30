import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components';


const RenovDiv = styled.div`
    height: 100%;
    width: 100%; 
`;
const Overlay = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    background: #fff;
    z-index: 0;
    height: 90vh;
  `

export default () => {
  const { mobileImage, desktopImage } = useStaticQuery(graphql`
  query {
   mobileImage: file(relativePath: {eq: "images/404PageMob.jpg"}){
      childImageSharp{
        fluid(maxWidth: 1080, maxHeight: 1949, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
      }
    }
    desktopImage: file(relativePath: {eq: "images/404Page.jpg"}){
      childImageSharp{
        fluid(maxWidth: 2667, maxHeight: 1667, quality: 50 ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
      }
    }
  }
  `)
  const sources = [
    desktopImage.childImageSharp.fluid,
    {
      ...mobileImage.childImageSharp.fluid,
      media: `(max-width: 768px)`,
    },
  ]
    return(
      
        <RenovDiv>
            <BackgroundImage
                Tag="section"
                className="bgimage" 
                fluid={sources}
            >
              <Overlay />
            </BackgroundImage>  
        </RenovDiv>

    )
};