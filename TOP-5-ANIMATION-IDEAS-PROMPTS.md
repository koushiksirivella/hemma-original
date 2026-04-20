# HËMMA — Top 5 Animation & Scroll Effect Ideas + AI Media Prompts

> Plan only. No code changes. All prompts are copy-paste ready for AI image/video generators.

---

## THE PLAN: 5 Cinematic Upgrades for HËMMA

| # | Effect | Where It Goes | Media Needed | Impact |
|---|--------|--------------|-------------|--------|
| 1 | **Hero Cinematic Video Loop** | Hero section background (replaces static Unsplash image) | 1 AI-generated video (8s loop) + 1 poster image | Immediate "wow" factor. Sets premium tone in first 2 seconds |
| 2 | **Parallax Texture Interstitial** | Between Categories and FeaturedProducts sections | 2 AI-generated texture images (wood grain + fabric weave) | Adds depth and tactile quality. Breaks up content blocks |
| 3 | **Room Storytelling Crossfade Sequence** | RoomInspiration section (scroll-pinned) | 3 AI-generated room interior images + 1 stop-motion video | Most dramatic upgrade. Users scroll through rooms like a magazine |
| 4 | **Product Hover Detail Videos** | FeaturedProducts cards (play on hover) | 4 AI-generated product detail videos (5s each) | Differentiator — no Indian furniture site does this |
| 5 | **Ambient Mood Section** | New section between PromoBar and Newsletter | 1 AI-generated atmospheric video (lamp glow, 6s loop) + 1 image | Creates emotional pause before newsletter CTA. Increases conversions |

---

## IDEA 1: Hero Cinematic Video Loop

### What It Is
Replace the static hero image with a slow, cinematic video of a living room where natural daylight shifts across the space over 8 seconds. The video loops seamlessly. On mobile, a high-quality static poster image is shown instead.

### Why It Works
- Hero is the first thing visitors see — video immediately signals "premium" over static images
- Daylight movement creates life without being distracting
- No camera movement = no motion sickness risk
- Seamless loop = no jarring restart visible

### Media Needed
1. **Video**: 8-second seamless loop, 1080p, no audio, locked-camera timelapse
2. **Poster Image**: Single best frame from the video, AVIF format

---

### Raw Prompt (Before Enhancement)

**Video prompt:**
> "A Scandinavian living room with daylight changing from morning to afternoon, 8 second timelapse loop, static camera, warm tones, no people"

**Image prompt (poster):**
> "Scandinavian living room with sofa and morning light through curtains, warm tones, wide shot"

---

### Enhanced Prompt (Prompt-Pro Applied)

#### Video Prompt — Enhanced

```
You are a senior cinematographer and AI video director specializing in architectural 
interior films, timelapse photography, and luxury brand visual content.

<context>
This video will serve as the hero background for HËMMA, a premium Scandinavian-Indian 
furniture ecommerce website. The target audience is urban Indian millennials (25–40) 
who value design sophistication. The video must feel like a high-end furniture brand 
film — think Aesop, Muji, or HAY brand videos. It replaces a static photo and is the 
FIRST thing visitors see, so it must establish premium quality in under 2 seconds.

Brand palette: cream (#FAF8F5), terracotta (#C4654A), sage green (#7C8C6E), 
charcoal (#1A1A1A), sand (#F0EBE3). The mood is "quiet luxury" — unhurried, 
warm, intentional, never flashy.
</context>

<objective>
Generate a single 8-second seamless looping video of a Scandinavian-minimalist 
living room where natural daylight slowly shifts from cool morning blue to warm 
afternoon gold — the only motion is the light itself.
</objective>

<requirements>
- Camera: Completely static wide shot, locked tripod, 24mm equivalent focal length, 
  eye-level perspective, slight left-of-center framing
- Scene contents: A low-profile modular sofa in warm grey linen (left side), light 
  oak hardwood floor with visible grain, one large fiddle leaf fig in a matte 
  terracotta pot (right side), sheer white linen curtains on a large window (left wall), 
  cream plastered walls, one small round oak side table with a single ceramic vase
- Light behavior: Morning cool-blue light (5500K) at start, transitioning smoothly to 
  warm afternoon golden light (3200K) by end. Window shadows from mullions travel 
  slowly across the floor from left to right. No harsh direct sunbeams
- Color: Earth tones only — cream, warm grey, light oak, terracotta accent, sage green 
  from the plant. No saturated colors, no neon, no cool grey
- Motion: ZERO camera movement. Zero object movement. Only light direction and color 
  temperature change. Dust particles visible in light shaft are acceptable
- Loop: Frame 1 and frame last must match seamlessly (same light position/color)
- Resolution: 16:9 aspect ratio, minimum 1080p
- Duration: Exactly 8 seconds
- Style reference: Kinfolk magazine interiors, CEREAL magazine photography, 
  Norm Architects interior films
</requirements>

<output_format>
Single video file. No cuts, no transitions, no text overlays, no watermarks.
</output_format>

Negative prompt: no people, no pets, no food, no text, no logos, no watermarks, 
no camera shake, no handheld look, no artificial colored lighting, no neon, 
no night scene, no rain, no dramatic weather, no HDR over-processing, no lens flare, 
no fish-eye distortion, no cartoon or illustration style, no multiple rooms

Before generating, verify: (1) the camera is perfectly static, (2) the only motion 
is light change, (3) the scene matches Scandinavian minimalism with Indian-warm color 
accents, (4) the loop point is seamless.
```

#### Poster Image Prompt — Enhanced

