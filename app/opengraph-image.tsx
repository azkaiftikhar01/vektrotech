import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Vektro - Software Agency'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1B2A6B 0%, #0D1F5C 50%, #0a1845 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow top-right */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            right: '-80px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,132,255,0.3) 0%, transparent 70%)',
          }}
        />
        {/* Background glow bottom-left */}
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-80px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(109,58,207,0.25) 0%, transparent 70%)',
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '48px',
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #0084FF, #6D3ACF)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '36px',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            V
          </div>
          <div
            style={{
              fontSize: '52px',
              fontWeight: 'bold',
              color: 'white',
              letterSpacing: '-1px',
            }}
          >
            vektro;
          </div>
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: '56px',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            lineHeight: 1.15,
            marginBottom: '28px',
            maxWidth: '900px',
          }}
        >
          We Build Software That{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #0084FF, #6D3ACF)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Moves Business Forward
          </span>
        </div>

        {/* Services pills */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            marginBottom: '48px',
          }}
        >
          {['Web Development', 'Mobile Apps', 'AI Assistants', 'QA Automation'].map((s) => (
            <div
              key={s}
              style={{
                padding: '10px 24px',
                borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.85)',
                fontSize: '20px',
              }}
            >
              {s}
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            fontSize: '22px',
            color: 'rgba(255,255,255,0.4)',
            letterSpacing: '1px',
          }}
        >
          vektro.tech
        </div>
      </div>
    ),
    { ...size }
  )
}
