function menuItem(theme) {
  const { palette, borders, transitions } = theme;

  const { text, light } = palette;
  const { borderRadius } = borders;

  return {
    display: "flex",
    alignItems: "center",
    width: "100%",
    color: text.main,
    backgroundColor: "#000",
    py: 1,
    px: 2,
    borderRadius: borderRadius.md,
    transition: transitions.create("background-color", {
      easing: transitions.easing.easeInOut,
      duration: transitions.duration.standard,
    }),

    "&:not(:last-child)": {
      mb: 1.25,
    },

    "&:hover": {
      backgroundColor: "#151419 !important",
    },
  };
}

function menuImage(theme, ownerState) {
  const { borders } = theme;
  const { borderRadius } = borders;

  return {
    display: "grid",
    placeItems: "center",
    "& img": {
      width: "100%",
      borderRadius: borderRadius.lg,
    },
  };
}

export { menuItem, menuImage };
