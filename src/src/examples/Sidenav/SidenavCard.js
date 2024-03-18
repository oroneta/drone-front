
// @mui material components
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Icon from "@mui/material/Icon";
import Link from "@mui/material/Link";

// Oroneta components
import VuiButton from "components/VuiButton";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Custom styles for the SidenavCard
import { card, cardContent, cardIconBox, cardIcon } from "examples/Sidenav/styles/sidenavCard";

// Oroneta context
import { useVisionUIController } from "context";

function SidenavCard({ color, ...rest }) {
  const [controller] = useVisionUIController();
  const { miniSidenav, sidenavColor } = controller;

  return (
    <Card className="Card-Fix" sx={(theme) => card(theme, { miniSidenav, borderRadius: "5px" })}>
      <CardContent sx={(theme) => cardContent(theme, { sidenavColor })}>
          <VuiBox
            width="2rem"
            height="2rem"
            mb={2}
          >
          </VuiBox>
        <VuiBox lineHeight={1}>
          <VuiTypography variant="h6" color="white">
            Need help?
          </VuiTypography>
          <VuiBox mb={1.825} mt={-1}>
            <VuiTypography variant="caption" color="white" fontWeight="regular">
              Please check our docs
            </VuiTypography>
          </VuiBox>
          <VuiButton
            component={Link}
            href="https://github.com/oroneta"
            target="_blank"
            rel="noreferrer"
            size="small"
            // sx={{ color: "white !important", background: "red" }}
            sx={({ palette: { gradients, white }, functions: { linearGradient } }) => ({
              color: `${white.main} !important`,
              background: linearGradient(
                gradients.cardDark.main,
                gradients.cardDark.state,
                gradients.cardDark.deg
              ),
              "&:hover": {
                background: linearGradient(
                  gradients.cardDark.main,
                  gradients.cardDark.state,
                  gradients.cardDark.deg
                ),
              },
            })}
            fullWidth
          >
            DOCUMENTATION
          </VuiButton>
        </VuiBox>
      </CardContent>
    </Card>
  );
}

export default SidenavCard;
