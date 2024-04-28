

// @mui material components
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

export default styled(Switch)(({ theme, ownerState }) => {
  const { palette } = theme;
  const { color } = ownerState;
  const { white, secondary } = palette;

  // styles for the button with variant="contained"
  const containedStyles = () => {
    // background color value
    // const backgroundValue = palette[color] ? palette[color].main : white.main;

    // color value when button is focused

    return {
      "&.MuiSwitch-root": {
        "& .MuiSwitch-thumb": {
          backgroundColor: white.main,
          borderRadius: "3px",
        },
        "& .MuiSwitch-track": {
          backgroundColor: `${secondary.main} !important`,
          borderColor: "transparent",
          borderRadius: "5px",
        },
        "& .Mui-checked+.MuiSwitch-track": {
          backgroundColor: `#664eff !important`,
          borderRadius: "5px",
        },
      },
    };
  };

  return {
    ...containedStyles(),
  };
});
