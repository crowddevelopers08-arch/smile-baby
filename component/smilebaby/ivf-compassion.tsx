export default function CompassionateCareSection() {
  const steps = [
    {
      number: "01",
      title: "Lifestyle + Medical Support First",
      desc: "Before recommending IVF, we explore lifestyle changes and medical support that may improve your chances naturally.",
    },
    {
      number: "02",
      title: "IUI (If Your Case Is Suitable)",
      desc: "Intrauterine insemination may be the right step if your diagnosis supports it — simpler, less invasive, and effective.",
    },
    {
      number: "03",
      title: "IVF (When It Improves Chances Significantly)",
      desc: "IVF is recommended only when it meaningfully improves your chances of conceiving based on your specific reports.",
    },
  ];

  return (
    <section className="w-full bg-white px-6 sm:px-10 md:px-16 max-sm:pt-8 pt-14 pb-10">
      <div className="max-w-6xl mx-auto">

        {/* ── FULL-WIDTH HEADER ── */}
        <div className="mb-10 max-sm:mb-0">
          {/* Main heading */}
          <h2
            className="font-extrabold leading-[1.1] mb-1"
            style={{ fontSize: "clamp(2rem, 2.4vw, 3.5rem)", color: "#1e2a6e" }}
          >
            IVF Is Not Always{" "}
            <span style={{ color: "#ec4899" }}>the First Step</span>
          </h2>

          {/* Body paragraph */}
          <p className="leading-relaxed" style={{ fontSize: 15, color: "#6b7280", maxWidth: 860 }}>
            Depending on your age, diagnosis, and reports, the doctor may recommend:
          </p>
        </div>

        {/* ── TWO COLUMN: Left steps + Right image ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-14 items-center">

          {/* ── LEFT: Vertical timeline steps ── */}
          <div className="flex flex-col">
            {steps.map(({ number, title, desc }, i) => (
              <div key={i} className="flex gap-5 relative">

                {/* Timeline column: icon + line */}
                <div className="flex flex-col items-center flex-shrink-0" style={{ width: 28 }}>
                  {/* Circle icon */}
                  <div
                    className="flex items-center justify-center rounded-full flex-shrink-0"
                    style={{
                      width: 28,
                      height: 28,
                      border: "2px solid #ec4899",
                      background: "white",
                      zIndex: 1,
                      marginTop: 18,
                    }}
                  >
                    {/* Inner small filled circle */}
                    <span
                      className="rounded-full"
                      style={{ width: 10, height: 10, background: "#ec4899", display: "block" }}
                    />
                  </div>

                  {/* Connecting line (not after last item) */}
                  {i < steps.length - 1 && (
                    <div
                      className="flex-1 w-px"
                      style={{
                        background: "#ec4899",
                        opacity: 0.25,
                        minHeight: 60,
                        marginTop: 2,
                        marginBottom: 2,
                      }}
                    />
                  )}
                </div>

                {/* Step content */}
                <div
                  className="flex flex-col pb-8"
                  style={{ paddingBottom: i < steps.length - 1 ? 8 : 0 }}
                >
                  {/* Step label */}
                  <span
                    className="font-medium tracking-wide mb-1"
                    style={{ fontSize: 13, color: "#9ca3af", marginTop: 14 }}
                  >
                    Step {number}
                  </span>

                  {/* Step title */}
                  <h3
                    className="font-extrabold leading-snug mb-2"
                    style={{ fontSize: 20, color: "#1e2a6e" }}
                  >
                    {title}
                  </h3>

                  {/* Step description */}
                  <p className="leading-relaxed" style={{ fontSize: 14.5, color: "#6b7280" }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Mini line */}
            <p className="mt-2 text-sm font-semibold italic" style={{ color: "#ec4899" }}>
              Not sure what's right for you? Let's decide with evidence not guesswork.
            </p>
          </div>

          {/* ── RIGHT: Large image ── */}
          <div
            className="w-full overflow-hidden"
            style={{
              borderRadius: 24,
              aspectRatio: "4/5",
              maxHeight: 520,
            }}
          >
            <img
              src="https://ik.imagekit.io/tnvhh8yfa/public/ivf-smile/ivf-image.avif?updatedAt=1773300923177"
              alt="Compassionate care — doctor with pregnant patient"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}