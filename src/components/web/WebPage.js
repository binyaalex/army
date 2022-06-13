import "./WebPage.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav";
// import Footer from "./footer/Footer";

const WebPage = () => {
  return (
    <div className="webPage">
      <Nav />
      <Routes>
        {/*<Route path="home" element={<Home />} />*/}
      </Routes>
      {/*<Footer />*/}
    </div>
  );
};

export default WebPage;
