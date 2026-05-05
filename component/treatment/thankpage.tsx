'use client'

import { useEffect, useState } from 'react'

export default function ThankYouPage() {
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          window.location.href = '/treatments'
          return 0
        }
        return prev - 1
      })
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: `linear-gradient(150deg, #060d1e 0%, #0c1830 45%, #060d1e 100%)`,
        fontFamily: "'Outfit', sans-serif",
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=Inter:wght@300;400;500;600;700&display=swap');

        @keyframes glowT { 0%,100%{opacity:.5;transform:scale(1)} 50%{opacity:.8;transform:scale(1.1)} }
        @keyframes fadeUpT { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes scaleHeart { 0%,100%{transform:scale(1)} 50%{transform:scale(1.1)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.5} }
        
        .pf-t { font-family:'Playfair Display',Georgia,serif }
        .glow-t { animation:glowT 8s ease-in-out infinite }
        .f-up-t { animation:fadeUpT .85s cubic-bezier(.22,1,.36,1) both }
        .heart-beat { animation: scaleHeart 1.5s ease-in-out infinite }
        .blink { animation: blink 1s ease-in-out infinite }
      `}</style>

      {/* Background effects */}
      <div className="glow-t" style={{position:'absolute',width:600,height:600,top:'-20%',right:'-12%',background:'radial-gradient(circle,rgba(236,72,153,.13) 0%,transparent 65%)',pointerEvents:'none',zIndex:0}}/>
      <div className="glow-t" style={{position:'absolute',width:500,height:500,bottom:'-18%',left:'-10%',background:'radial-gradient(circle,rgba(30,47,95,.25) 0%,transparent 65%)',pointerEvents:'none',zIndex:0,animationDelay:'4s'}}/>
      <div style={{position:'absolute',inset:0,zIndex:0,pointerEvents:'none',backgroundImage:'radial-gradient(circle,rgba(255,255,255,.03) 1px,transparent 1px)',backgroundSize:'32px 32px'}}/>

      {/* Main Content */}
      <div className="relative f-up-t" style={{zIndex:10, maxWidth: 600, margin: '0 auto', padding: '40px 24px', textAlign: 'center'}}>
        
        {/* Success Icon */}
        <div className="heart-beat" style={{
          width: 80,
          height: 80,
          margin: '0 auto 32px',
          background: 'linear-gradient(135deg, #ec4899, #be185d)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 40px rgba(236,72,153,0.4)',
        }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>

        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 9,
          background: 'rgba(236,72,153,.1)',
          border: '1.5px solid rgba(236,72,153,.3)',
          borderRadius: 999,
          padding: '6px 18px',
          marginBottom: 24,
        }}>
          <span style={{width: 8, height: 8, borderRadius: '50%', background: '#ec4899', display: 'block'}}/>
          <span style={{color: '#ec4899', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase'}}>
            Booking Confirmed
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="pf-t" style={{
          fontSize: 'clamp(2rem, 6vw, 3.5rem)',
          fontWeight: 800,
          color: '#fff',
          lineHeight: 1.2,
          marginBottom: 16,
        }}>
          Thank You for{' '}
          <span style={{color: '#ec4899', fontStyle: 'italic'}}>Trusting Us</span>
        </h1>

        {/* Subtitle */}
        <div style={{height: 3, width: 64, background: 'linear-gradient(90deg, #ec4899, transparent)', borderRadius: 4, margin: '0 auto 24px'}}/>

        <p style={{
          color: 'rgba(255,255,255,.7)',
          fontSize: '1.05rem',
          lineHeight: 1.6,
          marginBottom: 16,
        }}>
          Your consultation request has been successfully submitted.
        </p>

        <p style={{
          color: 'rgba(255,255,255,.5)',
          fontSize: '0.95rem',
          lineHeight: 1.6,
          marginBottom: 32,
        }}>
          Our team will contact you within 24 hours to schedule your appointment.
        </p>

        {/* Information Card */}
        <div style={{
          background: 'rgba(255,255,255,.04)',
          border: '1px solid rgba(255,255,255,.08)',
          borderRadius: 20,
          padding: '24px',
          marginBottom: 32,
          textAlign: 'left',
        }}>
          <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20}}>
            <div style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              background: 'rgba(236,72,153,.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div>
              <div style={{color: 'white', fontWeight: 600, fontSize: '14px'}}>Need Immediate Assistance?</div>
              <div style={{color: 'rgba(255,255,255,.5)', fontSize: '12px'}}>Call us directly for urgent queries</div>
            </div>
          </div>

          <div style={{display: 'flex', gap: 12, flexWrap: 'wrap'}}>
            <a
              href="tel:+919553033366"
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                padding: '12px 20px',
                background: 'rgba(236,72,153,.1)',
                border: '1px solid rgba(236,72,153,.3)',
                borderRadius: 12,
                color: '#ec4899',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 600,
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(236,72,153,.2)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(236,72,153,.1)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call Now
            </a>
            <a
              href="https://wa.me/919553033366"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                padding: '12px 20px',
                background: 'rgba(34,197,94,.1)',
                border: '1px solid rgba(34,197,94,.3)',
                borderRadius: 12,
                color: '#22c55e',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 600,
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(34,197,94,.2)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(34,197,94,.1)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Countdown and Home Button */}
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16}}>
          <a
            href="/treatments"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 32px',
              background: 'linear-gradient(135deg, #ec4899, #be185d)',
              borderRadius: 999,
              color: 'white',
              fontSize: '0.9rem',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 20px rgba(236,72,153,0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(236,72,153,0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(236,72,153,0.3)'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M12 3l9 9-9 9"/>
            </svg>
            Back to Home
          </a>
          
          <p className="blink" style={{
            color: 'rgba(255,255,255,.4)',
            fontSize: '0.8rem',
            margin: 0,
          }}>
            Redirecting in {countdown} seconds...
          </p>
        </div>

      </div>
    </section>
  )
}