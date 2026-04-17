import Link from "next/link";

export default function TreatmentFooter() {
  return (
    <footer className="bg-slate-950 px-5 py-8 text-white max-sm:mb-10 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <img
            src="https://ik.imagekit.io/tnvhh8yfa/public/smile-baby-logo.webp?updatedAt=1773300923285"
            alt="Smile Baby IVF Logo"
            className="h-10 w-auto rounded bg-white px-2 py-1"
          />
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
            Smile Baby IVF supports families with compassionate fertility care and clear guidance.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-slate-300 sm:items-end">
          <a href="tel:+918884752134" className="transition hover:text-white">
            +91 8884752134
          </a>
          <Link href="/privacy-policy" className="transition hover:text-white">
            Privacy Policy
          </Link>
          <p>Copyright {new Date().getFullYear()} Smile Baby. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
