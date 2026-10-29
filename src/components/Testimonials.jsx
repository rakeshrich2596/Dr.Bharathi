
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Quote, Star, UserRound } from "lucide-react";

const testimonials = [
  {
    name: "Monisha Mathiyalagan",
    review:
      "Bharathi fertility center- one of the BEST hospital for fertility treatment.Hospital environment is very clean and calm well maintained by staff. Dr.Bharathi mam is the best doctor I h've known who takes care of patients in the best way....",
  },
  {
    name: "Suganya c",
    review:
      "I had a wonderful hospitality at bharati fertility center.The nurses were very helpful and polite to give the services.I had a wonderful experience here even though I am meeting first time to this center.",
  },
  {
    name: "Sathishkumar Theerthagiri",
    review:
      "First of all I like to thank Dr.Bharathi mam and staff's. I went treatment for pregnancy after miscarriage for PCOD problem Dr.Bharathi mam is lovely speak with at every time.The procedure and level of treatment is explained clearly.",
  },
  {
    name: "priya suriya",
    review:
      "We are very happy to announce that our dreams have  come true, we are very greatful to Dr Bharathi and her team , the way they gave us confidence and immense support . we glad to say that we have approached the right team at right time.",
  },
  {
    name: "Gowri Dhakshayani",
    review:
      "I am incredibly grateful to Dr. Bharati and the entire medical team at Bharati Fertility Centre for their exceptional care and support throughout my journey to motherhood.\n\nDr. Bharati played a crucial role in helping me conceive through IUI in the very first attempt. Her expertise and guidance made all the difference. She answers all our queries very patiently and explained all the procedures in detail.",
  },
  {
    name: "Ramya B",
    review:
      "This is Ramya, I like to convey my heart full thanks to Dr Bharathi mam and Dr Rashetha mam.\n\nVery friendly and carrying staff and the duty nurses.\n\nRashetha mam, We never forget your motivation, advice, treatment, care.\n\nRashetha mam and Bharathi mam very very very thank you so much.",
  },
  {
    name: "Pavithra Ruban",
    review:
      "First of all we thank Dr.bharathi mam. We are planning for pregnancy, after visiting bharathi fertility centre my self and my husband got hope and positive thoughts about pregnancy. We are happy to inform that now I am pregnant. Thanks to bharathi mam and all staffs for their support.",
  },
  {
    name: "shruthi shobana",
    review:
      "I had an exceptional experience at this hospital! The doctors and staff were incredibly supportive,taking the time to explain everthing in detail and addressing all my concerns.Their follow-up care was impressive and greatly appreciated.I highly recommend this hospital ,particularly for those seeking gynecological care.The team's dedication and compassion are truly commendable.Hats off to the entire team! Thank you for your outstanding service!.",
  },
  {
    name: "Brinda S.V",
    review:
      "I have been trying to get pregnant for last 6 years after visit to Bharathi Fertility Center now I am pregnant with twins.All the treatment and diagnosis are perfect for success.\n\nThank you Dr.Bharathi Mam and All the staffs",
  },
  {
    name: "A Vijayakumar",
    review:
      "My name kaleeswari.After 13years we got positive result.Thank you Dr.bharathi mam and Dr Rashetha mam.give good treatment.1st cycle of ivf treatment we got good result.Highy recommended 👏👍bharati fertility center.",
  },
  {
    name: "Arunraj Govindaraj",
    review:
      "Best treatment center with the most caring doctors, nurses, and staff. They explain every procedure clearly, provide excellent support throughout the journey, and create a positive, comforting environment that gives hope and confidence. Thank you for all your care, encouragement, and support in helping us on our pregnancy journey. We are truly grateful.",
  },
  {
    name: "Prasana Lakshmi Ramesh",
    review:
      "My sister in law have been trying to get pregnant for last 6 years after visit to Bharathi Fertility Center now she is pregnant with twins.All the treatment and diagnosis are perfect for success.",
  },
  {
    name: "Patient review",
    review:
      "I visited this clinic 4 years ago for a pregnancy consultation. After following the doctor's guidance, I got pregnant the next month. She is very friendly, professional, and explains everything clearly. I was blessed with a healthy baby girl who is now 4 years old. Recently, I came back for a general consultation, and I am happy to visit this clinic again. The staff are also very kind, caring, and supportive. Thank you to the doctor and the entire team for the excellent care and service throughout the years.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const updateView = () => {
      setCardsPerView(
        window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3
      );
    };

    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const maxIndex = testimonials.length - cardsPerView;

  useEffect(() => {
    setActiveIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, 4500);

    return () => window.clearInterval(timer);
  }, [paused, maxIndex]);

  const next = () =>
    setActiveIndex((current) => (current >= maxIndex ? 0 : current + 1));

  const previous = () =>
    setActiveIndex((current) => (current <= 0 ? maxIndex : current - 1));

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-br from-[#FFF5F7] via-white to-[#FCE7F3] py-16 sm:py-20 lg:py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#C92855]/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#0875C9]/[0.07] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C92855]/15 bg-white px-4 py-2">
            <Quote size={16} className="text-[#C92855]" />
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#064F63]">
              Patient Testimonials
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight text-[#064F63] sm:text-4xl lg:text-5xl">
            Our Patients,{" "}
            <span className="text-[#C92855]">Their Experiences</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Read feedback shared on the previous Bharathi Fertility Centre website.
          </p>
        </div>

        <div
          className="relative px-0 sm:px-10"
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <button
            type="button"
            onClick={previous}
            aria-label="Previous testimonials"
            className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#C92855]/15 bg-white text-[#064F63] shadow-md transition hover:bg-[#C92855] hover:text-white sm:flex"
          >
            <ArrowLeft size={19} />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex items-stretch transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * (100 / cardsPerView)}%)`,
              }}
            >
              {testimonials.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="flex shrink-0 self-stretch px-2 sm:px-3"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <article className="flex h-[350px] w-full flex-col overflow-hidden rounded-2xl border border-[#C92855]/10 bg-white p-5 shadow-[0_8px_30px_rgba(75,18,61,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(75,18,61,0.12)] sm:h-[360px] sm:p-6">
                    <div className="mb-4 flex shrink-0 items-center justify-between">
                      <div className="flex gap-1 text-amber-400" aria-label="Rating shown on the previous website">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} size={15} fill="currentColor" />
                        ))}
                      </div>
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FCE7F3] text-[#C92855]">
                        <Quote size={18} />
                      </div>
                    </div>

                    <div className="min-h-0 flex-1 overflow-y-auto pr-1">
                      <p className="whitespace-pre-line text-sm leading-6 text-gray-600 sm:text-[15px]">
                        “{item.review}”
                      </p>
                    </div>

                    <div className="my-4 h-px shrink-0 bg-[#F1E4ED]" />

                    <div className="flex min-h-[46px] shrink-0 items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FCE7F3] text-[#064F63]">
                        <UserRound size={20} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="truncate text-sm font-bold text-[#064F63]">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-xs text-gray-500">Patient feedback</p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next testimonials"
            className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#C92855] text-white shadow-md transition hover:bg-[#064F63] sm:flex"
          >
            <ArrowRight size={19} />
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3 sm:hidden">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous testimonials"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C92855]/20 bg-white text-[#064F63]"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonials"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C92855] text-white"
          >
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial slide ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-7 bg-[#C92855]"
                  : "w-2.5 bg-[#064F63]/20 hover:bg-[#C92855]/50"
              }`}
            />
          ))}
        </div>

        <p className="mt-6 text-center text-xs leading-5 text-gray-500">
          Patient experiences are individual. Obtain appropriate patient consent
          before publishing testimonials and associated names.
        </p>
      </div>
    </section>
  );
}
