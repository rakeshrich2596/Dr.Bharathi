import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AppointmentForm from "./components/AppointmentForm";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Approach from "./components/Approach";
import WhenToConsult from "./components/WhenToConsult";
import KnowledgeCentre from "./components/KnowledgeCentre";
import Testimonials from "./components/Testimonials";
import VisitClinic from "./components/VisitClinic";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

import DrBharathi from "./pages/DrBharathi";
import OvulationCalculator from "./pages/OvulationCalculator";

function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <AppointmentForm />
        <About />
        <Expertise />
        <Approach />
        <WhenToConsult />
        <KnowledgeCentre />
        <Testimonials />
        <VisitClinic />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ovulation-calculator" element={<OvulationCalculator />} />

      <Route
        path="/dr-bharathi-v-gynaecologist-mandaveli-chennai/"
        element={<DrBharathi />}
      />
    </Routes>
  );
}