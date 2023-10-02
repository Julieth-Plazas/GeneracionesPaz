import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import Navbar from "./components/Navbar";
import Home from "./pages/UserPages/Home";
import Admissions from "./pages/UserPages/Admissions";
import About from "./pages/UserPages/About";
import Metodology from "./pages/UserPages/Metodology";
import Gallery from "./pages/UserPages/Gallery";
import Contact from "./pages/UserPages/Contact";
import Login from "./pages/UserPages/Login";
import NotFound from "./pages/UserPages/NotFound";
import PrivateRouteAdmin from "./components/PrivateRouteAdmin";
import PrivateRouteTeacher from "./components/PrivateRouteTeacher";
import Teachers from "./pages/AdminPages/Teachers";
import Games from "./pages/TeacherPages/Games";
import RegistUser from "./pages/AdminPages/RegistUser";
import CreateGalleries from "./pages/AdminPages/CreateGalleries";
import {
  HOME,
  ADMISSIONS,
  ABOUT,
  GALLERY,
  LOGIN,
  NOTFOUND,
  METODOLOGY,
  CONTACT,
} from "./routes/PublicPaths";
import {
  TEACHERS_ADMIN,
  TEACHER_GAMES,
  ADMIN_GALLERIES,
  ADMIN_POSTS,
  TEACHER_REGIST,
  CREATE_GALLERIES,
  CREATE_POST
} from "./routes/PrivatePaths";
import Footer from "./components/Footer";
import AdminProvider from "./context/AdminContext";
import UserProvider from "./context/TeacherContext";
import AdminGalleries from "./pages/AdminPages/AdminGalleries";
import AdminPosts from "./pages/AdminPages/AdminPosts";
import CreatePosts from "./pages/AdminPages/CreatePosts";

function App() {
  return (
    <PrimeReactProvider>
      <AdminProvider>
        <UserProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path={HOME} element={<Home />} />
              <Route path={ADMISSIONS} element={<Admissions />} />
              <Route path={METODOLOGY} element={<Metodology />} />
              <Route path={ABOUT} element={<About />} />
              <Route path={GALLERY} element={<Gallery />} />
              <Route path={CONTACT} element={<Contact />} />
              <Route path={LOGIN} element={<Login />} />
              <Route path={NOTFOUND} element={<NotFound />} />
              <Route
                path={TEACHERS_ADMIN}
                element={
                  <PrivateRouteAdmin>
                    <Teachers />
                  </PrivateRouteAdmin>
                }
              />
              <Route
                path={TEACHER_GAMES}
                element={
                  <PrivateRouteTeacher>
                    <Games />
                  </PrivateRouteTeacher>
                }
              />
              <Route
                path={TEACHER_REGIST}
                element={
                  <PrivateRouteAdmin>
                    <RegistUser />
                  </PrivateRouteAdmin>
                }
              />
              <Route
                path={ADMIN_GALLERIES}
                element={
                  <PrivateRouteAdmin>
                    <AdminGalleries />
                  </PrivateRouteAdmin>
                }
              />
              <Route
                path={CREATE_GALLERIES}
                element={
                  <PrivateRouteAdmin>
                    <CreateGalleries />
                  </PrivateRouteAdmin>
                }
              />
              <Route
                path={ADMIN_POSTS}
                element={
                  <PrivateRouteAdmin>
                    <AdminPosts />
                  </PrivateRouteAdmin>
                }
              />
              <Route
                path={CREATE_POST}
                element={
                  <PrivateRouteAdmin>
                    <CreatePosts />
                  </PrivateRouteAdmin>
                }
              />
            </Routes>
           
          </BrowserRouter>
        </UserProvider>
      </AdminProvider>
    </PrimeReactProvider>
  );
}

export default App;
