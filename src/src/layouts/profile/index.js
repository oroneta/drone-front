

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
import profile1 from "assets/images/profile-1.png";
import profile2 from "assets/images/profile-2.png";
import profile3 from "assets/images/profile-3.png";
// Oroneta components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import Footer from "examples/Footer";
// Oroneta example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";
import Welcome from "./components/Welcome/index";
// import CarInformations from "./components/CarInformations";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import CarInformations from "layouts/company/components/CarInformations";
// import { Calendar, dayjsLocalizer } from 'react-big-calendar'
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import dayjs from 'dayjs'

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
          <Grid item xs={12} lg={6} xl={5}>
              <Card style={{height: "447.47px"}}>
                <div style={{height: "400px", backgroundColor: "gray", display:"flex", alignItems: "center", borderRadius:"15px"}}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar />
                  </LocalizationProvider>
                </div>
              
              </Card>
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
              description="Hi, I’m Irati Medina, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
              info={{
                fullName: "Irati Medina",
                mobile: "(34) 123 123 123",
                email: "irati@oroneta.com",
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
          <Card>
            <VuiBox display="flex" flexDirection="column" height="100%">
              <VuiBox display="flex" flexDirection="column" mb="24px">
                <VuiTypography color="white" variant="lg" fontWeight="bold" mb="6px">
                  Last Routes
                </VuiTypography>
              </VuiBox>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} xl={4}>
                  <DefaultProjectCard
                    image={profile1}
                    label="route #2"
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
                    image={profile2}
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
                    image={profile3}
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
