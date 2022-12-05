import React from "react";
import data from "../data/data.js";

export const SiteContext = React.createContext({
  data,
});

function SiteProvider({ children }) {
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
