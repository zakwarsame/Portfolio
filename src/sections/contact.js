import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import useDarkMode from "use-dark-mode";

import {
  Contained,
  StyledSection,
  Wrapper,
} from "../components/layout/elements";
import Heading from "../components/UI/heading";
import Social from "../components/UI/social";

const LogoImage = styled(GatsbyImage)`
  width: 45%;
  margin: 1rem 0 -2rem 0;

  @media ${(props) => props.theme.mediaQueries.medium} {
    width: 55%;
    margin: -4rem 0 -2rem 0;
  }
`;

const CopyRight = styled.p`
  font-weight: 700;
  margin-bottom: 0;
  margin-right: 1rem;
  font-size: 1rem;
  color: var(--text-highlight);
  text-transform: uppercase;
`;

const Contact = () => {
  const { value: darkMode } = useDarkMode(false);
  const { darkLogo, lightLogo } = useStaticQuery(graphql`
    {
      darkLogo: file(relativePath: { eq: "logo/zak.png" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 90
            placeholder: TRACED_SVG
            layout: FULL_WIDTH
          )
        }
      }
      lightLogo: file(relativePath: { eq: "logo/zaklight.png" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 90
            placeholder: TRACED_SVG
            layout: FULL_WIDTH
          )
        }
      }
    }
  `);

  const lightImage = getImage(lightLogo);
  const darkImage = getImage(darkLogo);

  return (
    <StyledSection id="contact">
      <Contained>
        <Wrapper>
          <Heading title="Contact me" subtitle="<span>Get in touch</span>" />
          <Social />
          {darkMode ? (
            <LogoImage image={lightImage} alt="LightMode Logo" />
          ) : (
            <LogoImage image={darkImage} alt="DarkMode Logo" />
          )}
          <CopyRight>Copyright © {new Date().getFullYear()}, Zakaria</CopyRight>
        </Wrapper>
      </Contained>
    </StyledSection>
  );
};

export default Contact;
