import Seo from "../components/Seo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DrBharathi() {
  return (
    <>
      <Seo
        title="Dr. V. Bharathi | Gynaecologist in Mandaveli, Chennai"
        description="Dr. V. Bharathi, Senior Obstetrician, Gynaecologist, Laparoscopic Surgeon and Fertility Specialist in Chennai."
        path="/dr-bharathi-v-gynaecologist-mandaveli-chennai/"
      />

      <Navbar />

      <main>
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-[#064F63] sm:text-4xl">
            Dr. V. Bharathi – Obstetrician &amp; Gynaecologist
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Dr. V. Bharathi provides women's healthcare, PCOS care, pregnancy
            consultation and reproductive medicine in Mandaveli, Chennai.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
