import React from 'react';

import { useState, useEffect/*, useMemo */, useContext} from "react";

// react-router components
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// import Icon from "@mui/material/Icon";

// Oroneta components
// import VuiBox from "components/VuiBox";

// Oroneta example components
import Sidenav from "examples/Sidenav";

// Oroneta themes
import theme from "assets/theme";
// import themeRTL from "assets/theme/theme-rtl";

import AlarmImage from 'examples/Alarm';

// Oroneta routes
import routes from "routes";

// Oroneta contexts
import { useVisionUIController, setMiniSidenav/*, setOpenConfigurator */} from "context";
// import { UserContext } from "context/UserContext";

export default function App() {
  const [controller, dispatch] = useVisionUIController();
  const { miniSidenav, direction, layout, /*openConfigurator,*/ sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  // const [/*rtlCache,*/ setRtlCache] = useState(null);
  const { pathname } = useLocation();

  // const session = false;

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  // const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) => {
    return allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} component={route.component} key={route.key} />;
      }

      return null;
    });
  };

  // const configsButton = (
  //   <VuiBox
  //     display="flex"
  //     justifyContent="center"
  //     alignItems="center"
  //     width="3.5rem"
  //     height="3.5rem"
  //     bgColor="info"
  //     shadow="sm"
  //     borderRadius="50%"
  //     position="fixed"
  //     right="2rem"
  //     bottom="2rem"
  //     zIndex={99}
  //     color="white"
  //     sx={{ cursor: "pointer" }}
  //     onClick={handleConfiguratorOpen}
  //   >
  //     <Icon fontSize="default" color="inherit">
  //       settings
  //     </Icon>
  //   </VuiBox>
  // );

  let user = localStorage.getItem("oroneta-user");

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {layout === "dashboard" && (
          <>
            <Sidenav
              color={sidenavColor}
              brand=""
              brandName="ORONETA"
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
            {/* configsButton */}
            <AlarmImage />
          </>
        )}
        {layout === "vr" && <AlarmImage />}
        <Switch>
          {getRoutes(routes)}
          <Redirect from="*" to={ (user == "true" ) ? "/dashboard" : "authentication/sign-in" } />
        </Switch>
      </ThemeProvider>
  );
}