```
You are a senior interior photographer specializing in editorial furniture 
photography for luxury lifestyle magazines like Kinfolk, CEREAL, and Architectural 
Digest.

<context>
This image serves as the poster frame (fallback) for a hero background video on 
HËMMA, a premium Scandinavian-Indian furniture ecommerce site. It will be the first 
image mobile users see. It must be indistinguishable from a real editorial photograph 
— no AI artifacts, no uncanny smoothness. The brand conveys "quiet luxury" through 
earth tones and unhurried composition.
</context>

<objective>
Generate a single wide-shot photograph of a Scandinavian-minimalist living room 
bathed in soft morning daylight, capturing one frozen moment of the hero video's 
timelapse.
</objective>

<requirements>
- Camera: 24mm equivalent, f/2.8, eye-level, slight left-of-center composition
- Scene: Low modular sofa in warm grey linen (left), light oak floor, fiddle leaf 
  fig in terracotta pot (right), sheer linen curtains with soft morning light 
  filtering through (left wall), cream walls, one oak side table with ceramic vase
- Lighting: Soft diffused morning light (4500K, between cool and warm), gentle window 
  shadows on floor, no harsh sunbeams, lifted shadows (no crushed blacks)
- Color: Cream (#FAF8F5), warm grey, light oak, terracotta accent, sage green from plant
- Texture: Visible linen weave on sofa, oak wood grain on floor, plaster texture on 
  walls — this is what separates real from AI
- Mood: Calm, lived-in but tidy, magazine-editorial, approachable luxury
- Technical: 16:9 aspect ratio, 2400px wide minimum, no grain/noise, sharp focus 
  throughout (not shallow DOF)
- Style: Shot with Canon EOS R5, 24-70mm f/2.8 L III, natural light only
</requirements>

<output_format>
Single photographic image. No borders, no text, no watermarks, no collage.
</output_format>

Negative prompt: no people, no pets, no text, no logos, no watermarks, no dark rooms, 
no night scenes, no artificial lighting, no colored LED lights, no maximalist decor, 
no busy patterns, no HDR processing, no illustration style, no 3D render look, 
no plastic-looking surfaces, no perfectly symmetrical composition

Before generating, verify: (1) it looks like a real photograph not an AI render, 
(2) textures are visible and natural, (3) composition has intentional asymmetry, 
(4) colors stay within the brand palette.
```

**What was improved (Prompt-Pro analysis):**
- **Role**: Senior cinematographer / interior photographer with editorial specialization
- **Structure**: Context-first with brand palette, audience, and purpose BEFORE the task
- **Context**: Added WHY (first impression, mobile fallback), brand mood ("quiet luxury"), style references (Kinfolk, CEREAL)
- **Format**: Exact camera specs (24mm, f/2.8), color temperatures in Kelvin, pixel dimensions, duration
- **Reasoning**: Verification checklist at the end catches common AI generation failures
- **Negative prompt**: Expanded from generic to 20+ specific exclusions
- **ultrathink**: Not added — visual generation doesn't benefit from reasoning depth
- **Placeholders**: None — prompt is complete for HËMMA's specific brand

---

## IDEA 2: Parallax Texture Interstitial

### What It Is
Two full-width texture bands (wood grain + fabric weave) that sit between content sections. As the user scrolls, these images move at 0.3x scroll speed (parallax), creating depth. They're purely atmospheric — no text, no interaction needed.

### Why It Works
- Tactile textures reinforce "we make real furniture from real materials"
- Parallax at low intensity (0.3x) adds depth without causing motion sickness
- Breaks up the product-heavy page into breathing rooms
- Zero performance cost — static images with CSS `background-attachment: fixed`

### Media Needed
1. **Image 1**: Macro/close-up of oak wood grain, 16:9, warm tones
2. **Image 2**: Macro/close-up of linen fabric weave, 16:9, cream/sand tones

---

### Raw Prompts (Before Enhancement)

**Wood grain:**
> "Close up of oak wood grain texture, warm tones, side lighting"

**Fabric weave:**
> "Close up of linen fabric texture, cream colored, soft lighting"

---

### Enhanced Prompts (Prompt-Pro Applied)

#### Wood Grain Texture — Enhanced

```
You are an expert macro photographer specializing in material textures, 
product detail photography, and tactile visual storytelling for luxury 
furniture and interior design brands.

<context>
This macro texture image will be used as a full-width parallax background 
strip on a premium furniture ecommerce website (HËMMA). It sits between 
product sections and scrolls at 0.3x speed to create depth. The purpose 
is subliminal — it reinforces that HËMMA furniture is made from real, 
beautiful natural materials. Visitors should almost feel the wood grain 
when they see it. The brand aesthetic is "quiet luxury" with earth tones 
(cream, sand, terracotta, sage).

The image will be displayed at full viewport width (up to 2400px) but only 
~300px tall visible at a time (the rest scrolls behind). So the texture 
must be rich and interesting at every horizontal slice.
</context>

<objective>
Generate a single extreme macro photograph of natural European oak wood 
grain that communicates warmth, craftsmanship, and Scandinavian design 
heritage.
</objective>

<requirements>
- Subject: Natural European white oak wood grain — untreated or lightly 
  oiled finish showing natural color variation between heartwood (darker) 
  and sapwood (lighter)
- Camera: 100mm macro lens, f/8 for deep focus across the surface, 
  shot at approximately 30° angle to the wood surface (not directly overhead, 
  not flat — angled enough to catch shadow in the grain channels)
- Lighting: Hard raking light from the LEFT side at approximately 15° angle 
  to the surface. This creates shadow in every grain channel, making the 
  texture three-dimensional. Light color temperature: warm (3500K)
- Color: Honey-gold to warm amber range. No grey, no cool tones, no 
  orange-red. Think Swedish pine honey color
- Texture detail: Individual growth rings clearly visible. Medullary rays 
  (the small perpendicular flecks unique to oak) visible. Fine sanding marks 
  barely perceptible. Natural knot or grain swirl acceptable in one area
- Composition: Grain runs horizontally left-to-right (since the image will 
  be used as a horizontal band). No center focal point — the texture should 
  be uniformly interesting across the entire frame
- Resolution: 16:9 aspect ratio, minimum 2400px wide, tack-sharp focus
- Style reference: Material sample photography for Fritz Hansen, Carl Hansen 
  & Søn, or Fredericia furniture catalogs
</requirements>

<output_format>
Single photograph. No borders, no text, no vignette, no color grading filters.
</output_format>

Negative prompt: no furniture, no room, no hands, no tools, no sawdust, 
no painted or stained wood, no dark walnut, no reclaimed/distressed wood, 
no MDF or plywood, no visible screws or nails, no watermarks, no text, 
no illustration, no 3D render, no overhead flat-lay angle, no backlit, 
no colored lighting, no heavy post-processing

Before generating, verify: (1) the grain runs horizontally, (2) shadow from 
raking light is visible in grain channels, (3) color is warm honey-gold not 
grey or orange, (4) the texture is uniformly detailed across the full frame 
with no empty areas.
```

#### Linen Fabric Weave — Enhanced

