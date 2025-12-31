import CallSection from "./components/CallSection";
import CaseStudies from "./components/CaseStudies";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import WorkingProcess from "./components/WorkingProcess";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <CallSection />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
}
