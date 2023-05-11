import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom/dist";

import { SocialNetworks } from "./components/socialNetworks/SocialNetworks";
import { NavBar } from "./components/navBar/NavBar";
import { Footer } from "./components/footer/Footer";
import { Counter } from "./components/counter/Counter";
import { Home } from "./components/home/Home";
import { NotFound } from "./components/notFound/NotFound";

export const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path='*' element={ <Navigate to='/' /> } />
        <Route path="/" element={ <Home /> } />
        <Route path="social-networks" element={ <SocialNetworks /> } />
        <Route path='not-found' element={ <NotFound /> } />

        {/* React uses the key property to identify different components in the same url */}
        <Route path="counter/1" element={ <Counter key={1} /> } />
        <Route path="counter/2" element={ <Counter key={2} initialValue={100} increment={5} decrement={2} /> } />   
      </Routes>
      
      <Footer />
    </>
  );
};
