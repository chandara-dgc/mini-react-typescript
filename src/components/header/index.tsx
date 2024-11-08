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
      "WVShowFlutterView",
      "JSApiTest",
      params,
      function (e: any) {
        alert("success: " + JSON.stringify(e));
      },
      function (e: any) {
        alert("Failed: " + JSON.stringify(e));
      }
    );
  };

  const handleNavigate = () => {
    var params = {
      url: "https://www.alibabacloud.com/help/en/superapp/latest/routing-1?spm=a3c0i.23458820.2359477120.1.35a17d3fH8DNpi",
    };
    window.WindVane.call(
      "WVNavigator",
      "push",
      params,
      function (e: any) {
      
      },
      function (e: any) {
        alert("failure: " + JSON.stringify(e));
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
        <button onClick={handleNavigate}>Navigate</button>
      </div>
      {infoUser && <div>{infoUser}</div>}
    </div>
  );
}

export default Header;
