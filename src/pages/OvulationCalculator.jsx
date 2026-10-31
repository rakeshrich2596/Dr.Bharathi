
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CalendarCheck,
  HeartPulse,
  Info,
  Sparkles,
  CheckCircle2,
  Stethoscope,
  Sprout,
  Clock3,
  Activity,
  Baby,
  LockKeyhole,
  Phone,
  MessageCircle,
} from "lucide-react";

// --------------------------------------------------
// Dr. Bharathi branding
// --------------------------------------------------

const COLORS = {
  pink: "#C92855",
  coral: "#F47A45",
  blue: "#0875C9",
  teal: "#087D8B",
  darkTeal: "#064F63",
  palePink: "#FFF0F5",
  paleBlue: "#EDF9FC",
};

// Clinic WhatsApp number: country code + number, digits only (no + or spaces).
// Confirm this is the clinic WhatsApp number before publishing.
const WHATSAPP_NUMBER = "918220052005";

const DAY = 24 * 60 * 60 * 1000;

const addDays = (date, days) => {
  return new Date(date.getTime() + days * DAY);
};

const formatDate = (date) =>
  date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const isoToday = () => {
  const date = new Date();

  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");
};

const regularityOptions = [
  { value: "Regular", label: "Regular", sub: "(26–32 Days)", icon: CalendarDays },
  { value: "Varies by 4–7 Days", label: "Varies by", sub: "4–7 Days", icon: Activity },
  { value: "Irregular / PCOS", label: "Irregular / PCOS", sub: "", icon: Stethoscope },
];

const tryingOptions = [
  { value: "Just planning", label: "Just Planning", sub: "/ < 3 Months", icon: Sprout },
  { value: "3–6 months", label: "3 to 6 Months", sub: "", icon: Clock3 },
  { value: "6–12 months", label: "6 to 12 Months", sub: "", icon: CalendarCheck },
  { value: "Over 1 year", label: "Over 1 Year", sub: "", icon: HeartPulse },
];

const ageOptions = ["Under 30", "30 to 34", "35 to 39", "40+ Years"];

function OptionCard({ selected, icon: Icon, label, sub, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`relative flex min-h-[68px] flex-col items-center justify-center gap-1 rounded-xl border px-2 py-3 text-center transition-all duration-200 ${
        selected
          ? "border-[#C92855] bg-gradient-to-br from-[#FFF0F5] to-[#FFF8F8] text-[#C92855] shadow-sm"
          : "border-slate-200 bg-white/80 text-slate-600 hover:border-[#F3A2B8] hover:bg-[#FFF8FA]"
      }`}
    >
      {Icon && <Icon size={20} strokeWidth={2.2} />}
      <span className="text-sm font-semibold leading-5">{label}</span>
      {sub && <span className="text-xs">{sub}</span>}
      {selected && (
        <CheckCircle2
          size={15}
          className="absolute right-2 top-2 fill-[#C92855] text-white"
        />
      )}
    </button>
  );
}

