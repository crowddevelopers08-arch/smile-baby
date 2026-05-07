'use client'

import { useState } from 'react'
import BookingModal from './BookingModal'

/* ─── Brand colours ─── */
const PINK = '#ec4899'
const BLUE = '#1e2f5f'

/* ─── Doctor qualifications / highlights ─── */
const QUALS = [
  'MBBS',
  'MD – Obstetrics & Gynaecology',
  'Fellowship in Reproductive Medicine',
  'IVF & Embryology Specialist',
  'ICMR Certified',
]

const PILLARS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={PINK} strokeWidth="1.8" strokeLinecap="round">
        <path d="M9 12h.01M15 12h.01M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/>
        <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/>
      </svg>
    ),
    title: 'Diagnostic Precision',
    desc: 'Every case reviewed with thorough report analysis before any recommendation.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={PINK} strokeWidth="1.8" strokeLinecap="round">
        <path d="M6 18h8M3 21h18M14 21v-4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4M14 7v4M10 7V5a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0z"/>
      </svg>
    ),
    title: 'Lab Quality',
    desc: 'State-of-the-art IVF lab maintained to the highest ICMR standards.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={PINK} strokeWidth="1.8" strokeLinecap="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    title: 'Protocol Experience',
    desc: '12+ years of personalised fertility protocols — never a standard one-size-fits-all plan.',
  },
]

const FLOATING_BADGES = [
  { label: '10,000+', sub: 'Babies Delivered', pos: { top: '6%',  left: '-14%' }, cls: 'fb-left-top' },
  { label: '80–85%',  sub: 'IVF Success Rate',  pos: { top: '36%', right: '-16%' }, cls: 'fb-right' },
  { label: '12+ Yrs', sub: 'Expert Experience', pos: { bottom: '26%', left: '-14%' }, cls: 'fb-left-low' },
]

