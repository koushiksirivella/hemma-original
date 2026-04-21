# HËMMA — 3D + Interactive Media Playbook

> The complete guide to taking HËMMA from cinematic-2D to **truly interactive 3D**. This document tells you (1) what to add, (2) **where** to add it, (3) **how** to convert your generated videos/images into 3D-feeling experiences, and (4) the exact code patterns to drop in.

---

## 0. The Mental Model (Read This First)

There are **four levels** of "3D / interactive" on the modern web. You do **not** need real 3D models for most of them. This is the secret most agencies hide:

| Level | What It Is | Tech | Asset You Need | Effort | "Wow" Factor |
|------|-----------|------|----------------|--------|--------------|
| **L1 — Faux 3D from Image Sequence** | A video chopped into ~120 PNGs played frame-by-frame as user scrolls. Looks identical to real 3D. | `<canvas>` + scroll | 1 video (5–8s, 360° spin) | Low | ★★★★★ |
| **L2 — Parallax + Depth Layers** | Multiple PNG layers moving at different speeds creating fake depth | Framer Motion / GSAP | 3–5 PNGs with transparent BGs | Low | ★★★★ |
| **L3 — CSS / WebGL Shaders on an Image** | Distortion, ripple, mouse-warp, cursor-follow on a flat image | `react-three-fiber` shader pass | 1 image | Medium | ★★★★★ |
| **L4 — Real 3D Model (.glb)** | A true rotatable, zoomable 3D object in the browser | `@react-three/fiber` + `drei` | `.glb` file (~2-8 MB) | High | ★★★★★ |

**My strong recommendation for HËMMA:** Use **L1 + L2 + L3** for 90% of the site. Only use **L4** for one hero product (the "signature chair") because real .glb files are heavy and hard to generate.

---

## 1. The Master Plan — Where Each 3D Effect Goes

Your current section flow:
`Navbar → Hero → Marquee → Categories → TextureInterstitial → ScrollVideo → FeaturedProducts → RoomInspiration → CraftDetail → Testimonials → PromoBar → AmbientMood → Newsletter → Footer`

Here are the **7 best insertion points**, in priority order:

### 🥇 PRIORITY 1 — Hero: Scroll-Spin Chair (L1)
**Where:** Replace or layer over current `Hero.tsx` background.
**What user sees:** A chair sits center-stage. As they scroll the first 100vh, the chair rotates a full 360° revealing every angle. Text fades in/out around it.
**Why here:** First impression. This single effect takes the site from "nice" to "Apple-level."
**Asset to generate:** ONE 360° turntable video of a chair, 5-8 seconds, white/transparent background.
**Tech:** Image-sequence canvas (see Section 3).

### 🥈 PRIORITY 2 — FeaturedProducts: Hover-Tilt 3D Cards (L3)
**Where:** Each product card in `FeaturedProducts.tsx`.
**What user sees:** Mouse over a product → card tilts in 3D space toward cursor, image lifts forward, shadow deepens. Mouse leaves → snaps back.
**Why here:** Product cards are where conversion happens. Tactile = trust.
**Asset:** None. Just CSS `transform: perspective() rotateX() rotateY()` driven by mouse position.
**Tech:** Framer Motion `useMotionValue` + `useTransform` (no library needed).

### 🥉 PRIORITY 3 — RoomInspiration: Parallax Depth Scenes (L2)
**Where:** Replace flat room photos in `RoomInspiration.tsx` with layered scenes.
**What user sees:** Each room photo has 3-4 depth layers (floor, furniture, wall art, foreground plant). As user scrolls or moves mouse, layers slide at different speeds creating diorama effect.
**Why here:** Rooms are emotional. Parallax = "I want to live here."
**Asset:** For each room → 1 base photo, then prompt AI to remove subject and create separate PNGs of (a) background wall, (b) main furniture, (c) foreground accent. 3-4 PNGs per room.
**Tech:** Stacked `<motion.div>` with `useScroll` and different `useTransform` ratios.

### 4️⃣ — CraftDetail: Cursor-Follow Material Reveal (L3)
**Where:** `CraftDetail.tsx`.
**What user sees:** A flat image of fabric/wood texture. User's cursor reveals a "magnifying" zoom or a different material underneath (oak ↔ walnut, linen ↔ velvet).
**Why here:** Sells craftsmanship — the most premium-feeling interaction on a furniture site.
**Asset:** 2 high-res texture images (4K), same crop, different materials.
**Tech:** WebGL displacement shader OR pure CSS `clip-path` follow cursor (simpler).

