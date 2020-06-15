import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { useSpring, animated, config } from 'react-spring';

import {
  Contained,
  StyledSection,
  Wrapper,
} from '../components/layout/elements';
import ScrollDown from '../components/UI/scrollDown';
import Button from '../components/UI/button';
import WordsFading from '../components/UI/wordsFading';
import theme from '../utils/styles/theme';
import media from '../utils/styles/media';

const SmallWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: -3rem;
  ${media.bigDesktop`margin-top: -3rem;`};
  ${media.tablet`margin-top: -1rem;`};
  ${media.phone`margin-top: -23rem;`}; 
  
`;

  const StyledOverline = styled(animated.h1)`
    color: ${theme.colors.main};
    margin: 0 0 20px 3px;
    font-size: ${theme.fontSizes.md};
    font-family: ${theme.fonts.SFMono};
    font-weight: normal;

    @media ${props => props.theme.fontSizes.sm} {
      font-size: 6rem;
    }
  
    @media ${props => props.theme.fontSizes.smish} {
      font-size: 4.5rem;
    }
    
  `;
  const StyledTitle= styled(animated.h2)`
  font-size: 60px;
  line-height: 1.1;
  margin: 0;

  ${media.desktop`font-size: 60px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;

  const StyledSubtitle = styled(animated.h3)`
  padding: 10px 0 0 0;
  margin: 0 0 0 0;
  font-size: 50px;
  line-height: 1.1;
  color: ${theme.colors.slate};

  ${media.desktop`font-size: 50px;`};
  ${media.tablet`font-size: 40px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 25px;`};

  
`;

  const Text = styled(animated.h1)`
  font-size: 2rem;
  color: var(--text);
  font-weight: 400;
  margin: 1rem 0 1rem 0;
  line-height: 1.7;
  transition: color 0.2s ease-out;
  width: 50%;
  max-width: 500px;

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
    font-size: 1.5rem;
    width:100%;
  }
`;
const Home = () => {

  // Title animation
  const TitleSpring = useSpring({
    config: config.wobbly,
    delay: 200,
    opacity: 1,
    transform: 'translateX(0px)',
    from: { opacity: 0, transform: 'translateX(40px)' },
  });

  
  // Sub title animation
  const SubTitleSpring = useSpring({
    config: config.stiff,
    delay: 300,
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(40px)' },
  });

  // Button animation
  const ButtonSpring = useSpring({
    config: config.stiff,
    delay: 600,
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <StyledSection fullHeight id="header">
      
      <Contained>
        <Wrapper>
          <SmallWrapper>
          <StyledOverline style={ButtonSpring}>Hello, my name is</StyledOverline>
          <StyledTitle style={SubTitleSpring}>Zakaria Warsame.</StyledTitle>
          <StyledSubtitle style={TitleSpring}>I build things for the web.</StyledSubtitle>
          <Text style={SubTitleSpring}>I'm a <WordsFading />  web developer based in Toronto, ON specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.</Text>
            <Link to="about-me" spy={true} smooth={true}>
              <Button style={ButtonSpring}>About me</Button>
            </Link>
          </SmallWrapper>
        </Wrapper>
      </Contained>
      <ScrollDown />
    </StyledSection>
  );
};

export default Home;
