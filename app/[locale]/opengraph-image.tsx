import { ImageResponse } from 'next/og';

export const alt = 'Yuki Tadokoro - Frontend Engineer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

/**
 * Station-sign style OG image.
 * Latin text only: the default font bundled with next/og has no Japanese
 * glyphs, so the romanized name is used for both locales.
 */
export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#F6F7F9',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 1000,
          borderRadius: 12,
          border: '2px solid #D8DBE0',
          background: '#FFFFFF',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '70px 40px 50px',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 84,
              fontWeight: 700,
              color: '#16181D',
            }}
          >
            Tadokoro Yuki
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 28,
              color: '#5A6472',
              marginTop: 28,
              letterSpacing: 8,
            }}
          >
            FRONTEND ENGINEER · NEXT.JS / TYPESCRIPT
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: 860,
              fontSize: 22,
              color: '#5A6472',
              marginTop: 48,
            }}
          >
            <div style={{ display: 'flex' }}>← about</div>
            <div style={{ display: 'flex' }}>projects →</div>
          </div>
        </div>
        <div style={{ display: 'flex', height: 18, width: '100%', background: '#F6BE00' }} />
      </div>
    </div>,
    size
  );
}
