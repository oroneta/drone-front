

// @mui material components
import Card from "@mui/material/Card";

// Oroneta components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

// Icons
import { FaLock } from "react-icons/fa";

// Billing page components
import Invoice from "layouts/billing/components/Invoice";

function Invoices() {
  let todayUS = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  return (
    <Card className="Card-Root" id="delete-account" sx={{ height: "100%" }}>
      <VuiBox mb="28px" display="flex" justifyContent="space-between" alignItems="center">
        <VuiTypography variant="h6" fontWeight="medium" color="white">
          Last Invoices
        </VuiTypography>
        <VuiButton variant="contained" color="info" size="small">
          VIEW ALL <FaLock size="14px" style={{ marginLeft: "8px" }} />
        </VuiButton>
      </VuiBox>
      <VuiBox>
        <VuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Invoice date={ todayUS } id="#MS-415646" price="€15.50" />
          <Invoice date="February 03, 2024" id="#RK-116120" price="€123.00" />
          <Invoice date="February 01, 2024" id="#RV-126749" price="€15.50" />
          <Invoice date="January 01, 2024" id="#QW-103578" price="€15.50" />
          <Invoice date="December 01, 2024" id="#MS-415646" price="€15.00" />
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default Invoices;
