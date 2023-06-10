import dynamic from "next/dynamic";

const SignInComponent = dynamic(
  () => import("../components/Signin/signInlandingPage"),
  {
    ssr: false,
  }
);

const SignInComponentPage = () => {
  return <SignInComponent />;
};

export default SignInComponentPage;
