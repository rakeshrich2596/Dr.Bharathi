
import {
  CalendarCheck,
  HeartPulse,
  Droplets,
  Activity,
  Baby,
  Flower2,
  ArrowUpRight,
  Check,
} from "lucide-react";

const concerns = [
  {
    icon: CalendarCheck,
    title: "Repeatedly Irregular Periods",
    description:
      "Irregular or missed periods can be linked to ovulation problems and may affect your chances of conceiving.",
  },
  {
    icon: Droplets,
    title: "Heavy or Prolonged Bleeding",
    description:
      "Unusually heavy or long periods need assessment, as some causes can also affect fertility.",
  },
  {
    icon: Activity,
    title: "Pelvic Pain or Painful Periods",
    description:
      "Persistent pelvic or period pain should be checked, as some conditions behind it can make conceiving harder.",
  },
  {
    icon: HeartPulse,
    title: "PCOS-Related Symptoms",
    description:
      "Irregular cycles, hormonal changes or a possible PCOS diagnosis, with or without difficulty conceiving.",
  },
  {
    icon: Flower2,
    title: "Difficulty Conceiving",
    description:
      "Trying for a year or more without success (or six months if you are 35 or older), or wanting a fertility assessment, including for your partner.",
  },
  {
    icon: Baby,
    title: "Miscarriage or Pregnancy Planning",
    description:
      "Repeated miscarriages, or wanting expert guidance before you plan a pregnancy.",
  },
];

export default function WhenToConsult() {
  return (
    <section
      id="when-to-consult"
      className="bg-[#FCFAFC] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left introduction */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-[#C92855]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#C92855]" />
              WHEN TO SEEK GUIDANCE
            </div>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#064F63] sm:text-4xl lg:text-[42px]">
              When Should You Consult a{" "}
              <span className="text-[#0875C9]">
                Gynaecologist or Fertility Specialist?
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Some changes in your reproductive health are temporary,
              while others need medical assessment. If something
              concerns you, or you have been trying to conceive without
              success, a consultation with Dr. Bharathi. V can help find
              the cause and the right next step.
            </p>

            <a
              href="#appointment"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#C92855] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-pink-100 transition hover:-translate-y-0.5 hover:bg-[#0875C9]"
            >
              Book a Consultation
              <ArrowUpRight size={18} />
            </a>

            <div className="mt-8 border-l-2 border-[#0875C9] pl-4">
              <p className="text-sm leading-7 text-slate-600">
                Your symptoms, medical history and test results help
                guide the appropriate next steps.
              </p>
            </div>
          </div>

          {/* Right checklist */}
          <div className="divide-y divide-slate-200">
            {concerns.map((concern, index) => {
              const Icon = concern.icon;

              return (
                <div
                  key={concern.title}
                  className="group flex gap-4 py-5 first:pt-0 last:pb-0 sm:gap-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#C92855] shadow-sm ring-1 ring-pink-100 transition group-hover:bg-[#C92855] group-hover:text-white">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start gap-2">
                      <h3 className="text-base font-bold text-[#064F63] sm:text-lg">
                        {concern.title}
                      </h3>

                      <Check
                        size={17}
                        className="mt-1 shrink-0 text-[#0875C9]"
                      />
                    </div>

                    <p className="mt-1.5 text-sm leading-6 text-slate-600 sm:text-base">
                      {concern.description}
                    </p>
                  </div>

                  <span className="hidden pt-1 text-xs font-semibold text-slate-400 sm:block">
                    0{index + 1}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
