import React from "react";
import { SocialNetworks } from "./components/socialNetworks/SocialNetworks";
import { NavBar } from "./components/navBar/NavBar";
import { Footer } from "./components/footer/Footer";

export const App = () => {
  return (
    <>
      <NavBar />
      <SocialNetworks />
      <Footer />
    </>
  );
};
