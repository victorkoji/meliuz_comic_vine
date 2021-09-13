import Layout from "../layout";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "../store/index.js";

import "../styles/globals.scss";
import "../styles/style.scss";
import "../layout/Header/Header.scss";
import "../layout/Footer/Footer.scss";

import "font-awesome/css/font-awesome.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
