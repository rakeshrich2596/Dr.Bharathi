import { useState } from "react";
import {
  CalendarDays,
  Phone,
  UserRound,
  Heart,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

// Clinic WhatsApp number: +91 82 2005 2005
const WHATSAPP_NUMBER = "918220052005";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    consultation: "Gynaecology Consultation",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!/^[0-9+\s()-]{8,20}$/.test(formData.phone.trim())) {
      alert("Please enter a valid phone number.");
      return;
    }

    const message = [
      "Hello, I would like to book an appointment with Dr. V. Bharathi.",
      "",
      `Patient Name: ${formData.name.trim()}`,
      `Phone Number: ${formData.phone.trim()}`,
      `Preferred Date: ${formData.date || "Not specified"}`,
      `Consultation Type: ${formData.consultation}`,
      "",
      "Please let me know the appointment availability.",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="appointment"
      className="relative z-20 -mt-8 px-4 pb-8 sm:-mt-12 sm:px-6 lg:-mt-14 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-pink-100 bg-white p-5 shadow-[0_18px_60px_rgba(75,18,61,0.10)] sm:rounded-3xl sm:p-8 lg:p-9">
          {/* Form heading */}
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#C92855]">
                <Heart size={17} />
                Your health matters
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-[#064F63] sm:text-3xl">
                Book an Appointment
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500 sm:text-base">
                Share your details to request a consultation with Dr. V. Bharathi.
              </p>
            </div>

            <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-pink-50 text-[#C92855] sm:flex">
              <CalendarDays size={27} />
            </div>
          </div>

          {/* Appointment form */}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
              {/* Patient name */}
              <div>
                <label
                  htmlFor="patient-name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Patient Name
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3.5 transition focus-within:border-[#C92855] focus-within:bg-white">
                  <UserRound
                    size={19}
                    className="shrink-0 text-[#C92855]"
                  />

                  <input
                    id="patient-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                    className="w-full min-w-0 border-0 bg-transparent py-4 text-sm text-slate-800 outline-none ring-0 placeholder:text-slate-400 focus:border-0 focus:ring-0"
                  />
                </div>
              </div>

              {/* Patient phone number */}
              <div>
                <label
                  htmlFor="patient-phone"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Phone Number
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3.5 transition focus-within:border-[#0875C9] focus-within:bg-white">
                  <Phone
                    size={19}
                    className="shrink-0 text-[#0875C9]"
                  />

                  <input
                    id="patient-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your contact number"
                    autoComplete="tel"
                    required
                    className="w-full min-w-0 border-0 bg-transparent py-4 text-sm text-slate-800 outline-none ring-0 placeholder:text-slate-400 focus:border-0 focus:ring-0"
                  />
                </div>
              </div>

              {/* Preferred date */}
              <div>
                <label
                  htmlFor="appointment-date"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Preferred Date
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3.5 transition focus-within:border-[#0875C9] focus-within:bg-white">
                  <CalendarDays
                    size={19}
                    className="shrink-0 text-[#0875C9]"
                  />

                  <input
                    id="appointment-date"
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toLocaleDateString("en-CA")}
                    className="w-full min-w-0 border-0 bg-transparent py-4 text-sm text-slate-700 outline-none ring-0 focus:border-0 focus:ring-0"
                  />
                </div>
              </div>

              {/* Consultation type */}
              <div>
                <label
                  htmlFor="consultation-type"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Consultation Type
                </label>

                <select
                  id="consultation-type"
                  name="consultation"
                  value={formData.consultation}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-700 outline-none transition focus:border-[#C92855] focus:bg-white focus:ring-1 focus:ring-pink-100"
                >
                  <option>Gynaecology Consultation</option>
                  <option>PCOS and Menstrual Health</option>
                  <option>Pregnancy Consultation</option>
                  <option>Fertility Consultation</option>
                  <option>IUI / IVF Consultation</option>
                </select>
              </div>
            </div>

            {/* Submit */}
            <div className="mt-6 flex flex-col gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-xs leading-5 text-slate-500 sm:text-sm">
                Your WhatsApp app will open with your appointment details.
                Please review and send the message to request your appointment.
              </p>

              <button
                type="submit"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#C92855] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-pink-100 transition duration-300 hover:-translate-y-0.5 hover:bg-[#0875C9] sm:min-w-[220px] sm:text-base"
              >
                <MessageCircle size={19} />
                Book via WhatsApp
                <ArrowUpRight size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}