import React from "react";
import { SocialNetworks } from "./components/socialNetworks/SocialNetworks";
import { NavBar } from "./components/navBar/NavBar";
import { Footer } from "./components/footer/Footer";
import { Counter } from "./components/counter/Counter";

export const App = () => {
  return (
    <>
      <NavBar />
      <SocialNetworks />
      <Counter />
      <Footer />
    </>
  );
};
