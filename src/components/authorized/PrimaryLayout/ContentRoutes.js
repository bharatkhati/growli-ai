import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
const Dashboard = lazy(() => import("../Dashboard/index.js"));
const ContentRoutes = () => {
  return (
    <div>
      <Suspense fallback="./loading">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate replace to="/dashboard" />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default ContentRoutes;
