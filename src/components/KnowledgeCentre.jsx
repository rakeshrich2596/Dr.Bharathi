
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  Heart,
} from "lucide-react";

const healthTopics = [
  {
    number: "01",
    title: "Menstrual Health",
    subtitle: "Understand your menstrual cycle",
    description:
      "Learn about menstrual cycle changes, irregular periods, painful menstruation, and when it may be helpful to consult a gynaecologist.",
    tags: ["Periods", "Cycle changes", "Menstrual care"],
  },
  {
    number: "02",
    title: "PCOS & Hormonal Health",
    subtitle: "Know more about hormonal changes",
    description:
      "Understand common PCOS-related concerns, possible hormonal symptoms, and why individual assessment is important for choosing the right care.",
    tags: ["PCOS", "Hormones", "Women's wellness"],
  },
  {
    number: "03",
    title: "Pregnancy & Maternity Care",
    subtitle: "Prepare for your pregnancy journey",
    description:
      "Explore general information about pregnancy planning, antenatal consultations, and the importance of regular medical guidance during pregnancy.",
    tags: ["Pregnancy", "Planning", "Antenatal care"],
  },
  {
    number: "04",
    title: "Fertility & Reproductive Health",
    subtitle: "Explore fertility-related concerns",
    description:
      "Learn about fertility consultations, common factors that may affect conception, and when couples may consider seeking professional guidance.",
    tags: ["Fertility", "Conception", "Consultation"],
  },
  {
    number: "05",
    title: "IUI, IVF & Fertility Treatments",
    subtitle: "Understand available treatment options",
    description:
      "Get a general introduction to IUI, IVF, and ICSI. Suitable options depend on each person's or couple's medical assessment and circumstances.",
    tags: ["IUI", "IVF", "ICSI"],
  },
  {
    number: "06",
    title: "Gynaecological Procedures",
    subtitle: "Learn about treatment discussions",
    description:
      "Understand why a doctor may discuss a gynaecological procedure, including laparoscopic approaches, and what questions you can ask during consultation.",
    tags: ["Laparoscopy", "Treatment options", "Patient guidance"],
  },
];

export default function KnowledgeCentre() {
  const [activeTopic, setActiveTopic] = useState(0);

  return (
    <section id="knowledge" className="bg-[#FFF5F7] py-20 sm:py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#C92855]" />
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#C92855]">
                Women's Health Knowledge Centre
              </span>
            </div>

            <h2 className="max-w-xl text-3xl font-bold leading-tight text-[#064F63] sm:text-4xl lg:text-4xl">
              Knowledge That Helps You Make
              <span className="text-[#C92855]"> Informed Decisions</span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              Understanding your health is an important part of caring for
              yourself. Explore general information about women's health,
              reproductive health, and fertility-related topics.
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Left information panel */}
          <div className="relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-3xl bg-[#064F63] p-7 text-white sm:p-10">
            <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-white/10" />
            <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full border border-white/10" />

            <div className="relative">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <BookOpen size={28} strokeWidth={1.6} />
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-pink-200">
                Your health, your understanding
              </p>

              <h3 className="max-w-sm text-2xl font-semibold leading-snug sm:text-3xl">
                Every health journey begins with the right information.
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/75 sm:text-base">
                Explore these topics at your own pace. Use the information
                as a starting point for meaningful conversations with your
                healthcare professional.
              </p>
            </div>

            <a
              href="#appointment"
              className="relative mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#064F63] transition hover:bg-pink-100"
            >
              Discuss Your Concerns
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Expandable topic list */}
          <div className="divide-y divide-[#EBD9E5] border-y border-[#EBD9E5]">
            {healthTopics.map((topic, index) => {
              const isActive = activeTopic === index;

              return (
                <div key={topic.number} className="py-1">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveTopic(isActive ? -1 : index)
                    }
                    aria-expanded={isActive}
                    className="group flex w-full items-center gap-4 py-5 text-left sm:gap-5 sm:py-6"
                  >
                    <span
                      className={`shrink-0 text-sm font-bold ${
                        isActive ? "text-[#C92855]" : "text-gray-400"
                      }`}
                    >
                      {topic.number}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span
                        className={`block text-lg font-bold transition sm:text-xl ${
                          isActive
                            ? "text-[#064F63]"
                            : "text-gray-700 group-hover:text-[#C92855]"
                        }`}
                      >
                        {topic.title}
                      </span>
                      <span className="mt-1 block text-sm text-gray-500">
                        {topic.subtitle}
                      </span>
                    </span>

                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition ${
                        isActive
                          ? "bg-[#C92855] text-white"
                          : "bg-white text-[#064F63] group-hover:bg-pink-100"
                      }`}
                    >
                      {isActive ? (
                        <ArrowDownRight size={20} />
                      ) : (
                        <ArrowUpRight size={20} />
                      )}
                    </span>
                  </button>

                  {isActive && (
                    <div className="pb-6 pl-9 pr-2 sm:pl-12 sm:pr-12">
                      <p className="text-sm leading-7 text-gray-600 sm:text-base">
                        {topic.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {topic.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[#F1D7E8] bg-white px-3 py-1.5 text-xs font-medium text-[#7A4569]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 flex items-start gap-3 rounded-2xl border border-[#F1D7E8] bg-white p-5">
          <Heart
            size={20}
            className="mt-0.5 shrink-0 text-[#C92855]"
          />
          <p className="text-xs leading-6 text-gray-500 sm:text-sm">
            The information provided here is for general educational
            purposes only. It is not a substitute for professional medical
            advice, diagnosis, or treatment. Please consult a qualified
            healthcare professional about your individual concerns.
          </p>
        </div>
      </div>
    </section>
  );
}