```
You are an expert textile photographer specializing in material close-ups 
for luxury fashion and interior design brands, with expertise in capturing 
fabric texture and weave structure.

<context>
This macro texture image will be used as a full-width parallax background 
strip on HËMMA, a premium Scandinavian-Indian furniture ecommerce website. 
It pairs with a wood grain texture image — together they create a 
"materials" motif that subtly tells visitors: "our furniture is made from 
real, beautiful materials you want to touch." The image scrolls at 0.3x 
parallax speed, displayed at full viewport width but only ~300px tall 
visible at a time.

Brand colors: cream (#FAF8F5), sand (#F0EBE3). The fabric should feel 
like the upholstery on HËMMA's sofa collection — natural, breathable, 
Scandinavian in character but with warmth.
</context>

<objective>
Generate a single extreme macro photograph of natural linen fabric weave 
in cream/sand tones that communicates softness, quality craftsmanship, 
and Scandinavian textile heritage.
</objective>

<requirements>
- Subject: European linen (flax) fabric in a plain weave or twill weave 
  pattern. Color: natural unbleached linen — cream to light sand, with 
  subtle color variation between warp and weft threads (some threads 
  slightly darker/warmer than others)
- Camera: 100mm macro lens, f/5.6 (slightly shallower than wood — fabric 
  benefits from gentle foreground/background softness), shot at approximately 
  20° angle to the fabric surface
- Lighting: Soft diffused overhead light (like a large softbox) with a 
  subtle fill from below to lift shadows in the weave valleys. Light 
  temperature: neutral-warm (4000K). No colored light
- Texture detail: Individual linen threads clearly visible — including the 
  characteristic slight irregularity of linen threads (thicker and thinner 
  sections). Weave crossover points visible. The texture should have subtle 
  "slub" character (small natural bumps in the thread) that proves it's 
  real linen, not synthetic
- Composition: Weave pattern runs at a very slight diagonal (2–3° off 
  horizontal) — this prevents visual moiré when displayed on screen and 
  adds dynamic energy. Texture uniformly interesting across entire frame
- Color: Cream (#FAF8F5) to sand (#F0EBE3) range. No white, no grey, 
  no yellow. Warm neutral only
- Resolution: 16:9 aspect ratio, minimum 2400px wide, sharp focus on 
  center with gentle softness at edges
- Style reference: Fabric detail photography for Kvadrat textiles, 
  Dedar Milano, or Romo fabrics catalog
</requirements>

<output_format>
Single photograph. No borders, no text, no vignette, no heavy color grading.
</output_format>

Negative prompt: no furniture, no room context, no hands, no sewing, 
no wrinkled/crumpled fabric, no patterned fabric (no stripes, no checks), 
no synthetic sheen, no silk, no velvet, no cotton jersey, no watermarks, 
no text, no illustration, no 3D render, no flat overhead angle, no colored 
lighting, no heavy shadows

Before generating, verify: (1) individual threads are visible at macro level, 
(2) the color is cream-to-sand not white or grey, (3) the weave has natural 
linen character (slight irregularity), (4) the slight diagonal prevents 
moiré patterns.
```

**What was improved (Prompt-Pro analysis):**
- **Role**: Macro photographer specializing in material textures for luxury brands
- **Structure**: Context explains the parallax usage, display dimensions (2400px wide × 300px visible), and pairing with the other texture
- **Context**: WHY = subliminal "real materials" messaging; brand palette with exact hex codes
- **Format**: Exact camera specs (100mm macro, f/8), lighting angle (15° raking), color temperature (3500K), and composition direction (grain horizontal)
- **Reasoning**: Verification catches critical issues — moiré prevention, grain direction for horizontal display
- **Negative prompt**: 20+ specific exclusions including materials that look similar but wrong (MDF, synthetic, silk)
- **ultrathink**: Not added — image generation task
- **Placeholders**: None — fully specified for HËMMA

---

## IDEA 3: Room Storytelling Crossfade Sequence

### What It Is
The RoomInspiration section becomes a full-screen pinned scroll experience. As users scroll, the viewport stays fixed while 3 room images crossfade (living room → bedroom → workspace), each with text that fades in. After all 3, the section unpins and normal scrolling resumes.

### Why It Works
- Creates a magazine-editorial "page turn" feel that furniture brands like HAY and Vipp use
- User controls the pace via scroll — no autoplay timing to fight
- The pinned section concentrates attention on each room for 2–3 seconds
- The stop-motion assembly video in one slot adds kinetic energy and surprise

### Media Needed
1. **Image 1**: Minimal living room interior (wide, editorial quality)
2. **Image 2**: Cozy bedroom interior (warm, intimate)
3. **Image 3**: Creative workspace (clean, productive)
4. **Video**: Stop-motion room assembly (overhead, 10s)

---

### Raw Prompts (Before Enhancement)

**Living room:**
> "Minimal Scandinavian living room, wide shot, natural light, warm tones"

**Bedroom:**
> "Cozy Scandinavian bedroom, warm light, linen bedding, side angle"

**Workspace:**
> "Clean modern workspace with wooden desk, good lighting, plants"

**Stop-motion video:**
> "Overhead view of furniture appearing one by one in a room, stop motion style"

---

### Enhanced Prompts (Prompt-Pro Applied)

#### Room 1: Minimal Living Room — Enhanced

```
You are an award-winning interior photographer whose work appears in Kinfolk, 
Cereal, and Architectural Digest, specializing in Scandinavian residential 
interiors with natural light.

<context>
This photograph is the FIRST of a three-image scroll-based crossfade sequence 
on HËMMA's website. Users see this image fullscreen (100vh × 100vw) while 
scrolling through a pinned section. It must work as a standalone hero AND 
transition smoothly to the next image (a bedroom). The brand is a premium 
Scandinavian-Indian furniture company targeting urban Indian millennials.

This image represents "Minimal Living" — the intersection of Scandinavian 
restraint and Indian warmth. It should feel aspirational but achievable — 
not a museum, but not messy either. A home you'd actually want to live in.

Brand palette: cream (#FAF8F5), terracotta (#C4654A), sage (#7C8C6E), 
charcoal (#1A1A1A), sand (#F0EBE3).
</context>

<objective>
Generate a single editorial-quality photograph of a Scandinavian-minimalist 
living room that feels warm, lived-in, and aspirational — suitable for 
full-screen display on a furniture ecommerce website.
</objective>

<requirements>
- Camera: 28mm wide angle, f/4, eye-level, shot from the room entrance looking 
  in (inviting the viewer to enter), slight asymmetric composition (rule of thirds)
- Scene layout: Low-profile sofa in warm grey linen (positioned left-of-center), 
  round oak coffee table with a single book and ceramic cup, large woven jute rug 
  in sand tone covering 60% of floor, floor lamp with linen shade in one corner 
  (not lit — this is a daylight scene), single piece of abstract minimal art on 
  the wall (earth tones), fiddle leaf fig plant near the window
- Architecture: High ceilings (3m+), one large window on the right wall with sheer 
  linen curtains, cream plastered walls with visible plaster texture, light oak 
  herringbone floor
- Lighting: Late morning natural light (10am feel), soft and diffused through 
  curtains. No artificial light. Warm color temperature (4000K). Gentle shadows 
  on floor from furniture — not harsh
- Color: Predominantly cream and sand base with terracotta accent (a cushion or 
  the art) and sage green from the plant. No blue, no pure white, no black
- Mood: "A Sunday morning with nothing to do." Calm, quiet, warm
- Composition: Enough negative space on the walls and ceiling that overlaid text 
  (white color) would be readable — anticipate text overlay in the center-lower third
- Resolution: 16:9 aspect ratio, minimum 2400px wide, full-room sharp focus
- Style: Photographed by Jonas Bjerre-Poulsen (Norm Architects) or Frederik Vercruysse
</requirements>

<output_format>
Single photograph. Full room visible. No borders, no text, no split-screen.
</output_format>

Negative prompt: no people, no pets, no children's toys, no TV screens, no visible 
electronics, no bright colored furniture, no maximalist decor, no industrial style, 
no exposed brick, no concrete ceiling, no dark rooms, no night scenes, no artificial 
colored lighting, no HDR, no watermarks, no text, no illustration, no 3D render, 
no fish-eye distortion, no heavy vignette

Before generating, verify: (1) the room feels warm not cold/sterile, (2) there's 
clear negative space for text overlay, (3) colors stay within the brand palette, 
(4) it looks like a real interior photograph not a render.
```

