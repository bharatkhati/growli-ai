import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
const PrimaryLayout = lazy(() => import("./PrimaryLayout"));

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="*" element={<PrimaryLayout />} />
      </Routes>
    </Suspense>
  );
};

export default App;
