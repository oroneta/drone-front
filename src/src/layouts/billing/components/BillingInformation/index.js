
import React, { Component }  from 'react';

// @mui material components
import Card from "@mui/material/Card";

// Oroneta components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Billing page components
import Bill from "layouts/billing/components/Bill";

function BillingInformation() {
  return (
    <Card className="Card-Root" id="delete-account">
      <VuiBox>
        <VuiTypography variant="lg" color="white" fontWeight="bold">
          Billing Information
        </VuiTypography>
      </VuiBox>
      <VuiBox>
        <VuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            name="Zheng Lin Lei"
            company="Oroneta"
            email="zll@devlap.com"
            vat="Q0489731J"
          />
          <Bill
            name="Alexis Pro"
            company="Oroneta"
            email="al@devlap.com"
            vat="Q0489731J"
          />
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default BillingInformation;
