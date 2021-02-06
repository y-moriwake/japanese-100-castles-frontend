import '../styles/tailwind.css';
import Head from "next/head";
import Axios from 'axios';

const MyApp = ({ Component, pageProps }) => {

  Axios.defaults.baseURL = `http://localhost:8000/api/castles/`;

  return (
    <React.Fragment>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;