
import { useState, useEffect } from "react";

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

// Vision UI Dashboard React example components
import DefaultNavbarLink from "examples/Navbars/DefaultNavbar/DefaultNavbarLink";
import DefaultNavbarMobile from "examples/Navbars/DefaultNavbar/DefaultNavbarMobile";

// Vision UI Dashboard React base styles
import breakpoints from "assets/theme/base/breakpoints";
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";

function DefaultNavbar({ transparent, light, action }) {
  const { borderCol } = colors;
  const { borderWidth } = borders;
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const openMobileNavbar = ({ currentTarget }) => setMobileNavbar(currentTarget.parentNode);
  const closeMobileNavbar = () => setMobileNavbar(false);

  useEffect(() => {
    // A function that sets the display state for the DefaultNavbarMobile.
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    /** 
     The event listener that's calling the displayMobileNavbar function when 
     resizing the window.
    */
    window.addEventListener("resize", displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  return (
    <Container>
      <VuiBox
        py={2}
        px={{ xs: transparent ? 4 : 3, sm: transparent ? 2 : 3, lg: transparent ? 0 : 3 }}
        my={2}
        border={`${borderWidth[1]} solid ${borderCol.navbar}`}
        width="calc(100% - 48px)"
        borderRadius="xl"
        shadow={transparent ? "none" : "md"}
        color={light ? "white" : "dark"}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        position="absolute"
        left="50%"
        zIndex={3}
        maxWidth="1044px"
        sx={({ palette: { gradients }, functions: { linearGradient } }) => ({
          backgroundColor: linearGradient(
            gradients.navbar.main,
            gradients.navbar.state,
            gradients.navbar.deg
          ),
          backdropFilter: "blur(42px)",
          transform: "translate(-50%, 0px)",
        })}
      >
        <VuiBox component={Link} to="/" py={transparent ? 1.5 : 0.75} lineHeight={1}>
          <VuiTypography
            variant="button"
            textGradient={true}
            color="logo"
            fontSize={14}
            letterSpacing={2}
            fontWeight="medium"
            sx={{
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gridColumnGap: "0.5rem",
            }}
          >
            <svg width="30" height="30" viewBox="0 0 637 637" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M529 292C419.291 380.181 319.57 414.739 99 462.5C179.445 424.114 224.055 402.283 292 356C208.926 345.973 175.23 325.677 119.5 284.5C278.568 310.897 368.137 315.682 529 292Z" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M386.674 296.013C321.164 256.489 278.685 227.72 241 174C250.348 233.213 263.967 262.426 294.884 296.037C325.41 297.438 355.312 297.45 386.674 296.013ZM402.005 305.22C368.455 307.208 336.863 307.595 304.855 306.452C306.019 307.625 307.203 308.807 308.409 310L403 305.815C402.668 305.617 402.336 305.418 402.005 305.22Z" fill="white"/>
            </svg>
            <div
              sx={{
                paddingLeft: "1px"
              }}
            >ORONETA</div>
          </VuiTypography>
        </VuiBox>
        <VuiBox sx={{display:"flex", justifyContent:"space-between"}}>
          <VuiBox color="inherit" display={{ xs: "none", lg: "flex" }} m={0} p={0} mr={10}>
            <DefaultNavbarLink icon="account_circle" name="sign up" route="/authentication/sign-up" />
            <DefaultNavbarLink icon="key" name="sign in" route="/authentication/sign-in" />
          </VuiBox>
          {action &&
            (action.type === "internal" ? (
              <VuiBox display={{ xs: "none", lg: "inline-block" }}>
                <VuiButton
                  component={Link}
                  to={action.route}
                  // variant="gradient"
                  color={action.color ? action.color : "info"}
                  size="small"
                >
                  {action.label}
                </VuiButton>
              </VuiBox>
            ) : (
              <VuiBox display={{ xs: "none", lg: "inline-block" }}>
                <VuiButton
                  component="a"
                  href={action.route}
                  target="_blank"
                  rel="noreferrer"
                  color={action.color ? action.color : "info"}
                  sx={({ typography: { size }, functions: { pxToRem } }) => ({
                    fontSize: pxToRem(size.sm),
                  })}
                >
                  {action.label}
                </VuiButton>
              </VuiBox>
            ))}
        </VuiBox>
        <VuiBox
          display={{ xs: "inline-block", lg: "none" }}
          lineHeight={0}
          py={1.5}
          pl={1.5}
          color="inherit"
          sx={{ cursor: "pointer" }}
          onClick={openMobileNavbar}
        >
          <Icon
            sx={({ palette: { white } }) => ({
              color: white.main,
            })}
            fontSize="default"
          >
            {mobileNavbar ? "close" : "menu"}
          </Icon>
        </VuiBox>
      </VuiBox>
      {mobileView && <DefaultNavbarMobile open={mobileNavbar} close={closeMobileNavbar} />}
    </Container>
  );
}

// Setting default values for the props of DefaultNavbar
DefaultNavbar.defaultProps = {
  transparent: false,
  light: false,
  action: false,
};

// Typechecking props for the DefaultNavbar
DefaultNavbar.propTypes = {
  transparent: PropTypes.bool,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
      ]),
      label: PropTypes.string.isRequired,
    }),
  ]),
};

export default DefaultNavbar;
