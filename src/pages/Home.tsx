// pages/Home.tsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  useEffect(() => {
    // Check if it is a miniapp
    // Set the navbar
    const params = {
      title: "Home",
      titleColor: "#000000",
      barStyle: "normal",
      backgroundColor: "#fcba03", // rgba
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
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate("/profile/123");
  };

  const closeApp = () => {
    window.WindVane.call(
      "WVNavigator",
      "pop",
      {},
      function (e: any) {
        console.log("Close successfully");
      },
      function (e: any) {
        alert("Failed to close");
      }
    );
  };

  //  WVNavigator.push

  function handledOpenNewPage() {
    // var params = {
    //   url: "http://192.168.22.34:3000/profile/123",
    // };
    // window.WindVane.call(
    //   "WVNavigator",
    //   "push",
    //   params,
    //   function (e: any) {},
    //   function (e: any) {
    //     alert("failure: " + JSON.stringify(e));
    //   }
    // );
    navigate("profile/123");
  }
  const goToAbout = () => {
    navigate("about");
  };

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={handledOpenNewPage}>Go to Profile</button>
      <button onClick={goToAbout}>About</button>
    </div>
  );
};

export default Home;
