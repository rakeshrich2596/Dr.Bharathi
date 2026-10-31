
import { useState, useEffect, useMemo } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Star,
  UserRound,
  ExternalLink,
} from "lucide-react";

// Google 5-star reviews shared by the user
const testimonials = [
  {
    name: "Thamizh",
    date: "2 months ago",
    review:
      "I am happy to share that I got positive in my first IUI treatment. First thanks to God and then Dr Bharathi. She explains to the point. Very friendly atmosphere. Thank you Bharati Fertility Center.",
    profile:
      "https://www.google.com/maps/contrib/100322749911948840743/reviews?hl=en-IN",
  },
  {
    name: "Sunil S",
    date: "4 years ago",
    review:
      "Very good services. Doctor is very friendly and one can be outspoken to her. Nurse and faculty were very supportive. They took care very well. Doctor was very helpful in making us understand the problem. She was patiently answering all queries. Very much suggested to get treated here.",
    profile:
      "https://www.google.com/maps/contrib/107153273257623479840/reviews?hl=en-IN",
  },
  {
    name: "DurgaVijay",
    date: "2 months ago",
    review:
      "I went there for PCOS problem. My cycles have become much better with the medicines and the diet and exercise by Dr Bharathi. I recommend this doctor.",
    profile:
      "https://www.google.com/maps/contrib/108673706618761921648/reviews?hl=en-IN",
  },
  {
    name: "Sathiya Narayanan",
    date: "1 year ago",
    review:
      "Good IVF center. We consulted Dr. V Bharathi. She is good and caring towards my wife. Patient hospitality is very good. The hospital sisters and staff are very kind, friendly and caring.",
    profile:
      "https://www.google.com/maps/contrib/114094775706659847048/reviews?hl=en-IN",
  },
  {
    name: "Saranya Naveen",
    date: "4 years ago",
    review:
      "I am Saranya, married 2 years before, met Dr Bharathi mam in a camp conducted in our area. Mam suggested medications and clarified my doubts. I am very happy to say I'm pregnant now. Staffs are friendly, caring and good. Positive environment. Thanks to Mam and team.",
    profile:
      "https://www.google.com/maps/contrib/114527512011189215566/reviews?hl=en-IN",
  },
  {
    name: "Harshini",
    date: "2 months ago",
    review:
      "Had a great experience. The doctor listened well and gave honest advice. Felt comfortable throughout. Thank you Dr. Bharathi ma'am. Bharati Fertility Centre.",
    profile:
      "https://www.google.com/maps/contrib/117810331567263249134/reviews?hl=en-IN",
  },
  {
    name: "Vanithadurairajwin",
    date: "2 months ago",
    review:
      "I am extremely wonderful hospital. Dr. Bharathi mam was good doctor.",
    profile:
      "https://www.google.com/maps/contrib/110020862386306289973/reviews?hl=en-IN",
  },
  {
    name: "Durga Vijay",
    date: "2 months ago",
    review:
      "The treatment was good. Quick consultations, not much waiting time. Dr Bharathi treated me for white discharge. Thank you.",
    profile:
      "https://www.google.com/maps/contrib/104892176322077560932/reviews?hl=en-IN",
  },
];

const googleReviewsUrl =
  "https://www.google.com/search?q=Bharati+Fertility+Center#lrd=0x3a526736f92c304f:0x7c786b1bcbc882b7,1,,,,";

