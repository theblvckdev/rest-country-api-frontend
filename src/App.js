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
      <main className={`${themeChange ? "bg-bgDark" : "bg-bgLight"} min-h-screen pb-5`}>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/country/:countryName" element={<CountryInfo />} />
          </Routes>
        </Router>
      </main>
    </>
  );
};

export default App;
