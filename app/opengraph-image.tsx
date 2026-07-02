import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Yuki Tadokoro - Frontend Engineer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #312e81 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 120,
            height: 120,
            borderRadius: 28,
            background: 'linear-gradient(135deg, #60a5fa, #9333ea)',
            fontSize: 52,
            fontWeight: 700,
            marginBottom: 40,
          }}
        >
          YT
        </div>
        <div style={{ display: 'flex', fontSize: 72, fontWeight: 700 }}>Yuki Tadokoro</div>
        <div style={{ display: 'flex', fontSize: 32, color: '#93c5fd', marginTop: 20 }}>
          Frontend Engineer — Next.js / TypeScript / AI-Driven Development
        </div>
      </div>
    ),
    size
  );
}
