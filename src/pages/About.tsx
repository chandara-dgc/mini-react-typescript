// pages/About.tsx
import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
const About: React.FC = () => {
  useEffect(() => {
    // Check if it is a miniapp
    // Set the navbar
    const params = {
      title: "About",
      titleColor: "#000000",
      barStyle: "normal",
      backgroundColor: "#0f8727", // rgba
      hideBackButton: "false",
      theme: "light",
    };
    window?.WindVane.call(
      "WVNavigationBar",
      "update",
      params,
      function () {
        // success
      },
      function (e: any) {
        // failure
      }
    );
  }, []);
  return (
    <div>
      <h2>About Us</h2>
      <nav>
        <Link to="team">Our Team    </Link>
        <Link to="history">   Our History</Link>
      </nav>
      <Outlet /> {/* Renders nested routes */}
    </div>
  );
};

export default About;
