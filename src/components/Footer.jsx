import {
  ArrowUpRight,
  ArrowUp,
  MapPin,
  Phone,
  Mail,
  Clock,
  Heart,
  ChevronRight,
  Globe,
} from "lucide-react";

const quickLinks = [
  { name: "Home", path: "#home" },
  { name: "About Us", path: "#about" },
  { name: "Our Expertise", path: "#expertise" },
  { name: "Our Approach", path: "#approach" },
  { name: "Knowledge Centre", path: "#knowledge" },
  { name: "Ovulation Calculator", path: "/ovulation-calculator" },
  { name: "FAQs", path: "#faq" },
];

const services = [
  "IVF Treatment",
  "IUI Treatment",
  "ICSI Treatment",
  "PCOS Treatment",
  "Male Fertility Treatment",
  "Laparoscopy & Hysteroscopy",
];

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/bharatifertilityandwomencenter/?hl=en",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/bharatifertilityandwomencenter/",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@Bharatifertilitycenter",
  },
];

const mapDirectionUrl = "https://maps.app.goo.gl/wRWkXBB3tLkvErEa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-[#CBE8E7] bg-gradient-to-br from-[#F0FAF8] via-[#E5F5F2] to-[#FFF4E8] text-slate-700">
      {/* Soft brand-colour decorations */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#F47A45]/[0.12] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#087D8B]/[0.10] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-12 sm:px-8 sm:pb-10 sm:pt-14 lg:px-10 lg:pt-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-9">
          {/* Brand information */}
          <div className="lg:col-span-4">
            <a href="#home">
              <img
                src="/images/logo_c.png"
                alt="Bharati Fertility & Women Center"
                className="h-24 w-32 object-contain object-left"
              />
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">
              Supporting your journey towards parenthood with personalized
              fertility care, ethical guidance and compassionate support.
            </p>

            <div className="mt-6 flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF0E4] text-[#D96835]">
                <Heart size={19} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">
                  Care with compassion
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Your wellbeing matters at every step.
                </p>
              </div>
            </div>

            {/* Social media */}
            <div className="mt-7">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                Connect with us
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${social.name} page`}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-600 transition-all duration-300 hover:border-[#087D8B] hover:bg-[#087D8B] hover:text-white"
                  >
                    <Globe size={15} />
                    {social.name}
                    <ArrowUpRight size={13} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-extrabold text-[#075B60]">
              Quick Links
            </h3>
            <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-[#F47A45] to-[#087D8B]" />

            <ul className="mt-6 space-y-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className="group inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-[#087D8B]"
                  >
                    <ChevronRight
                      size={15}
                      className="text-[#087D8B] transition-transform group-hover:translate-x-1"
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-extrabold text-[#075B60]">
              Our Services
            </h3>
            <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-[#F47A45] to-[#087D8B]" />

            <ul className="mt-6 space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#expertise"
                    className="group inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-[#087D8B]"
                  >
                    <ChevronRight
                      size={15}
                      className="text-[#087D8B] transition-transform group-hover:translate-x-1"
                    />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-extrabold text-[#075B60]">
              Get in Touch
            </h3>
            <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-[#F47A45] to-[#087D8B]" />

            <div className="mt-6 space-y-6">
              {/* Clinic address */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF0E4] text-[#D96835]">
                  <MapPin size={19} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">
                    Mandaveli Clinic
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    New No. 49, Old No. 21,
                    <br />
                    Venkatakrishna Road,
                    <br />
                    Opposite Bank of Baroda,
                    <br />
                    Mandaveli, Chennai – 600028.
                  </p>
                  <a
                    href={mapDirectionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-[#087D8B] transition-colors hover:text-[#087D8B]"
                  >
                    <MapPin size={14} />
                    Get Directions
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* Phone numbers */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E0F2F0] text-[#087D8B]">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Call Us</h4>
                  <a
                    href="tel:+918220052005"
                    className="mt-2 block text-sm text-slate-600 transition-colors hover:text-[#087D8B]"
                  >
                    +91 82 2005 2005
                  </a>
                  <a
                    href="tel:+919791154545"
                    className="mt-1 block text-sm text-slate-600 transition-colors hover:text-[#087D8B]"
                  >
                    +91 97911 54545
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#D96835]">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Email Us</h4>
                  <a
                    href="mailto:bharatifertility@gmail.com"
                    className="mt-2 break-all text-sm text-slate-600 transition-colors hover:text-[#087D8B]"
                  >
                    bharatifertility@gmail.com
                  </a>
                </div>
              </div>

              {/* Appointment link */}
              <a
                href="#appointment"
                className="group flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white/80 px-4 py-4 transition-all duration-300 hover:border-[#087D8B]/30 hover:bg-white"
              >
                <div className="flex items-center gap-3">
                  <Clock size={19} className="text-[#087D8B]" />
                  <span className="text-sm font-bold text-slate-700">
                    Plan Your Visit
                  </span>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-slate-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#087D8B]"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-slate-200 sm:my-12" />

        {/* Bottom footer */}
        <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-6 text-slate-500 sm:text-sm">
            © {currentYear} Bharati Fertility &amp; Women Center. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <a
              href="#privacy-policy"
              className="text-xs text-slate-500 transition-colors hover:text-[#087D8B] sm:text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-xs text-slate-500 transition-colors hover:text-[#087D8B] sm:text-sm"
            >
              Terms &amp; Conditions
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#F47A45] to-[#087D8B] text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <ArrowUp size={19} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