export default function OurTeam() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  return (
    <section className="relative w-full overflow-hidden bg-white" style={{ fontFamily: "'Outfit', sans-serif" }}>

      {/* ─── CSS ─── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&display=swap');

        @keyframes fadeUp   { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:translateY(0)} }
        @keyframes floatBob { 0%,100%{transform:translateY(0)}           50%{transform:translateY(-10px)} }
        @keyframes blinkDot { 0%,100%{opacity:1}                         50%{opacity:.25} }
        @keyframes morphBg  {
          0%,100%{ border-radius:60% 40% 55% 45%/50% 60% 40% 50% }
          50%    { border-radius:45% 55% 40% 60%/60% 45% 55% 40% }
        }
        @keyframes shimmer {
          0%  { background-position:-200% center }
          100%{ background-position: 200% center }
        }
        @keyframes lineW { from{width:0} to{width:64px} }

        .pf       { font-family:'Playfair Display',Georgia,serif }
        .f-up     { animation:fadeUp   .85s cubic-bezier(.22,1,.36,1) both }
        .do-float { animation:floatBob 7s ease-in-out infinite }
        .blink    { animation:blinkDot 2.2s ease-in-out infinite }
        .morph    { animation:morphBg  12s ease-in-out infinite }
        .line-anim{ animation:lineW    .8s cubic-bezier(.22,1,.36,1) both }

        .heading-accent {
          background: linear-gradient(90deg,${PINK} 0%,#f472b6 45%,${PINK} 70%,#be185d 100%);
          background-size:200% auto;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          background-clip:text;
          animation:shimmer 5s linear infinite;
        }

        .qual-chip {
          display:inline-flex; align-items:center; gap:6px;
          padding:5px 14px;
          background:rgba(236,72,153,.07);
          border:1.5px solid rgba(236,72,153,.22);
          border-radius:999px;
          font-size:.72rem; font-weight:600;
          color:${BLUE};
          transition:all .25s ease;
        }
        .qual-chip:hover {
          background:rgba(236,72,153,.14);
          border-color:rgba(236,72,153,.4);
          transform:translateY(-2px);
        }

        .pillar-card {
          padding:24px 22px;
          background:#fff;
          border:1.5px solid rgba(30,47,95,.09);
          border-radius:20px;
          transition:all .3s ease;
        }
        .pillar-card:hover {
          border-color:rgba(236,72,153,.3);
          transform:translateY(-4px);
        }

        .float-badge {
          position:absolute;
          background:#fff;
          border:1.5px solid rgba(236,72,153,.18);
          border-radius:16px;
          padding:10px 14px;
          display:flex; align-items:center; gap:10px;
          min-width:130px;
          transition:transform .25s ease;
        }
        .float-badge:hover { transform:translateY(-3px) }

        .cta-btn {
          background:linear-gradient(135deg,${PINK},#db2777);
          color:#fff; border:none; cursor:pointer;
          transition:transform .25s ease;
          display:inline-flex; align-items:center; gap:8px;
        }
        .cta-btn:hover { transform:translateY(-3px) }
        .mobile-cta { display:none !important }

        @media(min-width:1024px) {
          .team-eyebrow   { margin-bottom:32px !important }
          .team-grid      { align-items:center !important; gap:54px !important }
          .team-copy      { display:flex !important; flex-direction:column !important; justify-content:center !important }
          .team-lead      { margin-bottom:32px !important }
          .img-col        { display:flex !important; align-items:center !important }
          .image-stage    { width:100% !important }
        }

        @media(max-width:1023px) {
          .team-grid      { grid-template-columns:1fr !important }
          .content-wrap   { padding:64px 20px 58px !important }
          .team-grid      { gap:42px !important }
          .img-col        { min-height:auto !important; width:min(100%,460px) !important; margin:0 auto !important; padding:34px 0 22px !important }
          .image-stage    { min-height:480px !important }
          .img-frame      { width:78% !important; max-width:340px !important }
          .img-blob       { display:block !important; width:82% !important; height:78% !important; top:11% !important; left:9% !important }
          .float-badge    { padding:8px 10px !important; min-width:112px !important; gap:8px !important; border-radius:14px !important }
          .fb-left-top    { top:5% !important; left:0 !important }
          .fb-right       { top:34% !important; right:0 !important; bottom:auto !important }
          .fb-left-low    { bottom:21% !important; left:0 !important }
          .pillar-grid    { grid-template-columns:1fr 1fr !important; gap:10px !important }
          .desktop-cta    { display:none !important }
          .mobile-cta     { display:flex !important; justify-content:center !important; margin-top:22px !important }
          .img-name-badge { padding:7px 10px !important; gap:6px !important; left:10px !important; right:10px !important; bottom:10px !important }
        }
        @media(max-width:480px) {
        .team-grid      { gap:0px !important }
          .pillar-grid    { grid-template-columns:1fr !important }
          .content-wrap   { padding:24px 16px 10px !important }
          .img-col        { width:100% !important; padding-top:28px !important }
          .image-stage    { min-height:438px !important }
          .img-frame      { width:76% !important; max-width:300px !important }
          .float-badge    { min-width:102px !important; padding:7px 9px !important }
          .float-badge svg{ width:15px !important; height:15px !important }
          .float-badge > div:first-child { width:32px !important; height:32px !important }
          .float-badge .pf { font-size:.92rem !important }
          .float-badge .pf + div { font-size:.54rem !important }
          .fb-left-top    { top:3% !important; left:1px !important }
          .fb-right       { top:30% !important; right:1px !important }
          .fb-left-low    { bottom:19% !important; left:1px !important }
          .img-name-badge { border-radius:12px !important }
          .img-name-badge > div:first-child { width:34px !important; height:34px !important }
          .img-name-badge > div:nth-child(2) { min-width:0 !important }
          .img-name-badge > div:nth-child(2) > div:first-child { font-size:.74rem !important }
          .img-name-badge > div:nth-child(2) > div:last-child { font-size:.56rem !important; line-height:1.35 !important }
          .img-name-badge > div:last-child { display:none !important }
          .mobile-cta     { flex-direction:column !important; align-items:stretch !important; gap:10px !important; padding:0 8px !important }
          .mobile-cta button { justify-content:center !important; width:100% !important }
        }
          
      `}</style>

      {/* ─── Decorative bg blobs ─── */}
      <div className="morph" style={{
        position:'absolute', width:520, height:520,
        top:'-18%', right:'-10%',
        background:'radial-gradient(circle,rgba(236,72,153,.07) 0%,transparent 68%)',
        pointerEvents:'none', zIndex:0,
      }}/>
      <div className="morph" style={{
        position:'absolute', width:400, height:400,
        bottom:'-14%', left:'-8%',
        background:'radial-gradient(circle,rgba(30,47,95,.06) 0%,transparent 68%)',
        pointerEvents:'none', zIndex:0, animationDelay:'6s',
      }}/>
      {/* dot grid */}
      <div style={{
        position:'absolute', inset:0, zIndex:0, pointerEvents:'none',
        backgroundImage:'radial-gradient(circle,rgba(30,47,95,.05) 1.2px,transparent 1.2px)',
        backgroundSize:'30px 30px',
        maskImage:'radial-gradient(ellipse 85% 85% at 50% 50%,black 30%,transparent 100%)',
        WebkitMaskImage:'radial-gradient(ellipse 85% 85% at 50% 50%,black 30%,transparent 100%)',
      }}/>

      {/* ─── CONTENT ─── */}
      <div id='our-team' className="relative content-wrap" style={{ zIndex:10, maxWidth:1280, margin:'0 auto', padding:'28px 28px 28px' }}>

        {/* Top badge */}
        <div className="f-up team-eyebrow max-sm:mb-3 mb-20" style={{
          animationDelay:'0s',
          display:'inline-flex', alignItems:'center', gap:9,
          background:'rgba(236,72,153,.08)',
          border:'1.5px solid rgba(236,72,153,.28)',
          borderRadius:999, padding:'6px 18px',
        }}>
          <span className="blink" style={{ width:8, height:8, borderRadius:'50%', background:PINK, display:'block', flexShrink:0 }}/>
          <span style={{ color:PINK, fontSize:'0.68rem', fontWeight:700, letterSpacing:'0.22em', textTransform:'uppercase' }}>
            Our Team · Smile Baby Fertility Centre
          </span>
        </div>

        {/* ─── 50 / 50 GRID ─── */}
        <div className="team-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center' }}>

          {/* ════ LEFT : Text content ════ */}
          <div className="team-copy">

            {/* Headline */}
            <h2 className="pf f-up" style={{
              animationDelay:'0.1s',
              fontSize:'clamp(2.2rem,4.2vw,3.6rem)',
              fontWeight:800, color:BLUE,
              lineHeight:1.1, marginBottom:14,
            }}>
              You&apos;re Not Treated<br/>by a Clinic.{' '}
              <em className="heading-accent" style={{ fontStyle:'italic' }}>
                You&apos;re Treated<br/>by Specialists.
              </em>
            </h2>

            {/* Accent line */}
            <div className="line-anim f-up" style={{
              animationDelay:'0.18s',
              height:3, width:64,
              background:`linear-gradient(90deg,${PINK},rgba(236,72,153,0))`,
              borderRadius:4, marginBottom:22,
            }}/>

            {/* Description */}
            <p className="f-up team-lead max-sm:mb-10 mb-20" style={{
              animationDelay:'0.24s',
              color:'rgba(30,47,95,.56)',
              fontSize:'clamp(.96rem,1.5vw,1.08rem)',
              lineHeight:1.85, maxWidth:480,
             fontWeight:400,
            }}>
              Your outcome depends on{' '}
              <strong style={{ color:BLUE, fontWeight:600 }}>diagnostic precision</strong>,{' '}
              <strong style={{ color:BLUE, fontWeight:600 }}>lab quality</strong>, and{' '}
              <strong style={{ color:BLUE, fontWeight:600 }}>protocol experience</strong>{' '}
              — not just equipment.
            </p>

            {/* Qualification chips */}
            <div className="f-up" style={{ animationDelay:'0.3s', display:'flex', flexWrap:'wrap', gap:8, marginBottom:36 }}>
              {QUALS.map(q => (
                <span key={q} className="qual-chip">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={PINK} strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {q}
                </span>
              ))}
            </div>

            {/* Three pillars */}
            <div className="f-up pillar-grid" style={{ animationDelay:'0.38s', display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:12, marginBottom:36 }}>
              {PILLARS.map(p => (
                <div key={p.title} className="pillar-card">
                  <div style={{
                    width:44, height:44, borderRadius:12,
                    background:'rgba(236,72,153,.08)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    marginBottom:12,
                  }}>
                    {p.icon}
                  </div>
                  <div style={{ fontSize:'0.8rem', fontWeight:700, color:BLUE, marginBottom:6 }}>{p.title}</div>
                  <div style={{ fontSize:'0.7rem', color:'rgba(30,47,95,.5)', lineHeight:1.65 }}>{p.desc}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="f-up desktop-cta" style={{ animationDelay:'0.44s', display:'flex', gap:12, flexWrap:'wrap' }}>
              <button type="button" onClick={() => setIsBookingModalOpen(true)} className="cta-btn" style={{ padding:'13px 28px', borderRadius:999, fontSize:'0.88rem', fontWeight:700 }}>
                Book a Consultation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              <button style={{
                padding:'12px 24px', borderRadius:999, fontSize:'0.86rem', fontWeight:600,
                background:'transparent', border:`2px solid ${BLUE}`, color:BLUE,
                cursor:'pointer', transition:'all .25s ease',
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = BLUE;
                  (e.currentTarget as HTMLButtonElement).style.color = '#fff';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                  (e.currentTarget as HTMLButtonElement).style.color = BLUE;
                }}
              >
                📞 +91 88847 52134
              </button>
            </div>
          </div>

          {/* ════ RIGHT : Doctor image card ════ */}
          <div className="do-float f-up img-col " style={{ animationDelay:'0.45s', position:'relative', minHeight:560 }}>
            <div className="image-stage" style={{ position:'relative', minHeight:560 }}>

            {/* Blob behind image */}
            <div className="morph img-blob" style={{
              position:'absolute', width:'80%', height:'80%',
              top:'10%', left:'10%',
              background:`linear-gradient(135deg,rgba(236,72,153,.14) 0%,rgba(30,47,95,.1) 100%)`,
              zIndex:0, animationDelay:'3s',
            }}/>

            {/* Doctor image frame */}
            <div className="img-frame" style={{
              position:'relative', zIndex:2,
              width:'80%', margin:'0 auto',
              borderRadius:'42% 58% 50% 50% / 48% 48% 52% 52%',
              overflow:'hidden',
              border:`3px solid rgba(255,255,255,.95)`,
              aspectRatio:'3/4',
            }}>
              <img
                src="/doc.jpeg"
                alt="Dr. Mangala Devi K R"
                style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top' }}
              />
              {/* Bottom gradient */}
              <div style={{
                position:'absolute', bottom:0, left:0, right:0, height:'45%',
                background:`linear-gradient(to top,rgba(30,47,95,.7) 0%,transparent 100%)`,
              }}/>
              {/* Name badge */}
              <div className="img-name-badge" style={{
                position:'absolute', bottom:20, left:20, right:20,
                background:'rgba(255,255,255,.94)',
                backdropFilter:'blur(16px)',
                borderRadius:14, padding:'12px 16px',
                display:'flex', alignItems:'center', gap:12,
              }}>
                <div style={{
                  width:40, height:40, borderRadius:'50%', flexShrink:0,
                  background:`linear-gradient(135deg,${PINK},#be185d)`,
                  display:'flex', alignItems:'center', justifyContent:'center',
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-2 9h-4v4h-2v-4H7v-2h4V6h2v4h4v2z"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize:'0.82rem', fontWeight:700, color:BLUE, lineHeight:1.2 }}>Dr. Mangala Devi K R</div>
                  <div style={{ fontSize:'0.65rem', color:'rgba(30,47,95,.55)', fontWeight:500, marginTop:2 }}>
                    MBBS, MS (OBG) · Conception Care
                  </div>
                </div>
                <div style={{ marginLeft:'auto', display:'flex', alignItems:'center', gap:4 }}>
                  <span className="blink" style={{ width:7, height:7, borderRadius:'50%', background:'#22c55e', display:'block' }}/>
                  <span style={{ fontSize:'0.6rem', color:'#16a34a', fontWeight:700 }}>Available</span>
                </div>
              </div>
            </div>

            {/* ── Floating stat badges ── */}
            {FLOATING_BADGES.map(({ label, sub, pos, cls }) => (
              <div key={label} className={`float-badge${cls ? ` ${cls}` : ''}`} style={{ ...pos, zIndex:5 }}>
                <div style={{
                  width:38, height:38, borderRadius:10, flexShrink:0,
                  background:'rgba(236,72,153,.1)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill={PINK}>
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
                <div>
                  <div className="pf" style={{ fontSize:'1.1rem', fontWeight:700, color:PINK, lineHeight:1 }}>{label}</div>
                  <div style={{ fontSize:'0.6rem', color:'rgba(30,47,95,.5)', fontWeight:500, marginTop:2 }}>{sub}</div>
                </div>
              </div>
            ))}

            </div>

            <div  className="f-up mobile-cta maxx-sm:m-0" style={{ animationDelay:'0.44s', display:'flex', gap:12, flexWrap:'wrap' }}>
              <button type="button" onClick={() => setIsBookingModalOpen(true)} className="cta-btn" style={{ padding:'13px 28px', borderRadius:999, fontSize:'0.88rem', fontWeight:700 }}>
                Book a Consultation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              <button style={{
                padding:'12px 24px', borderRadius:999, fontSize:'0.86rem', fontWeight:600,
                background:'transparent', border:`2px solid ${BLUE}`, color:BLUE,
                cursor:'pointer', transition:'all .25s ease',
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = BLUE;
                  (e.currentTarget as HTMLButtonElement).style.color = '#fff';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                  (e.currentTarget as HTMLButtonElement).style.color = BLUE;
                }}
              >
                📞 +91 88847 52134
              </button>
            </div>

          </div>
        </div>{/* end grid */}

      </div>
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  )
}
