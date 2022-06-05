import { Routes, Route, useNavigate } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./container/Home";

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/*" element={<Home />} />
      </Route>
    </Routes>
  );
};
export default App;
