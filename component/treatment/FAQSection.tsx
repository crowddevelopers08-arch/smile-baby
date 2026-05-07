'use client'

import { useState } from 'react'
import BookingModal from './BookingModal'

const PINK = '#ec4899'
const BLUE = '#1e2f5f'

const FAQS = [
  {
    q: 'What exactly happens at the Planning Visit?',
    a: 'We review all your existing reports, confirm your diagnosis, explain the treatment recommendation in plain language, walk you through the expected number of visits and procedures, and give you a full cost estimate — inclusions and possible add-ons. No commitment is needed after this visit.',
  },
  {
    q: "We've tried IUI twice. Should we directly start IVF?",
    a: "Not necessarily. The answer depends on why the IUI cycles failed. At the Planning Visit, we review what happened and give you an honest recommendation — sometimes a protocol change is enough, sometimes IVF is the right step. We'll tell you which one applies to your case.",
  },
  {
    q: 'How is your success rate for IVF?',
    a: "We don't quote a single clinic-wide figure because success rates depend significantly on age, embryo quality, and diagnosis. At your Planning Visit, we'll give you an honest expectation based on your specific profile — not a marketing number.",
  },
  {
    q: 'What does the starting price of ₹1.8 lakhs include?',
    a: 'The base package includes consultations, monitoring scans, stimulation injections, egg retrieval (with anaesthesia), embryo transfer, and basic lab charges. Add-ons such as ICSI, embryo freezing, donor programs, or PGT are only included if medically required and are always disclosed upfront.',
  },
  {
    q: 'Is 0% EMI available?',
    a: 'Yes. Instalment support is available and can be structured based on your treatment plan. Our team will walk you through options at the Planning Visit.',
  },
  {
    q: 'Will the same doctor handle our full case?',
    a: 'Yes. Continuity is one of our core commitments. Your specialist guides your case from the Planning Visit through the pregnancy confirmation — no handoffs to different doctors.',
  },
  {
    q: "What if the first cycle doesn't work?",
    a: 'We re-evaluate the full cycle response — stimulation, fertilisation, embryo quality — before recommending next steps. We adjust the protocol based on what we learn. We will never just repeat the same approach.',
  },
  {
    q: 'Do you have an in-house embryology lab?',
    a: 'Yes. Our on-site lab is run by an MSc-qualified embryologist. This means embryo development is monitored closely and in real time — not reported from an off-site facility.',
  },
]

