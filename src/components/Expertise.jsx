import {
  HeartPulse,
  Activity,
  Baby,
  Flower2,
  Microscope,
  Stethoscope,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const expertiseAreas = [
  {
    title: "Gynaecology and Menstrual Health",
    description:
      "Changes in menstrual patterns, painful periods and irregular bleeding can have different causes. A gynaecological consultation can help assess these concerns and identify whether further investigation is needed.",
    icon: HeartPulse,
    accent: "pink",
  },
  {
    title: "PCOS and Hormonal Health",
    description:
      "Polycystic ovary syndrome (PCOS) can affect menstrual cycles, skin health and ovulation. Its symptoms and effects vary between individuals. Proper assessment helps guide an appropriate management plan.",
    icon: Activity,
    accent: "purple",
  },
  {
    title: "Pregnancy and Obstetric Care",
    description:
      "Pregnancy brings changing healthcare needs at every stage. Antenatal consultations help monitor maternal health, assess pregnancy-related concerns and provide guidance appropriate to each stage of pregnancy.",
    icon: Baby,
    accent: "blue",
  },
  {
    title: "Fertility and Reproductive Medicine",
    description:
      "Difficulty conceiving can involve female factors, male factors or a combination of both. Fertility evaluation helps identify possible contributing factors and determine the next steps based on the couple's circumstances.",
    icon: Flower2,
    accent: "teal",
  },
  {
    title: "IUI and IVF/ICSI",
    description:
      "Fertility treatment is not the same for everyone. Depending on the clinical assessment, treatment discussions may include intrauterine insemination (IUI), in vitro fertilisation (IVF) or intracytoplasmic sperm injection (ICSI).",
    icon: Microscope,
    accent: "orange",
  },
  {
    title: "Laparoscopic Surgery",
    description:
      "Laparoscopy is a minimally invasive surgical technique used for selected gynaecological conditions. The suitability of surgery depends on the diagnosis, symptoms and individual medical assessment.",
    icon: Stethoscope,
    accent: "rose",
  },
];

const accentStyles = {
  pink: {
    icon: "bg-pink-50 text-pink-600",
    marker: "bg-pink-500",
    hover: "hover:border-pink-200",
  },
  purple: {
    icon: "bg-purple-50 text-purple-600",
    marker: "bg-purple-500",
    hover: "hover:border-purple-200",
  },
  blue: {
    icon: "bg-sky-50 text-sky-700",
    marker: "bg-sky-500",
    hover: "hover:border-sky-200",
  },
  teal: {
    icon: "bg-teal-50 text-teal-700",
    marker: "bg-teal-500",
    hover: "hover:border-teal-200",
  },
  orange: {
    icon: "bg-orange-50 text-orange-600",
    marker: "bg-orange-500",
    hover: "hover:border-orange-200",
  },
  rose: {
    icon: "bg-rose-50 text-rose-600",
    marker: "bg-rose-500",
    hover: "hover:border-rose-200",
  },
};

export default function Expertise() {
  return (
    <section
      id="medical-expertise"
      className=" scroll-mt-24 bg-gradient-to-b from-white to-slate-50/70 py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-100 bg-pink-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#C92855] sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-[#C92855]" />
            Areas of Medical Expertise
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Women&apos;s Health Concerns
            <span className="mt-1 block bg-gradient-to-r from-[#C92855] via-[#F47A45] to-[#0875C9] bg-clip-text text-transparent">
              That Deserve Attention
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Every health concern has its own context. Understanding the symptoms,
            medical history and individual needs is an important part of deciding
            what care may be appropriate.
          </p>
        </div>

        {/* Equal-height cards with aligned titles, descriptions and links */}
        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            const style = accentStyles[area.accent];

            return (
              <article
                key={area.title}
                className={`group grid h-full grid-rows-[auto_5.5rem_0.25rem_1fr_auto] rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.045)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(15,23,42,0.09)] sm:p-7 ${style.hover}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${style.icon}`}
                  >
                    <Icon size={26} strokeWidth={1.8} />
                  </div>
                  <span className="flex h-8 min-w-8 items-center justify-center rounded-full bg-slate-50 px-2 text-xs font-bold text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Fixed title area keeps every description starting at the same height */}
                <h3 className="mt-5 line-clamp-2 h-[5.5rem] overflow-hidden text-lg font-extrabold leading-7 text-slate-900 sm:text-xl">
                  {area.title}
                </h3>

                <div className={`mt-3 h-1 w-10 rounded-full ${style.marker}`} />

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-[15px]">
                  {area.description}
                </p>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <a
                    href="#appointment"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#C92855] transition-colors hover:text-[#0875C9]"
                  >
                    Book a Consultation
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/70 p-4 sm:items-center sm:p-5">
          <CheckCircle2 size={21} className="mt-0.5 shrink-0 text-[#0875C9] sm:mt-0" />
          <p className="text-xs leading-6 text-slate-600 sm:text-sm">
            Treatment suitability depends on individual medical assessment.
            This information is for general educational purposes.
          </p>
        </div>
      </div>
    </section>
  );
}
