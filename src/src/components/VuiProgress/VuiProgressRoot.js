

// @mui material components
import { styled } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";

export default styled(LinearProgress)(({ theme, ownerState }) => {
  const { palette } = theme;
  const { value } = ownerState;

  const { text } = palette;

  return {
    "& .MuiLinearProgress-bar": {
      background: "#664eff",
      width: `${value}%`,
      color: text.main,
    },
  };
});
