/** 
  All of the routes for the Oroneta frontent are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/
import React  from 'react';
// Oroneta layouts
import Dashboard from "layouts/dashboard";
import Drones from "layouts/drones";
import Map from "layouts/map";
import Routes from "layouts/routes";
//
import Billing from "layouts/billing";
import Profile from "layouts/profile";
import Company from "./layouts/company";

import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// Oroneta icons
import { BsFillPersonFill } from "react-icons/bs";
import { BsCreditCardFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { MdRoute } from "react-icons/md";
import { FaPhoenixSquadron, FaMap } from "react-icons/fa";
import OronetaLandLogo from "examples/Icons/OronetaLandLogo";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <IoStatsChart size="15px" color="inherit" />,
    component: Dashboard,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Drones",
    key: "drones",
    route: "/drones",
    icon: <FaPhoenixSquadron size="15px" color="inherit" />,
    component: Drones,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Map",
    key: "map",
    route: "/map",
    icon: <FaMap size="15px" color="inherit" />,
    component: Map,
    noCollapse: true,
  },
  // {
  //   type: "collapse",
  //   name: "Routes",
  //   key: "routes",
  //   route: "/routes",
  //   icon: <MdRoute size="18px" color="inherit" />,
  //   component: Routes,
  //   noCollapse: true,
  // },
  // ------------------------------
  { type: "title", title: "Account", key: "account-pages" },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <BsFillPersonFill size="15px" color="inherit" />,
    component: Profile,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Company",
    key: "company",
    route: "/company",
    icon: <OronetaLandLogo size="22px" color="inherit" />,
    component: Company,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    route: "/billing",
    icon: <BsCreditCardFill size="15px" color="inherit" />,
    component: Billing,
    noCollapse: true,
  },
  // ------------------------------
  {
    type: "internal",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    component: SignIn,
    noCollapse: true,
  },
  {
    type: "internal",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    component: SignUp,
    noCollapse: true,
  },
];

export default routes;
