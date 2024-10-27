import { useCallback, useState } from "react";
import { callWindVaneHandler } from "../../utils/CallBridgeHelper";
import "./index.css";

function Header() {
  const [infoUser, setInfoUser] = useState<string | null>(null);

  const getData = async () => {
    try {
      const result = (await callWindVaneHandler("", "pop")) as string;
      setInfoUser(result);
    } catch (error) {
      console.error("Navigator closed successfully:", error);
    }
  };

  // const getToast = async () => {
  //   try {
  //     await callWindVaneHandler("WVUIUICustom", "long", {
  //       param: {
  //         message: "Toast information",
  //         duration: 2,
  //       },
  //     });
  //   } catch (error) {
  //     console.error("Navigator closed successfully:", error);
  //   }
  // };

  const getToast = async () => {
    window.WindVane.call(
      "UICustom",
      "long",
      function (e: any) {
        alert("success: " + JSON.stringify(e));
      },
      function (e: any) {
        alert("failure: " + JSON.stringify(e));
      }
    );
  };

  const getCustom = () => {
    var params = { message: "flutter test" };
    window.WindVane.call(
      "WVShowFlutterView ",
      "JSApiTest",
      params,
      function (e: any) {
        alert("successfully");
      },
      function (e: any) {
        alert("Failed");
      }
    );
  };

  return (
    <div id="home-header-container">
      <img alt="ic_home_top" src={require("../../assets/img/banner.png")} />
      <div className="info-card user-info-card">
        <span>Welcome to EMAS.</span>
        <button onClick={getData}>Get data</button>
        <button onClick={getToast}>Get Toast</button>
        <button onClick={getCustom}>Get Custom</button>
      </div>
      {infoUser && <div>{infoUser}</div>}
    </div>
  );
}

export default Header;
