import React, { useState } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";


function App() {
  return (
    <div className=" py-8 px-10 bg-gray-200 space-y-5">
      <Nav />
      <Hero />
    </div>
  );
}

export default App;
