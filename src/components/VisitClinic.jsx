import React from "react";
import {
  MapPin,
  CalendarDays,
  ArrowRight,
  ArrowUpRight,
  Stethoscope,
  UsersRound,
  HeartPulse,
  Info,
} from "lucide-react";

const VisitClinic = () => {
  const mapUrl =
    "https://maps.app.goo.gl/wRWkXBB3tLkvErEa6";
  const features = [
    {
      icon: Stethoscope,
      title: "Experienced",
      subtitle: "Care",
      color: "pink",
    },
    {
      icon: MapPin,
      title: "Convenient",
      subtitle: "Location",
      color: "blue",
    },
    {
      icon: UsersRound,
      title: "Supportive",
      subtitle: "Team",
      color: "pink",
    },
  ];

  return (
    <section
      id="visit-clinic"
      className="relative overflow-hidden bg-gradient-to-br from-[#FFFAFD] via-white to-[#FFF5FA] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-pink-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

        {/* LEFT SIDE - CLINIC IMAGE */}
        <div className="relative mx-auto w-full max-w-xl lg:mx-0">

          {/* Decorative Circle */}
          <div className="absolute -left-5 top-8 h-40 w-40 rounded-full bg-pink-100/80 sm:h-56 sm:w-56" />

          {/* Dashed Decoration */}
          <div className="absolute -right-3 top-5 h-[85%] w-12 rounded-full border-r-2 border-dashed border-pink-300 sm:-right-5 sm:w-16" />

          {/* Main Image */}
          <div className="relative z-10 overflow-hidden rounded-t-[130px] rounded-b-3xl border-[6px] border-white bg-pink-50 shadow-[0_25px_60px_rgba(75,18,61,0.15)] sm:rounded-t-[190px]">
            <img
              src="/images/visitclinic.webp"
              alt="Bharati Fertility & Women Center clinic reception"
              className="h-[350px] w-full object-cover sm:h-[440px] lg:h-[510px]"
            />
          </div>

          {/* Clinic Name Badge */}
          <div className="absolute -left-1 top-8 z-20 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 p-3 shadow-lg sm:-left-5 sm:top-12 sm:gap-4 sm:p-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pink-50 text-[#C92855] sm:h-14 sm:w-14">
              <HeartPulse size={27} strokeWidth={1.7} />
            </div>

            <div>
              <p className="text-xs font-bold leading-5 text-[#064F63] sm:text-sm">
                Modern & Comfortable
              </p>
              <p className="text-xs text-gray-500 sm:text-sm">
                Women's Healthcare
              </p>
            </div>
          </div>

          {/* Address Card */}
          <div className="absolute -bottom-7 left-3 right-3 z-20 rounded-2xl border border-pink-100 bg-white p-4 shadow-[0_15px_40px_rgba(75,18,61,0.12)] sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-[340px] sm:p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pink-50 text-[#C92855]">
                <MapPin size={23} />
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#064F63] sm:text-base">
                  Bharati Fertility & Women Center
                </h3>

                <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
                  Mandaveli, Chennai – 600028
                </p>

                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#C92855] underline underline-offset-4 transition hover:text-[#0875C9] sm:text-sm"
                >
                  View on Google Maps
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>

          {/* Circular Heart Icon */}
          <div className="absolute -right-1 bottom-20 z-20 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-[#C92855] text-white shadow-lg sm:-right-4 sm:bottom-28 sm:h-[72px] sm:w-[72px]">
            <HeartPulse size={31} />
          </div>
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div className="pt-7 lg:pt-0">

          {/* Section Label */}
          <div className="mb-5 flex items-center justify-center gap-4 lg:justify-start">
            <span className="h-px w-9 bg-[#C92855]" />

            <span className="text-xs font-bold uppercase tracking-[2px] text-[#C92855] sm:text-sm">
              Visit Our Clinic
            </span>

            <span className="h-px w-9 bg-[#C92855] lg:hidden" />
          </div>

          {/* Heading */}
          <h2 className="text-center text-3xl font-semibold leading-tight tracking-tight text-[#064F63] sm:text-4xl lg:text-left lg:text-[48px]">
            Your Health Journey
            <span className="mt-1 block text-[#C92855]">
              Starts Here
            </span>
          </h2>

          {/* Short Description */}
          <p className="mx-auto mt-5 max-w-lg text-center text-sm leading-7 text-gray-600 sm:text-base lg:mx-0 lg:text-left">
            Take the first step towards understanding your women's
            health with the right medical guidance.
          </p>

          {/* Feature Cards */}
          <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isBlue = feature.color === "blue";

              return (
                <div
                  key={feature.title}
                  className="flex min-h-[145px] flex-col items-center justify-center rounded-2xl border border-white bg-white/90 px-2 py-5 text-center shadow-[0_8px_25px_rgba(75,18,61,0.045)] transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:min-h-[165px] sm:px-4"
                >
                  <div
                    className={`mb-3 flex h-12 w-12 items-center justify-center rounded-full sm:h-14 sm:w-14 ${
                      isBlue
                        ? "bg-blue-50 text-[#0875C9]"
                        : "bg-pink-50 text-[#C92855]"
                    }`}
                  >
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <h3 className="text-xs font-bold leading-5 text-[#064F63] sm:text-sm sm:leading-6">
                    {feature.title}
                    <span className="block">{feature.subtitle}</span>
                  </h3>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">

            <a
              href="#appointment"
              className="group inline-flex min-h-[54px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#C92855] to-[#D00079] px-4 py-4 text-sm font-bold text-white shadow-lg shadow-pink-200/60 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:text-base"
            >
              <CalendarDays size={20} />

              <span>Book a Consultation</span>

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[54px] items-center justify-center gap-2 rounded-xl border border-pink-200 bg-white px-4 py-4 text-sm font-bold text-[#064F63] transition duration-300 hover:-translate-y-1 hover:border-[#C92855] hover:text-[#C92855] sm:text-base"
            >
              <MapPin size={20} />

              <span>Get Directions</span>

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Information Note */}
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/80 p-4">
            <Info
              size={21}
              className="mt-0.5 shrink-0 text-[#0875C9]"
            />

            <p className="text-xs leading-6 text-slate-600 sm:text-sm">
              Consultation by appointment only. Please contact the
              clinic to confirm availability and timings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitClinic;