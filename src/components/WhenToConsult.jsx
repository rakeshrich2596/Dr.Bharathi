
import {
  CalendarCheck,
  HeartPulse,
  Droplets,
  Activity,
  Baby,
  Flower2,
  ArrowUpRight,
  AlertTriangle,
  Check,
} from "lucide-react";

const concerns = [
  {
    icon: CalendarCheck,
    title: "Repeatedly Irregular Periods",
    description:
      "Changes in menstrual cycle timing or repeated irregular periods.",
  },
  {
    icon: Droplets,
    title: "Heavy or Prolonged Bleeding",
    description:
      "Menstrual bleeding that is unusually heavy or lasts longer than expected.",
  },
  {
    icon: Activity,
    title: "Pelvic Pain or Painful Periods",
    description:
      "Persistent pelvic pain or menstrual pain that concerns you.",
  },
  {
    icon: HeartPulse,
    title: "PCOS-Related Symptoms",
    description:
      "Questions about symptoms, hormonal health or possible PCOS.",
  },
  {
    icon: Flower2,
    title: "Fertility Concerns",
    description:
      "Difficulty conceiving or questions about fertility assessment.",
  },
  {
    icon: Baby,
    title: "Pregnancy Planning",
    description:
      "Planning a pregnancy or seeking antenatal care guidance.",
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
                Gynaecologist?
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Some reproductive health changes may be temporary,
              while others need medical assessment. If you notice
              changes that concern you, a consultation can help
              clarify possible causes and whether further
              investigation or treatment is appropriate.
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
                Your symptoms, medical history and individual
                circumstances help guide the appropriate next steps.
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

        {/* Urgent care notice */}
        <div className="mt-12 flex items-start gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:mt-16 sm:p-6">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
            <AlertTriangle size={23} />
          </div>

          <div>
            <h3 className="font-bold text-slate-900">
              When to seek urgent medical attention
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              Severe pelvic pain, heavy bleeding accompanied by
              dizziness, or pain or bleeding during a possible
              pregnancy may require urgent medical attention.
              Please seek prompt medical care rather than waiting
              for a routine appointment.
            </p>
          </div>
        </div>

        <p className="mt-5 text-center text-xs leading-6 text-slate-500">
          This information is for general educational purposes and
          does not replace individual medical advice.
        </p>
      </div>
    </section>
  );
}