#### Room 2: Cozy Bedroom — Enhanced

```
You are an award-winning interior photographer specializing in editorial bedroom 
photography for luxury lifestyle magazines, known for capturing intimacy and 
warmth in residential spaces.

<context>
This is image 2 of 3 in a scroll-based crossfade sequence on HËMMA's website. 
It transitions FROM a living room (bright, airy, morning light) TO this bedroom 
(warmer, more intimate, golden hour). The crossfade must feel natural — the 
light should be warmer than image 1 to create visual progression. This image 
represents "Cozy Bedroom" — sanctuary, rest, textile richness.

The user sees this full-screen (100vh). White text reading "Cozy Bedroom" and 
"A sanctuary for rest and rejuvenation" will overlay the center-bottom area.
</context>

<objective>
Generate a single editorial photograph of a warm, intimate Scandinavian bedroom 
that feels like a sanctuary — softer and warmer than a typical Scandinavian 
space, with Indian-inspired textile warmth.
</objective>

<requirements>
- Camera: 35mm, f/2.8, eye-level, shot from the foot of the bed looking toward 
  the headboard wall. Slight left framing — the bed is not perfectly centered
- Scene: Low wooden platform bed in light walnut or warm oak, dressed with 
  rumpled (not pristine) off-white linen duvet and sheets, 3–4 pillows in 
  cream and one in muted terracotta. A light-weight woven throw blanket in 
  sage green draped across the foot of the bed. One bedside table (light oak) 
  with a ceramic table lamp (warm amber shade, lamp ON and glowing), a small 
  book, and a dried eucalyptus sprig in a bud vase
- Architecture: Medium ceiling height, one window to the right with heavy 
  linen curtains in sand color (partially drawn), cream walls
- Lighting: Golden hour light filtering through the curtain (warm, 3000K) 
  PLUS the bedside lamp creating a small pool of amber light. The room is 
  warm and slightly dim — not dark, but intimate. Shadows are soft and warm
- Color: Cream, warm oak, terracotta accent pillow, sage throw, amber lamp 
  glow. Overall warmer and more intimate than the living room photo
- Mood: "You just woke up and have nowhere to be." Unhurried, cozy, safe
- Texture: Visible linen texture on bedding (rumpled creases catch light), 
  visible wood grain on bed frame and nightstand, woven texture on throw blanket
- Composition: Clear negative space in the upper portion of the image for 
  white text overlay
- Resolution: 16:9, 2400px wide minimum
</requirements>

<output_format>
Single photograph. No collage, no borders, no text, no watermarks.
</output_format>

Negative prompt: no people, no pets, no made-up hotel-style bed, no bright 
overhead lighting, no cool blue tones, no modern minimalist all-white room, 
no visible closet or clothing, no electronics, no alarm clock showing time, 
no watermarks, no text, no illustration, no 3D render

Before generating, verify: (1) the bed looks slept-in (rumpled) not hotel-perfect, 
(2) the lamp is ON and visibly glowing amber, (3) the room is warmer in tone 
than a typical Scandinavian bedroom, (4) textures (linen, wood, woven throw) 
are visible and tactile.
```

#### Room 3: Creative Workspace — Enhanced

```
You are an editorial interior photographer specializing in home office and 
creative workspace photography for design-forward publications like Monocle, 
Wallpaper*, and Dezeen.

<context>
This is image 3 of 3 (final image) in a scroll-based crossfade sequence. 
It transitions FROM a warm bedroom TO this workspace — the energy shifts from 
rest to productive calm. The light should be brightest and most even of the 
three images (morning, focused, clarity). This image represents "Creative 
Workspace" — where ideas take shape with beautiful tools.

After this image, the pinned section releases and normal scrolling resumes. 
This is the last "impression" of the storytelling sequence, so it should 
feel forward-looking and energizing (but calm, not chaotic).
</context>

<objective>
Generate a single editorial photograph of a clean, design-forward home 
workspace that feels productive, calm, and creatively inspiring — using 
Scandinavian furniture with Indian warmth.
</objective>

<requirements>
- Camera: 35mm, f/3.5, slightly above eye level (looking down 10° at the 
  desk surface), shot from the chair's perspective (as if the viewer just 
  sat down to work)
- Scene: Walnut or oak writing desk (clean, minimal — not a gaming desk) 
  with a closed laptop (thin, silver — generic, no brand visible), a small 
  potted monstera plant, a ceramic pen holder with 2–3 pencils, one small 
  open notebook with blank/cream pages. An ergonomic chair in light grey 
  mesh pushed slightly back from the desk. One floating shelf above the 
  desk with 3–5 books (neutral spines) and a small ceramic object
- Architecture: Clean wall behind the desk in cream or very light sage 
  green. Window to the LEFT providing bright even light. Light oak or 
  white-stained wood floor
- Lighting: Bright, even, high-quality daylight (noon equivalent, 5000K) 
  streaming from the left window. Clean shadows. This should feel alert 
  and clear — the most energized of the three rooms
- Color: Cream walls, walnut/oak desk, grey chair, green plant accent, 
  warm wood floor. Cleaner and slightly cooler than the bedroom but still warm
- Mood: "The best morning of work you ever had." Focused, inspired, tidy
- Composition: Desk occupies lower 60% of frame. Wall and shelf in upper 40%. 
  Clear space in upper-center for white text overlay
- Resolution: 16:9, 2400px wide minimum
</requirements>

<output_format>
Single photograph. No collage, no borders, no text, no split-screen.
</output_format>

Negative prompt: no people, no gaming setup, no RGB lighting, no visible 
brand logos on devices, no multiple monitors, no messy cables, no dark room, 
no night scene, no artificial colored lighting, no maximalist desk, no 
stickers on laptop, no watermarks, no text, no illustration, no 3D render

Before generating, verify: (1) the desk is clean but not sterile — 3–5 objects 
max, (2) lighting is the brightest of the three rooms, (3) no brand logos 
visible on any device, (4) the plant adds the only color pop.
```

