import './App.css';
import Header from "./components/header";
import InfoBody from "./components/infoBody";
import Footer from "./components/footer";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Check if it is a miniapp
    const isMiniprogram = window?.WindVane;
    if (isMiniprogram) {
      // Set the navbar
      const params = {
        title: "Javascript",
        titleColor: '#000000',
        barStyle: 'normal',
        backgroundColor: '#FFFFFFFF', // rgba
        hideBackButton: 'false',
        theme: 'dark'
      };
      window?.WindVane.call('WVNavigationBar', 'update', params, function() {
        // success
      }, function(e: any) {
        // failure
      });
    }
  }, [])
  return (
    <div id="home-page">
      <Header 
      />
      <InfoBody />
      <Footer />
    </div>
  );
}

export default App;
