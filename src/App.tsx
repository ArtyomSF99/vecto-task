import {
  Route,
  Router,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/home";
import Navbar from "./components/navbar";
import Layout from "./components/layout";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Layout children={<HomePage/>}/>}></Route>)
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
