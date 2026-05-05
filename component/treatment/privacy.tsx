'use client'

export default function PrivacyPolicy() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: `linear-gradient(150deg, #060d1e 0%, #0c1830 45%, #060d1e 100%)`,
        fontFamily: "'Outfit', sans-serif",
        minHeight: '100vh',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=Inter:wght@300;400;500;600;700&display=swap');

        @keyframes glowT { 0%,100%{opacity:.5;transform:scale(1)} 50%{opacity:.8;transform:scale(1.1)} }
        @keyframes fadeUpT { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        
        .pf-t { font-family:'Playfair Display',Georgia,serif }
        .glow-t { animation:glowT 8s ease-in-out infinite }
        .f-up-t { animation:fadeUpT .85s cubic-bezier(.22,1,.36,1) both }
        
        .policy-content h1 { font-size: 1.8rem; font-weight: 700; margin-bottom: 1rem; }
        .policy-content h2 { font-size: 1.3rem; font-weight: 600; margin: 1.5rem 0 0.8rem; }
        .policy-content h3 { font-size: 1.1rem; font-weight: 600; margin: 1rem 0 0.5rem; }
        .policy-content p { line-height: 1.7; margin-bottom: 1rem; color: rgba(255,255,255,0.7); }
        .policy-content ul, .policy-content ol { margin: 0.8rem 0 1rem 1.5rem; color: rgba(255,255,255,0.7); }
        .policy-content li { margin: 0.5rem 0; line-height: 1.6; }
        .policy-content a { color: #ec4899; text-decoration: none; transition: color 0.2s; }
        .policy-content a:hover { color: #be185d; text-decoration: underline; }
        
        @media (min-width: 768px) {
          .policy-content h1 { font-size: 2.2rem; }
          .policy-content h2 { font-size: 1.5rem; }
        }
      `}</style>

      {/* Background effects */}
      <div className="glow-t" style={{position:'absolute',width:600,height:600,top:'-20%',right:'-12%',background:'radial-gradient(circle,rgba(236,72,153,.13) 0%,transparent 65%)',pointerEvents:'none',zIndex:0}}/>
      <div className="glow-t" style={{position:'absolute',width:500,height:500,bottom:'-18%',left:'-10%',background:'radial-gradient(circle,rgba(30,47,95,.25) 0%,transparent 65%)',pointerEvents:'none',zIndex:0,animationDelay:'4s'}}/>
      <div style={{position:'absolute',inset:0,zIndex:0,pointerEvents:'none',backgroundImage:'radial-gradient(circle,rgba(255,255,255,.03) 1px,transparent 1px)',backgroundSize:'32px 32px'}}/>

      {/* Main Content */}
      <div className="relative" style={{zIndex:10, maxWidth: 900, margin: '0 auto', padding: '30px 24px 30px'}}>
        
        {/* Header */}
        <div className="f-up-t" style={{textAlign: 'center', marginBottom: 48}}>
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
              Legal Information
            </span>
          </div>
          
          <h1 className="pf-t" style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.2,
            marginBottom: 16,
          }}>
            Privacy <span style={{color: '#ec4899', fontStyle: 'italic'}}>Policy</span>
          </h1>
          
          <div style={{height: 3, width: 64, background: 'linear-gradient(90deg, #ec4899, transparent)', borderRadius: 4, margin: '0 auto 20px'}}/>
          
          <p style={{color: 'rgba(255,255,255,.5)', fontSize: '0.95rem', maxWidth: 600, margin: '0 auto'}}>
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Privacy Policy Content */}
        <div className="policy-content f-up-t" style={{
          background: 'rgba(255,255,255,.03)',
          border: '1px solid rgba(255,255,255,.08)',
          borderRadius: 24,
          padding: '40px 32px',
        }}>
          
          <p style={{fontSize: '1rem', color: 'rgba(255,255,255,.6)', marginBottom: '1.5rem'}}>
            At Smile Baby, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="text-[#ec4899]">1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, phone number, date of birth, and other identifying information you provide.</li>
            <li><strong>Medical Information:</strong> Health history, treatment information, and other medical data necessary for your care.</li>
            <li><strong>Technical Information:</strong> IP address, browser type, device information, and usage data when you visit our website.</li>
            <li><strong>Communication Data:</strong> Records of your interactions with us, including calls, emails, and messages.</li>
          </ul>

          <h2 className="text-[#ec4899]">2. How We Use Your Information</h2>
          <p>We use the information we collect for various purposes:</p>
          <ul>
            <li>To provide and maintain our medical services</li>
            <li>To schedule appointments and send reminders</li>
            <li>To communicate with you about your treatment</li>
            <li>To improve our services and patient experience</li>
            <li>To comply with legal and regulatory requirements</li>
            <li>To process payments and insurance claims</li>
          </ul>

          <h2 className="text-[#ec4899]">3. Information Sharing and Disclosure</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
          <ul>
            <li><strong>With Your Consent:</strong> We may share information when you give us explicit permission.</li>
            <li><strong>Healthcare Providers:</strong> With other medical professionals involved in your care.</li>
            <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation.</li>
            <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in operating our practice.</li>
          </ul>

          <h2 className="text-[#ec4899]">4. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and restricted access to sensitive data.</p>

          <h2  className="text-[#ec4899]">5. Your Rights</h2>
          <p>You have the following rights regarding your personal information:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of your personal data</li>
            <li><strong>Correction:</strong> Request correction of inaccurate information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
            <li><strong>Restriction:</strong> Request restriction of data processing</li>
            <li><strong>Portability:</strong> Receive your data in a transferable format</li>
          </ul>

          <h2 className="text-[#ec4899]">6. Cookies and Tracking Technologies</h2>
          <p>Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie preferences through your browser settings.</p>

          <h2 className="text-[#ec4899]">7. Third-Party Links</h2>
          <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.</p>

          <h2 className="text-[#ec4899]">8. Children's Privacy</h2>
          <p>Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware of such collection, we will take steps to delete the information promptly.</p>

          <h2 className="text-[#ec4899]">9. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.</p>

          <h2 className="text-[#ec4899]">10. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
          <ul>
            <li><strong>Email:</strong> privacy@smilebaby.com</li>
            <li><strong>Phone:</strong> +91 95530 33366</li>
            <li><strong>Address:</strong> Smile Baby Clinic, Kakinada, Andhra Pradesh, India</li>
          </ul>

          <div style={{
            marginTop: '32px',
            padding: '20px',
            background: 'rgba(236,72,153,.08)',
            borderRadius: '16px',
            border: '1px solid rgba(236,72,153,.15)',
          }}>
            <p style={{marginBottom: 0, fontSize: '0.85rem', textAlign: 'center', color: 'rgba(255,255,255,.5)'}}>
              By using our website and services, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </div>
        </div>

        {/* Back to Home Button */}
        <div style={{textAlign: 'center', marginTop: 40}}>
          <a
            href="/treatments"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 28px',
              background: 'rgba(236,72,153,.12)',
              border: '1px solid rgba(236,72,153,.3)',
              borderRadius: 999,
              color: '#ec4899',
              fontSize: '0.85rem',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(236,72,153,.25)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(236,72,153,.12)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Home
          </a>
        </div>

      </div>
    </section>
  )
}