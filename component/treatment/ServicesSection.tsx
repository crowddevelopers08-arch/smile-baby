'use client'

import { useState } from 'react'

/* ── Tab colour (exact match from screenshot) ── */
const ACTIVE_BG = '#1B3D2B'   /* dark forest green */
const PAGE_BG   = '#EEF5F1'   /* light mint / sage  */

/* ── Service data ── */
const SERVICES = [
  {
    label: 'IVF (In Vitro Fertilization)',
    image: '/ivf-image.avif',
    desc:  'We combine cutting-edge reproductive science with compassionate care. Our fertility specialists have helped thousands of couples achieve their dream of parenthood through personalised IVF protocols tailored to your unique case.',
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke={active ? '#fff' : '#6b7280'} strokeWidth="1.6" strokeLinecap="round">
        <path d="M6 18h8M3 21h18M14 21v-4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"/>
        <path d="M14 7v4M10 7V5a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0z"/>
        <path d="M6 7h2M6 11h2"/>
      </svg>
    ),
  },
  {
    label: 'Intrauterine Insemination',
    image: '/service-2.jpg',
    desc:  "IUI is a simple, low-intervention fertility procedure where specially prepared sperm is placed directly into the uterus. It's often the first line of treatment recommended for mild fertility challenges.",
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke={active ? '#fff' : '#6b7280'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 2 4 4M17 7l3-3M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"/>
        <path d="m9 11 4 4M5 19l-3 3M14 4l6 6"/>
      </svg>
    ),
  },
  {
    label: 'Egg Freezing',
    image: '/banner1.webp',
    desc:  'Preserve your fertility on your timeline. Our egg freezing programme uses vitrification — a flash-freezing technology — to safely store your eggs for future use without compromising quality.',
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke={active ? '#fff' : '#6b7280'} strokeWidth="1.6" strokeLinecap="round">
        <path d="M12 2v20M4.93 4.93l14.14 14.14M2 12h20M4.93 19.07 19.07 4.93"/>
      </svg>
    ),
  },
  {
    label: 'Male Fertility Treatment',
    image: '/free-photo.jpg',
    desc:  'Male factor infertility accounts for nearly half of all cases. We offer comprehensive semen analysis, surgical sperm retrieval (TESA/PESA), and targeted treatments to address the root cause.',
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke={active ? '#fff' : '#6b7280'} strokeWidth="1.6" strokeLinecap="round">
        <circle cx="10" cy="14" r="5"/>
        <path d="m21 3-5.89 5.89M21 3h-6M21 3v6"/>
      </svg>
    ),
  },
  {
    label: 'Hormone Therapy',
    image: '/service-2.jpg',
    desc:  'Hormonal imbalances are a leading cause of fertility issues. Our endocrinology-led hormone therapy protocols restore balance, regulate ovulation, and prepare your body for successful conception.',
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke={active ? '#fff' : '#6b7280'} strokeWidth="1.6" strokeLinecap="round">
        <path d="M10 2v7.31M14 2v7.31M12 20a7 7 0 0 0 7-7c0-3.86-2.14-7-5-8.65V2"/>
        <path d="M12 20a7 7 0 0 1-7-7c0-3.86 2.14-7 5-8.65V2"/>
        <path d="M12 20v2"/>
      </svg>
    ),
  },
  {
    label: 'Genetic Testing',
    image: '/banner1.webp',
    desc:  'Pre-implantation Genetic Testing (PGT) screens embryos for chromosomal abnormalities before transfer. This dramatically improves success rates and reduces the risk of miscarriage and genetic conditions.',
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke={active ? '#fff' : '#6b7280'} strokeWidth="1.6" strokeLinecap="round">
        <path d="M2 15c6.667-6 13.333 0 20-6"/>
        <path d="M2 9c6.667 6 13.333 0 20 6"/>
        <path d="M2 12h.01M22 12h.01M5.5 6.5h.01M18.5 6.5h.01M5.5 17.5h.01M18.5 17.5h.01"/>
      </svg>
    ),
  },
]

