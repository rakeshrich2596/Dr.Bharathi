
import Seo from "../components/Seo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DrBharathi() {
  const doctorSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Bharathi V",
    "medicalSpecialty": [
      "Obstetric",
      "Gynecologic"
    ],
    "url": "https://drbharati.netlify.app/",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mandaveli, Chennai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "worksFor": {
      "@type": "MedicalClinic",
      "name": "Bharati Fertility & Women Center"
    }
  };

  return (
    <>
      <Seo
        title="Dr. Bharathi V – Gynaecologist & Fertility Specialist in Mandaveli, Chennai"
        description="Consult Dr. Bharathi V, obstetrician, gynaecologist and fertility specialist at Bharati Fertility & Women Center, Mandaveli, Chennai. Care for PCOS, periods, pregnancy and fertility. Book online."
        path="/dr-bharathi-v-gynaecologist-mandaveli-chennai/"
        schema={doctorSchema}
      />

      <Navbar />

      <main>
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-[#064F63] sm:text-4xl">
            Dr. Bharathi V – Gynaecologist &amp; Fertility Specialist in
            Mandaveli, Chennai
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Dr. Bharathi V is an Obstetrician, Gynaecologist and Fertility
            Consultant at Bharati Fertility &amp; Women Center, Mandaveli,
            Chennai. She provides care for women's health concerns,
            PCOS, menstrual problems, pregnancy and fertility.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
