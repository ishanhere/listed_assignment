import "../styles/globals.scss";
import "../components/Sidebar/sidebar.scss";
import "./../components/Signin/signin.scss";
import "./../components/Dashboard/dashboard.scss";
import "./../components/CardSmall/cardSmall.scss";
import "./../components/Graph/graphContainer.scss";
import "./../components/Card/card.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