function ResultCard({ icon: Icon, title, value, note, color = "pink" }) {
  const styles =
    color === "blue"
      ? "bg-[#EDF8FC] text-[#0875C9]"
      : color === "orange"
        ? "bg-[#FFF3E7] text-[#D96A32]"
        : "bg-[#FFF0F5] text-[#C92855]";

  return (
    <div className="min-w-0 rounded-2xl border border-pink-100/80 bg-white/90 p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${styles}`}>
          <Icon size={22} />
        </div>

        <div className="min-w-0">
          <p className="text-xs font-medium leading-5 text-slate-500">{title}</p>
          <p className="mt-1 break-words text-base font-bold leading-6 text-[#064F63]">
            {value}
          </p>
          {note && (
            <p className="mt-2 text-xs leading-5 text-slate-500">{note}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function OvulationCalculator() {
  const [lastPeriod, setLastPeriod] = useState("");
  const [cycleLength, setCycleLength] = useState(28);
  const [regularity, setRegularity] = useState("Regular");
  const [trying, setTrying] = useState("Just planning");
  const [ageGroup, setAgeGroup] = useState("Under 30");

  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState("");

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [clinic, setClinic] = useState("");
  const [sendWhatsApp, setSendWhatsApp] = useState(true);
  const [contactMessage, setContactMessage] = useState("");

  const results = useMemo(() => {
    if (!lastPeriod) return null;

    const [year, month, day] = lastPeriod.split("-").map(Number);
    const lmp = new Date(year, month - 1, day);

    if (Number.isNaN(lmp.getTime())) return null;

    // Calendar-based estimate only.
    const ovulation = addDays(lmp, cycleLength - 14);

    return {
      lmp,
      ovulation,
      fertileStart: addDays(ovulation, -5),
      fertileEnd: ovulation,
      nextPeriod: addDays(lmp, cycleLength),
      testDate: addDays(lmp, cycleLength),
      dueDate: addDays(ovulation, 266),

      cycles: Array.from({ length: 6 }, (_, index) => {
        const period = addDays(lmp, cycleLength * index);
        const ovu = addDays(period, cycleLength - 14);

        return {
          number: index + 1,
          period,
          ovulation: ovu,
          fertileStart: addDays(ovu, -5),
          fertileEnd: ovu,
        };
      }),
    };
  }, [lastPeriod, cycleLength]);

  const calculate = (event) => {
    event.preventDefault();

    if (!lastPeriod) {
      setError("Please select the first day of your last period.");
      setShowResults(false);
      return;
    }

    if (lastPeriod > isoToday()) {
      setError("Your last period date cannot be in the future.");
      setShowResults(false);
      return;
    }

    setError("");
    setShowResults(true);
    setContactMessage("");

    // Move users to the results on smaller screens.
    window.setTimeout(() => {
      document.getElementById("fertility-results")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const submitReport = (event) => {
    event.preventDefault();
    setContactMessage("");

    if (!showResults || !results) {
      setContactMessage("Please calculate your cycle dates first.");
      return;
    }

    if (!fullName.trim()) {
      setContactMessage("Please enter your full name.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone.replace(/\D/g, "").slice(-10))) {
      setContactMessage("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (sendWhatsApp) {
      const message = [
        `Hello Dr. V. Bharathi's team, my name is ${fullName.trim()}.`,
        `My estimated ovulation date is ${formatDate(results.ovulation)}.`,
        `My estimated fertile window is ${formatDate(results.fertileStart)} to ${formatDate(results.fertileEnd)}.`,
        `My next expected period is ${formatDate(results.nextPeriod)}.`,
        `My average cycle length is ${cycleLength} days.`,
        `My period pattern: ${regularity}.`,
        `Trying to conceive: ${trying}.`,
        `Age group: ${ageGroup}.`,
        clinic ? `Preferred clinic: ${clinic}.` : "",
        "I would like information about a fertility consultation.",
      ]
        .filter(Boolean)
        .join("\n");

      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

      window.open(url, "_blank", "noopener,noreferrer");
      setContactMessage("WhatsApp opened. Please review your message before sending.");
    } else {
      setContactMessage(
        "Your details are ready. Connect your clinic appointment backend to submit this enquiry securely."
      );
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#FFFAFC] text-slate-800">
      {/* Soft, light background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 top-36 h-96 w-96 rounded-full bg-pink-200/30 blur-3xl" />
        <div className="absolute -right-32 top-64 h-[28rem] w-[28rem] rounded-full bg-cyan-100/60 blur-3xl" />
        <div className="absolute bottom-20 left-1/3 h-80 w-80 rounded-full bg-orange-100/30 blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-pink-100 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="flex shrink-0 items-center gap-3"
            aria-label="Back to Dr. Bharathi home"
          >
            <img
              src="/images/Dr. Bharathi_Logo.png"
              alt="Dr. Bharathi V"
              className="h-[66px] w-auto max-w-[155px] object-contain"
            />
          </Link>

          <div className="hidden items-center gap-2 rounded-full border border-pink-200 bg-gradient-to-r from-pink-50 to-cyan-50 px-4 py-2 text-sm md:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="font-bold text-[#C92855]">Dr. V. Bharathi</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600">Women's Health & Fertility Care</span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white px-3 py-2.5 text-sm font-semibold text-[#064F63] transition hover:bg-pink-50 sm:px-4"
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Home</span>
            </Link>

            <a
              href="#report-form"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C92855] to-[#F47A45] px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-pink-200/60 transition hover:-translate-y-0.5"
            >
              <CalendarDays size={16} />
              <span className="hidden sm:inline">Get Guidance</span>
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-[1440px] px-4 py-7 sm:px-6 sm:py-10 lg:px-8">
        {/* Hero */}
        <section className="relative mb-8 overflow-hidden rounded-[2rem] border border-white/80 bg-gradient-to-r from-[#FFF0F5]/90 via-white/90 to-[#EAF9FC]/90 px-5 py-8 shadow-sm sm:px-8 lg:px-12 lg:py-10">
          <div
            aria-hidden="true"
            className="absolute -right-10 -top-24 h-72 w-72 rounded-full bg-pink-200/35 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 right-1/4 h-32 w-32 rounded-full bg-orange-100/50 blur-2xl"
          />

          <div className="relative max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#C92855] sm:text-sm">
              <Sparkles size={16} />
              Women's Health Tool
            </span>

            <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#064F63] sm:text-4xl lg:text-5xl">
              Ovulation & Fertility{" "}
              <span className="bg-gradient-to-r from-[#C92855] via-[#F05A64] to-[#F47A45] bg-clip-text text-transparent">
                Calculator
              </span>
            </h1>

            <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#C92855] via-[#F47A45] to-[#0875C9]" />

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base lg:text-lg">
              Estimate your likely ovulation date, fertile window, and next
              period using your cycle information.
            </p>

            <div className="mt-5 flex flex-wrap gap-3 text-xs font-medium text-[#064F63] sm:text-sm">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 shadow-sm">
                <HeartPulse size={16} className="text-[#C92855]" />
                Cycle insights
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 shadow-sm">
                <CalendarCheck size={16} className="text-[#0875C9]" />
                Fertile window estimate
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 shadow-sm">
                <LockKeyhole size={16} className="text-[#F47A45]" />
                Local calculation
              </span>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-8 -right-4 hidden h-48 w-48 items-center justify-center rounded-full border border-pink-200/50 bg-gradient-to-br from-pink-100/70 to-cyan-100/70 lg:flex"
          >
            <Baby size={86} strokeWidth={1.1} className="text-[#C92855]/50" />
          </div>
        </section>

        {/* Main two-column layout */}
        <div className="grid items-stretch gap-6 xl:grid-cols-2">
          {/* Cycle form */}
          <section className="h-full min-w-0 overflow-hidden rounded-3xl border border-pink-100 bg-white/95 shadow-xl shadow-pink-100/40">
            <div className="flex flex-wrap items-center justify-between gap-3 bg-gradient-to-r from-[#C92855] via-[#F47A45] to-[#087D8B] px-5 py-5 text-white sm:px-7">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
                  <CalendarDays size={25} />
                </div>
                <div>
                  <h2 className="text-lg font-extrabold sm:text-xl">
                    Fertility & Ovulation Calculator
                  </h2>
                  <p className="mt-1 text-xs text-white/85">
                    Enter your cycle information
                  </p>
                </div>
              </div>

              <span className="rounded-full border border-white/30 bg-white/15 px-3 py-2 text-xs font-bold">
                Step 1 of 2
              </span>
            </div>

            <form onSubmit={calculate} className="space-y-6 p-5 sm:p-7">
              {/* Last period */}
              <div>
                <label
                  htmlFor="last-period"
                  className="mb-2 block text-sm font-bold text-slate-800"
                >
                  First Day of Your Last Period (LMP){" "}
                  <span className="text-[#C92855]">*</span>
                </label>

                <div className="relative">
                  <CalendarDays
                    size={19}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#C92855]"
                  />
                  <input
                    id="last-period"
                    type="date"
                    required
                    max={isoToday()}
                    value={lastPeriod}
                    onChange={(event) => {
                      setLastPeriod(event.target.value);
                      setError("");
                      setShowResults(false);
                    }}
                    className="w-full rounded-xl border border-slate-200 bg-[#FAFCFE] py-3 pl-12 pr-4 text-sm outline-none transition focus:border-[#C92855] focus:ring-4 focus:ring-pink-100"
                  />
                </div>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Select the date your bleeding started in your most recent cycle.
                </p>
              </div>

              {/* Cycle length */}
              <div>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <label
                    htmlFor="cycle-length"
                    className="text-sm font-bold text-slate-800"
                  >
                    Average Cycle Length
                  </label>

                  <span className="rounded-full bg-gradient-to-r from-[#0875C9] to-[#087D8B] px-4 py-2 text-sm font-extrabold text-white">
                    {cycleLength} Days
                  </span>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-[#F5FAFC] p-4">
                  <input
                    id="cycle-length"
                    type="range"
                    min="21"
                    max="45"
                    value={cycleLength}
                    onChange={(event) => {
                      setCycleLength(Number(event.target.value));
                      setShowResults(false);
                    }}
                    className="h-2 w-full cursor-pointer appearance-none rounded-full accent-[#C92855]"
                    style={{
                      background: `linear-gradient(to right, #C92855 ${
                        ((cycleLength - 21) / 24) * 100
                      }%, #DCEAF0 ${
                        ((cycleLength - 21) / 24) * 100
                      }%)`,
                    }}
                  />

                  <div className="mt-3 flex justify-between gap-2 text-[11px] text-slate-500 sm:text-xs">
                    <span>21 Days (Short)</span>
                    <span>28 Days (Standard)</span>
                    <span>45 Days (Long)</span>
                  </div>
                </div>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Count from Day 1 of one period to Day 1 of the next period.
                </p>
              </div>

              {/* Regularity */}
              <fieldset>
                <legend className="mb-3 text-sm font-bold text-slate-800">
                  How Regular Are Your Periods?
                </legend>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {regularityOptions.map((option) => (
                    <OptionCard
                      key={option.value}
                      icon={option.icon}
                      label={option.label}
                      sub={option.sub}
                      selected={regularity === option.value}
                      onClick={() => {
                        setRegularity(option.value);
                        setShowResults(false);
                      }}
                    />
                  ))}
                </div>
              </fieldset>

              {/* Trying and age */}
              <div className="grid items-start gap-6 md:grid-cols-2">
                <fieldset className="min-w-0">
                  <legend className="mb-3 min-h-[40px] text-sm font-bold leading-5 text-slate-800">
                    How Long Have You Been Trying to Conceive?
                  </legend>

                  <div className="grid grid-cols-2 gap-2.5">
                    {tryingOptions.map((option) => (
                      <OptionCard
                        key={option.value}
                        icon={option.icon}
                        label={option.label}
                        sub={option.sub}
                        selected={trying === option.value}
                        onClick={() => {
                          setTrying(option.value);
                          setShowResults(false);
                        }}
                      />
                    ))}
                  </div>
                </fieldset>

                <fieldset className="min-w-0">
                  <legend className="mb-3 min-h-[40px] text-sm font-bold leading-5 text-slate-800">
                    Age Group
                  </legend>

                  <div className="grid grid-cols-2 gap-2.5">
                    {ageOptions.map((option) => (
                      <OptionCard
                        key={option}
                        label={option}
                        selected={ageGroup === option}
                        onClick={() => {
                          setAgeGroup(option);
                          setShowResults(false);
                        }}
                      />
                    ))}
                  </div>
                </fieldset>
              </div>

              {error && (
                <p
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#C92855] via-[#E84D72] to-[#087D8B] px-5 py-4 text-sm font-extrabold text-white shadow-lg shadow-pink-200/60 transition hover:-translate-y-0.5 hover:shadow-xl sm:text-base"
              >
                <CalendarDays size={20} />
                Calculate Fertile Days & Get My Results
                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <p className="text-center text-xs leading-5 text-slate-500">
                Your cycle inputs are calculated in this page and are not sent
                to a server by this calculator.
              </p>
            </form>
          </section>

          {/* Right panel */}
          <div id="fertility-results" className="h-full min-w-0 scroll-mt-6">
            {/* Results panel */}
            <section
              aria-live="polite"
              className="h-full overflow-hidden rounded-3xl border border-pink-100 bg-white/95 shadow-xl shadow-pink-100/30"
            >
              <div className="flex items-center gap-3 border-b border-pink-100 bg-gradient-to-r from-[#FFF0F5] via-white to-[#EAF9FC] p-5 sm:p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#C92855] to-[#F47A45] text-white shadow-md shadow-pink-200">
                  <HeartPulse size={25} />
                </div>

                <div>
                  <h2 className="text-xl font-extrabold text-[#064F63]">
                    Your Results
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    {showResults
                      ? "Based on the information you provided"
                      : "Enter your cycle details to see your estimates"}
                  </p>
                </div>
              </div>

              {!showResults || !results ? (
                <div className="p-6 sm:p-8">
                  <div className="rounded-2xl border border-dashed border-pink-200 bg-gradient-to-br from-[#FFF7FA] to-[#F2FBFD] p-7 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#C92855] shadow-sm">
                      <CalendarDays size={32} />
                    </div>

                    <h3 className="mt-4 text-xl font-bold text-[#064F63]">
                      Your fertility estimates will appear here
                    </h3>

                    <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-600">
                      Select the first day of your last period, adjust your
                      average cycle length, and calculate your estimated dates.
                    </p>

                    <div className="mt-6 grid grid-cols-1 gap-3 text-left sm:grid-cols-2">
                      <div className="flex gap-3 rounded-xl bg-white p-3">
                        <CalendarCheck className="shrink-0 text-[#C92855]" size={21} />
                        <span className="text-sm text-slate-600">
                          Estimated ovulation date
                        </span>
                      </div>
                      <div className="flex gap-3 rounded-xl bg-white p-3">
                        <HeartPulse className="shrink-0 text-[#0875C9]" size={21} />
                        <span className="text-sm text-slate-600">
                          Estimated fertile window
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 p-5 sm:p-6">
                  <div className="rounded-2xl bg-gradient-to-r from-[#C92855] via-[#F47A45] to-[#087D8B] p-5 text-white shadow-lg shadow-pink-100 sm:p-6">
                    <div className="flex items-center gap-2 text-sm font-semibold text-white/90">
                      <Sparkles size={18} />
                      Estimated Ovulation
                    </div>

                    <p className="mt-3 text-2xl font-extrabold sm:text-3xl">
                      {formatDate(results.ovulation)}
                    </p>

                    <p className="mt-2 text-xs leading-5 text-white/85">
                      Calendar-based estimate only. This does not confirm
                      ovulation.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <ResultCard
                      icon={CalendarDays}
                      title="Estimated Fertile Window"
                      value={`${formatDate(results.fertileStart)} – ${formatDate(results.fertileEnd)}`}
                      color="pink"
                    />

                    <ResultCard
                      icon={CalendarCheck}
                      title="Next Expected Period"
                      value={formatDate(results.nextPeriod)}
                      color="blue"
                    />

                    <ResultCard
                      icon={HeartPulse}
                      title="Pregnancy Test Timing"
                      value={formatDate(results.testDate)}
                      note="Estimated period due date; follow the test instructions."
                      color="orange"
                    />

                    <ResultCard
                      icon={Baby}
                      title="Estimated Due Date"
                      value={formatDate(results.dueDate)}
                      note="Only an approximate date if conception occurs."
                      color="blue"
                    />
                  </div>

                  {(regularity !== "Regular" ||
                    ageGroup === "35 to 39" ||
                    ageGroup === "40+ Years" ||
                    trying === "6–12 months" ||
                    trying === "Over 1 year") && (
                    <div className="rounded-2xl border border-orange-200 bg-orange-50 p-4">
                      <p className="flex items-center gap-2 font-bold text-orange-900">
                        <Info size={19} />
                        Consider speaking with a clinician
                      </p>
                      <p className="mt-2 text-sm leading-6 text-orange-900/90">
                        {regularity !== "Regular" &&
                          "Irregular cycles can make calendar estimates less accurate. "}
                        {(ageGroup === "35 to 39" ||
                          ageGroup === "40+ Years") &&
                          "Age can affect fertility and the timing of assessment. "}
                        {(trying === "6–12 months" ||
                          trying === "Over 1 year") &&
                          "A fertility professional can advise you about an appropriate assessment timeline."}
                      </p>
                    </div>
                  )}

                  {/* Six-cycle calendar */}
                  <div className="rounded-2xl border border-pink-100 bg-white p-4 sm:p-5">
                    <h3 className="text-lg font-extrabold text-[#064F63]">
                      Your Estimated 6-Cycle Calendar
                    </h3>
                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      These projections assume the same cycle length each
                      month. Actual dates can vary.
                    </p>

                    <div className="mt-4 overflow-x-auto">
                      <table className="w-full min-w-[480px] text-left text-sm">
                        <thead>
                          <tr className="border-b border-pink-100 text-xs uppercase tracking-wide text-slate-500">
                            <th className="px-2 py-3">Cycle</th>
                            <th className="px-2 py-3">Period</th>
                            <th className="px-2 py-3">Fertile window</th>
                            <th className="px-2 py-3">Ovulation</th>
                          </tr>
                        </thead>

                        <tbody>
                          {results.cycles.map((cycle) => (
                            <tr
                              key={cycle.number}
                              className="border-b border-slate-100 last:border-0"
                            >
                              <td className="px-2 py-3 font-bold text-[#C92855]">
                                {cycle.number}
                              </td>
                              <td className="px-2 py-3 text-slate-600">
                                {formatDate(cycle.period)}
                              </td>
                              <td className="px-2 py-3 text-slate-600">
                                {formatDate(cycle.fertileStart)} –{" "}
                                {formatDate(cycle.fertileEnd)}
                              </td>
                              <td className="px-2 py-3 font-semibold text-[#064F63]">
                                {formatDate(cycle.ovulation)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </section>
          </div>
        </div>

        {/* Supporting sections in a wide, landscape layout */}
        <div className="mt-6 grid items-start gap-6 lg:grid-cols-2 2xl:grid-cols-3">
            {/* Why use this calculator */}
            <section className="rounded-3xl border border-pink-100 bg-white/95 p-5 shadow-lg shadow-pink-100/30 sm:p-6">
              <h2 className="flex items-center gap-2 text-lg font-extrabold text-[#C92855]">
                <Sparkles size={21} className="text-[#F47A45]" />
                Why Use This Calculator?
              </h2>

              <div className="mt-5 space-y-4">
                {[
                  {
                    icon: CalendarCheck,
                    title: "Understand your fertile window",
                    description: "See your estimated fertile days.",
                    color: "bg-pink-100 text-[#C92855]",
                  },
                  {
                    icon: Sprout,
                    title: "Plan your pregnancy journey",
                    description: "Explore general cycle information.",
                    color: "bg-orange-100 text-[#D96A32]",
                  },
                  {
                    icon: CalendarDays,
                    title: "Track your next period",
                    description: "Get an estimated date in advance.",
                    color: "bg-cyan-100 text-[#0875C9]",
                  },
                  {
                    icon: Stethoscope,
                    title: "Guidance from fertility experts",
                    description: "Discuss your concerns with a clinician.",
                    color: "bg-pink-100 text-[#C92855]",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-center gap-3">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${item.color}`}
                    >
                      <item.icon size={21} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#064F63]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Report / contact form */}
            <section
              id="report-form"
              className="scroll-mt-6 rounded-3xl border border-pink-100 bg-white/95 p-5 shadow-lg shadow-pink-100/30 sm:p-6"
            >
              <div className="flex items-start gap-3 rounded-2xl bg-gradient-to-r from-[#FFF0F5] to-[#EAF9FC] p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#C92855] shadow-sm">
                  <CalendarCheck size={26} />
                </div>
                <div>
                  <h2 className="font-extrabold text-[#C92855]">
                    Get Personalised Fertility Guidance
                  </h2>
                  <p className="mt-1 text-sm leading-5 text-slate-600">
                    Share your contact details to enquire about a consultation.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Estimated cycle information",
                  "Fertile-window explanation",
                  "Pregnancy-test timing guidance",
                  "Consultation enquiry",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-[#C92855]"
                    />
                    {item}
                  </div>
                ))}
              </div>

              <form onSubmit={submitReport} className="mt-5 space-y-4">
                <div>
                  <label
                    htmlFor="full-name"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Your Full Name *
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    required
                    maxLength={100}
                    autoComplete="name"
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-slate-200 bg-[#FAFCFE] px-4 py-3 text-sm outline-none transition focus:border-[#C92855] focus:ring-4 focus:ring-pink-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone-number"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Mobile / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C92855]"
                    />
                    <input
                      id="phone-number"
                      type="tel"
                      required
                      autoComplete="tel-national"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      placeholder="10-digit mobile number"
                      className="w-full rounded-xl border border-slate-200 bg-[#FAFCFE] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#0875C9] focus:ring-4 focus:ring-cyan-100"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="clinic"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Preferred Clinic
                  </label>
                  <select
                    id="clinic"
                    value={clinic}
                    onChange={(event) => setClinic(event.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-[#FAFCFE] px-4 py-3 text-sm outline-none focus:border-[#0875C9] focus:ring-4 focus:ring-cyan-100"
                  >
                    <option value="">Select a clinic</option>
                    <option value="Mandaveli Clinic">Mandaveli Clinic</option>
                    <option value="Other clinic">Other / Please advise</option>
                  </select>
                </div>

                <label className="flex cursor-pointer items-start gap-3 text-sm leading-5 text-slate-600">
                  <input
                    type="checkbox"
                    checked={sendWhatsApp}
                    onChange={(event) => setSendWhatsApp(event.target.checked)}
                    className="mt-1 h-4 w-4 accent-[#087D8B]"
                  />
                  <span>
                    Open WhatsApp with my estimated dates and consultation
                    enquiry.
                  </span>
                </label>

                {contactMessage && (
                  <p
                    role="status"
                    className="rounded-xl border border-cyan-100 bg-cyan-50 p-3 text-sm leading-5 text-[#064F63]"
                  >
                    {contactMessage}
                  </p>
                )}

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#C92855] via-[#E84D72] to-[#087D8B] px-4 py-4 text-center text-sm font-extrabold text-white shadow-lg shadow-pink-200/60 transition hover:-translate-y-0.5 sm:text-base"
                >
                  {sendWhatsApp ? (
                    <MessageCircle size={20} />
                  ) : (
                    <LockKeyhole size={19} />
                  )}
                  {sendWhatsApp
                    ? "Continue to WhatsApp"
                    : "Prepare Consultation Enquiry"}
                  <ArrowRight size={18} />
                </button>

                <p className="text-center text-xs leading-5 text-slate-500">
                  This form does not create or send a PDF report. WhatsApp
                  opens only after you submit the form and review the message.
                </p>
              </form>
            </section>

            {/* Medical note */}
            <section className="rounded-3xl border border-cyan-100 bg-gradient-to-br from-white to-[#EFFBFC] p-5 shadow-sm sm:p-6">
              <h2 className="flex items-center gap-2 text-base font-extrabold text-[#064F63]">
                <Info size={21} className="shrink-0 text-[#0875C9]" />
                Important Medical Note
              </h2>

              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                <li>
                  • Dates are estimates based on the average cycle length entered.
                </li>
                <li>
                  • Ovulation can vary from cycle to cycle, including in regular cycles.
                </li>
                <li>
                  • This tool does not confirm ovulation, diagnose infertility,
                  or guarantee pregnancy.
                </li>
                <li>
                  • Do not use these estimates as a method of contraception.
                </li>
                <li>
                  • For irregular periods, PCOS, or fertility concerns, consult
                  a qualified healthcare professional.
                </li>
              </ul>
            </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-10 border-t border-pink-100 bg-white/90 px-4 py-7 text-center">
        <img
          src="/images/Dr. Bharathi_Logo.png"
          alt="Dr. Bharathi V"
          className="mx-auto mb-3 h-14 w-auto max-w-[140px] object-contain"
        />

        <p className="text-sm font-semibold text-[#064F63]">
          Dr. V. Bharathi · Women's Health & Fertility Care
        </p>

        <p className="mt-2 text-xs leading-5 text-slate-500">
          © {new Date().getFullYear()} Dr. V. Bharathi. For educational purposes
          only. Consult your healthcare professional for medical advice.
        </p>
      </footer>
    </div>
  );
}
