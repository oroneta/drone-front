import React  from 'react';

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Oroneta components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Oroneta example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";

// Authentication layout components
import Footer from "layouts/authentication/components/Footer";

// Oroneta theme functions
// import colors from "assets/theme/base/colors";

// Oroneta theme functions
// import tripleLinearGradient from "assets/theme/functions/tripleLinearGradient";

function CoverLayout({
  color,
  header,
  title,
  description,
  motto,
  premotto,
  image,
  top,
  cardContent,
  children,
}) {
  // const { gradients } = colors;
  return (
    <PageLayout>
      <DefaultNavbar
        action={{
          type: "external",
          route: "https://github.com/oroneta",
          label: "JOIN US",
        }}
      />
      <VuiBox
        height="100%"
        width="50vw"
        display={{ xs: "none", md: "block" }}
        position="absolute"
        top={0}
        left={0}
        sx={({ breakpoints }) => ({
          overflow: "hidden",
          [breakpoints.down("xl")]: {
            mr: "100px",
          },
          [breakpoints.down("lg")]: {
            display: "none",
          },
        })}
        zIndex={0}
      >
        <VuiBox
          height="100%"
          sx={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          {/* VuiBox as a transparent bg */}
          <VuiBox
            height="100%"
            width="100%"
            position="absolute"
            top={0}
            left={0}
            sx={{
              background: "linear-gradient(90deg, rgba(0,0,0,0), rgba(12, 11, 16, 0.4), rgba(12, 11, 16, 0.9), rgba(12, 11, 16, 1))",
            }}
          />
          <VuiTypography
            textAlign={cardContent ? "center" : "start"}
            variant="subtitle1"
            fontWeight="medium"
            color="white"
            mb="10px"
            sx={{ mb: 1, letterSpacing: "8px", zIndex: 9 }}
          >
            {premotto}
          </VuiTypography>
          <VuiTypography
            textAlign="center"
            variant="h2"
            fontWeight="bold"
            color="logo"
            mb="10px"
            textGradient
            sx={{ letterSpacing: "8px", zIndex: 9}}
          >
            {motto}
          </VuiTypography>
        </VuiBox>
      </VuiBox>
      <VuiBox
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          alignItems: "center",
          maxWidth: "1044px",
          minHeight: "75vh",
          margin: "0 auto",
        }}
      >
        <VuiBox
          mt={top}
          ml="auto !important"
          sx={({ breakpoints }) => ({
            [breakpoints.down("xl")]: {
              mr: cardContent ? "50px" : "100px",
            },
            [breakpoints.down("lg")]: {
              mr: "auto",
              ml: "auto !important",
            },
            [breakpoints.down("md")]: {
              maxWidth: "90%",
              pr: "7px",
              pl: "10px !important",
            },
          })}
        >
          <VuiBox pt={3} px={3} mx="auto !important" maxWidth={cardContent ? "400px" : "350px"}>
            {!header ? (
              <>
                <VuiBox mb="35px">
                  <VuiTypography
                    textAlign={cardContent ? "center" : "start"}
                    variant="h3"
                    fontWeight="bold"
                    color={color}
                    mb="10px"
                    sx={{
                      zIndex: 9,
                    }}
                  >
                    {title}
                  </VuiTypography>
                  <VuiTypography
                    textAlign={cardContent ? "center !important" : "start !important"}
                    mx="auto"
                    sx={({ typography: { size }, functions: { pxToRem } }) => ({
                      fontWeight: "regular",
                      fontSize: size.sm,
                      zIndex: 9
                    })}
                    color="white"
                  >
                    {description}
                  </VuiTypography>
                </VuiBox>
              </>
            ) : (
              header
            )}
          </VuiBox>
          <VuiBox
            px={3}
            mb="50px"
            mx="auto"
            ml="auto !important"
            sx={({ breakpoints }) => ({
              mt: cardContent ? "60px" : { top },
              maxWidth: cardContent ? "450px" : "350px",
              [breakpoints.down("xl")]: {
                mr: cardContent ? "0px" : "100px",
              },
              [breakpoints.only("lg")]: {
                mr: "auto",
                ml: "auto !important",
              },
              [breakpoints.down("lg")]: {
                mr: "auto",
                ml: "auto !important",
              },
              [breakpoints.down("md")]: {
                mr: cardContent ? "auto !important" : "unset",
                pr: "7px",
                pl: cardContent ? "0px !important" : "10px !important",
              },
            })}
          >
            {children}
          </VuiBox>
          <Footer />
        </VuiBox>
      </VuiBox>
    </PageLayout>
  );
}

// Setting default values for the props of CoverLayout
CoverLayout.defaultProps = {
  header: "",
  title: "",
  description: "",
  color: "info",
  top: 20,
};

// Typechecking props for the CoverLayout
CoverLayout.propTypes = {
  header: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  top: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default CoverLayout;
