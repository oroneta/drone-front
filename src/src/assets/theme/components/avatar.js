

// Oroneta base styles
import borders from "assets/theme/base/borders";

const { borderRadius } = borders;
const av = {
  styleOverrides: {
    root: {
      transition: "all 200ms ease-in-out",
    },

    rounded: {
      borderRadius: borderRadius.lg,
    },

    img: {
      height: "auto",
    },
  },
};
export default av;
