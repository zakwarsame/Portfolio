import React from 'react';
import styled from 'styled-components';
import media from '../../utils/styles/media';

const HeadingWrapper = styled.div`
  
  margin-bottom: 6rem;
  margin-left: 2rem;
  

  @media ${props => props.theme.mediaQueries.medium} {
    margin-bottom: 5rem;
  }

  @media ${props => props.theme.mediaQueries.small} {
    margin-bottom: 4.5rem;
  }
`;

const Title = styled.h1`
  display: flex;  
  align-items: stretch !important;
  font-size: 3rem;
  margin: 0;
  margin-bottom: 1rem;
  color: var(--primary);
  text-transform: uppercase;
  font-weight: 700;
  transition: color 0.2s ease-out;
  
  &:after {
    content: '';
    display: block;
    height: 1px;
    width: 300px;
    background-color: grey;
    position: relative;
    top: 15px;
    margin-left: 20px;
    ${media.desktop`width: 200px`};
    ${media.tablet`width: 100%;`};
    ${media.thone`margin-left: 10px;`};
  }

  

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 2rem;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    font-size: 1.8rem;
  }

  
`;

const SubTitle = styled.h2`
  font-size: 2rem;
  margin: 0;
  color: var(--text);
  font-weight: 400;
  transition: color 0.2s ease-out;

  & span {
    color: var(--text-highlight);
    font-style: italic;
    font-weight: 600;
    transition: color 0.2s ease-out;
  }

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 1.9rem;
  }

  @media ${props => props.theme.mediaQueries.smaller} {
    font-size: 1.8rem;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    font-size: 1.7rem;
  }
`;

const Heading = ({ title, subtitle }) => {
  return (
    <HeadingWrapper>
      <Title>{title}</Title>
      <SubTitle dangerouslySetInnerHTML={{ __html: subtitle }} />
    </HeadingWrapper>
  );
};

export default Heading;
