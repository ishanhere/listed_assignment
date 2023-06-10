import SignIn from "./signIn";

const SignInLandingPage = () => {
  return (
    <div className="signincontainer">
      <div className="signincontainer_left">
        <div className="signincontainer_left_logo">Board.</div>
      </div>
      <div className="signincontainer_right">
        <SignIn />
      </div>
    </div>
  );
};
export default SignInLandingPage;
