import { Route, Routes } from "react-router-dom";
import {Login} from "./Login";


export const MainRoutes = () => {
  return (
    <Routes>
      {/* Provide all Routes here */}
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
};