#### Stop-Motion Room Assembly Video — Enhanced

```
You are a senior motion designer and stop-motion animation director 
specializing in product reveal sequences and spatial storytelling for 
furniture and interior design brands.

<context>
This 10-second video plays inside the scroll-pinned room storytelling 
section on HËMMA's website — it's an alternative to one of the static 
room images and adds kinetic energy and surprise to the sequence. The 
concept: an empty room seen from directly overhead, and furniture pieces 
appear one by one in stop-motion style, "building" a complete living room 
in 10 seconds. It should feel playful but premium — like a furniture 
brand's Instagram Reel, not a children's animation.

The brand tone is "quiet luxury" — the stop-motion should be clean and 
precise, not chaotic. Each piece settles with a subtle elastic bounce 
(overshoot + settle), not a hard cut.
</context>

<objective>
Generate a 10-second stop-motion style video showing a living room being 
"assembled" piece by piece from an overhead top-down perspective.
</objective>

<requirements>
- Camera: Locked overhead (bird's eye / top-down), looking straight down 
  at the floor. No camera movement or rotation throughout
- Scene: Start with an empty room — light oak herringbone floor, cream 
  walls visible as thin borders at the edges
- Assembly sequence (in order, ~1.5s per piece):
  1. A woven jute rug slides in from below and settles center
  2. A sofa (seen from above as a rectangular grey shape) slides in from 
     left and settles on the rug
  3. A round oak coffee table appears (pops in with a small bounce)
  4. A floor lamp (seen as a circular shade from above) appears in the 
     top-right corner
  5. A potted plant (circular terracotta pot with green foliage) appears 
     in the top-left corner
  6. Two small accent cushions (one terracotta, one sage) drop onto the sofa
  7. A small book and ceramic cup appear on the coffee table
- Motion: Each piece enters with a different but consistent animation — 
  slides, pops, or drops — all with a subtle elastic overshoot and settle 
  (think iOS app icon animation). No harsh cuts. 200ms settle per piece
- Timing: 7 seconds for assembly, 3 seconds of the completed room held static
- Lighting: Even, shadowless overhead light (studio-like). No dramatic shadows 
  that would complicate the top-down read
- Color: Match HËMMA palette — cream floor, grey sofa, terracotta + sage 
  accents, warm oak table, green plant
- Style: Clean, satisfying, IKEA assembly video meets Apple product reveal. 
  Premium but approachable
- Resolution: 16:9, 1080p minimum, no audio needed
</requirements>

<output_format>
Single video file. No text overlays, no titles, no music, no watermarks.
</output_format>

Negative prompt: no people, no hands assembling furniture, no realistic 
physics (items don't fall or tumble — they animate in cleanly), no dark 
background, no colored background, no 3D room (must be flat top-down view), 
no cartoon style, no outlined illustration, no fast chaotic movement

Before generating, verify: (1) the camera is perfectly top-down (overhead), 
(2) each piece has a subtle bounce/settle animation, (3) the color palette 
matches HËMMA's brand, (4) the final composed room is held for 3 full seconds.
```

**What was improved:**
- **Role**: Cinematographer, interior photographer, motion designer — each matched to the specific media type
- **Structure**: Each prompt explains the crossfade sequence position (1 of 3, 2 of 3, 3 of 3) and how lighting/mood progresses
- **Context**: Transition logic (bright → warm → energized), text overlay requirements (negative space), brand mood per room
- **Format**: Exact camera angles, color temperatures, piece-by-piece assembly timeline with timing
- **Reasoning**: Verification checks catch the most common failures per media type
- **ultrathink**: Not added
- **Placeholders**: None

---

## IDEA 4: Product Hover Detail Videos

### What It Is
When users hover over a product card in the FeaturedProducts grid, a 5-second detail video plays silently — showing texture, craftsmanship, and material quality. On mobile, these play on tap-and-hold.

### Why It Works
- No Indian furniture site does this — instant differentiator
- Shows material quality that photos can't (fabric movement, wood reflection changes)
- Creates a "discovery moment" that increases time-on-page
- Short (5s) = low data cost, high impact

### Media Needed
4 product detail videos for the top 4 products:
1. STRÖM Sofa — fabric texture pan
2. BJÖRK Table — wood grain close-up with light play
3. DRÖM Bed — linen sheets movement
4. MOLN Chair — mesh material + mechanism detail

---

### Raw Prompts (Before Enhancement)

> "Close up video of sofa fabric texture, 5 seconds, slow pan"
> "Close up of wooden table surface with light moving across it"
> "Linen bedding sheets moving slightly in breeze"
> "Office chair mesh detail with subtle rotation"

---

### Enhanced Prompts (Prompt-Pro Applied)

#### Product Video 1: STRÖM Sofa Fabric — Enhanced

