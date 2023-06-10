import Image from "next/image";
import Logo from "../../public/images/google-color.svg";
import appleLogo from "../../public/images/apple.svg";

const SignIn = () => {
  return (
    <div className="signincontainer_right_box">
      <div className="text">Sign In</div>
      <div className="text-2">Sign in to your account</div>

      <div className="flex margin-top-20">
        <button className="google_button margin-right-12">
          <Image
            src={Logo}
            className="margin-top-7 margin-right-5"
            alt="img"
            width="12"
            height="10"
          />
          <span className="margin-top-7 margin-bottom-7">
            Sign in with Google
          </span>
        </button>
        <button className="apple_button">
          <button className="google_button">
            <Image
              src={appleLogo}
              className="margin-top-7 margin-right-5"
              alt="img"
              width="12"
              height="10"
            />
            <span className="margin-top-7 margin-bottom-7">
              Sign in with Apple
            </span>
          </button>
        </button>
      </div>

      <div className="signincontainer_input_container margin-top-20 flex column">
        <div className="signincontainer_input flex column">
          <label>Email address</label>
          <input
            className="signincontainer_input_box"
            type="email"
            placeholder="enter email"
          ></input>
        </div>
        <div className="signincontainer_input flex column">
          <label>Password</label>
          <input
            className="signincontainer_input_box"
            type="password"
            placeholder="enter password"
          ></input>
        </div>
        <div className="signincontainer_input flex column margin-top-8">
          <label className="forgot_password font-size-14">
            Forgot password?
          </label>
        </div>
        <div className="signincontainer_input flex column margin-top-8">
          <button className="submit_button">Sign in</button>
        </div>
      </div>

      <div className="signincontainer_input text-center  margin-top-10">
        <span className="font-size-14">Don’t have an account?</span>
        <span className="forgot_password font-size-14"> Register here</span>
      </div>
    </div>
  );
};
export default SignIn;
