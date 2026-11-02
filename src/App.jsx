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
    "@type": "Physician",
    name: "Dr. Bharathi V",
    medicalSpecialty: ["Obstetric", "Gynecologic"],

    url: "https://drbharatigynecologist.com/",
    image: "https://drbharatigynecologist.com/images/about2.png",
    telephone: ["+918220052005", "+919791154545"],
    email: "bharatifertility@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "New No. 49, Old No. 21, Venkatakrishna Road, Opposite Bank of Baroda",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600028",
      addressCountry: "IN",
    },
  };

  return (
    <>
      <Seo
        title="Dr. Bharathi V – Gynaecologist & Fertility Specialist in Mandaveli, Chennai"
        description="Consult Dr. Bharathi V, obstetrician, gynaecologist and fertility specialist at Bharati Fertility & Women Center, Mandaveli, Chennai. Care for PCOS, periods, pregnancy and fertility. Book online."
        path="/"
        ogTitle="Dr. Bharathi V – Gynaecologist & Fertility Specialist, Mandaveli"
        ogDescription="Dr. Bharathi V, gynaecologist and fertility specialist in Mandaveli, Chennai. IVF, IUI, PCOS, tube block and miscarriage care. Book a consultation."
        ogType="website"
        image="/og-image.png"
        imageAlt="Dr. Bharathi V - Bharati Fertility & Women Center"
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

      <Route path="/ovulation-calculator" element={<OvulationCalculator />} />

      <Route
        path="/dr-bharathi-v-gynaecologist-mandaveli-chennai/"
        element={<DrBharathi />}
      />
    </Routes>
  );
}
