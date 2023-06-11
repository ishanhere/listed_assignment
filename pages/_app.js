import "../styles/globals.scss";
import "../components/Sidebar/sidebar.scss";
import "./../components/Signin/signin.scss";
import "./../components/Dashboard/dashboard.scss";
import "./../components/CardSmall/cardSmall.scss";
import "./../components/Graph/graphContainer.scss";
import "./../components/Card/card.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=0"
        />
        <title>Listed</title>
        <script src="https://accounts.google.com/gsi/client" async defer />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
