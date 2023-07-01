import { Routes,Route} from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard"
import Login from "./Login"
import SingleRestaurantPage from "./SingleRestaurantPage"
function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/single" element={<SingleRestaurantPage/>}/>
      </Routes>
    </div>
  );
}

export default AllRoutes;
