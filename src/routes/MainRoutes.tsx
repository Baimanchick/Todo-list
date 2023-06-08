import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import HomePage from "../pages/HomePage";
import InfoPage from "../pages/InfoPage";

const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<MainLayouts />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/info" element={<InfoPage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
