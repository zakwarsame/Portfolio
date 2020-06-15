import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Img from 'gatsby-image';

import ButtonLink from '../components/UI/buttonLink';
import { theme, media, Section } from "../utils/styles/index";



const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 12rem;
  }

  @media ${props => props.theme.mediaQueries.medium} {
    &:not(:last-child) {
      margin-bottom: 8rem;
    }
  }

  @media ${props => props.theme.mediaQueries.small} {
    &:not(:last-child) {
      margin-bottom: 6rem;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;

  @media ${props => props.theme.mediaQueries.medium} {
    flex-direction: column !important;
  }
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 2rem;
  position: relative;
  text-decoration: underline;
  font-style: italic;
  margin: 0;
  margin-bottom: 3.5rem;
  color: var(--black);
  transition: color 0.2s ease-out;

  @media ${props => props.theme.mediaQueries.small} {
    margin-bottom: 2rem;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex: 1 1 50%;
  flex-direction: column;
  margin: 0 2rem;

  @media ${props => props.theme.mediaQueries.medium} {
    order: 2;
    align-items: center;
    text-align: center;
  }
`;

const Text = styled.div`
  font-size: 1.4rem;
  color: var(--text);
  font-weight: 400;
  margin: 1rem;
  margin-bottom: 1rem;
  line-height: 1.7;
  transition: color 0.2s ease-out;

  & a {
    text-decoration: underline;
    color: var(--text-highlight);
    font-weight: 600;
    transition: color 0.2s ease-out;

    &:hover {
      color: var(--primary);
    }
  }

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 1.8rem;
  }
`;

const Stack = styled.p`
  color: var(--text-highlight);
  text-transform: uppercase;
  font-weight: 700;
  margin: 1rem;
  margin-bottom: 4rem;
  font-size: 1.1rem;
  transition: color 0.2s ease-out;

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 1.2rem;
    margin-bottom: 3rem;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;

  & a:first-of-type {
    margin-right: 3rem;
  }

  @media ${props => props.theme.mediaQueries.medium} {
    justify-content: space-around;
    width: 100%;

    & a:first-of-type {
      margin-right: 0rem;
    }
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: inherit;
  margin-right: 0.5rem;
`;

const Image = styled(Img)`
  margin: 0 0rem;
  flex: 1 1 50%;
  ${theme.boxShadow};
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1);

`;

const StyledAvatarLink = styled.a`
  margin:0;
  padding:0;
  ${theme.boxShadow};
  width: 50%;
  position: relative;
  border-radius: 8px;
  background-color: ${theme.colors.main};
  
  &:hover,Image
  &:focus {
    background: transparent;
    &:after {
      top: 5px;
      left: 5px;
    }
    ${Image} {
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

    top: 10px;
    left: 10px;
    z-index: -1;
  }

  @media ${props => props.theme.mediaQueries.medium} {
    order: 1;
    width: 90%;
    margin: 2rem 0;
  }
`;

const PortfolioItem = ({ portfolio }) => {
  const { title, live, source, stack, image } = portfolio.frontmatter;
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ContentWrapper>
        <Content>
          <Text dangerouslySetInnerHTML={{ __html: portfolio.html }} />
          <Stack>{stack}</Stack>
          <ButtonsWrapper>
            <ButtonLink target="_blank" solid href={live} rel="noreferrer">
              <StyledIcon icon={faLink} />
              Visit
            </ButtonLink>
            <ButtonLink target="_blank" href={source} rel="noreferrer">
              <StyledIcon icon={faGithub} />
              Source
            </ButtonLink>
          </ButtonsWrapper>
        </Content>
       <StyledAvatarLink target="_blank" href={live}>
        <Image fluid={image.childImageSharp.fluid} />
        </StyledAvatarLink>
      </ContentWrapper>
    </Wrapper>
  );
};

export default PortfolioItem;
