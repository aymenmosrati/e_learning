import React from "react";
import "./_index.scss";

const Input = (props) => {
  const { ...rest } = props;
  return (
    <>
      <input {...rest} />
      {/* {props.secure != null && (
        <span
          className={props.secure}
          onClick={() => {
            props.name === "password"
              ? dispatch(showPassword())
              : props.name === "newPassword"
              ? dispatch(showNewPassword())
              : dispatch(showNewPasswordAgain());
          }}
        >
          Show
        </span>
      )} */}
    </>
  );
};
export default Input;
