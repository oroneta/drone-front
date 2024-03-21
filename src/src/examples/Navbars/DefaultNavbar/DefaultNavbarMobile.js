

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Menu from "@mui/material/Menu";
// import Grid from "@mui/material/Grid";

// react-router components
import { Link } from "react-router-dom";
// Oroneta components
import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";

// Oroneta example components
import DefaultNavbarLink from "examples/Navbars/DefaultNavbar/DefaultNavbarLink";
import palette from "assets/theme/base/colors";
import tripleLinearGradient from "assets/theme/functions/tripleLinearGradient";

function DefaultNavbarMobile({ open, close }) {
  const { width } = open && open.getBoundingClientRect();

  return (
    <Menu
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      anchorEl={open}
      open={Boolean(open)}
      onClose={close}
      sx={{
        marginTop: "8px",
      }}
      MenuListProps={{
        style: {
          width: `calc(${width}px - 4rem)`,
          background: "#151419",
          backgroundColor: "unset !important",
          padding: "8px",
        },
      }}
    >
      <VuiBox px={0.5}>
        <DefaultNavbarLink icon="account_circle" name="sign up" route="/authentication/sign-up" />
        <DefaultNavbarLink icon="key" name="sign in" route="/authentication/sign-in" />
        <VuiBox>
          <VuiButton
            component={Link}
            // variant="gradient"
            color={"info"}
            // Full size
            size="small"
            sx={{ width: "100%", marginTop: "10px", display: "block" }}
          >
                JOIN US
          </VuiButton>  
        </VuiBox>
      </VuiBox>
    </Menu>
  );
}

// Typechecking props for the DefaultNavbarMenu
DefaultNavbarMobile.propTypes = {
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  close: PropTypes.oneOfType([PropTypes.func, PropTypes.bool, PropTypes.object]).isRequired,
};

export default DefaultNavbarMobile;
