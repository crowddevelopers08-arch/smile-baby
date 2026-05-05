'use client'

import { useState, useEffect } from 'react'

const PINK = '#ec4899'
const BLUE = '#1e2f5f'

const REVIEWS = [
  {
    quote: 'Nine months of my pregnancy could have been a nightmare without the medical supervision at Smile Baby. They made my journey to become a mother nothing less than a dream. What I valued most was that I always understood what was happening and why.',
    name: 'Shaista Amreen',
    location: 'Kalyan Nagar',
    initials: 'SA',
    tag: 'Natural Pregnancy',
    gradient: 'linear-gradient(135deg,#ec4899,#be185d)',
  },
  {
    quote: 'I was genuinely worried about the costs going out of control. Smile Baby gave me a complete estimate before I committed to anything. Within one IUI cycle my pregnancy was confirmed. The doctor communicates so well — I never felt like just another patient.',
    name: 'Nayana R.',
    location: 'Kammanahalli',
    initials: 'NR',
    tag: 'IUI Success',
    gradient: 'linear-gradient(135deg,#1e2f5f,#3b5bdb)',
  },
  {
    quote: "We had been to two other clinics before Smile Baby. This was the first time a doctor sat down with us, explained our actual diagnosis, and told us why the earlier cycles hadn't worked. That single appointment gave us more clarity than two years of treatment elsewhere.",
    name: 'Priya & Srinivas',
    location: 'HBR Layout',
    initials: 'PS',
    tag: 'IVF Success',
    gradient: 'linear-gradient(135deg,#ec4899,#1e2f5f)',
  },
  {
    quote: 'I was scared of the IVF process. The team at Smile Baby walked me through every single step before we started. The embryologist called us after retrieval to tell us how many eggs were fertilised. Nobody had done that for us before.',
    name: 'Anitha K.',
    location: 'HRBR Layout',
    initials: 'AK',
    tag: 'IVF Success',
    gradient: 'linear-gradient(135deg,#be185d,#ec4899)',
  },
]

