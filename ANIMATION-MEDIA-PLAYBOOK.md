# HËMMA — Animation + Media Creation + Integration Playbook

> Complete execution guide for upgrading HËMMA from a static ecommerce site to a cinematic, scroll-driven furniture shopping experience.

---

## 1. Assumptions You Made

| # | Assumption | Rationale |
|---|-----------|-----------|
| 1 | **Website type**: Ecommerce (furniture) | HËMMA sells Scandinavian-Indian furniture with product grid, cart, categories |
| 2 | **Tech stack**: React 19 + Vite 8 + TypeScript 6 + Tailwind CSS 4 + Framer Motion 12 | Confirmed from `package.json` |
| 3 | **Current sections**: Navbar → Hero → Categories → FeaturedProducts → RoomInspiration → PromoBar → Newsletter → Footer | Confirmed from `App.tsx` |
| 4 | **Brand style**: Scandinavian minimalism + Indian warmth. Earth tones (cream `#FAF8F5`, sand `#F0EBE3`, terracotta `#C4654A`, sage `#7C8C6E`, charcoal `#1A1A1A`). Fonts: Outfit (headings), DM Sans (body) | Confirmed from `index.css` theme tokens |
| 5 | **Target audience**: Urban Indian millennials/Gen-Z (25–40) who value design, quality, and identity. Price range ₹4,990–₹54,990 | Inferred from pricing, copy, and product naming |
| 6 | **Primary conversion goal**: Product purchase (secondary: newsletter signup, "Shop Collection" CTA) | Based on hero CTA and product grid structure |
| 7 | **Hosting**: Likely Vercel/Netlify (Vite SPA) | Standard for Vite+React. No SSR configured |
| 8 | **Current animation state**: Basic Framer Motion `initial`/`animate`/`whileInView` fades. No scroll-linked animation, no parallax, no pinning, no video, no custom imagery | Confirmed from all 8 components |
| 9 | **No routing library**: Single-page, all sections on one page | No react-router in `package.json` |
| 10 | **Budget for AI media**: User has access to Midjourney/DALL-E/Runway/Pika or equivalent | Required for asset generation |

---

## 2. Stack Recommendation and Tradeoffs

### Primary Stack: Framer Motion + Lenis + GSAP ScrollTrigger

You already have Framer Motion. Add two libraries to unlock cinematic scroll experiences:

| Library | Purpose | Install |
|---------|---------|---------|
| **Lenis** | Smooth scroll normalization (replaces native `scroll-behavior: smooth`) | `pnpm add lenis` |
| **GSAP + ScrollTrigger** | Scroll-linked animation, section pinning, parallax, scrub-based timelines | `pnpm add gsap` (free for non-commercial; if commercial, use GSAP Business license or Club membership) |
| **Framer Motion** (keep) | Component-level animation: hover, tap, layout, enter/exit, spring physics | Already installed |

**Why this combo**:
- Lenis gives silky 60fps scroll on all browsers (Safari included) — CSS `scroll-behavior: smooth` is janky
- GSAP ScrollTrigger is the industry standard for scroll-linked animations (Apple, Stripe, Linear all use it)
- Framer Motion stays for component transitions (hover, tap, `AnimatePresence` for menu)
- Zero overlap: GSAP handles scroll ↔ timeline binding; Framer handles interaction states

