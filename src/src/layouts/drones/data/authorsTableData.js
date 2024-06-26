import React, { useContext }  from 'react';
import { UserContext } from 'context/UserContext';
/* eslint-disable react/prop-types */
// Oroneta components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
// import VuiAvatar from "components/VuiAvatar";
import VuiBadge from "components/VuiBadge";


// function Author({ image, name, email }) {
//   return (
//     <VuiBox display="flex" alignItems="center" px={1} py={0.5}>
//       <VuiBox mr={2}>
//         <VuiAvatar src={image} alt={name} size="sm" variant="rounded" />
//       </VuiBox>
//       <VuiBox display="flex" flexDirection="column">
//         <VuiTypography variant="button" color="white" fontWeight="medium">
//           {name}
//         </VuiTypography>
//         <VuiTypography variant="caption" color="text">
//           {email}
//         </VuiTypography>
//       </VuiBox>
//     </VuiBox>
//   );
// }

const statusDrone = (status) => {
  if (status) {
    return (
      <VuiBadge
        variant="standard"
        badgeContent="Online"
        color="success"
        size="xs"
        container
        sx={({ palette: { white, success }, borders: { borderRadius, borderWidth } }) => ({
          background: success.main,
          border: `${borderWidth[1]} solid ${success.main}`,
          borderRadius: borderRadius.md,
          color: white.main,
        })}
      />
    );
  }
  else {
    return (
      <VuiBadge
          variant="standard"
          badgeContent="Offline"
          size="xs"
          container
          sx={({ palette: { white }, borders: { borderRadius, borderWidth } }) => ({
            background: "unset",
            border: `${borderWidth[1]} solid ${white.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
    );
  }
};



function Function({ job, org }) {
  return (
    <VuiBox display="flex" flexDirection="column">
      <VuiTypography variant="caption" fontWeight="medium" color="white">
        {job}
      </VuiTypography>
      <VuiTypography variant="caption" color="text">
        {org}
      </VuiTypography>
    </VuiBox>
  );
}

export default () => {
  const { infoDrones } = useContext( UserContext );
  // console.log("aaaa", infoDrones["ESP00003-123-0033"].status);

  return {
  columns: [
    { name: "Drone", align: "Center" },
    // { name: "function", align: "left" },
    { name: "status", align: "center" },
    { name: "Last_fly", align: "center" },
    // { name: "action", align: "center" },
  ],
  rows: [
    {
      Drone: 
      <VuiTypography variant="caption" color="white" fontWeight="medium">
        ESP00001-123-0033
      </VuiTypography>,
      function: <Function job="Manager" org="Organization" />,
      status: (
        <VuiBadge
          variant="standard"
          badgeContent={infoDrones["ESP00001-123-0033"].status ? "Online" : "Offline"}
          color={infoDrones["ESP00001-123-0033"].status ? "success" : "danger"}
          size="xs"
          container
          sx={({ palette: { white, success }, borders: { borderRadius, borderWidth } }) => ({
            background: infoDrones["ESP00001-123-0033"].status ? success.main : "unset",
            border: `${borderWidth[1]} solid ${infoDrones["ESP00001-123-0033"].status ? success.main : "white"}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      Last_fly: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          23/04/18
        </VuiTypography>
      ),
    },
    {
      Drone: 
      <VuiTypography variant="caption" color="white" fontWeight="medium">
        ESP00002-123-0033
      </VuiTypography>,
      function: <Function job="Programator" org="Developer" />,
      status: (
        <VuiBadge
          variant="standard"
          badgeContent={infoDrones["ESP00002-123-0033"].status ? "Online" : "Offline"}
          size="xs"
          color={infoDrones["ESP00002-123-0033"].status ? "success" : "danger"}
          container
          sx={({ palette: { white, success }, borders: { borderRadius, borderWidth } }) => ({
            background: infoDrones["ESP00002-123-0033"].status ? success.main : "unset",
            border: `${borderWidth[1]} solid ${infoDrones["ESP00002-123-0033"].status ? success.main : "white"}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      Last_fly: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          11/01/19
        </VuiTypography>
      ),
    },
    {
      Drone: 
      <VuiTypography variant="caption" color="white" fontWeight="medium">
        ESP00003-123-0033
      </VuiTypography>,
      function: <Function job="Executive" org="Projects" />,
      status: (
        <VuiBadge
          variant="standard"
          badgeContent={infoDrones["ESP00003-123-0033"].status ? "Online" : "Offline"}
          color={infoDrones["ESP00003-123-0033"].status ? "success" : "danger"}
          size="xs"
          container
          sx={({ palette: { white, success }, borders: { borderRadius, borderWidth } }) => ({
            background: infoDrones["ESP00003-123-0033"].status ? success.main : "unset",
            border: `${borderWidth[1]} solid ${infoDrones["ESP00003-123-0033"].status ? success.main : "white"}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      Last_fly: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          Today
        </VuiTypography>
      ),
    },
  ]
  };
};