### 5️⃣ — ScrollVideo: Replace with Real Image Sequence (L1 upgrade)
**Where:** Existing `ScrollVideo.tsx`.
**What user sees:** Currently uses a `<video>` element which doesn't scrub smoothly on mobile Safari. Replace with image-sequence canvas — buttery 60fps everywhere.
**Asset:** Same source video, exported as 100-150 PNG/WebP frames.
**Tech:** Same canvas pattern as Hero (Section 3).

### 6️⃣ — One Real 3D Hero Product (L4)
**Where:** New section between `FeaturedProducts` and `RoomInspiration` — call it `SignaturePiece.tsx`.
**What user sees:** ONE chair (your "signature" piece) rendered in real 3D. Drag to rotate. Buttons to swap fabric color. Click to add to cart.
**Why here:** It's the "hero product" moment — the one your brand is famous for.
**Asset:** 1 `.glb` file (see Section 4 for how to get one).
**Tech:** `@react-three/fiber` + `drei`.

### 7️⃣ — Cursor as a Custom Object (L3, brand polish)
**Where:** Site-wide via `App.tsx`.
**What user sees:** Default cursor replaced with a small soft circle that grows on hover, morphs into "→" over CTAs, becomes a "View" pill over product images.
**Why here:** Signals "this is a designed site, not a template."
**Asset:** None.
**Tech:** Single `<div>` following `mousemove` + Framer Motion springs.

---

## 2. Section-By-Section Insertion Map

```
┌──────────────────────────────────────────────┐
│ Navbar                                        │ ← #7 custom cursor (global)
├──────────────────────────────────────────────┤
│ Hero            ← #1 SCROLL-SPIN CHAIR (L1)   │ 🥇 do this first
├──────────────────────────────────────────────┤
│ Marquee                                       │ — (keep as-is)
├──────────────────────────────────────────────┤
│ Categories                                    │ — (optional: tilt cards)
├──────────────────────────────────────────────┤
│ TextureInterstitial                           │ — (keep as-is)
├──────────────────────────────────────────────┤
│ ScrollVideo     ← #5 UPGRADE TO SEQUENCE      │
├──────────────────────────────────────────────┤
│ FeaturedProducts ← #2 TILT-3D CARDS (L3)      │ 🥈
├──────────────────────────────────────────────┤
│ ★ NEW: SignaturePiece ← #6 REAL 3D (L4)       │ optional showpiece
├──────────────────────────────────────────────┤
│ RoomInspiration ← #3 PARALLAX DEPTH (L2)      │ 🥉
├──────────────────────────────────────────────┤
│ CraftDetail     ← #4 MATERIAL REVEAL (L3)     │
├──────────────────────────────────────────────┤
│ Testimonials                                  │ — (keep as-is)
├──────────────────────────────────────────────┤
│ PromoBar / AmbientMood / Newsletter / Footer  │ — (keep as-is)
└──────────────────────────────────────────────┘
```

---

## 3. The Image Sequence Trick (★ Most Important Section)

This is **the** technique behind Apple's AirPods Pro page, the iPhone scroll, etc. It looks like real 3D but it's just images.

### How it works
1. Take a video of an object rotating 360°.
2. Export every frame as a numbered PNG/WebP: `chair_0001.webp`, `chair_0002.webp`, ... `chair_0120.webp`.
3. Preload all frames into memory.
4. On scroll, calculate which frame to show: `currentFrame = floor(scrollProgress × totalFrames)`.
5. Draw it on a `<canvas>` element.

### Step-by-step: Generate the asset

#### Option A — You have a real video (best quality)
```powershell
# Install ffmpeg first: https://ffmpeg.org/download.html
# Then in PowerShell, in the folder with your video:

ffmpeg -i chair-spin.mp4 -vf "fps=15,scale=1200:-1" -q:v 2 chair_%04d.webp
```
- `fps=15` → 15 frames per second (75 frames for a 5s clip = perfect)
- `scale=1200` → resize to 1200px wide (smaller = faster load)
- `.webp` → 70% smaller than PNG, transparent BG support

#### Option B — You have an AI-generated video (Runway/Pika/Sora)
1. Generate prompt: *"Cinematic product shot of a Scandinavian oak armchair rotating 360 degrees on a turntable, white seamless background, soft studio lighting, 5 seconds, high detail"*
2. Download the `.mp4`.
3. Run the same `ffmpeg` command above.

#### Option C — You only have static photos
1. Take 24-36 photos of the chair from every angle (every 10°). Tripod recommended.
2. Number them: `chair_0001.jpg ... chair_0036.jpg`.
3. Same canvas code, just fewer frames.

### Where to put the frames
Create `public/sequences/chair/` and drop all `chair_0001.webp ... chair_NNNN.webp` files there.

