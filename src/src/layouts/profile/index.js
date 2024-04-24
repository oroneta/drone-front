

// @mui material components
// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
// import team1 from "assets/images/avatar1.png";
// import team2 from "assets/images/avatar2.png";
// import team3 from "assets/images/avatar3.png";
// import team4 from "assets/images/avatar4.png";
// Images
import UPVRoute1 from "assets/images/UPVRoute1.png";
import HarborRoute from "assets/images/HarborRoute.png";
import UPVRoute2 from "assets/images/UPVRoute2.png";
// Oroneta components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import Footer from "examples/Footer";
// Oroneta example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// Overview page components
import PlatformSettings from "layouts/profile/components/PlatformSettings";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Welcome from "./components/Welcome/index";
import Calendario from "./components/Calendar";


function Overview() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
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
            xl={4}
            xxl={3}
            sx={({ breakpoints }) => ({
              minHeight: "400px",
              [breakpoints.only("xl")]: {
                gridArea: "1 / 1 / 2 / 2",
              },
            })}
          >
            <Welcome />
          </Grid>
          <Grid 
            item
            xs={12}
            xl={5}
            xxl={6}
            sx={({ breakpoints }) => ({
              [breakpoints.only("xl")]: {
                gridArea: "2 / 1 / 3 / 3",
              },
            })}
            >
              {/* <Card style={{height: ""}}> */}
                <Calendario />
              {/* </Card> */}
          </Grid>
          <Grid
            item
            xs={12}
            xl={3}
            xxl={3}
            sx={({ breakpoints }) => ({
              [breakpoints.only("xl")]: {
                gridArea: "1 / 2 / 2 / 3",
              },
            })}
          >
            <ProfileInfoCard
              title="profile information"
              description="Hi, I’m Alexis Montalvo, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
              info={{
                fullName: "Alexis Montalvo Callaú",
                mobile: "(34) 123 123 123",
                email: "amoncal@oroneta.com",
                location: "Spain",
              }}
              social={[
                {
                  link: "#",
                  icon: <FacebookIcon />,
                  color: "facebook",
                },
                {
                  link: "#",
                  icon: <TwitterIcon />,
                  color: "twitter",
                },
                {
                  link: "#",
                  icon: <InstagramIcon />,
                  color: "instagram",
                },
              ]}
            />
          </Grid>
        </Grid>
      </VuiBox>
      <Grid container spacing={3} mb="30px">
        <Grid item xs={12} xl={3} height="100%">
          <PlatformSettings />
        </Grid>
        <Grid item xs={12} xl={9}>
          <Card className="Card-Root">
            <VuiBox display="flex" flexDirection="column" height="100%">
              <VuiBox display="flex" flexDirection="column" mb="24px">
                <VuiTypography color="white" variant="lg" fontWeight="bold" mb="6px">
                  Last Routes
                </VuiTypography>
              </VuiBox>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} xl={4}>
                  <DefaultProjectCard
                    image={UPVRoute1}
                    label="route #1"
                    title="UPV"
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "white",
                      label: "VIEW",
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                  <DefaultProjectCard
                    image={HarborRoute}
                    label="route #2"
                    title="Valencia's harbor"
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "white",
                      label: "VIEW",
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                  <DefaultProjectCard
                    image={UPVRoute2}
                    label="route #3"
                    title="UPV"
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "white",
                      label: "VIEW",
                    }}
                  />
                </Grid>
              </Grid>
            </VuiBox>
          </Card>
        </Grid>
      </Grid>

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
