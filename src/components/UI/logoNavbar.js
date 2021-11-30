import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { Link } from "react-scroll";
import { Link as GatsbyLink } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import useDarkMode from "use-dark-mode";
import { useTransition, animated } from "react-spring";

import ScrollToTop from "../UI/scrollToTop";

const StyledLink = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const GatsbyStyledLink = styled(GatsbyLink)`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const LogoNavBar = ({ notOnePageSection, setMenuOpened }) => {
  // State to show or hide scroll to top component, gets trigged based on the scroll link component
  const [showScrollTop, setShowScrollTop] = useState(false);
  // Animation
  const ScrollTopTransition = useTransition(showScrollTop, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  // Logo transition based on dark or light mode
  const { value: darkMode } = useDarkMode(false);
  // Animation
  const LogoNavBarTransition = useTransition(darkMode, null, {
    config: { duration: 200 },
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  // Query for logos
  const { darkLogo, lightLogo } = useStaticQuery(graphql`
    {
      darkLogo: file(relativePath: { eq: "logo/zak.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 80
            quality: 90
            placeholder: TRACED_SVG
            layout: FIXED
          )
        }
      }
      lightLogo: file(relativePath: { eq: "logo/zaklight.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 80
            quality: 90
            placeholder: TRACED_SVG
            layout: FIXED
          )
        }
      }
    }
  `);

  const lightImage = getImage(lightLogo);
  const darkImage = getImage(darkLogo);

  // Render dark or light logo
  const renderLogo = () => {
    return LogoNavBarTransition.map(({ item, key, props }) =>
      item ? (
        <animated.div key={key} style={props}>
          <GatsbyImage alt="Logo Light" title="Logo Light" image={lightImage} />
        </animated.div>
      ) : (
        <animated.div key={key} style={props}>
          <GatsbyImage
            image={darkImage}
            alt="Logo Dark"
            title="Logo Dark"
          />
        </animated.div>
      )
    );
  };

  // If is not a section from the index(no one page scroll link), render the gatsby link instead
  return notOnePageSection ? (
    <GatsbyStyledLink to="/#about-me">{renderLogo()}</GatsbyStyledLink>
  ) : (
    <>
      <StyledLink
        to="header"
        smooth={true}
        spy={true}
        // When header section is active, hide scroll to top When inactive, show scroll to top
        onSetActive={() => setShowScrollTop(false)}
        onSetInactive={() => setShowScrollTop(true)}
        onClick={() => setMenuOpened(false)}
      >
        {renderLogo()}
      </StyledLink>
      {ScrollTopTransition.map(
        ({ item, key, props }) =>
          item && <ScrollToTop style={props} key={key} />
      )}
    </>
  );
};

export default LogoNavBar;
