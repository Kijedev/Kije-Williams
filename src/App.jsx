import { Routes, Route } from "react-router";
import "./App.css";
import "@fontsource/poppins";
// components
import NavbarMenu from "./components/NavbarMenu";
import Homepage from "./components/Homepage";
import ScrollToTop from "./components/ScrollToTop";
// pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Certification from "./pages/Certification";
import CustomCursor from "./components/ui/CustomCursor";
import TimelineDemo from "./components/ui/TimelineDemo";
import JetonLink from "./Details/Jeton";
import AiTeachaLink from "./Details/AiTeacha";
import NotFound from "./components/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";
import MainLayout from "./layouts/MainLayout";
function App() {
  return (
    <>
      <CustomCursor />
      <ScrollToTop />
      
      <ErrorBoundary>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<TimelineDemo />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/certification" element={<Certification />} />
            <Route path="/jeton" element={<JetonLink />} />
            <Route path="/aiteacha" element={<AiTeachaLink />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
