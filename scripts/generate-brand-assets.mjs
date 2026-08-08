// One-off asset generator: takes the flat-black/orange source mark and recolors it to a
// solid #f97316 fill on a transparent background, then produces the full favicon set.
// Re-run with `node scripts/generate-brand-assets.mjs` if the source mark ever changes.
import sharp from 'sharp'
import potrace from 'potrace'
import pngToIco from 'png-to-ico'
import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const PUBLIC = path.join(ROOT, 'public')
const APP = path.join(ROOT, 'app')
const SRC = path.join(PUBLIC, 'ChatGPT Image Aug 5, 2026, 02_10_53 PM.png')
const ORANGE = { r: 249, g: 115, b: 22 } // #f97316
const BG = { r: 10, g: 10, b: 10 } // #0a0a0a

async function main() {
  const { data, info } = await sharp(SRC).raw().ensureAlpha().toBuffer({ resolveWithObject: true })
  const { width, height } = info

  // Source is the orange mark flattened on pure black — use luminance as the alpha
  // mask (black -> transparent, bright orange -> opaque) and force flat brand orange.
  const out = Buffer.alloc(width * height * 4)
  for (let i = 0; i < width * height; i++) {
    const r = data[i * 4]
    const g = data[i * 4 + 1]
    const b = data[i * 4 + 2]
    const alpha = Math.max(r, g, b)
    out[i * 4] = ORANGE.r
    out[i * 4 + 1] = ORANGE.g
    out[i * 4 + 2] = ORANGE.b
    out[i * 4 + 3] = alpha
  }

  const recoloredBuf = await sharp(out, { raw: { width, height, channels: 4 } }).png().toBuffer()
  const trimmedBuf = await sharp(recoloredBuf).trim().toBuffer()
  const trimmedMeta = await sharp(trimmedBuf).metadata()

  await writeFile(
    path.join(PUBLIC, 'logo-mark.png'),
    await sharp(trimmedBuf)
      .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer()
  )

  // Vectorize the alpha silhouette (potrace traces the shape geometry, not the raster).
  const alphaForTrace = await sharp(trimmedBuf).extractChannel(3).png().toBuffer()
  const svgPath = await new Promise((resolve, reject) => {
    potrace.trace(alphaForTrace, { threshold: 128, blackOnWhite: false, color: '#f97316', background: 'transparent' }, (err, svg) => {
      if (err) reject(err)
      else resolve(svg)
    })
  }).catch(() => null)

  let markSvg
  let usedVector = false
  if (svgPath && /<path/.test(svgPath)) {
    const pathMatch = svgPath.match(/<path[^>]*d="([^"]+)"[^>]*>/)
    if (pathMatch) {
      markSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${trimmedMeta.width} ${trimmedMeta.height}" fill="none">\n  <path d="${pathMatch[1]}" fill="#f97316"/>\n</svg>\n`
      usedVector = true
    }
  }
  if (!markSvg) {
    const b64 = trimmedBuf.toString('base64')
    markSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${trimmedMeta.width} ${trimmedMeta.height}">\n  <image width="${trimmedMeta.width}" height="${trimmedMeta.height}" href="data:image/png;base64,${b64}"/>\n</svg>\n`
  }
  await writeFile(path.join(PUBLIC, 'logo-mark.svg'), markSvg)
  await writeFile(path.join(APP, 'icon.svg'), markSvg)
  console.log(`logo-mark.svg written (${usedVector ? 'vector traced' : 'raster-embedded fallback'})`)

  const sizes = [16, 32, 48]
  const pngBuffers = await Promise.all(
    sizes.map((s) =>
      sharp(trimmedBuf).resize(s, s, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer()
    )
  )
  await writeFile(path.join(PUBLIC, 'favicon-16x16.png'), pngBuffers[0])
  await writeFile(path.join(PUBLIC, 'favicon-32x32.png'), pngBuffers[1])

  const ico = await pngToIco(pngBuffers)
  await writeFile(path.join(APP, 'favicon.ico'), ico)

  const appleIcon = await sharp({
    create: { width: 180, height: 180, channels: 4, background: BG },
  })
    .composite([
      {
        input: await sharp(trimmedBuf).resize(120, 120, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer(),
        gravity: 'center',
      },
    ])
    .png()
    .toBuffer()
  await writeFile(path.join(APP, 'apple-icon.png'), appleIcon)

  console.log('Brand assets generated: public/logo-mark.{svg,png}, app/icon.svg, app/favicon.ico, app/apple-icon.png, public/favicon-{16x16,32x32}.png')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
