

// Oroneta components
import VuiBox from "components/VuiBox";

// Oroneta example components
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

// Mapping page components
import { MapView } from "examples/MapView";


function Mapping() {
  // Width 100% and height 100% to fill the parent container
  return (
      // <VuiBox width="100%" height="100%">
      // </VuiBox>
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
      <MapView height={"100%"} width={"100%"} borderRadius={"0"} enableTool={true} zoom={16}/>
    </VuiBox>
  );
}

export default Mapping;
