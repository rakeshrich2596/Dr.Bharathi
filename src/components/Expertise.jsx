
import {
  HeartPulse,
  Activity,
  Baby,
  Flower2,
  Microscope,
  Syringe,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const expertiseAreas = [
  {
    id: 1,
    title: "Gynaecology and Menstrual Health",
    description:
      "Comprehensive care for women's reproductive health, including irregular periods, menstrual disorders, menstrual pain and other gynaecological concerns.",
    icon: HeartPulse,
    accent: "pink",
    points: [
      "Irregular and painful periods",
      "Menstrual health concerns",
      "General gynaecological care",
    ],
  },
  {
    id: 2,
    title: "PCOS and Hormonal Health",
    description:
      "Personalised evaluation and management of PCOS and hormonal concerns, with guidance based on individual symptoms, health needs and treatment goals.",
    icon: Activity,
    accent: "purple",
    points: [
      "PCOS evaluation and care",
      "Hormonal imbalance concerns",
      "Individualised treatment guidance",
    ],
  },
  {
    id: 3,
    title: "Pregnancy and Obstetric Care",
    description:
      "Support and guidance throughout pregnancy, with regular monitoring and personalised care to support the health and wellbeing of mother and baby.",
    icon: Baby,
    accent: "peach",
    points: [
      "Antenatal consultations",
      "Pregnancy monitoring",
      "Maternal health guidance",
    ],
  },
  {
    id: 4,
    title: "Fertility and Reproductive Medicine",
    description:
      "Individualised fertility assessment and treatment guidance to help couples understand their reproductive health and available fertility care options.",
    icon: Flower2,
    accent: "green",
    points: [
      "Fertility evaluation",
      "Reproductive health assessment",
      "Personalised treatment planning",
    ],
  },
  {
    id: 5,
    title: "IUI and IVF/ICSI",
    description:
      "Guidance on assisted reproductive treatments, including IUI and IVF/ICSI, to help couples understand suitable options based on their fertility assessment.",
    icon: Microscope,
    accent: "blue",
    points: [
      "IUI treatment guidance",
      "IVF treatment options",
      "Fertility treatment support",
    ],
  },
  {
    id: 6,
    title: "ICSI Treatment",
    description:
      "Understand how Intracytoplasmic Sperm Injection (ICSI) works, when it may be recommended, and how it can support your fertility treatment journey based on individual assessment.",
    icon: Syringe,
    accent: "rose",
    points: [
      "Understanding the ICSI procedure",
      "When ICSI may be recommended",
      "Individualised fertility guidance",
    ],
  },
];

const accentStyles = {
  pink: {
    icon: "bg-pink-100 text-pink-700",
    line: "bg-pink-400",
    hover: "group-hover:bg-pink-700",
  },
  purple: {
    icon: "bg-purple-100 text-purple-700",
    line: "bg-purple-400",
    hover: "group-hover:bg-purple-700",
  },
  peach: {
    icon: "bg-orange-100 text-orange-700",
    line: "bg-orange-400",
    hover: "group-hover:bg-orange-700",
  },
  green: {
    icon: "bg-green-100 text-green-700",
    line: "bg-green-400",
    hover: "group-hover:bg-green-700",
  },
  blue: {
    icon: "bg-blue-100 text-blue-700",
    line: "bg-blue-400",
    hover: "group-hover:bg-blue-700",
  },
  rose: {
    icon: "bg-rose-100 text-rose-700",
    line: "bg-rose-400",
    hover: "group-hover:bg-rose-700",
  },
};

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="relative overflow-hidden bg-[#fffaf8] py-20 md:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-pink-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-pink-200 bg-pink-50 px-5 py-2 text-sm font-semibold tracking-wide text-[#a43d61]">
            OUR AREAS OF EXPERTISE
          </span>

          <h2 className="text-3xl font-bold leading-tight text-[#542638] sm:text-4xl md:text-4xl">
            Specialised Care for{" "} <span className="text-[#b64d70]">
              Every Woman
            </span>
            
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
            From menstrual health and pregnancy care to advanced fertility
            treatment, we provide personalised guidance for every stage of
            your women's health journey.
          </p>
        </div>

        {/* Expertise cards */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseAreas.map((area) => {
            const Icon = area.icon;
            const style = accentStyles[area.accent];

            return (
              <div
                key={area.id}
                className="group flex h-full flex-col rounded-2xl border border-[#f1e2e5] bg-white p-7 shadow-[0_5px_25px_rgba(100,40,60,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-pink-200 hover:shadow-[0_15px_35px_rgba(100,40,60,0.10)] md:p-8"
              >
                {/* Icon */}
                <div className="mb-6 flex items-center justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${style.icon}`}
                  >
                    <Icon size={28} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-semibold text-gray-300">
                    0{area.id}
                  </span>
                </div>

                {/* Title */}
                <div className="min-h-[64px]">
                  <h3 className="text-xl font-bold leading-7 text-[#542638] transition-colors duration-300 group-hover:text-[#a43d61]">
                    {area.title}
                  </h3>
                </div>

                {/* Accent line */}
                <div
                  className={`mb-5 mt-3 h-1 w-12 rounded-full ${style.line} transition-all duration-300 group-hover:w-20`}
                />

                {/* Description */}
                <p className="mb-6 text-sm leading-7 text-gray-600 md:text-base">
                  {area.description}
                </p>

                {/* Points */}
                <ul className="mb-7 space-y-3">
                  {area.points.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-[#b64d70]"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto pt-2">
                  <a
                    href="#appointment"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#a43d61] transition-all duration-300 hover:gap-3"
                  >
                    Book a Consultation
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-sm leading-7 text-gray-500">
            Every woman's health needs are unique. Treatment options and
            recommendations are based on individual consultation and medical
            assessment.
          </p>

          <a
            href="#appointment"
            className="mt-7 inline-flex items-center justify-center gap-3 rounded-full bg-[#a43d61] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-pink-900/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#85304e] hover:shadow-xl"
          >
            Book a Consultation
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