```
You are a luxury product film director specializing in tactile detail 
shots for high-end furniture and fashion brands, with expertise in macro 
cinematography and material storytelling.

<context>
This 5-second video plays on hover over the STRÖM Modular Sofa product 
card on HËMMA's website. It replaces the static product image temporarily, 
creating a "peek into the material" moment. The video must instantly 
communicate fabric quality — the kind of close-up that makes viewers 
want to reach through the screen and touch. This is the brand's bestselling 
sofa (₹42,990), and this video helps justify the price by showing 
craftsmanship up close.

The sofa is upholstered in warm grey linen bouclé fabric.
</context>

<objective>
Generate a 5-second slow-motion macro video panning across warm grey 
linen bouclé sofa upholstery, revealing texture, stitch quality, and 
material richness.
</objective>

<requirements>
- Camera: Slow horizontal tracking shot (left to right), 85mm macro 
  equivalent, shallow depth of field (f/2.8), approximately 15cm from 
  the fabric surface
- Scene sequence (5 seconds total):
  - 0–2s: Camera glides across flat seat cushion surface — bouclé loops 
    visible in sharp focus with background cushion seam softly blurred
  - 2–3.5s: Camera reaches the cushion edge — focus racks to reveal a 
    clean double-stitch seam line
  - 3.5–5s: Camera continues to the armrest curve — showing how the 
    fabric wraps and stretches slightly over the padding
- Motion: Constant ultra-slow horizontal pan speed. No acceleration, 
  no deceleration. Feels like the camera is floating
- Lighting: Soft warm side light from the left (3500K), creating gentle 
  shadow in the bouclé texture loops. No harsh highlights. The light should 
  make every loop cast a tiny shadow — this is what makes fabric look real
- Color: Warm grey (#A9A39B) fabric with slight warm undertone. No cool 
  grey, no blue tint
- Texture: Individual bouclé loops clearly visible. Thread density visible. 
  Fabric should NOT look flat or synthetic — the slight irregularity of 
  natural fiber is key
- Audio: None (muted autoplay)
- Resolution: 3:4 portrait aspect ratio (matches product card), 1080p, 
  5 seconds exactly
</requirements>

<output_format>
Single video file. Portrait orientation. No text, no watermarks, no borders.
</output_format>

Negative prompt: no people, no hands, no full sofa visible, no room context, 
no colored lighting, no fast movement, no zoom, no camera shake, no flat 
synthetic-looking fabric, no perfectly uniform texture, no dark/moody lighting, 
no watermarks

Before generating, verify: (1) individual bouclé loops are visible and cast 
micro-shadows, (2) the pan speed is ultra-slow and constant, (3) the focus 
rack at 2s is smooth not jarring, (4) aspect ratio is portrait 3:4.
```

#### Product Video 2: BJÖRK Table Wood — Enhanced

```
You are a macro cinematographer specializing in material beauty shots for 
Scandinavian design brands, with expertise in capturing natural wood surfaces 
with cinematic light play.

<context>
This 5-second video plays on hover over the BJÖRK Oak Dining Table product 
card (₹28,990, highest-rated product at 4.9 stars). The video must make 
the oak surface look alive — showing how light interacts with the grain, 
creating depth and warmth. It should trigger the same "I want to touch 
that" response as the sofa video, but through light reflection rather 
than texture.
</context>

<objective>
Generate a 5-second macro video of light slowly moving across an oak 
dining table surface, revealing wood grain depth and natural beauty.
</objective>

<requirements>
- Camera: Static close-up shot (no camera movement), 100mm macro, f/4, 
  approximately 20cm above the oak surface at a 30° angle
- Motion: A single soft warm light source slowly moves from right to left 
  across the frame over 5 seconds (as if clouds are passing outside a 
  window). The light movement reveals different grain depths — some grain 
  channels catch light first, then the flat surfaces
- Surface: Natural European white oak with a matte oiled finish (not glossy, 
  not raw). Visible growth rings, medullary rays (small perpendicular flecks), 
  and one subtle natural color variation from heartwood to sapwood
- Lighting: One soft directional light (warm, 3500K) that moves slowly. 
  As the light angle changes, the wood grain appears to "shift" in depth — 
  this is the chatoyance effect that makes real wood beautiful
- Color: Honey-gold to warm amber. No grey, no orange, no yellow
- Duration: Exactly 5 seconds, loopable (light position at frame 1 and 
  frame last should be similar enough for a smooth loop)
- Resolution: 3:4 portrait aspect ratio, 1080p
</requirements>

<output_format>
Single video file. Portrait orientation. No text, no watermarks.
</output_format>

Negative prompt: no hands, no full table visible, no room context, no plates 
or food, no overhead flat shot, no fast light movement, no colored lighting, 
no glossy/lacquered surface, no dark walnut, no painted wood, no watermarks

Before generating, verify: (1) the light movement is slow and smooth (5 seconds 
for full traverse), (2) wood grain depth changes as light moves (chatoyance 
effect visible), (3) the surface is matte oiled not glossy, (4) portrait 3:4 ratio.
```

#### Product Video 3: DRÖM Bed Linen — Enhanced

```
You are a textile and interiors cinematographer specializing in slow-motion 
fabric movement for luxury bedding and lifestyle brands.

<context>
This 5-second video plays on hover over the DRÖM Platform Bed product card 
(₹18,990). The concept: a gentle breeze causes linen bed sheets to move 
slightly — a single, subtle breath of movement that communicates softness 
and natural fiber quality. It should feel ASMR-like — calming and sensory.
</context>

<objective>
Generate a 5-second close-up video of linen bedding on a platform bed 
gently rippling from a soft breeze, revealing fabric weight and texture.
</objective>

<requirements>
- Camera: Medium close-up, 50mm, f/2.8, shot from slightly above (30° angle 
  looking down at the bed surface), static camera — no movement
- Scene: Off-white/cream linen duvet surface with visible rumpled folds and 
  creases. One fold edge catches the light. A small section of the wooden 
  bed frame (light oak) visible at the very bottom edge of frame
- Motion: A very gentle breeze causes the linen to ripple slowly — just the 
  top surface undulates slightly, like breathing. The movement is almost 
  imperceptible at first, then a single gentle wave travels across the fabric 
  and settles. One cycle over 5 seconds
- Lighting: Soft warm morning light from the right side (3500K), creating 
  gentle highlights on the fold ridges and soft shadows in the valleys. 
  The light makes the linen texture glow slightly
- Texture: Linen weave clearly visible — the characteristic slightly coarse 
  but soft texture. Natural fiber irregularity visible. Not smooth like silk 
  or cotton sateen
- Color: Off-white to cream (#FAF8F5), slight warm cast. The wooden bed 
  frame edge is light oak (#D4A373)
- Duration: 5 seconds, loopable
- Resolution: 3:4 portrait, 1080p
</requirements>

<output_format>
Single video. Portrait. No text, no watermarks.
</output_format>

Negative prompt: no people, no full bed visible, no pillows, no bedroom 
context, no colored bedding, no heavy wind (just a breath of movement), 
no flat-lay overhead shot, no dark room, no watermarks, no patterned fabric

Before generating, verify: (1) the fabric movement is subtle — a single 
gentle ripple not a windstorm, (2) linen weave texture is visible, 
(3) the cream color matches #FAF8F5 not pure white, (4) portrait 3:4 ratio.
```

