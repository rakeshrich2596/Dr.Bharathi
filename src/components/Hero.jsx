
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Heart,
  ShieldCheck,
  Stethoscope,
  Baby,
  Flower2,
  Sparkles,
} from "lucide-react";

const slides = [
  {
    image: "/images/herodr4.webp",
    title: "Women's Health",
    subtitle: "Care with understanding",
    icon: Heart,
    iconColor: "text-[#C92855]",
    iconBg: "bg-pink-100",
    alt: "Women's healthcare consultation",
  },
  {
    image: "/images/herodr2.webp",
    title: "Pregnancy Care",
    subtitle: "Support through every stage",
    icon: Baby,
    iconColor: "text-[#0875C9]",
    iconBg: "bg-blue-100",
    alt: "Pregnancy healthcare and support",
  },
  {
    image: "/images/herodr3.webp",
    title: "Women's Wellbeing",
    subtitle: "Guidance for your health journey",
    icon: Flower2,
    iconColor: "text-[#C92855]",
    iconBg: "bg-pink-100",
    alt: "Doctor supporting women's wellbeing",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const previousSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const currentSlide = slides[activeSlide];
  const CurrentIcon = currentSlide.icon;

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#FCE7F3] via-white to-blue-50"
    >
      {/* Animated decorative symbols */}
      <div className="pointer-events-none absolute left-[8%] top-16 animate-float text-[#C92855]">
        <Sparkles size={25} />
      </div>

      <div className="pointer-events-none absolute right-[42%] top-20 animate-gentle-shake text-[#0875C9]">
        <Heart size={24} />
      </div>

      <div className="pointer-events-none absolute bottom-20 left-[45%] animate-float text-pink-400">
        <Flower2 size={28} />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-20">
        {/* Left content */}
        <div className="relative z-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/90 px-4 py-2 text-xs font-semibold text-[#0875C9] sm:text-sm">
            <Heart
              size={16}
              className="animate-gentle-shake text-[#C92855]"
            />
            Compassionate Women's Healthcare
          </div>

          <h1 className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-slate-800 sm:text-4xl lg:text-[43px] xl:text-[46px]">
            Understanding Women's Health{" "}
            <span className="text-[#0875C9]">
              Starts with the Right Guidance
            </span>
          </h1>

          <p className="mt-5 text-lg font-bold text-[#C92855] sm:text-xl">
            Dr. V. Bharathi
          </p>

          <p className="mt-1 text-sm font-medium text-slate-600 sm:text-base">
            Senior Obstetrician &amp; Gynaecologist | Laparoscopic and Fertility Specialist
          </p>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Women's health concerns can arise at different stages of life,
            from irregular periods and PCOS to pregnancy planning and
            fertility-related questions. Understanding your health and
            available options is an important first step.
          </p>

          {/* CTA buttons */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#appointment"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C92855] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-pink-200 transition duration-300 hover:-translate-y-1 hover:bg-[#0875C9] sm:px-7 sm:text-base"
            >
              Book a Consultation
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#0875C9] bg-white px-6 py-3.5 text-sm font-semibold text-[#0875C9] transition duration-300 hover:bg-[#0875C9] hover:text-white sm:px-7 sm:text-base"
            >
              Know Your Doctor
            </a>
          </div>

          {/* Care highlights */}
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-xs font-medium text-slate-600 sm:text-sm">
            <span className="flex items-center gap-2">
              <ShieldCheck size={18} className="shrink-0 text-[#0875C9]" />
              Patient-centred care
            </span>

            <span className="flex items-center gap-2">
              <Stethoscope size={18} className="shrink-0 text-[#C92855]" />
              Women's health guidance
            </span>
          </div>
        </div>

        {/* Right image slider */}
        <div className="relative mx-auto w-full max-w-[520px]">
          {/* Background glow */}
          <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-pink-200/70 blur-2xl" />
          <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-blue-200/70 blur-2xl" />

          {/* Floating decorative icons */}
          <div className="absolute -right-3 top-10 z-20 flex h-12 w-12 animate-float items-center justify-center rounded-full bg-white text-[#C92855] shadow-lg sm:-right-5 sm:h-14 sm:w-14">
            <Heart size={25} />
          </div>

          <div className="absolute -left-3 bottom-24 z-20 flex h-11 w-11 animate-gentle-shake items-center justify-center rounded-full bg-[#0875C9] text-white shadow-lg sm:-left-5 sm:h-12 sm:w-12">
            <Sparkles size={22} />
          </div>

          {/* Optimized image frame */}
          <div className="relative overflow-hidden rounded-[1.5rem] border-[6px] border-white bg-white shadow-2xl shadow-blue-100 sm:rounded-[2rem] sm:border-[8px]">
            {/* Keep image frame height stable */}
            <div className="aspect-[4/5] w-full bg-pink-50 sm:aspect-[4/4.7]" />

            {slides.map((slide, index) => (
              <img
                key={slide.image}
                src={slide.image}
                alt={slide.alt}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                decoding="async"
                width="520"
                height="650"
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  index === activeSlide
                    ? "z-[1] opacity-100"
                    : "z-0 opacity-0"
                }`}
                onLoad={(event) => {
                  event.currentTarget.dataset.loaded = "true";
                }}
              />
            ))}

            {/* Bottom image overlay */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-slate-900/75 via-slate-900/20 to-transparent px-5 pb-16 pt-24 sm:px-7 sm:pb-20">
              <p className="text-xl font-bold text-white sm:text-2xl">
                Dr. V. Bharathi
              </p>

              <p className="mt-1 text-xs text-white/90 sm:text-sm">
                Senior Obstetrician &amp; Gynaecologist
              </p>
              <p className="mt-1 text-xs text-white/90 sm:text-sm">
                Laparoscopic and Fertility Specialist
              </p>
            </div>

            {/* Previous / Next controls */}
            <div className="absolute bottom-0 right-0 z-20 flex overflow-hidden rounded-tl-2xl">
              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous image"
                className="flex h-12 w-12 items-center justify-center bg-[#0875C9] text-white transition hover:bg-[#C92855] sm:h-14 sm:w-14"
              >
                <ArrowLeft size={21} />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next image"
                className="flex h-12 w-12 items-center justify-center bg-white text-slate-800 transition hover:bg-pink-100 sm:h-14 sm:w-14"
              >
                <ArrowRight size={21} />
              </button>
            </div>
          </div>

          {/* Sliding information card */}
          <div
            key={activeSlide}
            className="absolute -left-2 top-[52%] z-30 max-w-[245px] animate-card-enter rounded-2xl bg-white p-3.5 shadow-xl shadow-slate-900/10 sm:-left-8 sm:max-w-[275px] sm:p-4"
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${currentSlide.iconBg} ${currentSlide.iconColor}`}
              >
                <CurrentIcon size={24} />
              </div>

              <div>
                <p className="text-sm font-bold text-slate-800 sm:text-base">
                  {currentSlide.title}
                </p>

                <p className="mt-1 text-[11px] leading-4 text-slate-500 sm:text-xs">
                  {currentSlide.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Slider indicators */}
          <div className="mt-5 flex items-center justify-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Show image ${index + 1}`}
                aria-pressed={activeSlide === index}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeSlide === index
                    ? "w-8 bg-[#C92855]"
                    : "w-2.5 bg-blue-200 hover:bg-[#0875C9]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
