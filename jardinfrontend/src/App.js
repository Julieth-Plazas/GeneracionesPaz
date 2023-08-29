import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Admissions from "./pages/Admissions";
import About from "./pages/About";
import Metodology from './pages/Metodology'
import Services from "./pages/Services";
import Spaces from "./pages/Spaces";
import Gallery from "./pages/Gallery";
import Contact from './pages/Contact'
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
  METODOLOGY,
  CONTACT,
} from "./routes/PublicPaths";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={ADMISSIONS} element={<Admissions />} />
        <Route path={METODOLOGY} element={<Metodology />} />
        <Route path={ABOUT} element={<About />} />
        <Route path={SERVICES} element={<Services />} />
        <Route path={SPACES} element={<Spaces />} />
        <Route path={GALLERY} element={<Gallery />} />
        <Route path={CONTACT} element={<Contact />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={NOTFOUND} element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
