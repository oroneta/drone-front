import React  from 'react';

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

function OronetaLandLogo({ size, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 637 637" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M608.925 284.38C466.323 398.999 336.702 443.919 50 506C154.565 456.105 212.55 427.729 300.867 367.568C192.884 354.535 149.086 328.154 76.6464 274.631C283.407 308.943 399.832 315.162 608.925 284.38Z" fill={color}/>
        <path fillRule="evenodd" clipRule="evenodd" d="M426.236 290.989C339.771 238.892 284.001 201.456 234.575 131C246.872 208.885 264.852 246.838 306.064 291.193C345.987 292.98 385.126 292.938 426.236 290.989ZM441.569 300.195C398.271 302.696 357.443 303.138 316.039 301.609C318.042 303.643 320.094 305.698 322.196 307.776L445.147 302.337C443.949 301.62 442.756 300.906 441.569 300.195Z" fill={color}/>
    </svg>
    
  );
}
// Setting default values for the props of OronetaLogo
OronetaLandLogo.defaultProps = {
  color: "dark",
  size: "16px",
};

// Typechecking props for the OronetaLogo
OronetaLandLogo.propTypes = {
  color: PropTypes.oneOf([
    "inherit",
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

export default OronetaLandLogo;
