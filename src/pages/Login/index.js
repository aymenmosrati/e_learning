import React from "react";
import { ImgLoginPage } from "../../assets/img/IconComponent/ImgLoginPage";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";
import "./_index.scss";

const index = () => {
  return (
    <div className="login-register-page">
      <div className="login-design">
        <ImgLoginPage className="ImgLoginPage" />
        <span className="login-design-description1">Lorem Ipsum is simply</span>
        <span className="login-design-description2">Lorem Ipsum is simply</span>
      </div>
      <div className="login-form">
        <form className="block-form">
        <h3 className="login-form-title">Welcome to lorem..!</h3>
        <div className="login-register-link">
          <span className="link-login">Login</span>
          <span className="link-register">Register</span>
        </div>
        <div className="login-form-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
        <div className="login-form-name">
          <Label className="label" label="User name" />
          <Input
            type="text"
            className="global-input"
            placeholder="Enter your User name"
          />
        </div>
        <div className="login-form-password">
          <Label className="label" label="Password" />
          <Input
            type="password"
            className="global-input"
            placeholder="Enter your Password"
          />
        </div>
        <div className="remember-forget-pass">
          <span className="remember-me">
            <Checkbox id="Login-check-remember-me" />
            <Label label="Remember me" htmlFor="Login-check-remember-me" />
          </span>
          <span className="forget-password">Forgot password?</span>
        </div>
        <div className="btn-login">
        <Button text="Login" className="btn-global" />
        </div>
        </form>
      </div>
    </div>
  );
};

export default index;
