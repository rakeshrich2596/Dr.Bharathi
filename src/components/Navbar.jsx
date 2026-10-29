import { useState } from "react";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Women's Health", href: "#knowledge" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Ovulation Calculator", href: "/ovulation-calculator" },
  { label: "Contact", href: "#visit-clinic" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          aria-label="Bharati Fertility and Women Center - Home"
          className="flex shrink-0 items-center"
        >
          <img
            src="/images/Dr. Bharathi_Logo.png"
            alt="Bharati Fertility and Women Center"
            className="h-[64px] w-[78px] object-contain sm:h-[72px] sm:w-[88px]"
          />
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 lg:flex xl:gap-7"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="whitespace-nowrap text-sm font-semibold text-slate-700 transition-colors duration-200 hover:text-[#C92855]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Appointment Button */}
        <a
          href="#appointment"
          className="hidden shrink-0 items-center gap-2 rounded-full bg-[#C92855] px-4 py-3 text-sm font-semibold text-white shadow-md shadow-pink-100 transition duration-300 hover:-translate-y-0.5 hover:bg-[#0875C9] lg:inline-flex xl:px-5"
        >
          
          <span>Book Appointment</span>
          
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="rounded-xl p-2.5 text-[#0875C9] transition-colors hover:bg-pink-50 lg:hidden"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-pink-100 bg-white px-5 py-4 shadow-lg lg:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="flex items-center justify-between border-b border-slate-100 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:text-[#C92855]"
            >
              {item.label}
              <ArrowUpRight size={16} className="text-[#C92855]" />
            </a>
          ))}

          <a
            href="#appointment"
            onClick={closeMenu}
            className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#C92855] px-5 py-3.5 font-semibold text-white shadow-md transition-colors hover:bg-[#0875C9]"
          >
            <Phone size={17} />
            Book Appointment
            <ArrowUpRight size={16} />
          </a>
        </nav>
      )}
    </header>
  );
}