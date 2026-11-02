
import React, { useState } from "react";
import {
  Plus,
  Minus,
  MessageCircleQuestion,
  ArrowUpRight,
  HeartPulse,
} from "lucide-react";

const faqData = [
  {
    question: "Should I see a gynaecologist or a fertility specialist?",
    answer:
      "For period problems or pelvic pain, see a gynaecologist. For trouble conceiving, see a fertility specialist. Dr. Bharathi. V is both, so one consultation covers either.",
  },
  {
    question: "When should I consult a fertility specialist?",
    answer:
      "After 12 months of trying without success, or 6 months if you are 35 or older. See her earlier if you have irregular periods, PCOS or repeated miscarriages.",
  },
  {
    question: "What is the difference between IUI and IVF?",
    answer:
      "In IUI, prepared sperm is placed inside the uterus. In IVF, eggs are fertilised in a laboratory and the embryo is transferred to the uterus. Your doctor will advise which suits you.",
  },
  {
    question: "Can PCOS affect my chances of getting pregnant?",
    answer:
      "Yes, it can cause irregular ovulation, which makes conceiving harder. Many women with PCOS can be helped with the right evaluation and treatment.",
  },
  {
    question: "What tests are done in a fertility evaluation?",
    answer:
      "Depending on your case: an AMH blood test, hormone tests, scans and follicular monitoring, a fallopian tube check, and a semen analysis for your partner.",
  },
  {
    question: "What should I bring to my first consultation?",
    answer:
      "Previous reports, scans and prescriptions, your period dates, and details of any earlier treatment or miscarriages. Bring your partner’s reports too, if you have them.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex((currentIndex) =>
      currentIndex === index ? -1 : index
    );
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#FFFAFD] to-[#FFF5FA] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-pink-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-100 bg-white px-4 py-2 shadow-sm">
            <MessageCircleQuestion
              size={17}
              className="text-[#C92855]"
            />

            <span className="text-xs font-bold uppercase tracking-[1.8px] text-[#C92855] sm:text-sm">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#064F63] sm:text-4xl lg:text-4xl">
            Fertility & Gynaecology FAQs: <span className="mt-2 inline-block text-[#C92855]">
              Everything You Need to Know
            </span>
            
          </h2>
        </div>

        {/* FAQ Layout */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">

          {/* Left Information Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#064F63] via-[#5B194D] to-[#7B225D] p-7 text-white shadow-xl shadow-[#064F63]/10 sm:p-9">

            {/* Decorative Circle */}
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border-[25px] border-white/5" />

            <div className="relative">

              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-pink-300 ring-1 ring-white/10">
                <HeartPulse size={30} strokeWidth={1.7} />
              </div>

              {/* Card Heading */}
              <h3 className="text-2xl font-bold leading-snug sm:text-3xl">
                Have More Questions?
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">
                Every couple’s fertility journey is different. Speak with
                Dr. Bharathi. V’s clinic team in Mandaveli to understand
                your consultation options.
              </p>

              <div className="my-7 h-px bg-white/15" />

              {/* Appointment Information */}
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-pink-300">
                  <HeartPulse size={21} />
                </div>

                <div>
                  <h4 className="font-bold">
                    Need Personalised Guidance?
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-white/65">
                    Our clinic team can help you understand your
                    consultation options.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="#appointment"
                className="group mt-7 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-[#C92855] px-5 py-4 text-sm font-bold text-white transition duration-300 hover:bg-[#D00079] focus:outline-none focus:ring-4 focus:ring-pink-300/40"
              >
                Enquire About an Appointment

                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              {/* Availability Note */}
              <p className="mt-4 text-center text-xs leading-5 text-white/55">
                Appointment availability is subject to confirmation.
              </p>
            </div>
          </div>

          {/* Right FAQ Accordion */}
          <div className="space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                    isOpen
                      ? "border-pink-200 shadow-[0_10px_30px_rgba(240,0,139,0.07)]"
                      : "border-gray-100 shadow-sm hover:border-pink-100"
                  }`}
                >
                  {/* Question Button */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="flex min-h-[76px] w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <span
                      className={`text-sm font-bold leading-6 sm:text-base ${
                        isOpen
                          ? "text-[#C92855]"
                          : "text-[#064F63]"
                      }`}
                    >
                      <span className="mr-3 text-xs font-bold text-gray-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {faq.question}
                    </span>

                    {/* Plus / Minus Icon */}
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                        isOpen
                          ? "bg-[#C92855] text-white"
                          : "bg-pink-50 text-[#C92855]"
                      }`}
                    >
                      {isOpen ? (
                        <Minus size={19} />
                      ) : (
                        <Plus size={19} />
                      )}
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    id={`faq-answer-${index}`}
                    hidden={!isOpen}
                    className="px-5 pb-6 sm:px-6"
                  >
                    <div className="mb-4 h-px bg-pink-100" />

                    <p className="text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
