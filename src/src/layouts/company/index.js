import React, { Component }  from 'react';

// @mui material components
import Card from "@mui/material/Card";
// Oroneta components
import VuiTypography from "components/VuiTypography";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// @mui material components
// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import Grid from "@mui/material/Grid";
import linlei from "assets/images/linleiZheng.jpeg";
// import team2 from "assets/images/avatar2.png";
// import team3 from "assets/images/avatar3.png";
// import team4 from "assets/images/avatar4.png";

// Images
import UPVRoute1 from "assets/images/UPVRoute1.png";
import HarborRoute from "assets/images/HarborRoute.png";
import UPVRoute2 from "assets/images/UPVRoute2.png";
// Oroneta components
import VuiBox from "components/VuiBox";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import Footer from "examples/Footer";
// Oroneta example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// Overview page components
import Header from "layouts/company/components/Header";
import EmployeesList from "layouts/company/components/EmployeesList";

function Overview() {
  return (
    <DashboardLayout>
      <Header />
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
            <EmployeesList />
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
            <ProfileInfoCard
              title="profile information"
              description="Hi, I’m Alexis Montalvo, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
              info={{
                fullName: "Alexis Montalvo",
                mobile: "(34) 123 123 123",
                email: "amoncal@oroneta.com",
                location: "Spain",
              }}
              social={[
                {
                  // link: "",
                  icon: <FacebookIcon />,
                  color: "facebook",
                },
                {
                  // link: "",
                  icon: <TwitterIcon />,
                  color: "twitter",
                },
                {
                  // link: "",
                  icon: <InstagramIcon />,
                  color: "instagram",
                },
              ]}
            />
          </Grid>
        </Grid>
      </VuiBox>   
      <Grid container spacing={3} mb="30px">
        <Grid item xs={12} xl={12}>
          <Card className="Card-Root">
            <VuiBox display="flex" flexDirection="column" height="100%">
              <VuiBox display="flex" flexDirection="column" mb="24px">
                <VuiTypography color="white" variant="lg" fontWeight="bold" mb="6px">
                  Last defined routes
                </VuiTypography>
                <VuiTypography color="text" variant="button" fontWeight="regular">
                  Company defined routes
                </VuiTypography>
              </VuiBox>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} xl={4}>
                  <DefaultProjectCard
                    image={UPVRoute1}
                    label="Route #1"
                    title="Route of UPV"
                    description="The drone will roam around the UPV."
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: linlei, name: "Linlei Zheng" },
                      // { image: team2, name: "Ryan Milly" },
                      // { image: team3, name: "Nick Daniel" },
                      // { image: team4, name: "Peterson" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                  <DefaultProjectCard
                    image={HarborRoute}
                    label="Route #2"
                    title="Route of Harbor"
                    description="The drone will roam around the harbor of Valencia."
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: linlei, name: "Linlei Zheng" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                  <DefaultProjectCard
                    image={UPVRoute2}
                    label="Route #3"
                    title="Route of UPV"
                    description="The drone will roam around the UPV."
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: linlei, name: "Linlei Zheng" },
                    ]}
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
