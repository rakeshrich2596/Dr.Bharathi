
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
import Seo from "./components/Seo";

import DrBharathi from "./pages/DrBharathi";
import OvulationCalculator from "./pages/OvulationCalculator";

function HomePage() {
  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Bharati Fertility & Women Center",
    "url": "https://drbharati.netlify.app/",
    "telephone": [
      "+918220052005",
      "+919791154545"
    ],
    "email": "bharatifertility@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress":
        "New No. 49, Old No. 21, Venkatakrishna Road, Opposite Bank of Baroda",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600028",
      "addressCountry": "IN"
    }
  };

  return (
    <>
      <Seo
        title="Bharati Fertility & Women Center | Gynaecologist in Mandaveli, Chennai"
        description="Consult Dr. Bharathi V at Bharati Fertility & Women Center, Mandaveli, Chennai for gynaecology, PCOS, pregnancy and fertility care."
        path="/"
        schema={clinicSchema}
      />

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

      <Route
        path="/ovulation-calculator"
        element={<OvulationCalculator />}
      />

      <Route
        path="/dr-bharathi-v-gynaecologist-mandaveli-chennai/"
        element={<DrBharathi />}
      />
    </Routes>
  );
}
