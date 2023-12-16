import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Dashbord from "./pages/Dashbord";
import Layout from "./layouts/Layout";
import Factor from "./pages/Factor";
import Login from "./pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index path="/dashbord" element={<Dashbord />} />
        <Route path="/factor" element={<Factor />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Route>
  )
);

export default router;
