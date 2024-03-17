

// Oroneta components
import VuiBox from "components/VuiBox";

// Oroneta example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Mapping page components
import { MapView } from "examples/MapView";


function Mapping() {
  // Width 100% and height 100% to fill the parent container
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox mt={4} width="100%" height="100%">
        <MapView height={"calc(100vh - 180px)"} width={"100%"} borderRadius={"10px"} enableTool={true} zoom={16}/>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Mapping;
