import React from "react";
import rehypeReact from "rehype-react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { graphql, useStaticQuery } from "gatsby";

import ScrollLink from "../components/utils/scrollLink";
import Heading from "../components/UI/heading";
import {
  Contained,
  StyledSection,
  Wrapper,
} from "../components/layout/elements";
import { theme, media, Section } from "../utils/styles/index";

const StyledContainer = styled(Section)`
  position: relative;
`;

const StyledFlexContainer = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  align-items: flex-start;
  ${media.tablet`display: block;`};
`;

const StyledPic = styled.div`
  position: relative;
  width: 40%;
  max-width: 300px;
  margin-left: 60px;
  ${media.tablet`margin: 60px auto 0;`};
  ${media.phablet`width: 70%;`};

  a {
    &:focus {
      outline: 0;
    }
  }
`;
const StyledAvatar = styled(GatsbyImage)`
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1);
  border-radius: 3px;
  transition: ${theme.transition};
`;

const StyledAvatarLink = styled.a`
  ${theme.boxShadow};
  width: 100%;
  position: absolute;
  border-radius: ${theme.borderRadius};
  background-color: ${theme.colors.main};
  margin-left: -20px;
  &:hover,
  &:focus {
    background: transparent;
    &:after {
      top: 15px;
      left: 15px;
    }
    ${StyledAvatar} {
      filter: none;
      mix-blend-mode: normal;
    }
  }
  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${theme.borderRadius};
    transition: ${theme.transition};
  }
  &:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    background-color: ${theme.colors.navy};
    mix-blend-mode: screen;
  }
  &:after {
    border: 2px solid ${theme.colors.main};

    top: 20px;
    left: 20px;
    z-index: -1;
  }
`;

const AboutText = styled.div`
  color: var(--text);
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 1.8;

  width: 60%;
  margin: 0 auto;

  transition: color 0.2s ease-out;

  & em {
    color: var(--text-highlight);
    font-weight: 600;
    transition: color 0.2s ease-out;
  }

  & a {
    text-decoration: underline;
    color: var(--text-highlight);
    font-weight: 600;
    transition: color 0.2s ease-out;

    &:hover {
      color: var(--primary);
    }
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    width: 90%;
  }

  @media ${(props) => props.theme.mediaQueries.small} {
    font-size: 1.7rem;
    width: 95%;
  }

  @media ${(props) => props.theme.mediaQueries.smallest} {
    width: 100%;
  }
`;

const Stack = styled.p`
  color: var(--primary);
  width: 75%;
  margin: 0 20rem auto auto;
  text-transform: uppercase;
  margin-bottom: 5rem;
  font-size: 1.4rem;
  line-height: 1.8;
  font-weight: 700;

  @media ${(props) => props.theme.mediaQueries.small} {
    width: 90%;
    font-size: 1.3rem;
  }

  @media ${(props) => props.theme.mediaQueries.smallest} {
    font-size: 1.2rem;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: inherit;
  margin-right: 0.5rem;
`;

const StyledLink = styled.a`
  outline: none;

  background: ${({ solid }) => (solid ? "var(--primary)" : "transparent")};
  color: ${({ solid }) => (solid ? "var(--main)" : "var(--text-highlight)")};
  text-transform: uppercase;
  text-decoration: none;
  font-family: inherit;
  display: flex;
  align-items: center;
  font-weight: 700;
  letter-spacing: 1.5px;
  border: ${({ solid }) => (solid ? "1px transparent" : "1px solid")};
  border-radius: 10rem;
  font-size: 1rem;
  padding: 1.2rem 20rem;
  margin: 0rem;
  cursor: pointer;
  box-shadow: ${({ solid }) =>
    solid ? "0px 8px 15px var(--shadow-color)" : "none"};
  transition: all 0.3s ease-out;
  border: 2px solid var(--primary-light);

  &:hover {
    background-color: ${({ solid }) => (solid ? "var(--main)" : "transparent")};
    color: ${({ solid }) =>
      solid ? "var(--primary)" : "var(--text-highlight)"};

    /* background-color: var(--primary); */
    border-color: var(--primary);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: ${({ solid }) =>
      solid ? "0 3px 10px var(--shadow-btn)" : "none"};
  }

  @media ${(props) => props.theme.mediaQueries.small} {
    padding: 1.1rem 10rem;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;

  & a:first-of-type {
    margin-right: 3rem;
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    justify-content: space-around;
    width: 100%;

    & a:first-of-type {
      margin-right: 0rem;
    }
  }
  ${media.phone`margin-top: 40rem;`};
  ${media.phablet`margin-top: 40rem;`};
  ${media.tablet`margin-top: 40rem;`};
`;

// Takes custom components from markdown, and maps to my custom components
const renderCustom = new rehypeReact({
  createElement: React.createElement,
  components: { "scroll-link": ScrollLink },
}).Compiler;

const About = () => {
  const { aboutMe, siteUrl, site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          social {
            twitter
            instagram
            linkedin
            youtube
            facebook
            github
            email
          }
        }
      }
      aboutMe: file(relativePath: { eq: "aboutMe.md" }) {
        childMarkdownRemark {
          frontmatter {
            stack
            curriculum
            creativeCurriculum
            avatar {
              childImageSharp {
                gatsbyImageData(
                  width: 700
                  quality: 90
                  tracedSVGOptions: { color: "#64ffda" }
                  placeholder: TRACED_SVG
                  layout: CONSTRAINED
                )
              }
            }
          }
          htmlAst
        }
      }
      siteUrl: site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);
  const image = getImage(aboutMe.childMarkdownRemark.frontmatter.avatar);

  return (
    <StyledSection>
      <Contained>
        <StyledContainer id="about-me">
          <Heading
            title="About me"
            subtitle="Let me <span>introduce</span> myself…"
          />
          <Wrapper>
            <StyledFlexContainer>
              <AboutText>
                {renderCustom(aboutMe.childMarkdownRemark.htmlAst)}

                <Stack>{aboutMe.childMarkdownRemark.frontmatter.stack}</Stack>
              </AboutText>
              <StyledPic>
                <StyledAvatarLink
                  target="_blank"
                  href={`https://github.com/${site.siteMetadata.social.github}`}
                >
                  <StyledAvatar image={image} alt="Avatar" />
                </StyledAvatarLink>
              </StyledPic>
            </StyledFlexContainer>

            <ButtonsWrapper>
              <StyledLink
                solid
                target="_blank"
                rel="noreferrer"
                href="https://resume.creddle.io/resume/5vzx6kozb0h"
              >
                <StyledIcon icon={faPaperPlane} />
                Resume
              </StyledLink>
            </ButtonsWrapper>
          </Wrapper>
        </StyledContainer>
      </Contained>
    </StyledSection>
  );
};

export default About;