#### Product Video 4: MOLN Chair Mesh — Enhanced

```
You are a product film director specializing in material and mechanism 
detail shots for ergonomic furniture and premium office equipment brands.

<context>
This 5-second video plays on hover over the MOLN Ergonomic Chair card 
(₹15,990, on sale from ₹19,990). The chair's selling point is its mesh 
material — breathable, durable, and well-engineered. The video should 
communicate precision engineering and material quality, distinct from 
the "natural/warm" tone of the other product videos. This one can feel 
slightly more technical and modern.
</context>

<objective>
Generate a 5-second detail video of an ergonomic chair's mesh back surface, 
showing the material's engineering quality and light-filtering properties.
</objective>

<requirements>
- Camera: Starts as close-up of mesh surface (macro, individual mesh cells 
  visible), then slowly pulls back over 5 seconds to reveal the chair back's 
  curved silhouette (still close — never the full chair)
- Mesh material: Grey performance mesh stretched taut over a dark frame. 
  Individual mesh cells are hexagonal or diamond-shaped. Material is slightly 
  translucent — light passes through from behind
- Motion: Slow constant zoom-out (dolly back), plus a very subtle rack 
  focus from the mesh cells (sharp) to the overall curved shape (sharp). 
  No rotation, no handheld shake
- Lighting: Clean backlight from behind the chair creating a rim light 
  effect around the mesh edge and showing translucency through the mesh 
  cells. Plus a soft fill from the front. Cool-neutral light (5000K) — 
  this is the ONE video that skews slightly cooler to communicate 
  "engineered/technical" vs the warm tone of other products
- Color: Light grey mesh, dark graphite frame peeking through. Cool neutral 
  tones acceptable here — contrasts with the warm palette of other products 
  to signal "this is an engineered product"
- Duration: 5 seconds, loopable
- Resolution: 3:4 portrait, 1080p
</requirements>

<output_format>
Single video. Portrait. No text, no watermarks.
</output_format>

Negative prompt: no people, no full chair visible, no office context, no desk, 
no computer, no colored mesh, no fast zoom, no handheld camera shake, no dark 
room, no watermarks

Before generating, verify: (1) individual mesh cells are visible in the opening 
macro, (2) backlight creates translucency through the mesh, (3) the zoom-out 
is smooth and constant speed, (4) portrait 3:4 ratio.
```

**What was improved:**
- **Role**: Different specialist for each material type (fabric, wood, textile, technical)
- **Structure**: Each prompt explains hover behavior, product price (justifying quality), and how this video relates to the others
- **Context**: "I want to touch that" goal stated explicitly; contrast between warm (3 products) and cool (chair) deliberately designed
- **Format**: Per-second timeline (0–2s, 2–3.5s, 3.5–5s), exact distances (15cm from surface), color temp in Kelvin
- **Reasoning**: Verification targets the most common AI video failures per material type
- **ultrathink**: Not added
- **Placeholders**: None

---

## IDEA 5: Ambient Mood Section (Lamp Glow)

### What It Is
A new narrow (50vh) ambient section between PromoBar and Newsletter. Dark background. A video of a floor lamp slowly turning on, warm glow filling a room corner. One line of text: *"Every piece tells a story."* No CTA, no buttons — pure emotional pause.

### Why It Works
- Creates an emotional "exhale" moment before the Newsletter CTA
- Dark background contrasts with the light Newsletter section — makes the transition dramatic
- The lamp glow video is inherently calming and evocative
- Visitors in an emotional state convert better on the immediately-following Newsletter signup

### Media Needed
1. **Video**: Lamp glow — 6-second loop, dark room → warm light reveal
2. **Poster image**: Single frame of the fully-lit lamp (fallback)

---

### Raw Prompts (Before Enhancement)

**Video:**
> "Floor lamp turning on in a dark room, warm glow, slow reveal, 6 seconds loop"

**Poster image:**
> "Floor lamp lit in a dark room corner, warm amber glow, moody"

---

### Enhanced Prompts (Prompt-Pro Applied)

#### Lamp Glow Video — Enhanced

```
You are a cinematic lighting designer and short-film director specializing 
in single-light-source atmospheric shots for luxury interiors and hospitality 
brands, with a visual style influenced by Roger Deakins and Emmanuel Lubezki.

<context>
This 6-second looping video sits in a dedicated "mood" section between two 
content-heavy sections on HËMMA's furniture website. Its ONLY purpose is 
emotional: to create a moment of calm and intimacy before the user encounters 
a newsletter signup form. No product is being sold here. The section has a 
dark background with this video and a single line of white text: 
"Every piece tells a story."

The video concept: a dark room corner. A floor lamp slowly turns on, and its 
warm amber glow gradually reveals furniture textures around it — the arm of 
a leather reading chair, the spine of a book, wood grain on a side table. 
It's a "coming home" moment compressed into 6 seconds.

This must feel cinematic — like a frame from a Terrence Malick or Wong Kar-wai 
film. Not a product shot. An emotion shot.
</context>

<objective>
Generate a 6-second atmospheric video of a floor lamp slowly illuminating a 
dark room corner, revealing furniture textures in warm amber light — creating 
an intimate "coming home" emotional moment.
</objective>

<requirements>
- Camera: Static medium-wide shot, 35mm, f/2.0 (shallow DOF — focus on the 
  lamp shade, chair arm and book softly blurred), low angle (camera 60cm from 
  floor, tilted slightly up toward the lamp). No camera movement at all
- Scene composition: 
  - CENTER-LEFT: A sculptural arc floor lamp with a matte black arm and brass 
    inner shade. The shade is angled downward
  - LOWER-RIGHT: The curved arm of a leather reading chair (dark cognac/brown), 
    only partially visible
  - FAR-RIGHT: A small oak side table with 2–3 stacked books (neutral earth-tone 
    covers)
  - BACKGROUND: Dark, indistinct — a wall and possibly a bookshelf, all very 
    dark and out of focus
- Light sequence (6 seconds):
  - 0–0.5s: Complete darkness. Just barely perceptible shapes
  - 0.5–2.5s: Lamp filament begins to glow. Faint warm amber light appears. 
    The brass inner shade starts catching light first
  - 2.5–4.5s: Lamp reaches full brightness. Warm pool of light illuminates 
    the chair arm (leather texture revealed), book spines (titles unreadable), 
    and table surface (oak grain visible). Everything outside the pool stays dark
  - 4.5–6s: Stable. Full warm glow held. Then subtle dim begins (for loop point)
- Lighting: The lamp is the SOLE light source. No fill light. No ambient light. 
  Pure chiaroscuro. Light color: warm amber (2700K Edison bulb equivalent). 
  The light should be a POOL — bright under the shade, falling off rapidly 
  into darkness
- Color: Dark charcoal (#1A1A1A) room. Warm amber light (#FFB347 equivalent). 
  Cognac leather chair. Oak wood. Earth tones only within the light pool
- Mood: "You just came home after a long day. This lamp is waiting for you." 
  Intimate, quiet, warm, safe
- Duration: Exactly 6 seconds, seamless loop (dim→bright→dim→repeat)
- Resolution: 16:9, 1080p, no audio
</requirements>

<output_format>
Single video. Landscape 16:9. No text, no watermarks, no borders.
</output_format>

Negative prompt: no people, no daylight, no multiple light sources, no overhead 
lights, no cool-white LED, no modern table lamp (must be a floor arc lamp), 
no TV screen glow, no candles, no fireplace, no colored lighting, no fast 
on/off switch (must be gradual), no camera movement, no zoom, no watermarks, 
no neon, no harsh shadows

Before generating, verify: (1) the room starts in near-complete darkness, 
(2) the lamp is the ONLY light source, (3) the light reveal is gradual 
(2+ seconds to reach full brightness), (4) textures (leather, wood, book 
spines) become visible only when the light reaches them, (5) the loop 
point (end → start) is smooth.
```

