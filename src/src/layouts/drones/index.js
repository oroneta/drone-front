

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Oroneta components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Oroneta example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
import authorsTableData from "layouts/drones/data/authorsTableData";
import { MapView } from "examples/MapView";
import DroneInfo from "./components/DroneInfo";
// import { UserContext } from "context/UserContext";
// import { useContext } from "react";

function Tables() {
  const { columns, rows } = authorsTableData;
  const url = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";
  // const { infoDrone } = useContext( UserContext );
  // console.log(infoDrone);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
      <VuiBox mt={5} mb={3}>
        <Grid
          container
          spacing={3}
          sx={({ breakpoints }) => ({
            [breakpoints.only("xl")]: {
              gridTemplateColumns: "repeat(2, 1fr)",
            },
          })}
        >
          <Grid
            item
            xs={12}
            xl={8}
            xxl={8}
            sx={({ breakpoints }) => ({
              minHeight: "400px",
              [breakpoints.only("xl")]: {
                gridArea: "1 / 1 / 2 / 2",
              },
            })}
          >
            <MapView href={url} height={"calc(90vh - 300px)"} width={"100%"} borderRadius={"10px"} enableTool={true} zoom={14}/>
          </Grid>
          <Grid
            item
            xs={12}
            xl={4}
            xxl={4}
            sx={({ breakpoints }) => ({
              [breakpoints.only("xl")]: {
                gridArea: "1 / 2 / 2 / 3",
              },
            })}
          >
            <DroneInfo height={"calc(90vh - 300px)"} />
          </Grid>
        </Grid>
      </VuiBox>
        <VuiBox mb={3}>
          <Card>
            <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="22px">
              <VuiTypography variant="lg" color="white">
                Drones
              </VuiTypography>
            </VuiBox>
            <VuiBox
              sx={{
                "& th": {
                  borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                    `${borderWidth[1]} solid ${grey[700]}`,
                },
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                      `${borderWidth[1]} solid ${grey[700]}`,
                  },
                },
              }}
            >
              <Table columns={columns} rows={rows} />
            </VuiBox>
          </Card>
        </VuiBox>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
