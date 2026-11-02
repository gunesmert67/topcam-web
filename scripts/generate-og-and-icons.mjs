import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

async function generateAssets() {
  console.log('🖼️  Generating high-res favicons and WhatsApp/Social OG banners...')

  const logoPath = path.resolve('public/images/topcam-logo.webp')
  const logoBuffer = await sharp(logoPath).resize(360, 360).toBuffer()
  await sharp(logoPath)
    .resize(180, 180, { fit: 'contain', background: { r: 11, g: 19, b: 43, alpha: 1 } })
    .png()
    .toFile('public/apple-touch-icon.png')
  console.log('✔ public/apple-touch-icon.png generated')

  await sharp(logoPath)
    .resize(180, 180, { fit: 'contain', background: { r: 11, g: 19, b: 43, alpha: 1 } })
    .png()
    .toFile('app/apple-icon.png')
  console.log('✔ app/apple-icon.png generated')
  await sharp(logoPath)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile('public/favicon-32x32.png')

  await sharp(logoPath)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile('app/icon.png')

  await sharp(logoPath)
    .resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile('public/favicon-16x16.png')

  await sharp(logoPath)
    .resize(192, 192, { fit: 'contain', background: { r: 11, g: 19, b: 43, alpha: 1 } })
    .png()
    .toFile('public/android-chrome-192x192.png')

  await sharp(logoPath)
    .resize(512, 512, { fit: 'contain', background: { r: 11, g: 19, b: 43, alpha: 1 } })
    .png()
    .toFile('public/android-chrome-512x512.png')
  console.log('✔ Favicons and Android Chrome icons generated')
  const svgOverlay = Buffer.from(`
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stop-color="#1E293B" stop-opacity="0.95"/>
          <stop offset="100%" stop-color="#070D1E" stop-opacity="1"/>
        </radialGradient>
        <radialGradient id="blueGlow" cx="25%" cy="50%" r="45%">
          <stop offset="0%" stop-color="#2563EB" stop-opacity="0.25"/>
          <stop offset="100%" stop-color="#2563EB" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <rect width="1200" height="630" fill="url(#bgGrad)"/>
      <rect width="1200" height="630" fill="url(#blueGlow)"/>

      <rect x="0" y="0" width="1200" height="6" fill="#2563EB"/>

      <g transform="translate(480, 210)">
        <text x="0" y="0" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="700" fill="#60A5FA" letter-spacing="4">
          MOBİL &amp; SABİT GÜVENLİK SİSTEMLERİ
        </text>
        <text x="0" y="55" font-family="system-ui, -apple-system, sans-serif" font-size="52" font-weight="900" fill="#FFFFFF" letter-spacing="-1">
          TOPÇAM GÜVENLİK
        </text>
        <text x="0" y="115" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="500" fill="#94A3B8">
          Kamera • Alarm • Tır &amp; Araç Sistemleri • Santral
        </text>
        
        <g transform="translate(0, 160)">
          <rect x="0" y="0" width="480" height="52" rx="14" fill="#0B132B" stroke="#334155" stroke-width="1.5"/>
          <text x="24" y="33" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="700" fill="#22C55E">
            📞 0542 571 00 78
          </text>
          <text x="230" y="33" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="600" fill="#94A3B8">
            • Yerinde Mobil Montaj
          </text>
        </g>
      </g>
    </svg>
  `)
  const ogImage = sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: { r: 7, g: 13, b: 30, alpha: 1 }
    }
  })
  .composite([
    { input: svgOverlay, top: 0, left: 0 },
    { input: logoBuffer, top: 135, left: 75 }
  ])
  await ogImage
    .clone()
    .jpeg({ quality: 90 })
    .toFile('public/images/og-image.jpg')
  console.log('✔ public/images/og-image.jpg generated (WhatsApp optimized)')
  await ogImage
    .clone()
    .png({ quality: 90 })
    .toFile('public/images/og-image.png')
  console.log('✔ public/images/og-image.png generated')

  console.log('🎉 All social sharing & icon assets successfully generated!')
}

generateAssets().catch(err => {
  console.error(err)
  process.exit(1)
})