#### Lamp Glow Poster Image — Enhanced

```
You are a fine art interior photographer specializing in chiaroscuro 
single-light-source compositions for luxury interiors and hospitality 
editorials, inspired by Dutch Golden Age painting and modern cinematic 
stills.

<context>
This still image is the poster/fallback for the lamp glow video. It shows 
the lamp at full brightness — the "peak" moment of the video. It must work 
as a standalone atmospheric image for mobile users who won't see the video. 
It sits in a dark-background section with white text overlaid: "Every piece 
tells a story." So the image must have sufficient dark negative space for 
text readability.
</context>

<objective>
Generate a single atmospheric photograph of a floor lamp illuminating a 
dark room corner with warm amber light, revealing furniture textures in a 
pool of light surrounded by darkness.
</objective>

<requirements>
- Camera: 35mm, f/2.0, low angle (60cm from floor), static, same composition 
  as the video at its peak moment (2.5–4.5s mark)
- Scene: Arc floor lamp (matte black, brass inner shade) fully lit, illuminating:
  - Cognac leather chair arm (texture visible in the warm light)
  - Oak side table with 2–3 books
  - Everything else in darkness or deep shadow
- Lighting: Single practical light source (the lamp). Warm amber (2700K). 
  Sharp falloff into darkness. Chiaroscuro. No fill light
- Color: Dark charcoal background, warm amber light pool, cognac leather, 
  oak wood — all earth tones
- Composition: Lamp in left third of frame. Right two-thirds has the chair 
  and table in the light pool, with dark negative space in the upper half 
  (for text overlay). Dark areas should be truly dark (#1A1A1A to #2D2D2D), 
  not lifted grey
- Mood: Rembrandt lighting applied to interior design. Warm, intimate, 
  painterly
- Resolution: 16:9, 2400px wide minimum
</requirements>

<output_format>
Single photograph. No borders, no text, no vignette, no grain filter.
</output_format>

Negative prompt: no people, no daylight, no multiple lights, no overhead 
lighting, no cool tones, no bright room, no modern minimalist white space, 
no candles, no fire, no watermarks, no text, no illustration, no 3D render, 
no HDR (keep the darks dark)

Before generating, verify: (1) the lamp is the only visible light source, 
(2) there is sufficient dark space in the upper half for white text overlay, 
(3) leather and wood textures are visible in the light pool, (4) dark areas 
are genuinely dark not lifted/hazy.
```

**What was improved:**
- **Role**: Cinematic lighting designer referencing Roger Deakins/Lubezki — sets the visual bar extremely high
- **Structure**: Context explains the emotional purpose (pre-CTA calm), text overlay requirement (dark negative space), and this section's position in the page flow
- **Context**: WHY = emotional pause before conversion. The "coming home" metaphor gives the AI a narrative anchor, not just visual specs
- **Format**: Per-second light timeline (0–0.5s darkness, 0.5–2.5s glow begins, etc.), exact camera height (60cm), color temp (2700K), hex colors for dark areas
- **Reasoning**: 5-point verification for video catches the most critical failures (loop point, sole light source, gradual reveal, texture visibility, darkness level)
- **ultrathink**: Not added
- **Placeholders**: None

---

## EXECUTION SUMMARY

| Idea | Total Media Assets | Priority | Difficulty |
|------|-------------------|----------|-----------|
| 1. Hero Video Loop | 1 video + 1 poster image | **Highest** — first impression | Medium |
| 2. Parallax Textures | 2 images | **High** — easiest win | Easy |
| 3. Room Storytelling | 3 images + 1 video | **High** — most dramatic | Hard |
| 4. Product Hover Videos | 4 videos | **Medium** — strong differentiator | Medium |
| 5. Ambient Lamp Section | 1 video + 1 poster image | **Medium** — conversion booster | Easy |
| **TOTAL** | **6 images + 7 videos** | | |

### Recommended Order of Execution

1. **Start with Idea 2** (parallax textures) — fastest to generate, zero code complexity, immediately visible upgrade
2. **Then Idea 1** (hero video) — highest impact, replaces the Unsplash dependency
3. **Then Idea 5** (lamp mood section) — small scope, high emotional ROI
4. **Then Idea 4** (product hover videos) — requires 4 generations but each is simple
5. **Finally Idea 3** (room storytelling) — most complex (pinned scroll + crossfade + stop-motion)

### AI Tool Recommendations

| Media Type | Best Tool | Alternative |
|-----------|-----------|-------------|
| Interior room photos (P1–P3) | **Midjourney v7** (photorealism strength) | DALL-E 3 / Ideogram 3 |
| Texture macros (wood, fabric) | **Midjourney v7** with `--style raw` | Stable Diffusion XL with LoRA |
| Product detail videos | **Runway Gen-3 Alpha Turbo** | Kling AI 1.5 / Pika 2.0 |
| Timelapse video (hero) | **Kling AI 1.5** (better at long coherent motion) | Runway Gen-3 |
| Stop-motion video | **Runway Gen-3** (best at stylized motion) | Pika 2.0 |
| Lamp glow video | **Kling AI 1.5** (handles lighting transitions well) | Runway Gen-3 |

---

*All prompts are ready to copy-paste. No website code changes included per request.*
