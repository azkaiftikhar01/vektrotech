import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Vektro - Software Agency'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const ORANGE = '#f97316'
const BG = '#0a0a0a'
const BORDER = '#262626'
const TEXT = '#f5f5f5'
const TEXT_MUTED = '#8a8a8a'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: BG,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'monospace',
          position: 'relative',
        }}
      >
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
              width: '56px',
              height: '56px',
              background: ORANGE,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: 700,
              color: BG,
            }}
          >
            V
          </div>
          <div style={{ fontSize: '44px', fontWeight: 500, color: TEXT }}>vektro;</div>
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: '48px',
            fontWeight: 500,
            color: TEXT,
            textAlign: 'center',
            lineHeight: 1.25,
            marginBottom: '32px',
            maxWidth: '860px',
          }}
        >
          We build software for companies who don&rsquo;t want to hire an in-house dev team
          <span style={{ color: ORANGE }}>.</span>
        </div>

        {/* Services pills */}
        <div style={{ display: 'flex', gap: '14px', marginBottom: '48px' }}>
          {['Web Development', 'Mobile Apps', 'AI Assistants', 'QA Automation'].map((s) => (
            <div
              key={s}
              style={{
                padding: '9px 20px',
                border: `1px solid ${BORDER}`,
                color: TEXT_MUTED,
                fontSize: '18px',
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
            fontSize: '20px',
            color: TEXT_MUTED,
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