**Tradeoffs**:
| Concern | Assessment |
|---------|-----------|
| Bundle size | Lenis: ~7KB gzip. GSAP core+ScrollTrigger: ~28KB gzip. Total: ~35KB added |
| Learning curve | GSAP has imperative API (vs Framer's declarative). Takes 1–2 days to internalize |
| SSR compatibility | Not needed (Vite SPA). Both work client-side only |
| License | GSAP is free for sites where end users don't pay for the tool itself. Furniture ecommerce qualifies under the standard license. Verify at https://gsap.com/licensing |

### Alternative Stack: Motion One + CSS Scroll-Driven Animations

| Library | Purpose | Install |
|---------|---------|---------|
| **Motion One** | Lightweight animation (3KB) with WAAPI backend | `pnpm add motion` |
| **CSS `animation-timeline: scroll()`** | Native scroll-linked animations, no JS | Browser CSS only |

**Why you'd pick this instead**:
- Zero JS bundle for scroll animations
- Native performance (compositor thread)
- Future-proof (W3C spec)

**Why NOT for HËMMA right now**:
- Safari doesn't support `animation-timeline` until Safari 18.4+ (April 2025). As of April 2026, ~15% of Indian mobile Safari users may be on older versions
- Cannot do section pinning natively
- No scrub-based timeline (play/reverse on scroll direction)
- Would require GSAP as fallback anyway

**Verdict**: Go with Primary Stack. Revisit CSS scroll-driven animations when Safari coverage hits 95%+ in India.

---

## 3. Visual Direction Concepts

### Concept A: "Quiet Luxury" (Recommended)

**Mood**: Aesop stores. Kinfolk magazine. Japandi interiors. Whisper-soft sophistication.

| Element | Value |
|---------|-------|
| **Palette** | `#FAF8F5` (cream), `#C4654A` (terracotta), `#3D3D3D` (graphite), `#7C8C6E` (sage), `#D4C5B0` (linen) |
| **Font pair 1** | Headings: **Outfit** (current) / Body: **DM Sans** (current) — keep |
| **Font pair 2** | Headings: **Sora** / Body: **Inter** — tighter, more geometric alternative |
| **Motion feel** | Slow reveals (600–800ms). Generous easing. Content drifts in like smoke. Parallax at 0.1–0.3x speed |
| **Photography** | Soft diffused daylight. Negative space. Single furniture piece hero'd against linen/concrete. No people in hero, people in lifestyle shots |
| **Video** | Slow pans across textured surfaces. Time-lapse of daylight moving across a room. 5–8 second loops |
| **References** | aesop.com, hay.dk, muji.com/in, menu.as |

### Concept B: "Bold Modern India"

**Mood**: Vibrant. Confident. Design-forward Indian identity meets European craft.

| Element | Value |
|---------|-------|
| **Palette** | `#1A1A1A` (charcoal), `#E85D3A` (burnt orange), `#F5F0E8` (ivory), `#2D5F4F` (deep teal), `#C8A96E` (brass) |
| **Font pair 1** | Headings: **Cabinet Grotesk** / Body: **General Sans** |
| **Font pair 2** | Headings: **Clash Display** / Body: **Satoshi** |
| **Motion feel** | Snappy (300–500ms). Stagger-heavy. Cards flip and slide. Bold scroll-jacking moments |
| **Photography** | High contrast. Warm evening light. Furniture styled with Indian textiles (ikat, block print). Rich shadows |
| **Video** | Quick cuts of hands touching wood grain. Overhead shots of room layouts assembling. Rhythmic editing |
| **References** | urbanladder.com, hay.dk, 1stdibs.com, Nicobar |

### Concept C: "Scandinavian Serenity"

**Mood**: Purely Nordic. Whitewashed. Calm. Functional beauty without embellishment.

| Element | Value |
|---------|-------|
| **Palette** | `#FFFFFF` (white), `#F7F5F2` (warm white), `#333333` (near black), `#A8B5A2` (eucalyptus), `#D4A373` (warm wood) |
| **Font pair 1** | Headings: **PP Neue Montreal** / Body: **Söhne** |
| **Font pair 2** | Headings: **Geist** / Body: **Inter** |
| **Motion feel** | Ultra-minimal. Opacity fades only (800–1200ms). Barely perceptible parallax. Almost no hover effects |
| **Photography** | Overexposed whites. Single item on pure white/grey. Studio lighting. Architectural |
| **Video** | Static camera, single subject. A chair rotating on a turntable. Macro of fabric weave |
| **References** | fritzhansen.com, bfrnd.com, vipp.com |

**Recommendation**: **Concept A** ("Quiet Luxury"). It aligns with your existing brand tokens, requires zero font changes, and the motion philosophy (slow, organic) is the most performant approach for media-heavy pages.

---

## 4. Animation System Spec

### 4.1 Animation Tokens (Global Constants)

```typescript
// src/lib/animation-tokens.ts
export const EASE = {
  smooth: [0.25, 0.1, 0.25, 1.0],      // CSS ease equivalent
  decel:  [0.0, 0.0, 0.2, 1.0],         // Material decelerate
  accel:  [0.4, 0.0, 1.0, 1.0],         // Material accelerate
  spring: { stiffness: 100, damping: 20 }, // For Framer Motion springs
} as const;

export const DURATION = {
  fast:   300,  // hover, micro-interactions
  medium: 500,  // section reveals
  slow:   800,  // hero, parallax transitions
  crawl:  1200, // pinned storytelling transitions
} as const;
```

### 4.2 Animation Catalog (12 Effects)

| # | Effect | Trigger | Easing | Duration | Reduced-Motion Fallback | Perf Risk |
|---|--------|---------|--------|----------|------------------------|-----------|
| 1 | **Hero stagger entrance** | Page load (DOMContentLoaded) | `decel` `[0,0,0.2,1]` | 700ms per element, 100ms stagger | Instant opacity:1, no transform | Low |
| 2 | **Section fade-up reveal** | ScrollTrigger: `top 85%` enters viewport | `decel` | 600ms | Instant opacity:1 | Low |
| 3 | **Parallax background drift** | Scroll position (scrub) | Linear | Continuous (scrub: true) | Disabled — element stays static | Low |
| 4 | **Product card stagger** | ScrollTrigger: container `top 80%` | `smooth` | 400ms, 80ms stagger | Instant appear, no stagger | Low |
| 5 | **Category image zoom on scroll** | Scroll progress through section (scrub) | Linear | Continuous | Disabled — `scale(1)` always | Medium |
| 6 | **Pinned room storytelling** | ScrollTrigger pin: section stays fixed while user scrolls through 3 slides | `decel` | 800ms per slide transition | Section scrolls normally, no pinning | Medium |
| 7 | **Navbar blur on scroll** | `window.scrollY > 20` (already exists; optimize) | CSS `transition` | 300ms | Same behavior, no backdrop-blur | Low |
| 8 | **Hover card lift** | `mouseenter` / `mouseleave` | `spring {stiffness:300, damping:25}` | ~250ms (spring) | No transform; border-color change only | Low |
| 9 | **CTA pulse glow** | Continuous loop (CSS animation) + ScrollTrigger visibility | CSS `ease-in-out` | 2000ms loop | Animation paused; static glow ring visible | Low |
| 10 | **Mobile menu slide** | Button click (`AnimatePresence`) | `spring {stiffness:200, damping:30}` | ~350ms | Instant show/hide via `display` toggle | Low |
| 11 | **Hero video ken-burns** | Page load + loop | CSS `ease-in-out` | 15000ms per cycle | Static poster image, no animation | Low |
| 12 | **Scroll progress indicator** | Scroll position / document height | Linear | Continuous | Visible but static width bar | Low |

### 4.3 Detailed Specs for Complex Effects

#### Effect 6: Pinned Room Storytelling (most complex)

```
Behavior:
  - User scrolls into "Room Inspiration" section
  - Section pins (sticks to viewport)
  - As user continues scrolling, images crossfade through 3 room setups
  - Each room's text content fades in from below
  - After 3 rooms complete, section unpins and normal scroll resumes
  - Total scroll distance while pinned: 300vh (100vh per room)

ScrollTrigger config:
  trigger: "#room-storytelling"
  start: "top top"
  end: "+=300%"
  pin: true
  scrub: 0.5
  snap: { snapTo: 1/3, duration: 0.5, ease: "power2.inOut" }

Reduced-motion:
  - No pinning
  - Rooms display as stacked cards (current layout)
  - Standard scroll behavior

Performance:
  - Use CSS `will-change: transform` on pinned container only during pin
  - Remove `will-change` on unpin via `onLeave` callback
  - Images preloaded at 50% viewport above trigger
```

#### Effect 11: Hero Video Ken Burns

```
Behavior:
  - Background video plays on loop in hero section
  - Slow zoom from scale(1.0) to scale(1.15) over 15s
  - Alternate: slow pan left-to-right via translateX
  - On mobile: static poster image only (no video)

CSS:
  @keyframes ken-burns {
    0%   { transform: scale(1.0); }
    50%  { transform: scale(1.1); }
    100% { transform: scale(1.0); }
  }

  .hero-video {
    animation: ken-burns 15s ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    .hero-video { animation: none; }
  }
```

---

## 5. Media Shot List (Photos + Videos)

### 5.1 Photo Concepts (12)

| # | Concept | Scene Description | Framing | Lighting | Usage Section | Aspect Ratio |
|---|---------|------------------|---------|----------|---------------|-------------|
| P1 | **Hero living room** | Minimalist living room with STRÖM sofa, wooden floor, single plant, linen curtains | Wide angle (24mm equivalent), eye level | Soft morning light from left window, warm tone (3200K) | Hero background | 16:9 |
| P2 | **Hero bedroom** | Platform bed (DRÖM style), rumpled linen bedding, warm light on nightstand | Wide angle, slightly above eye level | Golden hour light through sheer curtains | Hero carousel alt / Room Inspiration | 16:9 |
| P3 | **Product hero — sofa** | Single modular sofa on concrete floor, terracotta cushion accent | Medium shot (50mm), straight-on | Studio diffused daylight, minimal shadows | FeaturedProducts card 1 | 3:4 |
| P4 | **Product hero — dining table** | Oak dining table set for 4, ceramic dishes, single dried arrangement | Overhead/45° angle | Noon light, soft shadows | FeaturedProducts card 2 | 3:4 |
| P5 | **Product hero — bed frame** | Platform bed from 3/4 angle, neutral bedding, whitewashed wall | 3/4 angle, below eye level | Afternoon side light | FeaturedProducts card 3 | 3:4 |
| P6 | **Product hero — desk chair** | Ergonomic chair at walnut desk, laptop, monstera plant | Medium shot, slight angle | Studio light, clean white background | FeaturedProducts card 4 | 3:4 |
| P7 | **Category — kitchen** | Kitchen island with oak stools, pendant lights, brass fixtures | Wide shot, eye level | Warm ambient + pendant downlights | Categories bento grid | 4:3 |
| P8 | **Category — outdoor** | Teak outdoor furniture on a balcony, city skyline background, string lights | Wide shot, eye level | Dusk light (blue hour), warm string lights | Categories bento grid | 2:1 |
| P9 | **Texture detail — wood grain** | Macro shot of oak wood grain, finger touching surface | Extreme close-up (macro) | Raking side light to reveal texture | Parallax background layer | 16:9 |
| P10 | **Texture detail — fabric** | Macro of linen upholstery weave, warm neutral tone | Extreme close-up (macro) | Soft diffused top light | Parallax background layer | 16:9 |
| P11 | **Lifestyle — morning coffee** | Person (hands only) holding ceramic cup at BJÖRK dining table, morning light | Medium close-up, overhead | Morning golden hour | Newsletter section background | 3:2 |
| P12 | **Lifestyle — reading nook** | Person curled in VILA armchair reading, bookshelf behind, warm lamp | Medium shot, slightly overhead | Warm lamp light + dim ambient | RoomInspiration card | 4:5 |

### 5.2 Video Concepts (8)

| # | Concept | Duration | Scene/Motion | Framing | Lighting | Usage Section |
|---|---------|----------|-------------|---------|----------|---------------|
| V1 | **Hero room timelapse** | 8s loop | Living room with daylight moving across walls over hours, compressed to 8s. Shadows shift, light changes from cool to warm | Static wide shot, locked tripod | Natural daylight progression | Hero background video |
| V2 | **Sofa texture pan** | 6s | Slow dolly across sofa surface: fabric → armrest → cushion stitch detail | Close-up tracking shot, horizontal pan | Soft side light, warm | Product detail modal / About section |
| V3 | **Room assembly stop-motion** | 10s | Empty room → furniture pieces appear one by one (sofa, table, lamp, rug, art) in stop-motion style | Overhead top-down shot | Even studio light | RoomInspiration pinned section |
| V4 | **Hand on wood** | 5s | Hand slowly dragging across oak table surface, feeling the grain | Close-up, shallow DOF | Warm side light (golden hour) | Scroll parallax layer |
| V5 | **Curtain breeze** | 8s loop | White linen curtain gently billowing in breeze, revealing window light behind | Medium shot, static camera | Bright backlighting through window | Hero or section transition background |
| V6 | **Product 360 turntable** | 7s | VILA armchair slowly rotating 360° on white seamless background | Studio medium shot, eye level | Even 3-point studio lighting | Product detail page |
| V7 | **Morning kitchen ritual** | 10s | Steam rising from coffee cup on kitchen counter, hands arranging breakfast, BJÖRK table visible | Medium shot, slight dolly in | Soft morning light, warm tones | Lifestyle / PromoBar alt |
| V8 | **Night lamp glow** | 6s loop | LJUS floor lamp turning on slowly, warm glow filling dark room corner | Medium wide shot, static | Lamp is sole light source, room dark → warm | Footer background or ambient section |

---

## 6. AI Prompt Pack (Photo + Video)

### 6.1 Photo Prompts (12 × 2 variants each)

#### P1: Hero Living Room

**Safe variant**:
```
A minimal Scandinavian living room with a low modular sofa in warm grey linen fabric, 
light oak hardwood floor, a single large fiddle leaf fig plant in a terracotta pot, 
sheer white linen curtains letting in soft diffused morning sunlight from a large 
window on the left side. Cream plastered walls, no clutter, one small side table 
with a ceramic vase. Shot with a Canon R5 at 24mm f/2.8, eye-level perspective. 
Warm color temperature 3200K, soft shadows, natural light photography style. 
Aspect ratio 16:9. 
--no people, logos, text, watermarks, busy patterns, dark shadows, HDR look
```

**Bold variant**:
```
A dramatic minimal living room with a sculptural modular sofa in charcoal bouclé 
fabric against a raw concrete feature wall, polished concrete floor, single 
architectural dried palm leaf in a matte black vessel. Floor-to-ceiling window 
on left with morning light creating a hard diagonal shadow across the floor. 
Sparse, gallery-like atmosphere. Shot with Hasselblad medium format at 30mm, 
f/4. Warm golden light, cinematic color grading with lifted blacks. 
Architectural photography style. Aspect ratio 16:9.
--no people, logos, text, watermarks, clutter, excessive decoration, cartoonish
```

#### P2: Hero Bedroom

**Safe variant**:
```
A serene Japanese-Scandinavian bedroom with a low wooden platform bed in natural 
oak, rumpled off-white linen bedding, a single bedside table with a ceramic lamp 
emitting warm light. Whitewashed walls, woven jute rug on light wood floor. 
Golden hour sunlight filtering through sheer cream curtains, creating soft 
warm light on the bed. Shot at 28mm f/3.5, slightly above eye level. 
Muted earth tones, film-like grain. Lifestyle interior photography. 
Aspect ratio 16:9.
--no people, text, logos, watermarks, dark rooms, neon colors, maximalist decor
```

**Bold variant**:
```
A moody intimate bedroom at dusk, low walnut platform bed with charcoal linen 
sheets, sage green velvet throw blanket draped casually. Terracotta accent wall 
behind the bed. Single pendant light casting a warm amber pool of light. 
Window showing deep blue dusk sky. Rich shadows, chiaroscuro lighting. 
Shot with Sony A7IV at 35mm f/1.8, shallow depth of field on the pillow 
texture. Cinematic mood, film photography aesthetic. Aspect ratio 16:9.
--no people, text, logos, watermarks, bright flash, clinical look
```

#### P3: Product — Sofa

**Safe variant**:
```
A single modular 3-seater sofa in warm grey linen upholstery, sitting on a 
polished concrete floor, plain cream wall behind. Clean studio-like setting 
with soft diffused natural daylight from the right. No other furniture. 
Minimal shadow beneath. Shot with 50mm lens at f/4, straight-on eye level. 
Product photography style, warm neutral tones, clean composition. 
Aspect ratio 3:4 portrait.
--no people, text, logos, watermarks, busy backgrounds, dramatic lighting
```

**Bold variant**:
```
A sculptural low-profile modular sofa in terracotta bouclé fabric, placed on 
dark stained oak floor against a deep sage green painted wall. Single shaft 
of golden light falling on one end of the sofa. Dramatic negative space above. 
Shot at 85mm f/2.8, slightly below eye level, looking up at the sofa to give 
it architectural presence. Editorial product photography, moody but warm. 
Aspect ratio 3:4 portrait.
--no people, text, logos, watermarks, flat lighting, white background
```

#### P4: Product — Dining Table

**Safe variant**:
```
An oak dining table for four, shot from 45-degree overhead angle, set with 
simple white ceramic plates, linen napkins in sand color, a single glass vase 
with dried eucalyptus stem. Light wood chairs tucked in. Soft noon light from 
above, minimal shadows. Clean kitchen interior background out of focus. 
Shot at 35mm f/4. Warm natural tones. Lifestyle product photography. 
Aspect ratio 3:4 portrait.
--no people, text, logos, watermarks, food, cluttered table, dark kitchen
```

**Bold variant**:
```
A solid oak dining table seen from directly overhead, dramatically styled with 
handmade ceramic plates in earth tones, brass cutlery, a terracotta bowl with 
pomegranates, block-printed cotton napkins in indigo. Warm brass pendant light 
casting circular warm glow on the table surface. Dark surroundings, spotlight 
effect. Shot with medium format at 50mm f/5.6. Rich, editorial food magazine 
aesthetic. Aspect ratio 3:4 portrait.
--no people, text, logos, watermarks, plastic items, modern minimalist empty table
```

#### P5: Product — Bed Frame

**Safe variant**:
```
A minimalist wooden platform bed frame in natural light oak, dressed with white 
organic cotton bedding and a single sage green throw pillow. White wall behind, 
light wood floor. Seen from 3/4 angle, slightly below eye level to emphasize 
the bed's low profile. Afternoon soft side light from window. Clean, airy, 
Scandinavian furniture photography. Aspect ratio 3:4 portrait.
--no people, text, logos, watermarks, dark rooms, messy bedding, heavy styling
```

**Bold variant**:
```
A floating wooden platform bed frame in smoked walnut finish, hovering above 
a dark polished floor with hidden LED creating a soft warm glow underneath. 
Charcoal linen bedding, single terracotta accent pillow. Raw concrete wall 
behind with subtle texture. Dramatic low-angle 3/4 shot at 24mm f/2.8, 
making the bed monumental. Moody, architectural interior photography. 
Aspect ratio 3:4 portrait.
--no people, text, logos, watermarks, messy room, typical bedroom clutter
```

#### P6: Product — Desk Chair

**Safe variant**:
```
An ergonomic office chair in light grey mesh and natural wood armrests, 
positioned at a clean walnut desk with a closed laptop and a small potted 
monstera. White wall background, soft even lighting. Shot at 50mm f/4, 
eye level, slightly angled. Clean product photography with lifestyle context. 
Aspect ratio 3:4 portrait.
--no people, text, logos, watermarks, cables, clutter, dramatic shadows
```

**Bold variant**:
```
An architectural ergonomic chair in matte black with walnut accents, shot 
against a deep charcoal backdrop. Single directional warm light from upper 
left creating dramatic shadows. Chair slightly rotated to show profile. 
No desk, no context, pure product sculpture. Shot at 85mm f/4, slightly 
below eye level. High-end furniture catalog style, dark and premium. 
Aspect ratio 3:4 portrait.
--no people, text, logos, watermarks, office setting, bright lights, white bg
```

#### P7: Category — Kitchen

**Safe variant**:
```
A warm Scandinavian kitchen with an oak island counter, two wooden bar stools, 
brass pendant lights above, white open shelving with ceramic dishes. Marble 
countertop with a French press and cutting board. Warm ambient light plus 
pendant downlights. Shot at 24mm f/3.5, eye level. Warm interior photography, 
inviting and lived-in. Aspect ratio 4:3 landscape.
--no people, text, logos, watermarks, dark kitchen, industrial style, stainless steel
```

**Bold variant**:
```
A chef's kitchen island in dark green painted wood with brushed brass hardware, 
oak top, artisanal ceramic bowls stacked, copper pots hanging from ceiling rack. 
Rich warm evening light from hidden under-cabinet lighting. Deep shadows in 
corners. Shot at 28mm f/2.8. Moody editorial kitchen photography, reminiscent 
of Kinfolk magazine. Aspect ratio 4:3 landscape.
--no people, text, logos, watermarks, bright fluorescent light, modern minimal
```

#### P8: Category — Outdoor

**Safe variant**:
```
Teak outdoor furniture set on a modern apartment balcony: two lounge chairs 
with cream outdoor cushions, a small side table, string lights overhead. 
Urban city skyline blurred in background. Blue hour dusk sky. Warm string 
light glow on furniture. Shot at 35mm f/2.8. Lifestyle outdoor living 
photography. Aspect ratio 2:1 ultrawide.
--no people, text, logos, watermarks, rain, pool, garden, suburban setting
```

**Bold variant**:
```
A rooftop terrace at sunset overlooking a tropical Indian city skyline 
(abstract, no specific city). Sculptural teak daybed with ivory cushions, 
brass lanterns with candles, scattered bougainvillea petals. Dramatic 
orange-pink sunset sky. Shot at 24mm f/4, wide angle emphasizing the sky 
and view. Luxurious resort editorial photography. Aspect ratio 2:1 ultrawide.
--no people, text, logos, watermarks, branded items, pool, rain
```

#### P9: Texture — Wood Grain

**Safe variant**:
```
Extreme macro photograph of natural oak wood grain, showing growth rings, 
fine texture, and natural color variation. Raking side light from the left 
creating depth in the grain pattern. Warm honey tones. Shot with macro lens 
at f/8 for deep focus. Abstract texture photography. Aspect ratio 16:9.
--no furniture, people, text, logos, watermarks, painted wood, dark wood
```

**Bold variant**:
```
Extreme macro of charred yakisugi (shou sugi ban) wood surface, showing 
dramatic black charcoal texture with warm amber wood visible in deep grain 
cracks. Hard directional side light creating extreme texture contrast. 
Shot with 100mm macro f/11. Abstract fine art texture. Aspect ratio 16:9.
--no furniture, people, text, logos, watermarks, smooth surfaces
```

#### P10: Texture — Fabric

**Safe variant**:
```
Macro photograph of natural linen fabric weave in sand/cream color, showing 
individual thread texture and subtle color variation. Soft diffused top light, 
minimal shadows. Warm neutral tones. Textile photography. Aspect ratio 16:9.
--no furniture, people, text, logos, watermarks, bright colors, patterns
```

**Bold variant**:
```
Macro photograph of handwoven khadi cotton fabric in warm ivory, showing 
intentional slight irregularities in the weave that give it artisan character. 
Warm side light creating shadow in the weave texture. Rich cream and gold 
tones. Heritage textile photography. Aspect ratio 16:9.
--no furniture, people, text, logos, watermarks, machine-made look, synthetic
```

#### P11: Lifestyle — Morning Coffee

**Safe variant**:
```
Overhead shot of two hands holding a ceramic coffee cup in matte cream finish 
over a light oak dining table surface. Morning golden light from the side. 
A linen placemat, a small plate with toast visible at edge of frame. Warm, 
cozy, minimal. Lifestyle photography. Aspect ratio 3:2.
--no faces, logos, text, watermarks, busy background, branded mugs
```

**Bold variant**:
```
Close-up of hands (Indian skin tone) cradling a handmade terracotta cup of 
chai on a weathered teak surface, steam visible rising against morning 
backlight from a window. Single dried marigold on the table. Rich warm 
tones, slight film grain. Cultural lifestyle photography. Aspect ratio 3:2.
--no faces, logos, text, watermarks, modern mugs, cold light
```

#### P12: Lifestyle — Reading Nook

**Safe variant**:
```
A person curled up in a mid-century accent armchair in sage green velvet, 
reading a book, bare feet visible, wooden bookshelf blurred behind. Warm 
lamp light from a floor lamp. Shot at 50mm f/2, shallow DOF on the book. 
Cozy lifestyle interior photography, warm tones. Aspect ratio 4:5 portrait.
--no face visible, no logos, text, watermarks, cold light, modern office
```

**Bold variant**:
```
A silhouette of a person reading in a deep wingback armchair by a window, 
late afternoon light creating a dramatic rim light around their figure and 
the chair. Bookshelves in deep shadow behind. Moody, atmospheric, cinematic. 
Shot at 35mm f/2.8. Fine art lifestyle photography. Aspect ratio 4:5 portrait.
--no face visible, no logos, text, watermarks, bright room, multiple people
```

### 6.2 Video Prompts (8 × 2 variants each)

> These prompts target **Runway Gen-3 Alpha**, **Kling AI**, or **Pika 2.0**. Adjust parameters for your tool.

#### V1: Hero Room Timelapse

**Safe variant**:
```
Camera: Static wide shot, locked tripod, 24mm equivalent
Scene: A minimal Scandinavian living room with a low grey sofa, oak floor, 
white walls, sheer curtains. Daylight moves across the room over 8 seconds — 
morning cool blue light transitions to warm afternoon golden light. Shadows 
of window frames slowly travel across the floor and wall.
Motion: No camera movement. Only light changes.
Style: Timelapse interior photography, warm natural tones, 4K
Duration: 8 seconds, seamless loop
--no people, camera shake, artificial light changes, night
```

**Bold variant**:
```
Camera: Static wide shot, locked, 28mm
Scene: A moody living room with concrete walls, dark sofa, single plant. 
Dramatic light beam from a high window sweeps across the room as the sun 
moves — creating a moving spotlight effect on the sofa and floor. Time 
compressed to 8 seconds. Dust particles visible in the light beam.
Motion: No camera movement. Light and shadow are the only motion.
Style: Cinematic timelapse, atmospheric, Terrence Malick-inspired, 4K
Duration: 8 seconds loop
--no people, artificial light, lens flare, fast motion
```

#### V2: Sofa Texture Pan

**Safe variant**:
```
Camera: Slow horizontal dolly/tracking shot, close-up, 85mm equivalent
Scene: Camera slowly pans across a grey linen sofa surface from left to 
right — starting at the armrest, gliding over the seat cushion, revealing 
stitch detail on the edge. Shallow depth of field.
Motion: Slow constant-speed horizontal pan (6 seconds total travel)
Lighting: Soft warm side light from window
Style: Furniture detail B-roll, editorial, warm tones
Duration: 6 seconds
--no people, hands, camera shake, fast movement, dark
```

**Bold variant**:
```
Camera: Slow tracking macro shot, extreme close-up, 100mm macro
Scene: Camera drifts across bouclé fabric texture on a sofa — starting 
from the woven loops in sharp focus, racking focus to the brass leg detail 
at the end. Individual threads visible.
Motion: Ultra-slow horizontal drift with subtle focus pull
Lighting: Hard side light creating shadows in fabric texture
Style: Luxury fashion film detail shot, cinematic depth of field
Duration: 6 seconds
--no people, fast movement, zoom, flat lighting
```

#### V3: Room Assembly Stop-Motion

**Safe variant**:
```
Camera: Static overhead top-down shot
Scene: An empty room (wood floor, white walls) seen from directly above. 
Furniture pieces appear one by one in stop-motion style: first a rug slides 
in, then a sofa materializes, then a coffee table, side table, lamp, and 
finally a plant. Each piece appears with a subtle bounce.
Motion: Stop-motion with slight elastic settle on each piece
Style: Clean, playful, product showcase animation
Duration: 10 seconds
--no people, realistic physics, dark room, outdoor
```

**Bold variant**:
```
Camera: Static overhead
Scene: Empty concrete floor from above. Furniture pieces assemble themselves — 
individual wood planks fly in and construct a table, fabric wraps around a 
sofa frame, lamp parts click together. Mechanical, satisfying assembly sequence.
Motion: Choreographed assembly with precise timing
Style: Design process reveal, satisfying engineering aesthetic
Duration: 10 seconds
--no people, realistic room, darkness, messiness
```

#### V4: Hand on Wood

**Safe variant**:
```
Camera: Close-up tracking shot following the hand, 50mm
Scene: A hand slowly drags fingertips across a light oak table surface, 
feeling the wood grain. Camera follows the hand movement. Shallow depth 
of field. Single ring on finger for visual interest.
Motion: Slow left-to-right hand movement, camera follows
Lighting: Warm golden hour side light
Style: ASMR tactile, warm lifestyle B-roll
Duration: 5 seconds
--no face, fast movement, dark room, artificial materials
```

**Bold variant**:
```
Camera: Extreme close-up, macro, shallow DOF
Scene: Weathered hands with visible craftsmanship details slowly running 
across raw walnut wood, sanding marks visible. Sawdust particles floating 
in backlit air. Artisan's workshop atmosphere.
Motion: Ultra-slow hand movement, camera static
Lighting: Golden backlight through workshop window, dust particles visible
Style: Documentary craftsmanship, Jiro Dreams of Sushi aesthetic
Duration: 5 seconds
--no face, modern furniture, machine tools, dark
```

#### V5: Curtain Breeze

**Safe variant**:
```
Camera: Static medium shot, 50mm
Scene: White linen curtain gently billowing inward from a breeze through 
an open window. Bright daylight behind the curtain creating translucent 
glow. Simple white room. Peaceful, meditative.
Motion: Gentle organic curtain movement from breeze
Style: Peaceful interior B-roll, bright and airy
Duration: 8 seconds, seamless loop
--no people, heavy wind, storm, dark room, colored curtains
```

**Bold variant**:
```
Camera: Static, shooting into backlight, 35mm
Scene: Heavy cream linen curtain caught in a strong breeze, billowing 
dramatically into the room like a sail. Intense golden backlight creating 
silhouette and translucency simultaneously. Dust particles in the light.
Motion: Dramatic flowing fabric movement
Style: Fashion film aesthetic, ethereal, Dior runway film quality
Duration: 8 seconds loop
--no people, rain, dark, colored curtains, multiple windows
```

#### V6: Product 360 Turntable

**Safe variant**:
```
Camera: Static medium shot, eye level, 50mm
Scene: A mid-century accent armchair in sage green velvet rotating slowly 
360 degrees on a white seamless studio background. Even rotation speed. 
Clean product turntable.
Motion: Single constant-speed 360° rotation
Lighting: 3-point studio lighting, soft shadows, no harsh reflections
Style: Clean ecommerce product turntable video
Duration: 7 seconds
--no people, background objects, uneven rotation, shadows
```

**Bold variant**:
```
Camera: Static, slightly below eye level to give the chair presence, 35mm
Scene: A sculptural armchair in rich terracotta velvet rotating on a dark 
concrete floor, single dramatic spotlight from above creating a pool of 
light. The rest is near-black. Slowly rotating, gallery-like presentation.
Motion: Slow 360° rotation
Lighting: Single overhead spot, dramatic shadows on floor
Style: Art gallery exhibit, dramatic product presentation
Duration: 7 seconds
--no people, white background, multiple lights, fast rotation
```

#### V7: Morning Kitchen Ritual

**Safe variant**:
```
Camera: Medium shot, slight slow dolly in, 35mm
Scene: Steam rising from a ceramic cup on an oak kitchen counter. Hands 
reach in to pick up the cup. Background: oak dining table with chairs 
visible in soft focus. Morning light through window.
Motion: Very slow dolly forward (10s travel), steam rising
Lighting: Soft warm morning light, kitchen pendant off
Style: Cozy morning ritual, lifestyle brand film
Duration: 10 seconds
--no face, fast movement, dark kitchen, branded items
```

**Bold variant**:
```
Camera: Slow dolly in with shallow DOF, 85mm
Scene: A brass Moka pot on a gas flame, steam erupting from the spout. 
Rack focus to a hand pouring into a handmade ceramic cup. Background: 
blurred warm kitchen with oak furniture shapes. All warm amber tones.
Motion: Slow dolly + focus rack
Lighting: Warm practical light from gas flame + morning window
Style: European coffee commercial, premium, intimate
Duration: 10 seconds
--no face, cold light, modern appliances, fast cuts
```

#### V8: Night Lamp Glow

**Safe variant**:
```
Camera: Static medium-wide shot, 35mm
Scene: A dark room corner. A floor lamp slowly dims up from zero to warm 
glow, gradually illuminating a reading chair and side table. Warm amber 
light fills the space over 6 seconds.
Motion: No camera movement. Light increases only.
Lighting: Lamp is sole light source, transition from dark to warm pool
Style: Ambient, ASMR-like calm, evening mood
Duration: 6 seconds, seamless loop (light on → slow fade → on)
--no people, harsh flash, multiple lights, daylight, camera movement
```

**Bold variant**:
```
Camera: Static, low angle looking up at the lamp, 24mm
Scene: A sculptural arc floor lamp in matte black with brass shade. Room 
starts completely dark. Lamp turns on with a warm Edison bulb glow, 
revealing rich textures — a leather chair arm, a stack of books, wood 
grain on a table. Intimate pool of light.
Motion: No movement except light transition
Lighting: Single practical lamp source, dramatic chiaroscuro reveal
Style: Film noir interior, Rembrandt lighting, premium
Duration: 6 seconds loop
--no people, daylight, multiple lamps, overhead light, bright room
```

---

## 7. Integration Blueprint

### 7.1 Asset Directory Structure

```
public/
├── media/
│   ├── hero/
│   │   ├── hero-living-room.avif          (hero bg — desktop)
│   │   ├── hero-living-room.webp          (hero bg — fallback)
│   │   ├── hero-living-room-mobile.avif   (hero bg — mobile ≤768px)
│   │   ├── hero-living-room-mobile.webp
│   │   ├── hero-video-poster.avif         (poster for hero video)
│   │   ├── hero-video-poster.webp
│   │   ├── hero-video.mp4                 (hero video — H.264)
│   │   └── hero-video.webm                (hero video — VP9)
│   ├── products/
│   │   ├── sofa-strom.avif
│   │   ├── sofa-strom.webp
│   │   ├── dining-bjork.avif
│   │   ├── dining-bjork.webp
│   │   ├── bed-drom.avif
│   │   ├── bed-drom.webp
│   │   ├── chair-moln.avif
│   │   ├── chair-moln.webp
│   │   ├── lamp-ljus.avif
│   │   ├── lamp-ljus.webp
│   │   ├── bookshelf-skap.avif
│   │   ├── bookshelf-skap.webp
│   │   ├── armchair-vila.avif
│   │   ├── armchair-vila.webp
│   │   └── nightstand-natt.avif / .webp
│   ├── categories/
│   │   ├── cat-living-room.avif / .webp
│   │   ├── cat-bedroom.avif / .webp
│   │   ├── cat-kitchen.avif / .webp
│   │   ├── cat-office.avif / .webp
│   │   └── cat-outdoor.avif / .webp
│   ├── rooms/
│   │   ├── room-minimal-living.avif / .webp
│   │   ├── room-cozy-bedroom.avif / .webp
│   │   ├── room-workspace.avif / .webp
│   │   ├── room-assembly.mp4 / .webm       (stop-motion video)
│   │   └── room-assembly-poster.avif / .webp
│   ├── textures/
│   │   ├── texture-wood.avif / .webp
│   │   └── texture-fabric.avif / .webp
│   ├── lifestyle/
│   │   ├── lifestyle-coffee.avif / .webp
│   │   └── lifestyle-reading.avif / .webp
│   └── videos/
│       ├── texture-pan.mp4 / .webm
│       ├── hand-wood.mp4 / .webm
│       ├── curtain-breeze.mp4 / .webm
│       ├── turntable-chair.mp4 / .webm
│       ├── kitchen-ritual.mp4 / .webm
│       └── lamp-glow.mp4 / .webm
```

### 7.2 Naming Conventions

| Rule | Example |
|------|---------|
| All lowercase, kebab-case | `hero-living-room.avif` |
| Section prefix | `hero-`, `cat-`, `room-`, `texture-`, `lifestyle-` |
| Product name matches data slug | `sofa-strom`, `dining-bjork`, `bed-drom` |
| Format suffix only (no resolution in name) | `.avif`, `.webp`, `.mp4`, `.webm` |
| Mobile variants get `-mobile` suffix | `hero-living-room-mobile.avif` |
| Video posters get `-poster` suffix | `hero-video-poster.avif` |

### 7.3 Responsive Breakpoints

```typescript
// src/lib/breakpoints.ts
export const BREAKPOINTS = {
  sm:  640,   // Mobile landscape
  md:  768,   // Tablet portrait
  lg:  1024,  // Tablet landscape / small desktop
  xl:  1280,  // Desktop
  xxl: 1536,  // Large desktop
} as const;

// Image sizing strategy:
// Mobile (<768):   max-width 768px,  quality 75, format AVIF → WebP fallback
// Tablet (768-1024): max-width 1024px, quality 80
// Desktop (>1024):  max-width 1600px, quality 82
// Hero images:      max-width 2400px, quality 85 (LCP critical)
```

### 7.4 Lazy Loading Strategy

| Asset Type | Strategy |
|-----------|----------|
| **Hero image** | `loading="eager"`, `fetchpriority="high"`, preloaded in `<head>` |
| **Hero video** | `preload="metadata"` on desktop, `preload="none"` on mobile. Load poster immediately |
| **Above-fold product images** (first 4) | `loading="eager"` |
| **Below-fold images** | `loading="lazy"` (native), `decoding="async"` |
| **Texture/parallax images** | `loading="lazy"`, loaded via Intersection Observer at `rootMargin: "200px"` |
| **Videos (non-hero)** | `preload="none"`, play on intersection (IntersectionObserver), `playsinline`, `muted` |

### 7.5 Preloading Strategy (in `index.html <head>`)

```html
<!-- Critical hero image — preload for LCP -->
<link rel="preload" as="image" type="image/avif"
  href="/media/hero/hero-living-room.avif"
  media="(min-width: 769px)"
  fetchpriority="high" />
<link rel="preload" as="image" type="image/avif"
  href="/media/hero/hero-living-room-mobile.avif"
  media="(max-width: 768px)"
  fetchpriority="high" />

<!-- Hero video poster -->
<link rel="preload" as="image" type="image/avif"
  href="/media/hero/hero-video-poster.avif"
  media="(min-width: 769px)" />

<!-- Font preloads (already done via Google Fonts preconnect) -->
```

### 7.6 Poster Image Strategy for Videos

Every `<video>` element must have a `poster` attribute pointing to a static AVIF/WebP image that:
1. Is the first frame or a representative frame of the video
2. Matches the video dimensions exactly (prevents CLS)
3. Is compressed aggressively (30–50KB for 1080p poster)
4. Uses `<picture>` element wrapping for format negotiation:

```tsx
// src/components/VideoPlayer.tsx
interface Props {
  src: string;
  webmSrc: string;
  poster: string;
  posterWebp: string;
  alt: string;
  className?: string;
}

export default function VideoPlayer({ src, webmSrc, poster, posterWebp, alt, className }: Props) {
  return (
    <video
      className={className}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={alt}
    >
      <source src={webmSrc} type="video/webm" />
      <source src={src} type="video/mp4" />
      {/* Fallback for no-video browsers */}
      <picture>
        <source srcSet={poster} type="image/avif" />
        <source srcSet={posterWebp} type="image/webp" />
        <img src={posterWebp} alt={alt} className={className} />
      </picture>
    </video>
  );
}
```

### 7.7 Fallback Behavior

| Scenario | Fallback |
|----------|----------|
| AVIF not supported | WebP via `<picture>` `<source>` fallback |
| WebP not supported | JPEG (generate one per asset for IE11 edge cases, though not priority) |
| Video fails to load | Poster image displayed, video element hidden |
| Video autoplay blocked (mobile) | Poster shown, play button overlay added |
| `prefers-reduced-motion: reduce` | All autoplay videos paused, poster shown |
| Slow connection (`navigator.connection.effectiveType === '2g'`) | Skip video loading entirely, show poster |

---

## 8. Implementation Guidance

### 8.1 Smooth Scrolling Setup (Lenis)

```tsx
// src/lib/smooth-scroll.ts
import Lenis from 'lenis';

let lenis: Lenis | null = null;

export function initSmoothScroll() {
  // Respect reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    touchMultiplier: 2,
  });

  function raf(time: number) {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return lenis;
}

export function destroySmoothScroll() {
  lenis?.destroy();
  lenis = null;
}

export function getLenis() {
  return lenis;
}
```

```tsx
// In src/App.tsx — add at the top level
import { useEffect } from 'react';
import { initSmoothScroll, destroySmoothScroll } from './lib/smooth-scroll';

function App() {
  useEffect(() => {
    const lenis = initSmoothScroll();
    return () => destroySmoothScroll();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      {/* ...rest */}
    </>
  );
}
```

Remove `scroll-behavior: smooth` from CSS (conflicts with Lenis):

```css
/* index.css — REMOVE this line: */
/* html { scroll-behavior: smooth; } */
```

### 8.2 Scroll-Triggered Animations (GSAP ScrollTrigger)

```tsx
// src/hooks/useScrollAnimation.ts
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationOptions {
  animation: (el: HTMLElement, tl: gsap.core.Timeline) => void;
  trigger?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  markers?: boolean; // dev only
}

export function useScrollAnimation(options: ScrollAnimationOptions) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !ref.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: options.start || 'top 85%',
        end: options.end || 'bottom 20%',
        scrub: options.scrub ?? false,
        pin: options.pin ?? false,
        markers: options.markers ?? false,
      },
    });

    options.animation(ref.current, tl);

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return ref;
}
```

**Usage — Section Fade Up:**

```tsx
// In any section component
const sectionRef = useScrollAnimation({
  animation: (el, tl) => {
    tl.from(el.querySelectorAll('.animate-item'), {
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
    });
  },
  start: 'top 85%',
});

return (
  <section ref={sectionRef}>
    <h2 className="animate-item">Title</h2>
    <p className="animate-item">Description</p>
  </section>
);
```

### 8.3 Section Pinning (Room Storytelling)

```tsx
// src/components/RoomStorytellingPinned.tsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { rooms } from '../data/products';

gsap.registerPlugin(ScrollTrigger);

export default function RoomStorytellingPinned() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    const sections = containerRef.current.querySelectorAll('.room-slide');
    const totalSlides = sections.length;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${totalSlides * 100}%`,
        pin: true,
        scrub: 0.5,
        snap: {
          snapTo: 1 / (totalSlides - 1),
          duration: 0.5,
          ease: 'power2.inOut',
        },
      },
    });

    // Crossfade between slides
    sections.forEach((section, i) => {
      if (i > 0) {
        tl.fromTo(
          section,
          { opacity: 0, scale: 1.05 },
          { opacity: 1, scale: 1, duration: 1 },
          i
        );
        tl.fromTo(
          sections[i - 1],
          { opacity: 1 },
          { opacity: 0, duration: 0.5 },
          i
        );
      }
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [prefersReducedMotion]);

  // Reduced motion: render as normal stacked layout
  if (prefersReducedMotion) {
    return (
      <section className="py-20">
        {rooms.map((room) => (
          <div key={room.id} className="mb-16">
            <img src={`/media/rooms/room-${room.name.toLowerCase().replace(/\s/g, '-')}.avif`}
              alt={room.name} className="w-full rounded-3xl" loading="lazy" />
            <h3 className="font-heading text-2xl mt-6">{room.name}</h3>
            <p className="text-muted">{room.description}</p>
          </div>
        ))}
      </section>
    );
  }

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {rooms.map((room, i) => (
        <div
          key={room.id}
          className={`room-slide absolute inset-0 flex items-center justify-center ${i === 0 ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={`/media/rooms/room-${room.name.toLowerCase().replace(/\s/g, '-')}.avif`}
            alt={room.name}
            className="absolute inset-0 w-full h-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-charcoal/40" />
          <div className="relative z-10 text-center text-white px-6 max-w-2xl">
            <p className="text-sm tracking-widest uppercase mb-4 text-white/70">
              Room {i + 1} of {rooms.length}
            </p>
            <h3 className="font-heading text-4xl md:text-6xl font-bold mb-4">
              {room.name}
            </h3>
            <p className="text-lg text-white/80">{room.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
```

### 8.4 Media Loading and Optimization

```tsx
// src/components/OptimizedImage.tsx
interface Props {
  src: string;          // Base path without extension (e.g., "/media/products/sofa-strom")
  alt: string;
  className?: string;
  width: number;
  height: number;
  loading?: 'eager' | 'lazy';
  priority?: boolean;
  sizes?: string;
}

export default function OptimizedImage({
  src, alt, className, width, height,
  loading = 'lazy', priority = false, sizes
}: Props) {
  return (
    <picture>
      <source srcSet={`${src}.avif`} type="image/avif" />
      <source srcSet={`${src}.webp`} type="image/webp" />
      <img
        src={`${src}.webp`}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : undefined}
        sizes={sizes || '(max-width: 768px) 100vw, 50vw'}
      />
    </picture>
  );
}
```

### 8.5 Reduced-Motion Handling

```tsx
// src/hooks/useReducedMotion.ts
import { useState, useEffect } from 'react';

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);

    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return reduced;
}
```

```css
/* Global reduced-motion styles — add to index.css */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  video {
    animation: none;
  }
}
```

### 8.6 Mobile-Specific Adjustments

```tsx
// src/hooks/useIsMobile.ts
import { useState, useEffect } from 'react';

export function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    setIsMobile(mq.matches);

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [breakpoint]);

  return isMobile;
}
```

**Mobile rules for the animation system:**

| Rule | Implementation |
|------|---------------|
| No hero video on mobile | Use `useIsMobile()` to render `<img>` instead of `<video>` |
| No section pinning on mobile | Pass `pin: false` to ScrollTrigger when `isMobile` |
| Reduce parallax intensity | Parallax multiplier: desktop `0.3`, mobile `0.1` |
| Disable Lenis on touch devices | Already handled by Lenis (respects touch) but reduce `duration` to `0.8` |
| Smaller stagger delays | Desktop: `0.1s` stagger. Mobile: `0.05s` |
| No hover effects on touch | Already handled by CSS `:hover` not firing on tap by default |

### 8.7 Lenis + GSAP Integration

```tsx
// src/lib/smooth-scroll.ts — updated to sync with ScrollTrigger
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initSmoothScroll() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return null;

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  // Sync Lenis with GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  return lenis;
}
```

### 8.8 Scroll Progress Indicator

```tsx
// src/components/ScrollProgress.tsx
import { useEffect, useState } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[3px] bg-terracotta z-[100]"
      style={{
        width: `${progress * 100}%`,
        transition: reducedMotion ? 'none' : 'width 0.1s linear',
      }}
      role="progressbar"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    />
  );
}
```

---

## 8. Performance and Accessibility Guardrails

### 8.1 Performance Rules

| Metric | Target | How to Achieve |
|--------|--------|---------------|
| **LCP** | < 2.5s | Preload hero image in `<head>`. Use AVIF (40% smaller than WebP). Set explicit `width`/`height` on hero `<img>`. No JS-dependent hero rendering |
| **CLS** | < 0.1 | Set explicit `width` + `height` on every `<img>` and `<video>`. Use `aspect-ratio` CSS. Reserve space for lazy-loaded content |
| **INP** | < 200ms | No expensive work in event handlers. Debounce scroll listeners. Use `passive: true` on scroll/touch listeners. GSAP ScrollTrigger already does this |
| **Total page weight** | < 3MB initial | Hero: 150KB max (AVIF). Products: 40KB each. Videos: preload="none" (load on demand). Total images above fold: < 500KB |
| **JavaScript bundle** | < 200KB gzip | Lenis(7KB) + GSAP(28KB) + Framer Motion(~40KB) + React(~45KB) + app code(~30KB) = ~150KB gzip |

**Hero video strategy:**
1. Desktop only (skip on mobile via `useIsMobile`)
2. `preload="metadata"` — downloads only dimensions + duration (~50KB)
3. Play only when hero is visible (IntersectionObserver)
4. Target: 720p, 8s, H.264 CRF 28 → ~800KB MP4
5. WebM VP9 alternative: ~600KB
6. Display poster image until video can play through

**Image compression targets:**

| Image Type | Format | Max Width | Quality | Max File Size |
|-----------|--------|-----------|---------|--------------|
| Hero | AVIF | 2400px | 82 | 150KB |
| Hero mobile | AVIF | 768px | 75 | 60KB |
| Product card | AVIF | 600px | 78 | 40KB |
| Category card | AVIF | 800px | 78 | 50KB |
| Room large | AVIF | 1200px | 80 | 80KB |
| Texture bg | AVIF | 1600px | 70 | 60KB |
| Video poster | AVIF | 1920px | 65 | 40KB |

**Compression commands (using sharp-cli or squoosh-cli):**

```bash
# Install squoosh CLI globally
npm install -g @aspect-build/rules_js @nicolo-ribaudo/squoosh-cli

# Or use sharp via Node script:
# Convert to AVIF
npx sharp -i input.jpg -o output.avif --avif quality=78

# Convert to WebP
npx sharp -i input.jpg -o output.webp --webp quality=80

# Resize + convert
npx sharp -i input.jpg -o output.avif --resize 600 --avif quality=78

# Video compression (ffmpeg)
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset slow -vf scale=1280:-2 -an output.mp4
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 35 -b:v 0 -vf scale=1280:-2 -an output.webm
```

### 8.2 Accessibility Checklist (20 checks)

| # | Check | Implementation |
|---|-------|---------------|
| 1 | `prefers-reduced-motion` disables all animations | Global CSS + `useReducedMotion` hook gates GSAP/Lenis |
| 2 | All images have descriptive `alt` text | Audit all `<img>` tags; product images describe the product |
| 3 | Videos have `aria-label` describing content | `<video aria-label="Living room timelapse showing daylight change">` |
| 4 | No content conveyed only through motion | All animated text is visible in reduced-motion mode without animation |
| 5 | Focus indicators visible on all interactive elements | Tailwind `focus-visible:ring-2 focus-visible:ring-terracotta` |
| 6 | Color contrast ratio ≥ 4.5:1 for body text | Graphite `#3D3D3D` on Cream `#FAF8F5` = 8.7:1 ✓ |
| 7 | Color contrast ratio ≥ 3:1 for large text | Terracotta `#C4654A` on Cream `#FAF8F5` = 3.6:1 ✓ |
| 8 | No seizure-inducing flashing (< 3 flashes/sec) | No flash animations in the spec |
| 9 | Skip-to-content link at top of page | `<a href="#main" class="sr-only focus:not-sr-only">Skip to content</a>` |
| 10 | `aria-hidden="true"` on decorative elements | Background blurs, decorative borders get `aria-hidden` |
| 11 | Scroll-jacked sections are keyboard-navigable | Pinned section scrolls normally with keyboard (Tab + Space) |
| 12 | Mobile menu is focus-trapped when open | Use `focus-trap-react` or manual focus management in `Navbar.tsx` |
| 13 | Scroll progress bar has `role="progressbar"` | Already in `ScrollProgress.tsx` component spec |
| 14 | Touch target size ≥ 44×44px | All buttons/links have `min-h-11 min-w-11` (44px) |
| 15 | No horizontal scrollbar on any viewport | `overflow-x: hidden` on `body` (already set) + test all breakpoints |
| 16 | `lang="en"` on `<html>` | Already set in `index.html` |
| 17 | Semantic headings (`h1` → `h6`) in order | One `h1` in Hero, `h2` per section, `h3` for cards |
| 18 | Form inputs have `<label>` or `aria-label` | Newsletter email input needs visible label or `aria-label` |
| 19 | Videos don't autoplay with sound | All videos are `muted` (required for autoplay) |
| 20 | `<main>` landmark wraps page content | Add `<main id="main">` around section content in `App.tsx` |

---

## 9. QA Checklist (25 checks)

### Visual/Design QA

| # | Check | Tool/Method | Pass Criteria |
|---|-------|-------------|--------------|
| 1 | Hero image loads in < 1.5s on 4G | Chrome DevTools > Network > Fast 3G | LCP marked < 2.5s |
| 2 | No layout shift during image load | Chrome DevTools > Performance > CLS | CLS < 0.1 |
| 3 | Fonts render without FOUT/FOIT | Load with cache disabled, watch for flash | Fonts swap within 100ms |
| 4 | All AI images match brand palette | Side-by-side comparison with color tokens | No jarring color mismatches |
| 5 | Images sharp at 2x density (Retina) | Test on Retina display or Chrome DevDPR | No pixelation |

### Animation QA

| # | Check | Tool/Method | Pass Criteria |
|---|-------|-------------|--------------|
| 6 | Scroll animations fire at correct trigger points | GSAP `markers: true` in dev mode | Markers align with design spec |
| 7 | Pinned section pins and unpins cleanly | Scroll through on desktop, tablet, mobile | No jump, no stuck elements |
| 8 | No jank during scroll animation | Chrome DevTools > Performance > FPS | Consistent 60fps |
| 9 | Reduced-motion respects system setting | macOS: Reduce Motion ON, test site | All animations disabled |
| 10 | Hero video plays on desktop Chrome, Firefox, Safari | Manual test on each browser | Autoplay works, poster shows first |
| 11 | Hero video does NOT play on mobile | Test on iPhone/Android | Static poster image shown |

### Cross-Browser/Device QA

| # | Check | Tool/Method | Pass Criteria |
|---|-------|-------------|--------------|
| 12 | Chrome (latest) desktop | Manual test | All features work |
| 13 | Firefox (latest) desktop | Manual test | All features work |
| 14 | Safari (latest) desktop | Manual test or BrowserStack | All features work |
| 15 | iOS Safari (iPhone 13+) | Real device or BrowserStack | No scroll glitches |
| 16 | Android Chrome (Pixel 6+) | Real device or BrowserStack | No scroll glitches |
| 17 | Responsive at 375px (iPhone SE) | Chrome DevTools | No overflow, readable text |
| 18 | Responsive at 768px (iPad) | Chrome DevTools | Correct grid layout |
| 19 | Responsive at 1440px (desktop) | Chrome DevTools | Full layout, no stretch |

### Performance QA

| # | Check | Tool/Method | Pass Criteria |
|---|-------|-------------|--------------|
| 20 | Lighthouse Performance Score | Chrome Lighthouse (mobile) | ≥ 90 |
| 21 | Lighthouse Accessibility Score | Chrome Lighthouse | ≥ 95 |
| 22 | LCP < 2.5s | PageSpeed Insights (mobile) | Green |
| 23 | CLS < 0.1 | PageSpeed Insights | Green |
| 24 | INP < 200ms | Chrome UX Report / manual test | Green |
| 25 | Total transfer size (initial load) | Chrome DevTools > Network | < 3MB |

---

## 10. 14-Day Execution Roadmap

### Week 1: Foundation + Assets

| Day | Milestone | Deliverables |
|-----|-----------|-------------|
| **Day 1** | **Setup + Asset Directory** | Install `lenis`, `gsap`. Create `/public/media/` directory structure. Remove `scroll-behavior: smooth` from CSS. Create `animation-tokens.ts`, `useReducedMotion.ts`, `useIsMobile.ts`. Commit: "chore: animation foundation" |
| **Day 2** | **AI Photo Generation — Batch 1** | Generate photos P1–P6 (hero + product images) using Midjourney/DALL-E. Generate both safe + bold variants. Pick winners. Save raw outputs |
| **Day 3** | **AI Photo Generation — Batch 2 + Processing** | Generate photos P7–P12 (category, texture, lifestyle). Compress all winners: AVIF + WebP at spec sizes using sharp/squoosh. Name per convention. Place in `/public/media/` |
| **Day 4** | **AI Video Generation — Batch 1** | Generate videos V1, V2, V5, V8 (hero timelapse, sofa pan, curtain, lamp). Use Runway Gen-3 / Kling. Export 1080p originals |
| **Day 5** | **AI Video Generation — Batch 2 + Processing** | Generate videos V3, V4, V6, V7. Compress all: MP4 H.264 CRF 28 + WebM VP9 CRF 35 via ffmpeg. Extract poster frames as AVIF. Place in `/public/media/` |
| **Day 6** | **Smooth Scroll + Scroll Progress** | Implement `initSmoothScroll()` with Lenis+GSAP sync. Add `ScrollProgress.tsx` component. Replace all Unsplash URLs with local AI-generated images. Commit: "feat: smooth scroll + local media" |
| **Day 7** | **Review + Buffer** | Review all generated assets for brand alignment. Re-generate any that feel off. Test Lenis on mobile. Fix any scroll issues |

### Week 2: Animation + Polish + Launch

| Day | Milestone | Deliverables |
|-----|-----------|-------------|
| **Day 8** | **Hero Animation Upgrade** | Replace hero static image with video (desktop) / optimized image (mobile). Implement ken-burns CSS animation. Add hero stagger entrance with GSAP. Preload hero assets in `<head>`. Commit: "feat: cinematic hero" |
| **Day 9** | **Section Reveal Animations** | Convert all `whileInView` Framer Motion to GSAP ScrollTrigger for: Categories, FeaturedProducts, PromoBar, Newsletter. Keep Framer for hover/tap states. Commit: "feat: scroll-triggered reveals" |
| **Day 10** | **Pinned Room Storytelling** | Build `RoomStorytellingPinned.tsx`. Replace current `RoomInspiration.tsx` in `App.tsx`. Implement crossfade + text animation. Add reduced-motion fallback. Commit: "feat: pinned room storytelling" |
| **Day 11** | **Parallax + Hover + CTA** | Add parallax background layers (texture images) between sections. Implement card hover lift with Framer spring. Add CTA pulse glow animation. Commit: "feat: parallax + hover polish" |
| **Day 12** | **Accessibility Pass** | Add skip-to-content link. Add `<main>` landmark. Fix `aria-label` on newsletter input. Add `aria-hidden` on decorative elements. Focus-trap mobile menu. Test with screen reader (NVDA or VoiceOver). Commit: "a11y: accessibility pass" |
| **Day 13** | **Performance Optimization + QA** | Run Lighthouse audit. Fix any LCP/CLS/INP issues. Verify image sizes. Verify video poster strategy. Run cross-browser QA (Chrome, Firefox, Safari, iOS, Android). Fix bugs. Commit: "perf: optimization pass" |
| **Day 14** | **Final QA + Deploy** | Run full 25-point QA checklist. Record before/after video. Deploy to production (Vercel/Netlify). Monitor Core Web Vitals in Google Search Console. Commit: "release: v2.0 cinematic upgrade" |

---

## 11. Top 10 Mistakes to Avoid

| # | Mistake | Why It's Bad | What to Do Instead |
|---|---------|-------------|-------------------|
| 1 | **Using `scroll-behavior: smooth` alongside Lenis** | They fight each other — double-smoothing creates input lag and janky scroll | Remove `scroll-behavior: smooth` from CSS when using Lenis. Let Lenis own scroll entirely |
| 2 | **Loading hero video on mobile** | Mobile data is expensive in India. Auto-playing video on 4G burns data and delays LCP. Most mobile browsers block autoplay anyway | Serve static poster image on `<768px`. Use `useIsMobile()` to conditionally render `<video>` |
| 3 | **Not setting explicit `width`/`height` on images** | Browser can't reserve space → layout shift (CLS > 0.1). Google penalizes this | Every `<img>` gets `width` and `height` attributes matching the intrinsic size, plus CSS `aspect-ratio` |
| 4 | **Using `will-change` permanently** | Promotes elements to GPU layers forever, consuming VRAM. Multiple permanent layers = compositing overhead | Add `will-change: transform` only during active animation (GSAP `onEnter`/`onLeave` callbacks). Remove when idle |
| 5 | **Parallax on every section** | Looks like a 2016 WordPress theme. Users get motion-sick. Performance degrades with many parallax layers | Use parallax on max 2 sections (hero + 1 texture interstitial). Less is more |
| 6 | **Ignoring `prefers-reduced-motion`** | 30%+ of iOS users have this ON (many accidentally). Your cinematic site becomes a broken mess | Every GSAP timeline, Lenis init, and CSS animation checks this media query first. Provide static equivalents |
| 7 | **Using JPEG for all images** | AVIF is 50% smaller than JPEG at equal quality. WebP is 30% smaller. Not using modern formats wastes bandwidth | `<picture>` element with AVIF → WebP → JPEG fallback chain. Generate all three |
| 8 | **Autoplay video with sound** | Browsers block it. Users hate it. Instant bounce | All `<video>` must be `muted`. If you need sound, add a click-to-unmute button |
| 9 | **Scroll-jacking without escape** | Users trapped in pinned sections panic and leave. Especially on trackpads with inertial scroll | Always provide snap points so users can "break free". Keep pinned sections ≤ 300vh scroll distance. Disable pinning on mobile |
| 10 | **AI images that look AI-generated** | Viewers spot the artificial sheen immediately. It screams "cheap" — the opposite of premium | Generate many variants. Cherry-pick the most natural one. Post-process in Lightroom/Photoshop: add grain, adjust curves, desaturate slightly. Composite real texture overlays on AI bases |

---

## Appendix: Quick-Start Install Commands

```bash
# Navigate to project
cd "c:\Users\skous\Koushik AI Automation\websites\sass x1"

# Install animation dependencies
pnpm add lenis gsap

# Install image optimization tools (dev dependencies)
pnpm add -D sharp-cli

# Verify installation
pnpm ls lenis gsap
```

## Appendix: Navbar Scroll Listener Fix

Your current `Navbar.tsx` adds a new scroll listener on every render (no cleanup, no `useEffect`). Fix this:

```tsx
// BEFORE (broken — adds listener on every render):
if (typeof window !== "undefined") {
  window.addEventListener("scroll", () => {
    setScrolled(window.scrollY > 20);
  });
}

// AFTER (correct):
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ...rest of component
}
```

## Appendix: File Size Budget Summary

| Category | Count | Max Size Each | Total Budget |
|----------|-------|--------------|-------------|
| Hero images (desktop + mobile) | 4 files | 150KB / 60KB | ~420KB |
| Product images | 16 files (8 AVIF + 8 WebP) | 40KB | ~640KB |
| Category images | 10 files | 50KB | ~500KB |
| Room images | 6 files | 80KB | ~480KB |
| Texture images | 4 files | 60KB | ~240KB |
| Lifestyle images | 4 files | 50KB | ~200KB |
| Video posters | 6 files | 40KB | ~240KB |
| **Total images** | **50 files** | | **~2.7MB** (not all loaded at once) |
| **Initial load images** | ~8 files | | **< 500KB** |
| Hero video (MP4) | 1 | 800KB | 800KB |
| Hero video (WebM) | 1 | 600KB | 600KB |
| Other videos | 12 | 500KB avg | ~6MB (lazy loaded) |
| **JS bundle** | 1 | | **< 200KB gzip** |

---

*Generated for HËMMA — April 2026. Concept A ("Quiet Luxury") recommended.*
