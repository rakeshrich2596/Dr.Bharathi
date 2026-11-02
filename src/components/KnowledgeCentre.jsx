
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
    title: "Menstrual Health & Ovulation",
    subtitle: "Understand your cycle",
    description:
      "Learn how irregular periods, painful periods and missed periods can relate to ovulation, and when a gynaecologist’s assessment can help, especially if you are planning to conceive.",
    tags: ["Irregular periods", "Ovulation", "Cycle changes"],
  },
  {
    number: "02",
    title: "PCOS & Hormonal Health",
    subtitle: "Know more about hormonal changes",
    description:
      "Understand PCOS, its common symptoms and how it can affect ovulation and fertility, and what evaluation and treatment options a doctor may discuss.",
    tags: ["PCOS", "Hormones", "Ovulation"],
  },
  {
    number: "03",
    title: "Low AMH & Ovarian Reserve",
    subtitle: "Understand your egg reserve",
    description:
      "Learn what the AMH test measures, what a low AMH result may mean, and how scans and follicular monitoring help plan the next step.",
    tags: ["AMH", "Low AMH", "Follicular monitoring"],
  },
  {
    number: "04",
    title: "Tube Block",
    subtitle: "Understand blocked fallopian tubes",
    description:
      "Learn how blocked tubes can affect conception, how they are assessed, and which treatment options may be considered.",
    tags: ["Fallopian tubes", "Tube assessment"],
  },
  {
    number: "05",
    title: "IUI, IVF & ICSI",
    subtitle: "Understand available treatment options",
    description:
      "Get a general introduction to IUI, IVF and ICSI. Suitable options depend on each couple’s medical assessment and circumstances.",
    tags: ["IUI", "IVF", "ICSI"],
  },
  {
    number: "06",
    title: "Male Fertility",
    subtitle: "Fertility is a shared concern",
    description:
      "Learn about low sperm count, azoospermia, DNA fragmentation and sperm retrieval procedures such as TESA and PESA, and when a male fertility evaluation is advised.",
    tags: ["Low sperm count", "Azoospermia", "TESA / PESA"],
  },
  {
    number: "07",
    title: "Recurrent Miscarriage",
    subtitle: "When pregnancy loss repeats",
    description:
      "Learn about the possible causes of repeated miscarriage, the investigations a doctor may suggest and why early assessment matters.",
    tags: ["Recurrent miscarriage", "Investigations"],
  },
];

export default function KnowledgeCentre() {
  const [activeTopic, setActiveTopic] = useState(0);

  return (
    <section
      id="knowledge"
      className="bg-[#FFF5F7] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#C92855]" />

              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#C92855]">
                Fertility & Gynaecology Knowledge Centre
              </span>
            </div>

            <h2 className="max-w-xl text-3xl font-bold leading-tight text-[#064F63] sm:text-4xl lg:text-4xl">
              Knowledge That Helps You Make
              <span className="text-[#C92855]">
                {" "}Informed Decisions
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              Explore general information on gynaecology and fertility
              topics, from periods and PCOS to IVF and male fertility,
              from Dr. Bharathi. V, gynaecologist and fertility specialist
              in Mandaveli, Chennai.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

          {/* Left Information Panel */}
          <div className="relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-3xl bg-[#064F63] p-7 text-white sm:p-10">

            {/* Decorative Circles */}
            <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-white/10" />

            <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full border border-white/10" />

            <div className="relative">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <BookOpen size={28} strokeWidth={1.6} />
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-pink-200">
                Your Health, Your Understanding
              </p>

              <h3 className="max-w-sm text-2xl font-semibold leading-snug sm:text-3xl">
                Every fertility journey begins with the right information.
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/75 sm:text-base">
                Explore these topics at your own pace and use them as
                a starting point for a conversation with your doctor.
              </p>
            </div>

            <a
              href="#appointment"
              className="relative mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#064F63] transition hover:bg-pink-100"
            >
              Discuss Your Concerns with Dr. Bharathi. V
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Expandable Topic List */}
          <div className="divide-y divide-[#EBD9E5] border-y border-[#EBD9E5]">
            {healthTopics.map((topic, index) => {
              const isActive = activeTopic === index;

              return (
                <div key={topic.number} className="py-1">

                  {/* Topic Header */}
                  <button
                    type="button"
                    onClick={() =>
                      setActiveTopic(isActive ? -1 : index)
                    }
                    aria-expanded={isActive}
                    aria-controls={`knowledge-answer-${index}`}
                    className="group flex w-full items-center gap-4 py-5 text-left sm:gap-5 sm:py-6"
                  >
                    <span
                      className={`shrink-0 text-sm font-bold ${
                        isActive
                          ? "text-[#C92855]"
                          : "text-gray-400"
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

                    {/* Expand / Collapse Icon */}
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

                  {/* Topic Description */}
                  {isActive && (
                    <div
                      id={`knowledge-answer-${index}`}
                      className="pb-6 pl-9 pr-2 sm:pl-12 sm:pr-12"
                    >
                      <p className="text-sm leading-7 text-gray-600 sm:text-base">
                        {topic.description}
                      </p>

                      {/* Topic Tags */}
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
            purposes only. It is not a substitute for professional
            medical advice, diagnosis, or treatment. Please consult a
            qualified healthcare professional about your individual
            concerns.
          </p>
        </div>

      </div>
    </section>
  );
}