/* ── Accordion item ── */
function FAQItem({ item, index, open, onToggle }: {
  item: typeof FAQS[0]
  index: number
  open: boolean
  onToggle: () => void
}) {
  return (
    <div
      style={{
        borderRadius: 16,
        border: `1.5px solid ${open ? 'rgba(236,72,153,.35)' : 'rgba(30,47,95,.1)'}`,
        background: open
          ? 'linear-gradient(135deg,rgba(236,72,153,.05) 0%,rgba(30,47,95,.04) 100%)'
          : '#fff',
        overflow: 'hidden',
        transition: 'border-color .3s ease, background .3s ease',
      }}
    >
      {/* Question row */}
      <button
        className="faq-question-row"
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '16px 18px sm:22px 24px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        {/* Number badge */}
        <span style={{
          flexShrink: 0,
          width: 32, height: 32,
          borderRadius: '50%',
          background: open
            ? `linear-gradient(135deg,${PINK},#be185d)`
            : 'rgba(30,47,95,.07)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '0.65rem', fontWeight: 800,
          color: open ? '#fff' : 'rgba(30,47,95,.45)',
          transition: 'all .3s ease',
          fontFamily: "'Playfair Display',serif",
        }}>
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Question text */}
        <span style={{
          flex: 1,
          fontSize: '0.88rem',
          fontWeight: 600,
          color: open ? BLUE : '#1a1a2e',
          lineHeight: 1.4,
          transition: 'color .3s ease',
        }}>
          {item.q}
        </span>

        {/* Chevron */}
        <span style={{
          flexShrink: 0,
          width: 28, height: 28,
          borderRadius: '50%',
          background: open ? `rgba(236,72,153,.12)` : 'rgba(30,47,95,.06)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all .3s ease',
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
            stroke={open ? PINK : 'rgba(30,47,95,.45)'} strokeWidth="2.5" strokeLinecap="round">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </span>
      </button>

      {/* Answer */}
      <div style={{
        maxHeight: open ? 300 : 0,
        overflow: 'hidden',
        transition: 'max-height .4s cubic-bezier(.22,1,.36,1)',
      }}>
        <div className="faq-answer-body" style={{
          padding: '0 18px 18px',
          paddingLeft: 62,
        }}>
          {/* Accent bar */}
          <div style={{
            width: 32, height: 2,
            background: `linear-gradient(90deg,${PINK},transparent)`,
            borderRadius: 2, marginBottom: 10,
          }}/>
          <p style={{
            color: 'rgba(30,47,95,.62)',
            fontSize: '0.85rem',
            lineHeight: 1.7,
            margin: 0,
            fontWeight: 400,
          }}>
            {item.a}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  const toggle = (i: number) => setOpen(prev => prev === i ? null : i)

  const left  = FAQS.slice(0, 4)
  const right = FAQS.slice(4)

  return (
    <section
      className="relative w-full overflow-hidden bg-white"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&display=swap');

        @keyframes fadeUpF  { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes blinkF   { 0%,100%{opacity:1} 50%{opacity:.25} }
        @keyframes morphF   { 0%,100%{border-radius:60% 40% 55% 45%/50% 60% 40% 50%} 50%{border-radius:45% 55% 40% 60%/60% 45% 55% 40%} }
        @keyframes shimmerF { 0%{background-position:-200% center} 100%{background-position:200% center} }

        .pf-f    { font-family:'Playfair Display',Georgia,serif }
        .f-up-f  { animation:fadeUpF  .85s cubic-bezier(.22,1,.36,1) both }
        .blink-f { animation:blinkF   2.2s ease-in-out infinite }
        .morph-f { animation:morphF   12s ease-in-out infinite }

        .faq-heading-accent {
          background:linear-gradient(90deg,#ec4899 0%,#f472b6 45%,#ec4899 70%,#be185d 100%);
          background-size:200% auto;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          background-clip:text;
          animation:shimmerF 5s linear infinite;
        }

        .cta-faq {
          background:linear-gradient(135deg,#ec4899,#db2777);
          color:#fff; border:none; cursor:pointer;
          display:inline-flex; align-items:center; gap:8px;
          transition:transform .25s ease;
        }
        .cta-faq:hover { transform:translateY(-3px) }

        .wa-faq {
          background:#25d366; color:#fff; border:none; cursor:pointer;
          display:inline-flex; align-items:center; gap:8px;
          transition:transform .25s ease;
        }
        .wa-faq:hover { transform:translateY(-3px) }

        /* MOBILE & TABLET RESPONSIVE (max-width: 1023px) */
        @media(max-width: 1023px) { 
          .faq-cols { 
            grid-template-columns: 1fr !important; 
            gap: 12px !important;
          }
          .faq-bottom-cta {
            flex-direction: column !important;
            text-align: center !important;
            padding: 28px 24px !important;
          }
          .faq-bottom-buttons {
            width: 100% !important;
            justify-content: center !important;
          }
          .faq-bottom-buttons button {
            flex: 1 !important;
            justify-content: center !important;
          }
          .faq-heading h2 {
            font-size: 1.8rem !important;
          }
          .faq-badge {
            margin-bottom: 10px !important;
          }
        }

        /* TABLET (640px - 1023px) */
        @media(min-width: 640px) and (max-width: 1023px) {
          .faq-cols { 
            gap: 16px !important;
          }
          .faq-bottom-cta {
            padding: 32px 32px !important;
          }
          .faq-heading h2 {
            font-size: 2.2rem !important;
          }
        }

        /* DESKTOP (min-width: 1024px) - NO CHANGES */
        @media(min-width: 1024px) {
          .faq-shell {
            padding:56px 28px 48px !important;
          }
          .faq-heading {
            margin-bottom:34px !important;
          }
          .faq-cols {
            grid-template-columns: 1fr 1fr !important;
            gap: 24px !important;
            margin-bottom:32px !important;
            align-items:start !important;
          }
          .faq-question-row {
            padding:22px 24px !important;
          }
          .faq-answer-body {
            padding:0 24px 22px 68px !important;
          }
          .faq-bottom-cta {
            padding:30px 34px !important;
            align-items:center !important;
          }
          .faq-bottom-cta > div:first-of-type {
            flex:1 1 auto !important;
          }
          .faq-bottom-cta > div:last-of-type {
            flex:0 0 auto !important;
          }
        }
      `}</style>

      {/* ── BG blobs ── */}
      <div className="morph-f" style={{position:'absolute',width:500,height:500,top:'-16%',right:'-10%',background:'radial-gradient(circle,rgba(236,72,153,.07) 0%,transparent 68%)',pointerEvents:'none',zIndex:0}}/>
      <div className="morph-f" style={{position:'absolute',width:400,height:400,bottom:'-14%',left:'-8%',background:'radial-gradient(circle,rgba(30,47,95,.06) 0%,transparent 68%)',pointerEvents:'none',zIndex:0,animationDelay:'6s'}}/>
      
      {/* Dot grid */}
      <div style={{position:'absolute',inset:0,zIndex:0,pointerEvents:'none',backgroundImage:'radial-gradient(circle,rgba(30,47,95,.05) 1.2px,transparent 1.2px)',backgroundSize:'30px 30px',maskImage:'radial-gradient(ellipse 85% 85% at 50% 50%,black 30%,transparent 100%)',WebkitMaskImage:'radial-gradient(ellipse 85% 85% at 50% 50%,black 30%,transparent 100%)'}}/>

      <div className="relative faq-shell" style={{zIndex:10,maxWidth:1280,margin:'0 auto',padding:'20px 20px 20px'}}>

        {/* ── Header ── */}
        <div className="f-up-f faq-heading" style={{animationDelay:'0s',textAlign:'center',marginBottom:20}}>

          {/* Badge */}
          <div className="faq-badge" style={{display:'inline-flex',alignItems:'center',gap:9,background:'rgba(236,72,153,.08)',border:'1.5px solid rgba(236,72,153,.28)',borderRadius:999,padding:'6px 16px',marginBottom:24}}>
            <span className="blink-f" style={{width:8,height:8,borderRadius:'50%',background:PINK,display:'block',flexShrink:0}}/>
            <span style={{color:PINK,fontSize:'0.65rem',fontWeight:700,letterSpacing:'0.2em',textTransform:'uppercase'}}>
              Frequently Asked · Smile Baby
            </span>
          </div>

          {/* Headline */}
          <h2 className="pf-f" style={{fontSize:'clamp(1.6rem,5vw,2.5rem)',fontWeight:800,color:BLUE,lineHeight:1.2,marginBottom:16}}>
            Questions Couples{' '}
            <em className="faq-heading-accent" style={{fontStyle:'italic'}}>Always Ask Us</em>
          </h2>

          {/* Accent line */}
          <div style={{height:3,width:50,background:`linear-gradient(90deg,${PINK},transparent)`,borderRadius:4,margin:'0 auto 20px'}}/>

          {/* Subtitle */}
          <p style={{color:'rgba(30,47,95,.52)',fontSize:'0.9rem',lineHeight:1.7,maxWidth:520,margin:'0 auto',fontWeight:400, padding: '0 16px'}}>
            Honest answers — no vague claims, no marketing language.
            If you don&apos;t find yours here,{' '}
            <strong style={{color:BLUE}}>ask us directly.</strong>
          </p>
        </div>

        {/* ── FAQ two-column grid (becomes single column on mobile/tablet) ── */}
        <div className="faq-cols f-up-f" style={{
          animationDelay:'0.2s',
          display:'grid',
          gap: 12,
          alignItems:'start',
          marginBottom: 20,
        }}>

          {/* Left column */}
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            {left.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                index={i}
                open={open === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>

          {/* Right column */}
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            {right.map((item, i) => (
              <FAQItem
                key={i + 4}
                item={item}
                index={i + 4}
                open={open === i + 4}
                onToggle={() => toggle(i + 4)}
              />
            ))}
          </div>

        </div>

        {/* ── Bottom CTA strip (responsive) ── */}
        <div className="faq-bottom-cta f-up-f" style={{
          animationDelay:'0.35s',
          background:`linear-gradient(135deg,${BLUE} 0%,#0f1e40 100%)`,
          borderRadius:20,
          padding:'28px 24px',
          display:'flex',
          alignItems:'center',
          justifyContent:'space-between',
          flexWrap:'wrap',
          gap:20,
          position:'relative',
          overflow:'hidden',
        }}>

          {/* BG glow inside strip */}
          <div style={{position:'absolute',width:300,height:300,top:'-50%',right:'5%',borderRadius:'50%',background:'rgba(236,72,153,.1)',pointerEvents:'none'}}/>

          <div style={{position:'relative',zIndex:2, flex: 1}}>
            <div style={{fontSize:'0.62rem',fontWeight:700,letterSpacing:'0.18em',textTransform:'uppercase',color:'rgba(249,168,212,.8)',marginBottom:6}}>
              Still have questions?
            </div>
            <h3 className="pf-f" style={{fontSize:'clamp(1.1rem,3vw,1.5rem)',fontWeight:700,color:'#fff',lineHeight:1.3,marginBottom:6}}>
              Talk to us — <em style={{color:PINK,fontStyle:'italic'}}>no obligation, just clarity.</em>
            </h3>
            <p style={{color:'rgba(255,255,255,.45)',fontSize:'0.8rem',lineHeight:1.6,maxWidth:420,margin:0}}>
              Book Your Planning Visit and get every question answered in person.
            </p>
          </div>

<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto z-10">

  {/* Book Button */}
  <button
    type="button"
    onClick={() => setIsBookingModalOpen(true)}
    className="flex items-center cursor-pointer justify-center gap-2 w-full sm:w-auto px-4 sm:px-5 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#ec4899] text-white hover:bg-[#d63c84] transition-all duration-300 shadow-md hover:shadow-lg"
  >
    
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
    </svg>

    <span>Book Planning Visit</span>
  </button>

  {/* WhatsApp Button */}
  <a
  href="https://wa.me/919876543210"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center  justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-full text-sm font-semibold bg-[#25D366] text-white hover:bg-[#1ebe5d] active:bg-[#169c4a] transition-all duration-300 shadow-md hover:shadow-lg no-underline"
  style={{ WebkitTapHighlightColor: "transparent" }}
>
<svg
  className="w-4 h-4 flex-shrink-0"
  viewBox="0 0 32 32"
  fill="currentColor"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M16.001 3C8.82 3 3 8.82 3 16c0 2.537.74 4.999 2.137 7.116L3 29l6.08-2.09A12.94 12.94 0 0016.001 29C23.18 29 29 23.18 29 16S23.18 3 16.001 3zm0 23.667a10.6 10.6 0 01-5.403-1.48l-.387-.229-3.607 1.24 1.179-3.51-.252-.404A10.59 10.59 0 015.333 16c0-5.882 4.785-10.667 10.668-10.667 5.881 0 10.666 4.785 10.666 10.667S21.882 26.667 16 26.667zm5.848-7.98c-.32-.16-1.892-.934-2.185-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.214-.373.24-.693.08-.32-.16-1.35-.498-2.57-1.588-.95-.847-1.592-1.893-1.779-2.213-.187-.32-.02-.493.14-.653.145-.144.32-.373.48-.56.16-.186.213-.32.32-.533.107-.214.053-.4-.027-.56-.08-.16-.72-1.733-.986-2.373-.26-.626-.526-.54-.72-.55l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.666s1.147 3.093 1.307 3.306c.16.214 2.258 3.447 5.474 4.833.765.33 1.362.527 1.828.674.768.244 1.467.21 2.02.127.616-.092 1.892-.773 2.158-1.52.267-.746.267-1.386.187-1.52-.08-.133-.293-.213-.613-.373z"/>
</svg>

  <span className="text-white">WhatsApp Us</span>
</a>

</div>

        </div>

      </div>
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  )
}
