

// @mui material components
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";

// Oroneta components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Oroneta example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";

// Oroneta base styles
// import colors from "assets/theme/base/colors";

// Dashboard layout components
import WelcomeMark from "layouts/dashboard/components/WelcomeMark";
// import OrdersOverview from "layouts/dashboard/components/OrderOverview";
import ActiveEmployees from "layouts/dashboard/components/ActiveEmployees";
import ChargerStation from "layouts/dashboard/components/ChargerStation";

// React icons
import { TbDrone } from "react-icons/tb";
import { FaPlane } from "react-icons/fa";
import { RiBattery2ChargeFill } from "react-icons/ri";
import { FaFeatherAlt } from "react-icons/fa";

// Data
import LineChart from "examples/Charts/LineCharts/LineChart";
import { lineChartDataDashboard } from "layouts/dashboard/data/lineChartData";
import { lineChartOptionsDashboard } from "layouts/dashboard/data/lineChartOptions";
import { MapView } from '../../examples/MapView';

function Dashboard() {
  // const { gradients } = colors;
  // const { cardContent } = gradients;
  const url = "https://tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token=PyTJUlEU1OPJwCJlW1k0NC8JIt2CALpyuj7uc066O7XbdZCjWEL3WYJIk6dnXtps";
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <VuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Total Drones", fontWeight: "regular" }}
                count="3 Drones"
                icon={{ color: "info", component: <TbDrone size="21px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Active Drones" }}
                count="2 Drones"
                icon={{ color: "info", component: <FaFeatherAlt size="22px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Charge Stations" }}
                count="23 Stations"
                icon={{ color: "info", component: <RiBattery2ChargeFill size="22px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Total Flights" }}
                count="20 Flights"
                percentage={{ color: "success", text: "+1" }}
                icon={{ color: "info", component: <FaPlane size="20px" color="white" /> }}
              />
            </Grid>
          </Grid>
        </VuiBox>
        <VuiBox mb={3}>
          <Grid container spacing="18px">
            <Grid item xs={12} lg={12} xl={5}>
              <WelcomeMark />
            </Grid>
            <Grid item xs={12} lg={6} xl={3}>
              <ActiveEmployees />
            </Grid>
            <Grid item xs={12} lg={6} xl={4}>
              <ChargerStation />
            </Grid>
          </Grid>
        </VuiBox>
        <VuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6} xl={7}>
              <Card className="Card-Root">
                <VuiBox sx={{ height: "100%" }}>
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    Drones Usage
                  </VuiTypography>
                  <VuiBox display="flex" alignItems="center" mb="40px">
                    <VuiTypography variant="button" color="success" fontWeight="bold">
                      +5% more{" "}
                      <VuiTypography variant="button" color="text" fontWeight="regular">
                        in 2023
                      </VuiTypography>
                    </VuiTypography>
                  </VuiBox>
                  <VuiBox sx={{ height: "310px" }}>
                    <LineChart
                      lineChartData={lineChartDataDashboard}
                      lineChartOptions={lineChartOptionsDashboard}
                    />
                  </VuiBox>
                </VuiBox>
              </Card>
            </Grid>
            <Grid item xs={12} lg={6} xl={5}>
              <MapView href={url} height={"447.47px"} borderRadius={"5px"} enableTool={false} zoom={8}/>
              {/* <Card style={{height: }}>
              </Card> */}
            </Grid>
          </Grid>
        </VuiBox>
      </VuiBox> 
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
