
import {
  ArrowRight,
  HeartPulse,
  Stethoscope,
  Activity,
  Baby,
  Microscope,
  Flower2,
} from "lucide-react";

const areasOfCare = [
  {
    icon: Stethoscope,
    title: "Gynaecology and Menstrual Health",
  },
  {
    icon: HeartPulse,
    title: "PCOS and Hormonal Health",
  },
  {
    icon: Baby,
    title: "Pregnancy and Obstetric Care",
  },
  {
    icon: Microscope,
    title: "Laparoscopic Surgery",
  },
  {
    icon: Activity,
    title: "Fertility, IUI and IVF Guidance",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute left-0 top-24 h-72 w-72 rounded-full bg-rose-100/60 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-72 w-72 rounded-full bg-cyan-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-4xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-rose-600 sm:text-sm">
            <HeartPulse size={16} />
            About Dr. Bharathi. V
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[42px]">
            Meet Dr. Bharathi. V
          </h2>

          <p className="mt-3 text-base font-semibold leading-7 text-cyan-800 sm:text-lg">
            Obstetrician, Gynaecologist &amp; Fertility Specialist in
            Mandaveli, Chennai
          </p>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-rose-500 via-orange-400 to-cyan-600" />
        </div>

        {/* Doctor Profile */}
        <div className="grid items-center gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">

          {/* Doctor Image */}
          <div className="mx-auto w-full max-w-lg lg:sticky lg:top-28">
            <div className="relative rounded-[2rem] bg-gradient-to-br from-rose-100 via-orange-50 to-cyan-100 p-3 shadow-[0_20px_55px_-28px_rgba(15,23,42,0.4)]">

              <div className="overflow-hidden rounded-[1.55rem] bg-white">
                <img
                  src="/images/about2.png"
                  alt="Dr. Bharathi. V - Obstetrician, Gynaecologist and Fertility Specialist"
                  className="h-[450px] w-full object-cover object-top sm:h-[550px] lg:h-[620px]"
                  loading="lazy"
                />
              </div>

              {/* Image Information Card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-lg backdrop-blur">
                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-orange-400 text-white">
                    <HeartPulse size={22} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-900 sm:text-base">
                      Care with clarity and compassion
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">
                      Personalised guidance for every woman's health journey
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Doctor Description */}
          <div className="min-w-0">

            <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_12px_40px_-28px_rgba(15,23,42,0.28)] sm:p-7 lg:p-8">

              <div className="mb-5 flex items-center gap-3">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                  <Stethoscope size={22} />
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
                  About Dr. Bharathi. V
                </h3>

              </div>

              <p className="text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
                Dr. Bharathi. V provides care across women’s health, from
                menstrual and hormonal concerns and PCOS to pregnancy care,
                laparoscopic surgery and fertility treatment. Her approach
                is built on listening first, explaining clearly, and planning
                treatment around each woman’s individual needs.
              </p>

              {/* Areas of Care */}
              <div className="mt-8 border-t border-slate-100 pt-6">

                <div className="mb-5 flex items-center gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                    <Flower2 size={21} />
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 sm:text-xl">
                    Areas of Care
                  </h3>

                </div>

                <div className="grid gap-3 sm:grid-cols-2">

                  {areasOfCare.map(({ icon: Icon, title }) => (
                    <div
                      key={title}
                      className="flex min-h-[76px] items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 transition duration-300 hover:border-rose-200 hover:bg-rose-50/50"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-rose-600 shadow-sm">
                        <Icon size={20} />
                      </span>

                      <p className="text-sm font-semibold leading-5 text-slate-700">
                        {title}
                      </p>
                    </div>
                  ))}

                </div>
              </div>

              {/* CTA */}
              <a
                href="#appointment"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#C92855] px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-rose-200/70 transition duration-300 hover:-translate-y-0.5 hover:bg-[#ad2048] sm:w-auto sm:px-6"
              >
                Book a Consultation with Dr. Bharathi. V
                <ArrowRight size={18} />
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