### The React component
A reusable `ScrollSequence.tsx` will be added to your project (one file, ~80 lines). Usage:
```tsx
<ScrollSequence
  framesPath="/sequences/chair/chair_"
  totalFrames={75}
  extension="webp"
  pinHeight={3}        // pin for 3 viewport heights of scroll
/>
```
That's it. Drops anywhere.

### Performance budget
| Resolution | Frames | Total Size | Verdict |
|-----------|--------|-----------|---------|
| 1200px / WebP / q=80 | 75 | ~3-5 MB | ✅ Perfect |
| 1920px / WebP / q=80 | 75 | ~10-15 MB | ⚠️ Desktop only |
| 1200px / PNG | 75 | ~25 MB | ❌ Too heavy |

**Always use WebP, max 1500px wide, max 100 frames.**

---

## 4. The Real 3D Model Path (Only for Signature Piece)

### Where to get a `.glb` file
| Source | Cost | Quality | Best For |
|--------|------|---------|----------|
| **Sketchfab** (sketchfab.com) | Free + paid | Excellent | Browse "armchair", "sofa", filter by `Downloadable` + `CC` license |
| **Poly Haven** | 100% free | Excellent | Limited furniture but pro quality |
| **Meshy.ai** | Free tier + paid | Good | Generate 3D from a photo or text prompt |
| **Luma AI** | Free | Photo-real | Capture a real chair with your phone → .glb |
| **Blender + you** | Free | Best | If you can model — full control |