// Individual testimonial card
function TestimonialCard({ item }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-[#C92855]/10 bg-white p-5 shadow-[0_8px_30px_rgba(75,18,61,0.07)] transition-shadow duration-300 hover:shadow-[0_14px_35px_rgba(75,18,61,0.12)] sm:p-6 lg:p-7">

      {/* Stars and quote */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={16}
              fill="#E9A51A"
              color="#E9A51A"
            />
          ))}
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FCE7F3] text-[#C92855]">
          <Quote size={19} />
        </div>
      </div>

      {/* Complete review - no internal scrollbar */}
      <p className="flex-1 whitespace-pre-line text-sm leading-7 text-gray-600 sm:text-[15px]">
        “{item.review}”
      </p>

      <div className="my-5 h-px w-full bg-[#F1E4ED]" />

      {/* Reviewer */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FCE7F3] text-[#064F63]">
            <UserRound size={21} />
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-sm font-bold text-[#064F63]">
              {item.name}
            </h3>
            <p className="mt-1 text-xs text-gray-500">
              {item.date}
            </p>
          </div>
        </div>

        {/* <a
          href={item.profile}
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center gap-1 text-xs font-semibold text-[#C92855] hover:text-[#064F63]"
        >
          Google
          <ExternalLink size={13} />
        </a> */}
      </div>
    </article>
  );
}

export default function Testimonials() {
  const [cardsPerView, setCardsPerView] = useState(2);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Responsive cards: 2 desktop, 1 mobile
  useEffect(() => {
    const updateView = () => {
      setCardsPerView(window.innerWidth < 768 ? 1 : 2);
    };

    updateView();

    window.addEventListener("resize", updateView);

    return () => {
      window.removeEventListener("resize", updateView);
    };
  }, []);

  // Divide reviews into slides
  const slides = useMemo(() => {
    const result = [];

    for (
      let i = 0;
      i < testimonials.length;
      i += cardsPerView
    ) {
      result.push(testimonials.slice(i, i + cardsPerView));
    }

    return result;
  }, [cardsPerView]);

  const maxIndex = slides.length - 1;

  // Keep active slide valid when screen size changes
  useEffect(() => {
    setActiveIndex((current) =>
      Math.min(current, maxIndex)
    );
  }, [maxIndex]);

  // Automatic slide every 5 seconds
  useEffect(() => {
    if (paused || slides.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) =>
        current >= maxIndex ? 0 : current + 1
      );
    }, 5000);

    return () => window.clearInterval(timer);
  }, [paused, maxIndex, slides.length]);

  const next = () => {
    setActiveIndex((current) =>
      current >= maxIndex ? 0 : current + 1
    );
  };

  const previous = () => {
    setActiveIndex((current) =>
      current <= 0 ? maxIndex : current - 1
    );
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-br from-[#FFF5F7] via-white to-[#FCE7F3] py-16 sm:py-20 lg:py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false);
        }
      }}
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#C92855]/[0.06] blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#0875C9]/[0.07] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C92855]/15 bg-white px-4 py-2">
            <Quote size={16} className="text-[#C92855]" />

            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#064F63]">
              Patient Testimonials 
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight text-[#064F63] sm:text-4xl lg:text-5xl">
            Our Patients,{" "}
            <span className="text-[#C92855]">
              Their Experiences
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Real experiences shared by patients about
            their care and treatment at Bharathi Fertility Center.
          </p>

          {/* <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-5 py-3 shadow-sm">
            <span className="text-lg font-bold text-[#064F63]">
              5-Star
            </span>

            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={17}
                  fill="#E9A51A"
                  color="#E9A51A"
                />
              ))}
            </div>

            <span className="text-xs text-gray-500">
              Patient reviews
            </span>
          </div> */}
        </div>

        {/* Carousel */}
        <div className="relative px-0 sm:px-10">

          {/* Previous button */}
          <button
            type="button"
            onClick={previous}
            aria-label="Previous testimonials"
            className="absolute -left-1 top-1/2 z-10 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#C92855]/15 bg-white text-[#064F63] shadow-md transition hover:bg-[#C92855] hover:text-white sm:flex"
          >
            <ArrowLeft size={19} />
          </button>

          {/* Slides container */}
          <div className="overflow-hidden">
            <div
              className="flex items-stretch transition-transform duration-700 ease-in-out motion-reduce:transition-none"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  className="w-full shrink-0 px-0.5"
                >
                  <div
                    className={`grid items-stretch gap-5 lg:gap-7 ${
                      cardsPerView === 2
                        ? "grid-cols-2"
                        : "grid-cols-1"
                    }`}
                  >
                    {slide.map((item, index) => (
                      <TestimonialCard
                        key={`${item.name}-${slideIndex}-${index}`}
                        item={item}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next button */}
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonials"
            className="absolute -right-1 top-1/2 z-10 hidden h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#C92855] text-white shadow-md transition hover:bg-[#064F63] sm:flex"
          >
            <ArrowRight size={19} />
          </button>
        </div>

        {/* Mobile navigation */}
        <div className="mt-6 flex items-center justify-center gap-4 sm:hidden">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous testimonials"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C92855]/20 bg-white text-[#064F63]"
          >
            <ArrowLeft size={18} />
          </button>

          <span className="text-xs font-semibold text-gray-500">
            {activeIndex + 1} / {slides.length}
          </span>

          <button
            type="button"
            onClick={next}
            aria-label="Next testimonials"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C92855] text-white"
          >
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Slide indicators */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial slide ${index + 1}`}
              aria-current={
                activeIndex === index ? "true" : undefined
              }
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-7 bg-[#C92855]"
                  : "w-2.5 bg-[#064F63]/20 hover:bg-[#C92855]/50"
              }`}
            />
          ))}
        </div>

        {/* Google button */}
        {/* <div className="mt-10 text-center">
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C92855] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#C92855]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#064F63]"
          >
            Read More Google Reviews
            <ExternalLink size={16} />
          </a>
        </div> */}

        <p className="mt-7 text-center text-xs leading-5 text-gray-500">
          Patient experiences are individual. Please obtain
          appropriate patient consent before publishing testimonials.
        </p>

      </div>
    </section>
  );
}
