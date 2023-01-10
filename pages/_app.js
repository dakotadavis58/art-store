import "../styles/globals.css";
import { Poppins } from "@next/font/google";
import Layout from "../components/Layout";
import { SiteContext, SiteProvider } from "../hooks/SiteContext";
import { SessionProvider } from "next-auth/react";
import store from "../data/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  // const persistor = persistStore(store, {}, function () {
  //   persistor.persist();
  // });

  // if no user and route is protected, redirect to login
  if (pageProps.protected && !session.user) {
    return (
      <div className={poppins.className}>
        <Provider store={store}>
          <SessionProvider session={session}>
            <SiteProvider>
              <Layout>
                <h1>Protected Page</h1>
                <p>You need to be signed in to view this page.</p>
              </Layout>
            </SiteProvider>
          </SessionProvider>
        </Provider>
      </div>
    );
  }

  return (
    <div className={poppins.className}>
      <Provider store={store}>
        <SessionProvider session={session}>
          <SiteProvider>
            {/* <PersistGate loading={<div>loading</div>} persistor={persistor}> */}
            <Layout>
              <Component {...pageProps} />
            </Layout>
            {/* </PersistGate> */}
          </SiteProvider>
        </SessionProvider>
      </Provider>
    </div>
  );
}

export default MyApp;