### Recommended workflow for HËMMA
1. **Meshy.ai**: upload a hi-res render of one of your chair products → generates `.glb` in ~5 minutes.
2. Optimize: drop the `.glb` into [gltf.report](https://gltf.report/) → click "Optimize" → re-download. Cuts size 60-80%.
3. Drop into `public/models/signature-chair.glb`.
4. Use the `<SignaturePiece>` component (will be added).

### Size budget
- ✅ Under 3 MB → ship it.
- ⚠️ 3-8 MB → lazy-load (only mount when user scrolls near it).
- ❌ Over 10 MB → re-optimize, it'll kill mobile users.

---

## 5. Asset Generation Cheat Sheet (For Each Effect)

Tell your image/video AI exactly this. Copy-paste-ready prompts:

### For #1 Hero Scroll-Spin Chair
> Generate a 5-second video: A single Scandinavian-Indian oak armchair with cream linen upholstery rotating slowly 360° on an invisible turntable. Pure white seamless background. Soft top-down studio lighting, gentle floor shadow. Camera locked, perfectly centered, no zoom, no pan. Photorealistic. 1080p.

**Tools:** Runway Gen-3, Pika 1.5, Kling, Sora.
**Output:** 1 `.mp4` → ffmpeg → 75 `.webp` frames.

### For #2 Tilt Cards
> No assets needed. Uses existing product photos.

### For #3 Parallax Rooms (per room — 4 layers)
Layer 1 (background wall):
> Empty modern Indian living room, terracotta accent wall, large arched window with soft afternoon light, no furniture, no people, photorealistic, wide shot, eye-level.

Layer 2 (mid — main furniture):
> A single linen sofa, isolated on transparent background, front-3/4 angle, soft studio shadow underneath, photorealistic, PNG with alpha channel.

Layer 3 (foreground accent):
> A potted monstera plant, isolated on transparent background, slightly out of focus, photorealistic, PNG with alpha channel.

Layer 4 (atmosphere):
> Dust motes and soft light rays drifting through air, transparent background, subtle, PNG with alpha.

**Tool:** Midjourney (use `--no background` or remove BG with [remove.bg](https://remove.bg)).
**Output:** 4 PNGs per room scene, 3-4 rooms = 12-16 PNGs total.

### For #4 Material Reveal
Two textures, same crop, same lighting:
> Top-down extreme close-up of natural oak wood grain, warm honey tone, soft directional lighting, photorealistic, 4K, square crop.
>
> Top-down extreme close-up of dark walnut wood grain, deep brown, soft directional lighting, photorealistic, 4K, square crop.

**Output:** 2 JPG/WebP, 2048×2048.

### For #6 Real 3D Signature Piece
Use Meshy.ai → upload your best chair render. Done.

### For #7 Custom Cursor
No assets needed.

---

## 6. The Conversion Pipeline (Video/Image → Interactive)

This is the answer to *"how do I make this video interactive?"* — three pipelines:

### Pipeline A: Video → Scroll-Scrubbed 3D (L1)
```
your-video.mp4
   │
   ▼
ffmpeg -i video.mp4 -vf "fps=15,scale=1200:-1" -q:v 2 frame_%04d.webp
   │
   ▼
public/sequences/myobject/frame_0001.webp ... frame_0075.webp
   │
   ▼
<ScrollSequence framesPath="/sequences/myobject/frame_" totalFrames={75} />
   │
   ▼
✨ User scrolls = object rotates ✨
```

### Pipeline B: Photo → Parallax Diorama (L2)
```
your-room-photo.jpg
   │
   ▼ (in Photoshop OR ask AI to regenerate as separate layers)
   │
   ├── bg.png       (just walls + floor, no furniture)
   ├── mid.png      (main furniture, transparent BG)
   ├── front.png    (foreground plant/lamp, transparent BG)
   │
   ▼
public/parallax/livingroom/{bg,mid,front}.png
   │
   ▼
<ParallaxScene layers={[bg, mid, front]} speeds={[0.2, 0.5, 0.9]} />
   │
   ▼
✨ Mouse moves = depth illusion ✨
```

### Pipeline C: Photo → Real 3D Model (L4)
```
chair-render.jpg
   │
   ▼ (Meshy.ai or Luma AI)
   │
   ▼
chair.glb
   │
   ▼ (gltf.report → optimize)
   │
   ▼
public/models/chair.glb
   │
   ▼
<SignaturePiece modelPath="/models/chair.glb" />
   │
   ▼
✨ User drags = real 3D rotation ✨
```

---

## 7. Libraries to Install

```powershell
pnpm add three @react-three/fiber @react-three/drei
pnpm add lenis
pnpm add gsap
```

| Package | Purpose | Size (gzip) |
|---------|---------|------------|
| `three` | WebGL 3D engine | ~150 KB |
| `@react-three/fiber` | React renderer for three.js | ~30 KB |
| `@react-three/drei` | Helpers (OrbitControls, Environment, useGLTF) | ~50 KB (tree-shaken) |
| `lenis` | Smooth scroll | ~5 KB |
| `gsap` | ScrollTrigger pinning | ~70 KB |

**Already installed:** `framer-motion` (you have this).

**Total added:** ~300 KB gzip — load once, runs everything.

---

## 8. Build Order (What I Recommend Doing First)

| Step | Effect | Asset Needed From You | Time to Implement |
|------|--------|----------------------|-------------------|
| 1 | **Tilt 3D Cards** (#2) | None | 30 min — do this first, instant win |
| 2 | **Custom Cursor** (#7) | None | 30 min — instant brand polish |
| 3 | **Hero Scroll-Spin Chair** (#1) | 1 chair turntable video | 1-2 hr (after asset arrives) |
| 4 | **Upgrade ScrollVideo to Sequence** (#5) | Re-export existing video as frames | 1 hr |
| 5 | **Material Reveal** (#4) | 2 texture images | 1-2 hr |
| 6 | **Parallax Rooms** (#3) | 12-16 layered PNGs | 2-3 hr |
| 7 | **Signature Piece Real 3D** (#6) | 1 `.glb` file | 2-3 hr |

**Suggestion:** Have me do steps 1-2 right now (no assets needed). You generate the chair turntable video while I build. Then we slot it in.

---

## 9. Performance Guardrails

| Rule | Why |
|------|-----|
| Lazy-load every 3D component | Don't ship `three.js` until user scrolls near it |
| Pause animations when tab is hidden | `document.hidden` check |
| Use `prefers-reduced-motion` fallback | Show a static image instead — accessibility |
| Cap image sequences at 100 frames | Memory bloat above ~150 frames |
| Use WebP, never PNG, for sequences | 70% smaller |
| Mobile: serve smaller frame set | `<picture>` with `media` queries OR detect viewport width and load 600px frames |
| Test on a $200 Android | If it stutters there, redesign. Don't trust your MacBook. |

---

## 10. What I'll Build For You (One Command Away)

When you say "build it", I will create:

1. `src/components/ScrollSequence.tsx` — reusable image-sequence canvas component
2. `src/components/Hero3D.tsx` — new hero using ScrollSequence
3. `src/components/TiltCard.tsx` — wrap product cards
4. `src/components/CustomCursor.tsx` — global cursor
5. `src/components/ParallaxScene.tsx` — for rooms
6. `src/components/MaterialReveal.tsx` — cursor-follow material swap
7. `src/components/SignaturePiece.tsx` — real 3D viewer

All with TypeScript, all matching your HËMMA design tokens, all lazy-loaded, all with reduced-motion fallbacks.

---

## TL;DR — Your Next Move

1. **Decide:** Do you want me to start with the no-asset effects (Tilt Cards + Custom Cursor) right now? That gives you a 30% upgrade in 1 hour.
2. **Generate:** Use the Section 5 prompts to start producing your chair turntable video and 2 texture images. Drop them in `public/sequences/` and `public/textures/` when ready.
3. **Tell me:** "Build step 1 and 2" → I install libraries and ship the components. We iterate from there.

The path from 1x to 100x is laid out. You bring the pixels, I bring the code.
