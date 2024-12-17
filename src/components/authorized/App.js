import React, { Suspense, lazy, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
const PrimaryLayout = lazy(() => import("./PrimaryLayout"));
const Login = lazy(() => import("../Unauthorized/login"))

const App = () => {
  const [isLogin, setLogin] = useState(true);

  if (!isLogin) {
    return (
      <Suspense>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Navigate replace to="/login" />} />
        </Routes>
      </Suspense>
    );
  } else {
    return (
      <Suspense>
        <Routes>
          <Route path="*" element={<PrimaryLayout />} />
        </Routes>
      </Suspense>
    )
  }
};

export default App;
