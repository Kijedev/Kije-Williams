import NavbarMenu from "../components/NavbarMenu";
import Footercta from "../components/Footercta";
import Footer from "../components/Footer";
import DotBackgroundDemo from "../components/ui/DotBackgroundDemo";
// pages
import Certification from "./Certification";
import CardDemo from "../components/ui/CardDemo";
import TimelineDemo from "../components/ui/TimelineDemo";

const Homepage = () => {
  return (
    <section className="bg-black min-h-screen overflow-hidden">
      {/* Navbar */}
      <NavbarMenu />

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center min-h-screen space-y-6">
        <DotBackgroundDemo />
      </div>

      {/* Projects */}
      <TimelineDemo />

      <CardDemo />

      {/* Certification */}
      <Certification />

      {/* Footer CTA */}
      <Footercta />

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default Homepage;
