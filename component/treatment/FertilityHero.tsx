'use client'

import { useState, useEffect } from 'react'
import BookingModal from './BookingModal'

/* ─── Brand colours (Smile Baby logo) ─── */
const PINK = '#ec4899'
const BLUE = '#1e2f5f'

/* ─── Content ─── */
const QUOTES = [
  'Nobody explained WHY it wasn\'t working.',
  'We were given a standard protocol. Not a personalised one.',
  'We didn\'t know what the actual costs would be until the bill arrived.',
]

const STATS = [
  { v: '10,000+', l: 'Babies Delivered' },
  { v: '80–85%',  l: 'IVF Success Rate'  },
  { v: '12+ Yrs', l: 'Expert Care'       },
]

/* ─── Star SVG ─── */
const Star = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill={PINK}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

export default function FertilityHero() {
  const [cur,     setCur]     = useState(0)
  const [exiting, setExiting] = useState(false)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  /* auto-cycle every 4.2 s */
  useEffect(() => {
    const id = setInterval(() => {
      setExiting(true)
      setTimeout(() => { setCur(c => (c + 1) % QUOTES.length); setExiting(false) }, 480)
    }, 4200)
    return () => clearInterval(id)
  }, [])

  const goTo = (i: number) => {
    if (i === cur) return
    setExiting(true)
    setTimeout(() => { setCur(i); setExiting(false) }, 480)
  }

  return (
    <section className="relative w-full overflow-hidden bg-white">

      {/* ─────────── CSS ─────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,600;1,700&display=swap');

        /* Quote transitions */
        @keyframes qIn  { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
        @keyframes qOut { from{opacity:1;transform:translateY(0)} to{opacity:0;transform:translateY(-18px)} }

        /* Progress bar */
        @keyframes runBar { from{width:0%} to{width:100%} }

        /* Entrance */
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(36px) }
          to   { opacity:1; transform:translateY(0) }
        }

        /* Floating card */
        @keyframes floatCard {
          0%,100% { transform:translateY(0px) }
          50%      { transform:translateY(-12px) }
        }

        /* Blob morph */
        @keyframes morphBlob {
          0%,100% { border-radius:60% 40% 55% 45%/50% 60% 40% 50% }
          50%      { border-radius:45% 55% 40% 60%/60% 45% 55% 40% }
        }

        /* Blink dot */
        @keyframes blinkDot {
          0%,100% { opacity:1 }
          50%      { opacity:0.25 }
        }

        /* Play-button pulse ring */
        @keyframes pulseRing {
          0%   { transform:scale(1); opacity:0.5 }
          100% { transform:scale(1.65); opacity:0 }
        }

        /* Shimmer on headline */
        @keyframes shimmer {
          0%   { background-position:-200% center }
          100% { background-position: 200% center }
        }

        /* ── Class bindings ── */
        .q-in    { animation: qIn   0.5s cubic-bezier(.22,1,.36,1) both }
        .q-out   { animation: qOut  0.45s ease both }
        .bar-run { animation: runBar 4.2s linear forwards }
        .f-up    { animation: fadeUp 0.85s cubic-bezier(.22,1,.36,1) both }
        .do-float{ animation: floatCard 7s ease-in-out infinite }
        .blob    { animation: morphBlob 10s ease-in-out infinite }
        .blink   { animation: blinkDot 2.2s ease-in-out infinite }

        .headline-pink {
          background: linear-gradient(90deg,#ec4899 0%,#f472b6 40%,#ec4899 70%,#be185d 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 5s linear infinite;
        }

        /* CTA primary */
        .btn-pink {
          background: linear-gradient(135deg,#ec4899,#db2777);
          color:#fff; border:none; cursor:pointer;
          transition: transform .25s ease;
          position:relative; overflow:hidden;
        }
        .btn-pink::after {
          content:''; position:absolute; inset:0; border-radius:inherit;
          border:2px solid #ec4899;
          animation:pulseRing 2.2s ease-out infinite;
        }
        .btn-pink:hover { transform:translateY(-3px); }

        /* CTA secondary */
        .btn-outline {
          background:transparent; color:${BLUE};
          border:2px solid ${BLUE}; cursor:pointer;
          transition: all .25s ease;
        }
        .btn-outline:hover { background:${BLUE}; color:#fff; transform:translateY(-2px) }

        /* Play btn hover */
        .play-btn { transition: transform .3s ease; cursor:pointer }
        .play-btn:hover { transform:scale(1.08) }

        /* stat card hover */
        .stat-c { transition: all .25s ease }
        .stat-c:hover { transform:translateY(-4px); }

        /* dot nav */
        .dot-nav { border:none; padding:0; cursor:pointer; transition:all .35s ease }

        /* quote card */
        .quote-card { transition: border-color .35s ease }
        .quote-card:hover { border-color: rgba(236,72,153,.35) !important }

        @media(max-width:767px){
          .hero-wrap { padding:28px 16px 28px !important }
          .top-badge {
            max-width:100% !important;
            padding:6px 12px !important;
            margin-bottom:22px !important;
            white-space:normal !important;
          }
          .top-badge span:last-child {
            font-size:.56rem !important;
            letter-spacing:.13em !important;
            line-height:1.35 !important;
          }
          .hero-title {
            font-size:clamp(2.15rem,13vw,3rem) !important;
            line-height:1.06 !important;
          }
          .hero-subtitle {
            font-size:.94rem !important;
            line-height:1.72 !important;
            margin-bottom:36px !important;
          }
          .hero-cols {
            display:grid !important;
            grid-template-columns:1fr !important;
            align-items:start !important;
            gap:36px !important;
            width:100% !important;
          }
          .quote-card {
            border-radius:18px !important;
            padding:34px 22px 44px !important;
            min-height:218px !important;
          }
          .quote-text {
            padding-right:0 !important;
          }
          .quote-text p {
            font-size:1.18rem !important;
            line-height:1.55 !important;
          }
          .promise-card {
            padding:18px 18px !important;
            border-radius:0 14px 14px 0 !important;
          }
          .promise-card p {
            font-size:.9rem !important;
            line-height:1.7 !important;
          }
          .hero-cta {
            flex-direction:column !important;
            gap:10px !important;
          }
          .hero-cta button {
            display:flex !important;
            width:100% !important;
            justify-content:center !important;
          }
          .vid-frame {
            width:100% !important;
            min-height:360px !important;
            aspect-ratio:auto !important;
            max-height:none !important;
            border-radius:20px !important;
          }
          .video-topbar {
            top:14px !important;
            left:14px !important;
            right:14px !important;
          }
          .play-btn {
            width:72px !important;
            height:72px !important;
          }
          .testimonial-card {
            left:14px !important;
            right:14px !important;
            bottom:14px !important;
            padding:14px !important;
            border-radius:15px !important;
          }
          .stats-row {
            gap:8px !important;
          }
          .stat-c {
            border-radius:13px !important;
            padding:12px 6px !important;
          }
        }
      `}</style>

      {/* ─────────── decorative BG blobs ─────────── */}
      <div className="blob" style={{
        position:'absolute',width:540,height:540,
        top:'-16%',right:'-10%',
        background:'radial-gradient(circle,rgba(236,72,153,.08) 0%,transparent 68%)',
        pointerEvents:'none',zIndex:0,
      }}/>
      <div className="blob" style={{
        position:'absolute',width:420,height:420,
        bottom:'-14%',left:'-8%',
        background:'radial-gradient(circle,rgba(30,47,95,.06) 0%,transparent 68%)',
        pointerEvents:'none',zIndex:0,animationDelay:'5s',
      }}/>

      {/* dot-grid overlay */}
      <div style={{
        position:'absolute',inset:0,zIndex:0,pointerEvents:'none',
        backgroundImage:'radial-gradient(circle,rgba(30,47,95,.055) 1.2px,transparent 1.2px)',
        backgroundSize:'30px 30px',
        maskImage:'radial-gradient(ellipse 85% 85% at 50% 50%,black 35%,transparent 100%)',
        WebkitMaskImage:'radial-gradient(ellipse 85% 85% at 50% 50%,black 35%,transparent 100%)',
      }}/>

      {/* ─────────── MAIN CONTENT ─────────── */}
      <div className="relative hero-wrap" style={{zIndex:10,maxWidth:1280,margin:'0 auto',padding:'72px 28px 64px'}}>
        <div style={{ textAlign:'center' }}>

        {/* ── Location badge ── */}
        <div className="f-up top-badge" style={{animationDelay:'0s',display:'inline-flex',alignItems:'center',gap:9,
          background:'rgba(236,72,153,.08)',border:'1.5px solid rgba(236,72,153,.28)',
          borderRadius:999,padding:'6px 18px',marginBottom:28}}>
          <span className="blink" style={{width:8,height:8,borderRadius:'50%',background:PINK,display:'block',flexShrink:0}}/>
          <span style={{color:PINK,fontSize:'0.68rem',fontWeight:700,letterSpacing:'0.22em',textTransform:'uppercase'}}>
            Best Fertility Center · Lingarajapuram, Bangalore
          </span>
        </div>

        {/* ── Main headline ── */}
        <h1 className="f-up hero-title" style={{
          animationDelay:'0.1s',
          fontFamily:"'Playfair Display',Georgia,serif",
          fontSize:'clamp(2.6rem,5vw,4.2rem)',
          fontWeight:700,color:BLUE,
          lineHeight:1.08,margin:'0 auto 12px',maxWidth:720,
        }}>
          Best Fertility Center<br/>
          <em className="headline-pink" style={{fontStyle:'italic'}}>In Bangalore</em>
        </h1>

        {/* Accent line */}
        <div className="f-up" style={{
          animationDelay:'0.18s',
          height:3,width:64,
          background:`linear-gradient(90deg,${PINK},rgba(236,72,153,0))`,
          borderRadius:4,margin:'0 auto 22px',
        }}/>

        {/* ── Subtitle ── */}
        <p className="f-up hero-subtitle" style={{
          animationDelay:'0.26s',
          color:'rgba(30,47,95,.55)',
          fontSize:'clamp(.96rem,1.5vw,1.1rem)',
          lineHeight:1.82,
          maxWidth:560,margin:'0 auto 52px',fontWeight:400,
        }}>
          Most couples who come to us have already tried — medicines, IUI, or another clinic.{' '}
          <span style={{color:BLUE,fontWeight:600}}>Here&apos;s what they tell us.</span>
        </p>

        {/* ─────────── 50 / 50 GRID ─────────── */}
        </div>

        <div className="hero-cols" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:52,alignItems:'stretch'}}>

          {/* ══════ LEFT : Quote + promise ══════ */}
          <div className="f-up" style={{animationDelay:'0.32s'}}>

            {/* ── Quote card ── */}
            <div className="quote-card" style={{
              position:'relative',
              background:'linear-gradient(135deg,rgba(30,47,95,.03) 0%,rgba(236,72,153,.03) 100%)',
              border:'1.5px solid rgba(30,47,95,.1)',
              borderRadius:24,
              padding:'48px 44px 56px',
              overflow:'hidden',
              minHeight:230,
            }}>

              {/* Vertical pink glow bar */}
              <div style={{
                position:'absolute',top:0,left:0,bottom:0,width:5,
                background:`linear-gradient(to bottom,transparent,${PINK},transparent)`,
                borderRadius:'24px 0 0 24px',
              }}/>

              {/* Large decorative " */}
              <div style={{
                position:'absolute',bottom:-24,right:20,
                fontSize:'9rem',color:PINK,opacity:.055,
                fontFamily:'Georgia,serif',lineHeight:1,
                pointerEvents:'none',userSelect:'none',
              }}>&quot;</div>

              {/* "What patients say" pill */}
              <div style={{
                display:'inline-flex',alignItems:'center',gap:6,marginBottom:22,
                background:'rgba(236,72,153,.08)',
                border:'1px solid rgba(236,72,153,.22)',
                borderRadius:999,padding:'3px 14px',
              }}>
                <svg width="8" height="8" viewBox="0 0 24 24" fill={PINK}><circle cx="12" cy="12" r="10"/></svg>
                <span style={{fontSize:'0.62rem',fontWeight:700,color:PINK,letterSpacing:'0.18em',textTransform:'uppercase'}}>
                  What Couples Tell Us
                </span>
              </div>

              {/* ── Animated quote ── */}
              <div key={cur} className={`quote-text ${exiting ? 'q-out' : 'q-in'}`} style={{position:'relative',zIndex:2,paddingRight:28}}>
                <p style={{
                  fontFamily:"'Playfair Display',Georgia,serif",
                  fontSize:'clamp(1.18rem,2.4vw,1.55rem)',
                  color:BLUE,fontStyle:'italic',
                  fontWeight:600,lineHeight:1.62,
                  marginBottom:0,
                }}>
                  ❛&nbsp;{QUOTES[cur]}&nbsp;❜
                </p>
              </div>

              {/* Progress bar */}
              <div style={{position:'absolute',bottom:0,left:0,right:0,height:3,background:'rgba(30,47,95,.07)'}}>
                <div key={`bar-${cur}`} className="bar-run" style={{
                  height:'100%',
                  background:`linear-gradient(90deg,${PINK},#be185d)`,
                  width:'0%',borderRadius:2,
                }}/>
              </div>
            </div>

            {/* ── Dot indicators ── */}
            <div style={{display:'flex',alignItems:'center',gap:10,marginTop:18,paddingLeft:4}}>
              {QUOTES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="dot-nav"
                  style={{
                    width:  i === cur ? 32 : 10,
                    height: 10,
                    borderRadius:5,
                    background: i === cur ? PINK : 'rgba(30,47,95,.18)',
                  }}
                />
              ))}
              <span style={{marginLeft:6,color:'rgba(30,47,95,.32)',fontSize:'0.66rem',fontWeight:500}}>
                {cur + 1} / {QUOTES.length}
              </span>
            </div>

            {/* ── Promise card ── */}
            <div className="promise-card" style={{
              marginTop:28,
              padding:'22px 26px',
              background:'rgba(236,72,153,.05)',
              border:'1.5px solid rgba(236,72,153,.18)',
              borderLeft:`5px solid ${PINK}`,
              borderRadius:'0 16px 16px 0',
            }}>
              <p style={{color:'rgba(30,47,95,.72)',fontSize:'0.96rem',lineHeight:1.82,margin:0}}>
                At <strong style={{color:BLUE}}>Smile Baby</strong>, we start differently. Before any treatment,
                we give you a complete review of your case — reports, diagnosis, a realistic success
                estimate, and a full cost plan.{' '}
                <strong style={{color:PINK}}>No surprises.</strong>
              </p>
            </div>

            {/* ── CTA buttons ── */}
            <div className="hero-cta" style={{display:'flex',gap:12,marginTop:28,flexWrap:'wrap'}}>
              <button type="button" onClick={() => setIsBookingModalOpen(true)} className="btn-pink" style={{padding:'14px 30px',borderRadius:999,fontSize:'0.88rem',fontWeight:700,letterSpacing:'0.03em'}}>
                Book Your Consultation →
              </button>
              <button className="btn-outline" style={{padding:'13px 24px',borderRadius:999,fontSize:'0.86rem',fontWeight:600}}>
                📞 +91 88847 52134
              </button>
            </div>
          </div>

          {/* ══════ RIGHT : Video — fills full column height ══════ */}
          <div className="do-float f-up" style={{animationDelay:'0.46s',display:'flex',flexDirection:'column'}}>

            {/* ── Video frame ── */}
            <div className="vid-frame" style={{
              flex:1,
              position:'relative',
              borderRadius:28,
              overflow:'hidden',
              width:'100%',
              minHeight:480,
              background:`linear-gradient(160deg,rgba(236,72,153,.18) 0%,rgba(30,47,95,.82) 52%,rgba(10,18,42,.96) 100%)`,
              border:'2px solid rgba(236,72,153,.22)',
              display:'flex',alignItems:'center',justifyContent:'center',
              cursor:'pointer',
            }}>

              {/* Top bar */}
              <div className="video-topbar" style={{position:'absolute',top:18,left:18,right:18,display:'flex',justifyContent:'space-between',alignItems:'center',zIndex:5}}>
                <span style={{
                  background:PINK,color:'#fff',
                  fontSize:'0.6rem',fontWeight:700,letterSpacing:'0.18em',textTransform:'uppercase',
                  padding:'4px 14px',borderRadius:999,
                }}>
                  Patient Story
                </span>
                <div style={{display:'flex',alignItems:'center',gap:5}}>
                  <span className="blink" style={{width:6,height:6,borderRadius:'50%',background:'#ef4444',display:'block'}}/>
                  <span style={{color:'rgba(255,255,255,.8)',fontSize:'0.6rem',fontWeight:600}}>TESTIMONIAL</span>
                </div>
              </div>

              {/* Dark gradient overlay */}
              <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(10,18,42,.92) 0%,transparent 55%,rgba(10,18,42,.3) 100%)'}}/>

              {/* ── Play button ── */}
              <div className="play-btn" style={{
                position:'relative',zIndex:5,
                width:88,height:88,borderRadius:'50%',
                background:'rgba(255,255,255,.13)',
                backdropFilter:'blur(16px)',
                border:'2.5px solid rgba(255,255,255,.35)',
                display:'flex',alignItems:'center',justifyContent:'center',
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white" style={{marginLeft:5}}>
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </div>

              {/* ── Bottom testimonial card ── */}
              <div className="testimonial-card" style={{
                position:'absolute',bottom:18,left:18,right:18,
                background:'rgba(10,18,42,.86)',
                backdropFilter:'blur(20px)',
                border:'1px solid rgba(255,255,255,.1)',
                borderRadius:18,
                padding:'16px 18px',
                zIndex:5,
              }}>
                <p style={{color:'rgba(255,255,255,.82)',fontSize:'0.82rem',fontStyle:'italic',lineHeight:1.55,margin:'0 0 12px'}}>
                  &quot;After 4 years of trying, Smile Baby gave us our miracle.&quot;
                </p>
                <div style={{display:'flex',alignItems:'center',gap:10}}>
                  <div style={{
                    width:34,height:34,borderRadius:'50%',flexShrink:0,
                    background:`linear-gradient(135deg,${PINK},#be185d)`,
                    display:'flex',alignItems:'center',justifyContent:'center',
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{color:'#fff',fontSize:'0.72rem',fontWeight:600}}>Priya & Arun · Bangalore</div>
                    <div style={{display:'flex',gap:2,marginTop:3}}>
                      {[1,2,3,4,5].map(s => <Star key={s}/>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Stats row ── */}
            <div className="stats-row" style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:10,marginTop:14}}>
              {STATS.map(({ v, l }) => (
                <div key={l} className="stat-c" style={{
                  background:'#fff',
                  border:'1.5px solid rgba(30,47,95,.1)',
                  borderRadius:16,
                  padding:'14px 10px',
                  textAlign:'center',
                }}>
                  <div style={{
                    fontFamily:"'Playfair Display',Georgia,serif",
                    color:PINK,fontWeight:700,fontSize:'1.12rem',lineHeight:1,
                  }}>{v}</div>
                  <div style={{color:'rgba(30,47,95,.42)',fontSize:'0.6rem',marginTop:4,fontWeight:500}}>{l}</div>
                </div>
              ))}
            </div>

          </div>
        </div>{/* end 50/50 grid */}
      </div>
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  )
}
