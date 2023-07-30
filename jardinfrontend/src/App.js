import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admissions from "./pages/Admissions";
import About from "./pages/About";
import Services from "./pages/Services";
import Spaces from "./pages/Spaces";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import {
  HOME,
  ADMISSIONS,
  ABOUT,
  SERVICES,
  SPACES,
  GALLERY,
  LOGIN,
  NOTFOUND,
} from "./routes/PublicPaths";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={ADMISSIONS} element={<Admissions />} />
        <Route path={ABOUT} element={<About />} />
        <Route path={SERVICES} element={<Services />} />
        <Route path={SPACES} element={<Spaces />} />
        <Route path={GALLERY} element={<Gallery />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={NOTFOUND} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
