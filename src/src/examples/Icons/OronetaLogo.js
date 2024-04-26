import React  from 'react';

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

function OronetaLogo({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 992 992" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="992" height="992" rx="300" fill="white"/>
    <path d="M805.544 457.74C647.731 584.586 504.284 634.297 187 703C302.718 647.783 366.889 616.38 464.626 549.803C345.126 535.379 296.655 506.184 216.489 446.952C445.304 484.924 574.147 491.806 805.544 457.74Z" fill="black"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M604.189 465.549C508.033 407.637 446.118 366.194 391.263 288C404.923 374.519 424.92 416.511 470.895 465.837C515.163 467.802 558.572 467.735 604.189 465.549ZM619.523 474.755C571.718 477.494 526.619 477.96 480.872 476.253C483.261 478.686 485.713 481.144 488.23 483.633L624.296 477.613C622.696 476.656 621.105 475.703 619.523 474.755Z" fill="black"/>
    </svg>
    
  );
}
// Setting default values for the props of OronetaLogo
OronetaLogo.defaultProps = {
  color: "dark",
  size: "16px",
};

// Typechecking props for the OronetaLogo
OronetaLogo.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
    "white",
  ]),
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default OronetaLogo;
