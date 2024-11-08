// pages/Profile.tsx
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

type ProfileParams = {
  id: string; // Define parameter type
};

const Profile: React.FC = () => {
  const { id } = useParams<ProfileParams>();
  useEffect(() => {
    // Check if it is a miniapp
    // Set the navbar
    const params = {
      title: "Profile",
      titleColor: "#000000",
      barStyle: "normal",
      backgroundColor: "#c732b8", // rgba
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

  const onClose = () => {
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

  return (
    <div>
      <h2>Profile Page for User ID: {id}</h2>
      <button onClick={onClose}>Close Mini App</button>
    </div>
  );
};

export default Profile;
