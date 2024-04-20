

// Oroneta components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Oroneta example components
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

// Mapping page components
import { MapView } from "examples/MapView";


function Mapping() {
  // Width 100% and height 100% to fill the parent container
  // const url = "https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=PyTJUlEU1OPJwCJlW1k0NC8JIt2CALpyuj7uc066O7XbdZCjWEL3WYJIk6dnXtps"
  const url = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
  // const url = "https://tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token=PyTJUlEU1OPJwCJlW1k0NC8JIt2CALpyuj7uc066O7XbdZCjWEL3WYJIk6dnXtps";
  // const url = "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
  return (
    // <VuiBox width="100%" height="100%">
    // </VuiBox>
    <>
      <VuiBox
        sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
          position: "relative",
          height: "100vh",
          [breakpoints.up("xl")]: {
            marginLeft: pxToRem(274),
            transition: transitions.create(["margin-left", "margin-right"], {
              easing: transitions.easing.easeInOut,
              duration: transitions.duration.standard,
            }),
          },
        })}
      >
        <MapView href={url} height={"100%"} width={"100%"} borderRadius={"0"} enableTool={true} zoom={15}/>
      </VuiBox>
    </>
  );
}

export default Mapping;
