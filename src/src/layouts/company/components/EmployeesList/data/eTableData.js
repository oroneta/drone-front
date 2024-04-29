import React  from 'react';

/* eslint-disable react/prop-types */
// Oroneta components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";
import VuiBadge from "components/VuiBadge";

// Images
import haitaoWu from "assets/images/haitaoWu.jpeg";
import zhilinLi from "assets/images/zhilinLi.jpg";
import mariaZapata from "assets/images/mariaZapata.jpeg";
import linlei from "assets/images/linleiZheng.jpeg";
import Elena from "assets/images/elenaClofent.jpeg";

function Employer({ image, name, email }) {
  return (
    <VuiBox display="flex" alignItems="center" px={1} py={0.5}>
      <VuiBox mr={2}>
        <VuiAvatar src={image} alt={name} size="sm" variant="rounded" />
      </VuiBox>
      <VuiBox display="flex" flexDirection="column">
        <VuiTypography variant="button" color="white" fontWeight="medium">
          {name}
        </VuiTypography>
        <VuiTypography variant="caption" color="text">
          {email}
        </VuiTypography>
      </VuiBox>
    </VuiBox>
  );
}

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

export default {
  columns: [
    { name: "name", align: "left" },
    { name: "role", align: "left" },
    { name: "status", align: "center" },
    { name: "employed", align: "center" },
    { name: "drones", align: "center" },
  ],

  rows: [
    {
      name: <Employer image={linlei} name="Zheng Lin Lei" email="llzheng@oroneta.com" />,
      role: <Function job="Manager" org="Organization" />,
      status: (
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
      ),
      employed: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          23/04/18
        </VuiTypography>
      ),
      drones: (
        <VuiTypography variant="caption" color="text" fontWeight="medium">
          1
        </VuiTypography>
      ),
    },
    {
      name: <Employer image={Elena} name="Elena Clofent" email="eclemuo@oroneta.com" />,
      role: <Function job="Programmer" org="Developer" />,
      status: (
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
      ),
      employed: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          14/09/20
        </VuiTypography>
      ),
      drones: (
        <VuiTypography variant="caption" color="text" fontWeight="medium">
          0
        </VuiTypography>
      ),
    },
    {
      name: <Employer image={zhilinLi} name="Zhilin Li" email="zli@oroneta.com" />,
      role: <Function job="Programmer" org="Developer" />,
      status: (
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
      ),
      employed: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          11/01/19
        </VuiTypography>
      ),
      drones: (
        <VuiTypography variant="caption" color="text" fontWeight="medium">
          0
        </VuiTypography>
      ),
    },
    {
      name: <Employer image={mariaZapata} name="Maria Zapata" email="mzapale@oroneta.com" />,
      role: <Function job="Programmer" org="Developer" />,
      status: (
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
      ),
      employed: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          19/09/17
        </VuiTypography>
      ),
      drones: (
        <VuiTypography variant="caption" color="text" fontWeight="medium">
          0
        </VuiTypography>
      ),
    },
    {
      name: <Employer image={haitaoWu} name="Haitao Wu" email="hwu@oroneta.com" />,
      role: <Function job="Programmer" org="Developer" />,
      status: (
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
      ),
      employed: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          24/12/08
        </VuiTypography>
      ),
      drones: (
        <VuiTypography variant="caption" color="text" fontWeight="medium">
          0
        </VuiTypography>
      ),
    },
    
  ],
};
