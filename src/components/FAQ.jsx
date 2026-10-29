import React, { useState } from "react";
import {
  Plus,
  Minus,
  MessageCircleQuestion,
  CalendarDays,
  ArrowUpRight,
  HeartPulse,
} from "lucide-react";

const faqData = [
  {
    question: "When should I consult a fertility specialist?",
    answer:
      "Consider consulting a fertility specialist if you have been trying to conceive for 12 months without success, or after 6 months if you are 35 or older. If you have irregular periods or a known reproductive health concern, you may benefit from an earlier consultation.",
  },
  {
    question: "What fertility treatments are available?",
    answer:
      "Depending on your individual needs, treatment options may include ovulation induction, fertility medications, intrauterine insemination (IUI), or in vitro fertilisation (IVF). Your doctor can explain suitable options after evaluating your medical history and test results.",
  },
  {
    question: "What is the difference between IVF and IUI?",
    answer:
      "IUI involves placing prepared sperm into the uterus around ovulation. IVF involves fertilising an egg with sperm in a laboratory and transferring an embryo into the uterus. The appropriate treatment depends on several factors, including your diagnosis and fertility assessment.",
  },
  {
    question: "Can PCOS affect my chances of getting pregnant?",
    answer:
      "PCOS can affect ovulation and make conception more difficult for some women. However, many women with PCOS conceive with appropriate guidance and treatment. A gynaecologist can help assess your individual situation and discuss available options.",
  },
  {
    question: "What should I bring to my first consultation?",
    answer:
      "Bring any previous medical reports, ultrasound scans, blood test results, current medication details, and relevant fertility treatment records. If available, menstrual cycle information can also help your doctor understand your concerns.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "You can use the appointment enquiry form on this website to share your contact details and preferred consultation time. The clinic team can then help confirm availability and the next steps.",
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
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-100 bg-white px-4 py-2 shadow-sm">
            <MessageCircleQuestion
              size={17}
              className="text-[#C92855]"
            />

            <span className="text-xs font-bold uppercase tracking-[1.8px] text-[#C92855] sm:text-sm">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#064F63] sm:text-4xl lg:text-5xl">
            Everything You Need <span className="mt-2 inline-block text-[#C92855]">
              to Know
            </span>
            
          </h2>
        </div>

        {/* FAQ Layout */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">

          {/* Left Information Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#064F63] via-[#5B194D] to-[#7B225D] p-7 text-white shadow-xl shadow-[#064F63]/10 sm:p-9">

            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border-[25px] border-white/5" />

            <div className="relative">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-pink-300 ring-1 ring-white/10">
                <HeartPulse size={30} strokeWidth={1.7} />
              </div>

              <h3 className="text-2xl font-bold leading-snug sm:text-3xl">
                Have More
                <span className="block text-pink-300">
                  Questions?
                </span>
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">
                Every woman's health journey is different.
                Speak with our clinic team to understand your
                consultation options.
              </p>

              <div className="my-7 h-px bg-white/15" />

              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-pink-300">
                  <CalendarDays size={21} />
                </div>

                <div>
                  <h4 className="font-bold">
                    Need an Appointment?
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-white/65">
                    Send an enquiry through our website.
                  </p>
                </div>
              </div>

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

        {/* Bottom Contact Note */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-pink-100 bg-white/80 p-5 text-center sm:flex-row sm:px-7 sm:text-left">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pink-50 text-[#C92855]">
              <HeartPulse size={22} />
            </div>

            <p className="max-w-xl text-sm leading-6 text-gray-600">
              Need personalised medical guidance? Please consult
              a qualified healthcare professional.
            </p>
          </div>

          <a
            href="#appointment"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#C92855] transition hover:text-[#064F63]"
          >
            Contact Our Team
            <ArrowUpRight size={17} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQ;