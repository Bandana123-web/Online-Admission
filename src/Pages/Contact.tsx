import React from "react";
import About from "../Components/About";
import Navbar from "../Components/Navbar";
const Contact = () => {
  return (
    <>
      <div>
        <Navbar title="Contact" />

        <About style='bg-red-500' />
      </div>
    </>
  );
};

export default Contact;
