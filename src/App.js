import "./App.scss";
import React from "react";
import AppHeader from "./components/AppHeader";
import Mainpage from "./pages/MainPage";

function App() {
  const aboutRef = React.useRef();
  const portFolioRef = React.useRef();
  const contactRef = React.useRef();
  const handleScrollMove = (type) => {
    eval(type).current.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  };
  return (
    <div className="page-contents">
      <AppHeader handleScrollMove={handleScrollMove} />
      <Mainpage
        aboutRef={aboutRef}
        portFolioRef={portFolioRef}
        contactRef={contactRef}
      />
    </div>
  );
}

export default App;
