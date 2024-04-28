

// Oroneta base styles
// import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";

// const { grey, text, info } = colors;
const { size } = typography;
const bq = {
  styleOverrides: {
    li: {
      lineHeight: 0,
    },

    separator: {
      fontSize: size.sm,
    },
  },
};
export default bq;
