import { Menu, Phone } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Treatments", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

export default function TreatmentNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-pink-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Smile Baby home">
          <img
            src="https://ik.imagekit.io/tnvhh8yfa/public/smile-baby-logo.webp?updatedAt=1773300923285"
            alt="Smile Baby Logo"
            className="h-11 w-auto object-contain"
          />
        </Link>

        <div className="hidden items-center gap-8 text-sm font-semibold text-slate-700 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-pink-500">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="tel:+918884752134"
            className="inline-flex h-11 items-center gap-2 rounded-md bg-pink-500 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-600"
          >
            <Phone size={18} aria-hidden="true" />
            <span className="hidden sm:inline">+91 8884752134</span>
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-pink-100 text-slate-700 md:hidden"
            aria-label="Open menu"
          >
            <Menu size={22} aria-hidden="true" />
          </button>
        </div>
      </nav>
    </header>
  );
}
