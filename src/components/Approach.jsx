import {
  ArrowUpRight,
  HeartHandshake,
  ClipboardList,
  BookOpenCheck,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

const approachItems = [
  {
    number: "01",
    title: "Detailed Medical Assessment",
    description:
      "A careful review of symptoms and medical history helps guide decisions about further examinations and investigations.",
    icon: ClipboardList,
    accent: "#C92855",
    soft: "#FFF0F6",
  },
  {
    number: "02",
    title: "Evidence-Based Recommendations",
    description:
      "Investigations and treatment options should be considered in line with the clinical findings and established medical evidence.",
    icon: BookOpenCheck,
    accent: "#0875C9",
    soft: "#EDF7FF",
  },
  {
    number: "03",
    title: "Clear Treatment Discussions",
    description:
      "Understanding why a treatment is suggested, what it involves and what its limitations may be helps patients make informed decisions.",
    icon: MessageCircle,
    accent: "#064F63",
    soft: "#EAF7F7",
  },
  {
    number: "04",
    title: "Ethical and Individualised Care",
    description:
      "Medical recommendations should reflect each patient's needs, with realistic discussions about potential benefits, risks and alternatives.",
    icon: ShieldCheck,
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
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-100 bg-pink-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#C92855] sm:text-sm">
            <HeartHandshake size={16} />
            The Approach to Women&apos;s Healthcare
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Understanding the Concern
            <span className="mt-1 block bg-gradient-to-r from-[#C92855] via-[#F47A45] to-[#0875C9] bg-clip-text text-transparent">
              Before Discussing Treatment
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            A meaningful medical consultation involves more than identifying
            symptoms. It includes understanding the patient&apos;s concerns,
            reviewing relevant medical history and explaining appropriate
            options.
          </p>
        </div>

        {/* Four consistent information cards */}
        <div className="mt-10 grid grid-cols-1 items-stretch gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {approachItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.045)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,23,42,0.09)] sm:p-6 lg:p-5 xl:p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: item.soft, color: item.accent }}
                  >
                    <Icon size={23} strokeWidth={1.9} />
                  </div>
                  <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-bold tracking-wider text-slate-400">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-5 min-h-[4.5rem] text-lg font-extrabold leading-6 text-slate-900">
                  {item.title}
                </h3>

                <div
                  className="mt-3 h-1 w-10 rounded-full"
                  style={{ backgroundColor: item.accent }}
                />

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Closing statement */}
        <div className="mt-8 flex flex-col gap-5 rounded-3xl border border-pink-100 bg-white p-6 shadow-sm sm:p-8 lg:mt-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0875C9]">
              Patient-centred care
            </p>
            <h3 className="mt-2 text-xl font-extrabold leading-snug text-slate-900 sm:text-2xl">
              Understand your options. Make informed decisions.
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
              Every patient&apos;s needs are different. Treatment discussions
              should be clear, individualised and based on clinical assessment.
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
