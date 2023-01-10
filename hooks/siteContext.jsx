import React, { useEffect } from "react";
import data from "../data/data.js";
import { useDispatch } from "react-redux";
import { saveUserInfo } from "../data/redux/cartSlice.js";
import { useSession } from "next-auth/react";

export const SiteContext = React.createContext({
  data,
});

function SiteProvider({ children }) {
  const dispatch = useDispatch();
  const { data: session } = useSession();
  useEffect(() => {
    const saveUserToRedux = (data) => {
      dispatch(saveUserInfo(data));
    };
    saveUserToRedux(session);
  }, [session, dispatch]);
  return <SiteContext.Provider value={data}>{children}</SiteContext.Provider>;
}

function useSiteData() {
  const context = React.useContext(SiteContext);
  if (context === undefined) {
    throw new Error("useSiteData must be used within a SiteProvider");
  }
  return context;
}

export { SiteProvider, useSiteData };
