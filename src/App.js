import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";
import { ThemeContext } from "./context/themeContext";
import CountryInfo from "./pages/countryInfo";

const App = () => {
  const { themeChange } = useContext(ThemeContext);

  return (
    <>
      <div className={`${themeChange ? "bg-bgDark" : "bg-bgLight"} h-full`}>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/country/:countryName" element={<CountryInfo />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
