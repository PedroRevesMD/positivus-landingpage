import CallSection from "./components/CallSection";
import CaseStudies from "./components/CaseStudies";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Services from "./components/Services";
import Team from "./components/Team";
import WorkingProcess from "./components/WorkingProcess";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Logos />
      <Services />
      <CallSection />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <ContactUs />
      <Footer />
    </>
  );
}
