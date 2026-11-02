
import {
  ArrowUpRight,
  HeartHandshake,
  ClipboardList,
  Microscope,
  BookOpenCheck,
  MessageCircle,
} from "lucide-react";

const approachItems = [
  {
    number: "01",
    title: "Listen to Your Concerns",
    description:
      "Discuss your medical history, menstrual cycles, how long you have been trying to conceive and any previous treatments or miscarriages.",
    icon: HeartHandshake,
    accent: "#C92855",
    soft: "#FFF0F6",
  },
  {
    number: "02",
    title: "Investigations & Diagnosis",
    description:
      "A gynaecological examination and tests such as AMH, scans, follicular monitoring, tube assessment and semen analysis help find the cause and guide the next step.",
    icon: Microscope,
    accent: "#0875C9",
    soft: "#EDF7FF",
  },
  {
    number: "03",
    title: "Personalised Treatment Plan",
    description:
      "Based on your results, explore options such as medication, IUI, IVF or ICSI, and discuss your questions with the doctor.",
    icon: BookOpenCheck,
    accent: "#064F63",
    soft: "#EAF7F7",
  },
  {
    number: "04",
    title: "Follow-Up & Support",
    description:
      "Regular reviews and guidance at each stage of treatment.",
    icon: MessageCircle,
    accent: "#B45309",
    soft: "#FFF7E8",
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      className="overflow-hidden bg-gradient-to-b from-white via-rose-50/20 to-sky-50/40 py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-100 bg-pink-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#C92855] sm:text-sm">
            <HeartHandshake size={16} />
            Our Approach
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-4xl">
            Your Fertility Journey with Dr. Bharathi V, <span className="mt-1 inline-block bg-gradient-to-r from-[#C92855] via-[#F47A45] to-[#0875C9] bg-clip-text text-transparent">
              Gynaecologist & Fertility Specialist
            </span>
            
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Every couple’s fertility journey is different. Here is how Dr.
            Bharathi V, gynaecologist and fertility specialist in Mandaveli,
            Chennai, plans your care step by step.
          </p>
        </div>

        {/* Four Approach Cards */}
        <div className="mt-10 grid grid-cols-1 items-stretch gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {approachItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.045)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,23,42,0.09)] sm:p-6 lg:p-5 xl:p-6"
              >
                {/* Icon and Number */}
                <div className="flex items-center justify-between gap-3">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: item.soft,
                      color: item.accent,
                    }}
                  >
                    <Icon size={23} strokeWidth={1.9} />
                  </div>

                  <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-bold tracking-wider text-slate-400">
                    {item.number}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="mt-5 min-h-[4.5rem] text-lg font-extrabold leading-6 text-slate-900">
                  {item.title}
                </h3>

                {/* Accent Line */}
                <div
                  className="mt-3 h-1 w-10 rounded-full transition-all duration-300 group-hover:w-16"
                  style={{ backgroundColor: item.accent }}
                />

                {/* Card Description */}
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 flex flex-col gap-5 rounded-3xl border border-pink-100 bg-white p-6 shadow-sm sm:p-8 lg:mt-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0875C9]">
              Our Approach
            </p>

            <h3 className="mt-2 text-xl font-extrabold leading-snug text-slate-900 sm:text-2xl">
              Expert gynaecology and fertility guidance in Mandaveli.
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
              Book a consultation with Dr. Bharathi V.
            </p>
          </div>

          <a
            href="#appointment"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[#C92855] px-6 py-3 text-sm font-bold text-white shadow-md shadow-pink-200/60 transition duration-300 hover:-translate-y-0.5 hover:bg-[#0875C9] sm:text-base lg:self-center"
          >
            Book a Consultation
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}