const Stars = () => (
  <div style={{ display: 'flex', gap: 3 }}>
    {[1, 2, 3, 4, 5].map(s => (
      <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill={PINK}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
)

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progressKey, setProgressKey] = useState(0)

  // Previous button
  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length)
    setProgressKey((prev) => prev + 1)
  }

  // Next button
  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length)
    setProgressKey((prev) => prev + 1)
  }

  // Dot click
  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setProgressKey((prev) => prev + 1)
  }

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length)
      setProgressKey((prev) => prev + 1)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const currentReview = REVIEWS[currentIndex]

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: `linear-gradient(150deg, #060d1e 0%, #0c1830 45%, #060d1e 100%)`,
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&display=swap');

        @keyframes glowT { 0%,100%{opacity:.5;transform:scale(1)} 50%{opacity:.8;transform:scale(1.1)} }
        @keyframes fadeUpT { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes blinkT { 0%,100%{opacity:1} 50%{opacity:.25} }
        @keyframes progressAnim {
          from { width: 0%; }
          to { width: 100%; }
        }

        .pf-t { font-family:'Playfair Display',Georgia,serif }
        .glow-t { animation:glowT 8s ease-in-out infinite }
        .f-up-t { animation:fadeUpT .85s cubic-bezier(.22,1,.36,1) both }
        .blink-t { animation:blinkT 2.2s ease-in-out infinite }

        .rev-card {
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.09);
          border-radius: 24px;
          padding: 32px 28px;
          transition: all 0.3s ease;
        }
        
        .rev-card:hover {
          border-color: rgba(236,72,153,.35);
          transform: translateY(-5px);
        }

        .big-quote {
          position: absolute;
          top: -12px;
          right: 20px;
          font-size: 9rem;
          line-height: 1;
          color: rgba(236,72,153,.08);
          font-family: Georgia, serif;
          pointer-events: none;
        }

        .tag-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 3px 12px;
          background: rgba(236,72,153,.12);
          border: 1px solid rgba(236,72,153,.25);
          border-radius: 999px;
          font-size: .62rem;
          font-weight: 700;
          color: ${PINK};
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .carousel-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,.08);
          border: 1px solid rgba(255,255,255,.14);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        
        .carousel-btn:hover {
          background: rgba(236,72,153,.2);
          border-color: rgba(236,72,153,.4);
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 4px;
          background: rgba(255,255,255,.25);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .dot.active {
          width: 24px;
          background: ${PINK};
        }

        .progress-bar {
          height: 3px;
          background: rgba(236,72,153,0.3);
          border-radius: 3px;
          overflow: hidden;
        }
        
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, ${PINK}, #db2777);
          animation: progressAnim 6s linear forwards;
        }

        /* MOBILE SCREEN OPTIMIZATION - Only affects mobile */
        @media (max-width: 767px) {
          .mobile-carousel {
            display: block !important;
          }
          .desktop-grid {
            display: none !important;
          }
          /* Mobile card padding reduced */
          .mobile-carousel .rev-card {
            padding: 20px 18px !important;
            margin-bottom: 12px !important;
          }
          /* Mobile header padding reduced */
          .mobile-header {
            margin-bottom: 32px !important;
            padding: 0 8px !important;
          }
          /* Mobile badge smaller */
          .mobile-header .badge {
            padding: 4px 12px !important;
            margin-bottom: 16px !important;
          }
          .mobile-header .badge span:last-child {
            font-size: 0.6rem !important;
          }
          /* Mobile heading smaller */
          .mobile-header h2 {
            font-size: 1.6rem !important;
            margin-bottom: 12px !important;
          }
          /* Mobile accent line smaller */
          .mobile-header .accent-line {
            width: 40px !important;
            margin-bottom: 16px !important;
          }
          /* Mobile subtitle smaller */
          .mobile-header .subtitle {
            font-size: 0.85rem !important;
            padding: 0 12px !important;
          }
          /* Mobile quote text smaller */
          .mobile-carousel .quote-text {
            font-size: 0.9rem !important;
            margin: 4px 0 !important;
          }
          /* Mobile tag pill smaller */
          .mobile-carousel .tag-pill {
            padding: 2px 10px !important;
            font-size: 0.55rem !important;
          }
          /* Mobile author section padding reduced */
          .mobile-carousel .author-section {
            padding-top: 14px !important;
            margin-top: 2px !important;
            gap: 10px !important;
          }
          /* Mobile avatar smaller */
          .mobile-carousel .author-avatar {
            width: 36px !important;
            height: 36px !important;
            font-size: 0.75rem !important;
          }
          /* Mobile author name smaller */
          .mobile-carousel .author-name {
            font-size: 0.85rem !important;
          }
          /* Mobile location smaller */
          .mobile-carousel .author-location {
            font-size: 0.65rem !important;
          }
          /* Mobile verified badge smaller */
          .mobile-carousel .verified-badge {
            padding: 3px 8px !important;
          }
          .mobile-carousel .verified-badge span {
            font-size: 0.55rem !important;
          }
          /* Mobile progress bar margin */
          .mobile-carousel .progress-bar {
            margin-top: 16px !important;
          }
          /* Mobile controls margin */
          .mobile-carousel .controls {
            margin-top: 18px !important;
          }
          /* Mobile buttons smaller */
          .mobile-carousel .carousel-btn {
            width: 38px !important;
            height: 38px !important;
          }
          /* Mobile dots gap smaller */
          .mobile-carousel .dots-container {
            gap: 8px !important;
          }
          /* Mobile counter */
          .mobile-carousel .slide-counter {
            margin-top: 12px !important;
            font-size: 0.65rem !important;
          }
          /* Mobile bottom strip padding */
          .mobile-bottom-strip {
            margin-top: 32px !important;
            padding: 16px 20px !important;
            gap: 12px !important;
          }
          /* Mobile bottom strip text */
          .mobile-bottom-strip .happy-families {
            font-size: 0.85rem !important;
          }
          .mobile-bottom-strip .happy-families-sub {
            font-size: 0.65rem !important;
          }
          /* Mobile stats */
          .mobile-bottom-strip .stats {
            gap: 16px !important;
          }
          .mobile-bottom-strip .stat-value {
            font-size: 1.6rem !important;
          }
          .mobile-bottom-strip .stat-label {
            font-size: 0.55rem !important;
          }
          /* Mobile button */
          .mobile-bottom-strip .whatsapp-btn {
            padding: 8px 18px !important;
            font-size: 0.75rem !important;
          }
        }

        /* DESKTOP SCREEN - Original design preserved */
        @media (min-width: 768px) {
          .desktop-grid {
            display: grid !important;
          }
          .mobile-carousel {
            display: none !important;
          }
        }
      `}</style>

      {/* Background effects */}
      <div className="glow-t" style={{position:'absolute',width:600,height:600,top:'-20%',right:'-12%',background:'radial-gradient(circle,rgba(236,72,153,.13) 0%,transparent 65%)',pointerEvents:'none',zIndex:0}}/>
      <div className="glow-t" style={{position:'absolute',width:500,height:500,bottom:'-18%',left:'-10%',background:'radial-gradient(circle,rgba(30,47,95,.25) 0%,transparent 65%)',pointerEvents:'none',zIndex:0,animationDelay:'4s'}}/>
      <div style={{position:'absolute',inset:0,zIndex:0,pointerEvents:'none',backgroundImage:'radial-gradient(circle,rgba(255,255,255,.05) 1px,transparent 1px)',backgroundSize:'32px 32px'}}/>

      {/* Main Content */}
      <div className="relative" style={{zIndex:10,maxWidth:1280,margin:'0 auto',padding:'40px 24px'}}>

        {/* Header - Desktop uses original, Mobile uses reduced padding */}
        <div className="f-up-t mobile-header" style={{textAlign:'center',marginBottom:56}}>
          <div className="badge" style={{display:'inline-flex',alignItems:'center',gap:9,background:'rgba(236,72,153,.1)',border:'1.5px solid rgba(236,72,153,.3)',borderRadius:999,padding:'6px 18px',marginBottom:24}}>
            <span className="blink-t" style={{width:8,height:8,borderRadius:'50%',background:PINK,display:'block'}}/>
            <span style={{color:PINK,fontSize:'0.68rem',fontWeight:700,letterSpacing:'0.22em',textTransform:'uppercase'}}>
              Patient Stories · Smile Baby
            </span>
          </div>
          <h2 className="pf-t" style={{fontSize:'clamp(2rem,4.5vw,3.5rem)',fontWeight:800,color:'#fff',lineHeight:1.1,marginBottom:16}}>
            Real Families.{' '}
            <em style={{color:PINK,fontStyle:'italic'}}>Real Journeys.</em>
          </h2>
          <div className="accent-line" style={{height:3,width:64,background:`linear-gradient(90deg,${PINK},transparent)`,borderRadius:4,margin:'0 auto 20px'}}/>
          <p className="subtitle" style={{color:'rgba(255,255,255,.5)',fontSize:'0.95rem',lineHeight:1.7,maxWidth:500,margin:'0 auto'}}>
            This is a trust decision. Read what couples who've been through this say about{' '}
            <span style={{color:'rgba(255,255,255,.8)',fontWeight:600}}>Smile Baby.</span>
          </p>
        </div>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* MOBILE CAROUSEL - Optimized for mobile */}
        {/* ═══════════════════════════════════════════════════════ */}
        <div className="mobile-carousel">
          {/* Card */}
          <div className="rev-card" style={{ position: 'relative' }}>
            <div className="big-quote">"</div>
            
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:8}}>
              <span className="tag-pill">
                <svg width="8" height="8" viewBox="0 0 24 24" fill={PINK}>
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                {currentReview.tag}
              </span>
              <Stars/>
            </div>
            
            <p className="pf-t quote-text" style={{fontSize:'1rem',color:'rgba(255,255,255,.82)',fontStyle:'italic',lineHeight:1.7,fontWeight:600,margin:'8px 0'}}>
              ❛ {currentReview.quote} ❜
            </p>
            
            <div className="author-section" style={{display:'flex',alignItems:'center',gap:14,borderTop:'1px solid rgba(255,255,255,.08)',paddingTop:18,marginTop:4}}>
              <div className="author-avatar" style={{width:44,height:44,borderRadius:'50%',background:currentReview.gradient,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'0.85rem',fontWeight:700,color:'#fff'}}>
                {currentReview.initials}
              </div>
              <div>
                <div className="author-name" style={{color:'#fff',fontSize:'0.9rem',fontWeight:700}}>{currentReview.name}</div>
                <div className="author-location" style={{color:'rgba(255,255,255,.4)',fontSize:'0.7rem',marginTop:3,display:'flex',alignItems:'center',gap:5}}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(236,72,153,.7)" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  {currentReview.location}
                </div>
              </div>
              <div className="verified-badge" style={{marginLeft:'auto',display:'flex',alignItems:'center',gap:5,background:'rgba(34,197,94,.1)',border:'1px solid rgba(34,197,94,.25)',borderRadius:999,padding:'4px 10px'}}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span style={{fontSize:'0.6rem',color:'#22c55e',fontWeight:700}}>VERIFIED</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="progress-bar" style={{marginTop: 20}}>
            <div key={progressKey} className="progress-fill" />
          </div>

          {/* Controls */}
          <div className="controls" style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:24}}>
            <button className="carousel-btn" onClick={goPrev} aria-label="Previous review">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>

            <div className="dots-container" style={{display:'flex',gap:10,alignItems:'center'}}>
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`dot ${i === currentIndex ? 'active' : ''}`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button className="carousel-btn" onClick={goNext} aria-label="Next review">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
          
          {/* Slide Counter */}
          <div className="slide-counter" style={{textAlign: 'center', marginTop: 16, color: 'rgba(255,255,255,.3)', fontSize: '0.7rem'}}>
            {currentIndex + 1} / {REVIEWS.length}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* DESKTOP GRID - 2 COLUMNS - Unchanged */}
        {/* ═══════════════════════════════════════════════════════ */}
        <div className="desktop-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24}}>
          {REVIEWS.map((r) => (
            <div key={r.name} className="rev-card" style={{position: 'relative'}}>
              <div className="big-quote">"</div>
              
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:8}}>
                <span className="tag-pill">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill={PINK}>
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                  {r.tag}
                </span>
                <Stars/>
              </div>
              
              <p className="pf-t" style={{fontSize:'0.95rem',color:'rgba(255,255,255,.82)',fontStyle:'italic',lineHeight:1.7,fontWeight:600,margin:'8px 0'}}>
                ❛ {r.quote} ❜
              </p>
              
              <div style={{display:'flex',alignItems:'center',gap:14,borderTop:'1px solid rgba(255,255,255,.08)',paddingTop:18,marginTop:4}}>
                <div style={{width:44,height:44,borderRadius:'50%',background:r.gradient,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'0.85rem',fontWeight:700,color:'#fff'}}>
                  {r.initials}
                </div>
                <div>
                  <div style={{color:'#fff',fontSize:'0.9rem',fontWeight:700}}>{r.name}</div>
                  <div style={{color:'rgba(255,255,255,.4)',fontSize:'0.7rem',marginTop:3,display:'flex',alignItems:'center',gap:5}}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(236,72,153,.7)" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    {r.location}
                  </div>
                </div>
                <div style={{marginLeft:'auto',display:'flex',alignItems:'center',gap:5,background:'rgba(34,197,94,.1)',border:'1px solid rgba(34,197,94,.25)',borderRadius:999,padding:'4px 10px'}}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span style={{fontSize:'0.6rem',color:'#22c55e',fontWeight:700}}>VERIFIED</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Strip - Optimized for mobile */}
        <div className="mobile-bottom-strip f-up-t" style={{
          marginTop: 48,
          padding: '20px 28px',
          background: 'rgba(236,72,153,.06)',
          border: '1px solid rgba(236,72,153,.15)',
          borderRadius: 18,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
        }}>
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <div style={{width:40,height:40,borderRadius:'50%',background:'rgba(236,72,153,.12)',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill={PINK}>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div>
              <div className="happy-families" style={{color:'#fff',fontWeight:700,fontSize:'1.6rem'}}>10,000+ Happy Families</div>
              <div className="happy-families-sub" style={{color:'rgba(255,255,255,.4)',fontSize:'1.6rem',marginTop:2}}>Real outcomes, not just statistics</div>
            </div>
          </div>

          <div className="stats" style={{display:'flex',alignItems:'center',gap:24,flexWrap:'wrap'}}>
            {[
              { v:'4.9★', l:'Google Rating' },
              { v:'80–85%', l:'IVF Success Rate' },
              { v:'12+ Yrs', l:'Trusted Experience' },
            ].map(({ v, l }) => (
              <div key={l} style={{textAlign:'center'}}>
                <div className="stat-value" style={{color:PINK,fontWeight:700,fontSize:'1rem',fontFamily:"'Playfair Display',serif"}}>{v}</div>
                <div className="stat-label" style={{color:'rgba(255,255,255,.38)',fontSize:'1.6rem',fontWeight:500,marginTop:2}}>{l}</div>
              </div>
            ))}
          </div>

          <button className="whatsapp-btn" style={{
            padding:'10px 24px',
            borderRadius:999,
            fontSize:'0.85rem',
            fontWeight:700,
            background: `linear-gradient(135deg,${PINK},#db2777)`,
            color:'#fff',
            border:'none',
            cursor:'pointer',
            display:'flex',
            alignItems:'center',
            gap:8,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            </svg>
            WhatsApp Us
          </button>
        </div>

      </div>
    </section>
  )
}