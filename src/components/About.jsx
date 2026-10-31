import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Stethoscope,
  UserRoundCheck,
} from "lucide-react";

const qualifications = [
  {
    title: "MBBS",
    detail: "Sri Ramachandra University, Chennai",
  },
  {
    title: "MS – Obstetrics & Gynaecology",
    detail: "Sri Ramachandra University, Chennai",
  },
  {
    title: "Postdoctoral Fellowship",
    detail: "Reproductive Medicine, Madras Medical Mission",
  },
  {
    title: "Diploma in Reproductive Medicine",
    detail: "Kiel, Germany",
  },
];

const expertise = [
  { icon: Stethoscope, title: "Obstetrics & Gynaecology" },
  { icon: HeartPulse, title: "Reproductive Medicine" },
  { icon: Microscope, title: "Laparoscopic Surgery Training" },
  { icon: UserRoundCheck, title: "Patient Counselling" },
];

const principles = [
  "Evidence-based practice",
  "Ethical treatment",
  "Detailed patient counselling",
  "Clear treatment discussions",
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute left-0 top-24 h-72 w-72 rounded-full bg-rose-100/60 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-72 w-72 rounded-full bg-cyan-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-rose-600 sm:text-sm">
            <HeartPulse size={16} />
            About Dr. V. Bharathi
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[42px]">
            Meet Dr. V. Bharathi
          </h2>
          <p className="mt-2 text-lg font-semibold text-cyan-800 sm:text-xl">
            Senior Obs &amp; Gynaecologist | Fertility consultant & laparoscopic surgeon in Chennai
          </p>
          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-rose-500 via-orange-400 to-cyan-600" />
        </div>

        {/* Balanced two-column profile */}
        <div className="grid items-start gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">
          {/* Image panel */}
          <div className="mx-auto  w-full max-w-lg lg:sticky lg:top-28">
            <div className="relative rounded-[2rem] bg-gradient-to-br from-rose-100 via-orange-50 to-cyan-100 p-3 shadow-[0_20px_55px_-28px_rgba(15,23,42,0.4)]">
              <div className="overflow-hidden rounded-[1.55rem] bg-white">
                <img
                  src="/images/about2.png"
                  alt="Dr. V. Bharathi"
                  className="h-[450px] w-full object-cover object-top sm:h-[550px] lg:h-[620px]"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-lg backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-orange-400 text-white">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 sm:text-base">
                      Care with clarity and compassion
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">
                      A patient-focused approach to women’s health
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text panel */}
          <div className="min-w-0">
            <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_12px_40px_-28px_rgba(15,23,42,0.28)] sm:p-7 lg:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                  <Stethoscope size={22} />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
                  Professional Profile
                </h3>
              </div>

              <div className="space-y-4 text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-7">
                <p>
                  Dr. V. Bharathi has a professional background in obstetrics,
                  gynaecology and reproductive medicine, with additional
                  training in laparoscopic surgery.
                </p>
                <p>
                  She completed her MBBS and MS in Obstetrics and Gynaecology
                  at Sri Ramachandra University, Chennai. Her further training
                  includes a postdoctoral fellowship in reproductive medicine
                  from Madras Medical Mission and a Diploma in Reproductive
                  Medicine from Kiel, Germany.
                </p>
                <p>
                  As Medical Director of Bharati Fertility Center, located in
                  Mandaveli, Chennai, Dr. V. Bharathi&apos;s stated approach
                  emphasises evidence-based practice, ethical treatment and
                  detailed patient counselling.
                </p>
                <p>
                  Her focus is on understanding each patient&apos;s medical
                  history, recommending appropriate investigations and
                  discussing treatment options clearly. This helps patients
                  understand the reasoning behind their care and participate
                  in decisions about their health.
                </p>
              </div>

              {/* Qualifications */}
              {/* <div className="mt-7 border-t border-slate-100 pt-6">
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                    <GraduationCap size={20} />
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900">
                    Education & Qualifications
                  </h3>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {qualifications.map((item) => (
                    <div
                      key={item.title}
                      className="flex min-h-[94px] gap-2.5 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 transition hover:border-rose-100 hover:bg-rose-50/40"
                    >
                      <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-rose-500" />
                      <div>
                        <p className="text-sm font-bold leading-5 text-slate-900">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm leading-5 text-slate-600">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}

              <a
                href="#expertise"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#C92855] px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-rose-200/70 transition hover:-translate-y-0.5 hover:bg-[#ad2048] sm:w-auto"
              >
                Explore Dr. V. Bharathi&apos;s Expertise
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Expertise cards */}
        <div id="expertise" className="scroll-mt-28 pt-16">
          <div className="mb-7 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
              Areas of focus
            </p>
            <h3 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Experience focused on women’s health
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {expertise.map(({ icon: Icon, title }) => (
              <div
                key={title}
                className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                  <Icon size={22} />
                </span>
                <p className="text-sm font-bold leading-5 text-slate-800">{title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Care principles */}
        <div className="mt-10 rounded-3xl bg-gradient-to-r from-[#064F63] via-[#087D8B] to-[#0875C9] p-6 text-white sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">
                The care approach
              </p>
              <h3 className="mt-2 text-2xl font-extrabold leading-tight sm:text-3xl">
                Informed decisions.
                <span className="block text-rose-200">Personalised care.</span>
              </h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {principles.map((principle) => (
                <div key={principle} className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="shrink-0 text-orange-300" />
                  <span className="text-sm font-medium leading-6 text-white/95 sm:text-base">
                    {principle}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