export default function ServicesSection() {
  const [active, setActive] = useState(0)
  const svc = SERVICES[active]

  return (
    <section
      className="w-full"
      style={{ background: PAGE_BG, fontFamily: "'Outfit', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&display=swap');

        .pf-s { font-family:'Playfair Display',Georgia,serif }

        @keyframes imgFade { from{opacity:0;transform:scale(1.03)} to{opacity:1;transform:scale(1)} }
        @keyframes txtFade { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }

        .img-animate { animation:imgFade .45s cubic-bezier(.22,1,.36,1) both }
        .txt-animate { animation:txtFade .4s cubic-bezier(.22,1,.36,1) both }

        .tab-btn {
          width:100%;
          display:flex; align-items:center; gap:14px;
          padding:14px 18px;
          border-radius:14px;
          border:1.5px solid rgba(0,0,0,.1);
          background:#fff;
          cursor:pointer;
          transition:all .25s ease;
          text-align:left;
        }
        .tab-btn:hover:not(.tab-active) {
          border-color:rgba(27,61,43,.3);
          background:rgba(27,61,43,.04);
        }
        .tab-active {
          background:${ACTIVE_BG} !important;
          border-color:${ACTIVE_BG} !important;
        }

        /* Responsive */
        @media(max-width:1023px) {
          .svc-grid { grid-template-columns:1fr !important }
          .tab-list { flex-direction:row !important; flex-wrap:wrap !important }
          .tab-btn  { width:auto !important; flex:1 1 160px !important }
        }
        @media(max-width:640px) {
          .tab-btn  { flex:1 1 100% !important }
        }
      `}</style>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 28px 72px' }}>

        {/* ── Badge ── */}
        <div style={{
          display:'inline-flex', alignItems:'center', gap:8,
          background:'rgba(0,0,0,.06)',
          border:'1.5px solid rgba(0,0,0,.1)',
          borderRadius:999, padding:'5px 16px', marginBottom:24,
        }}>
          <span style={{width:7,height:7,borderRadius:'50%',background:'#333',display:'block'}}/>
          <span style={{fontSize:'0.72rem',fontWeight:600,color:'#444',letterSpacing:'0.12em'}}>
            Service Area
          </span>
        </div>

        {/* ── Heading ── */}
        <h2 className="pf-s" style={{
          fontSize:'clamp(2rem,4.5vw,3.6rem)',
          fontWeight:800, color:'#0d1f0d',
          lineHeight:1.12, maxWidth:640, marginBottom:52,
        }}>
          What We are offering to<br/>our potential client
        </h2>

        {/* ── Main Grid : tabs left | content right ── */}
        <div className="svc-grid" style={{ display:'grid', gridTemplateColumns:'300px 1fr', gap:32, alignItems:'start' }}>

          {/* ════ LEFT : Tab list ════ */}
          <div className="tab-list" style={{ display:'flex', flexDirection:'column', gap:10 }}>
            {SERVICES.map((s, i) => (
              <button
                key={s.label}
                onClick={() => setActive(i)}
                className={`tab-btn${i === active ? ' tab-active' : ''}`}
              >
                {/* Icon */}
                <span style={{
                  width:40, height:40, borderRadius:10, flexShrink:0,
                  background: i === active ? 'rgba(255,255,255,.15)' : 'rgba(0,0,0,.05)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                }}>
                  {s.icon(i === active)}
                </span>
                {/* Label */}
                <span style={{
                  fontSize:'0.88rem', fontWeight:600, lineHeight:1.3,
                  color: i === active ? '#fff' : '#374151',
                }}>
                  {s.label}
                </span>
              </button>
            ))}
          </div>

          {/* ════ RIGHT : Service detail ════ */}
          <div>

            {/* Image */}
            <div key={`img-${active}`} className="img-animate" style={{
              borderRadius:20,
              overflow:'hidden',
              aspectRatio:'16/9',
              width:'100%',
              marginBottom:24,
            }}>
              <img
                src={svc.image}
                alt={svc.label}
                style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center' }}
              />
            </div>

            {/* Title */}
            <h3 key={`title-${active}`} className="txt-animate" style={{
              fontSize:'clamp(1.3rem,2.4vw,1.7rem)',
              fontWeight:700, color:'#0d1f0d',
              marginBottom:12, lineHeight:1.3,
            }}>
              {svc.label}
            </h3>

            {/* Description */}
            <p key={`desc-${active}`} className="txt-animate" style={{
              animationDelay:'0.06s',
              color:'#6b7280',
              fontSize:'clamp(.9rem,1.3vw,.98rem)',
              lineHeight:1.82,
              maxWidth:640,
            }}>
              {svc.desc}
            </p>

          </div>
        </div>{/* end grid */}

      </div>
    </section>
  )
}
