import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "src/layout/Layout";
import Home from "src/pages/HomePage/Home";
import Salons from "src/pages/Salons/Salons";
import Salon from "src/pages/SalonView/Salon";
import About from "src/pages/About/About";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="salons" element={<Salons />} />
        <Route path="salons/:salonid" element={<Salon />} />
        <Route path="about" element={<About />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
