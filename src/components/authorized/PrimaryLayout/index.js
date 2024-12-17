import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ContentRoutes from "./ContentRoutes";
import "./PrimaryLayout.scss";
const Sidebar = lazy(() => import("./Sidebar"));

const index = () => {
  return (
    <Suspense>
      <div className="inner-layout-main-wrapper">
        <div className="inner-layout-sidebar">
          <Sidebar />
        </div>
        <div className="inner-layout-content-wrapper">
          <ContentRoutes />
        </div>
      </div>
    </Suspense>
  );
};

export default index;
