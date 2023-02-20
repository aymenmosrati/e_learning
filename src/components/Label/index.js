import React from "react";
import "./_index.scss";

const Label = (props) => {
  const { label, ...rest } = props;
  return <label {...rest}>{label}</label>;
};
export default Label;
