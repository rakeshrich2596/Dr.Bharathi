import Seo from "../components/Seo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DrBharathi() {
  return (
    <>
      <Seo
        title="Dr. Bharathi V – Gynaecologist in Mandaveli, Chennai"
        description="Dr. Bharathi V, Obstetrician & Gynaecologist in Mandaveli, Chennai, specialises in women's health, PCOS, pregnancy care and reproductive medicine."
        path="/dr-bharathi-v-gynaecologist-mandaveli-chennai/"
      />

      <Navbar />

      <main>
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-[#064F63] sm:text-4xl">
            Dr. Bharathi V – Obstetrician &amp; Gynaecologist
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Dr. Bharathi V provides women's healthcare, PCOS care,
            pregnancy consultation and reproductive medicine in
            Mandaveli, Chennai.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}