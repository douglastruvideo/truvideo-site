# TruVideo Technology Collateral

Ready-to-use content blocks for partner conversations, sales decks, and CTO-level discussions about TruVideo's patented technology.

**INTERNAL USE ONLY** — This document contains details about our provisional patent application (TV-PAT-2026-001). Do not share specific claim family details or technical methods externally. The public-facing platform-technology.html page uses accessible descriptions without reproducing claim language.

---

## Block 0: Patent Summary — Claim Families in Plain English (for Sales Use)

### Provisional Patent Application: TV-PAT-2026-001 — "Spatial Inspection Platform"

TruVideo has filed a US provisional patent application covering four families of innovations. Here is what each one means in plain English for customer and partner conversations.

**Claim Family I: Anchor-Referenced Spatial Annotation**

What it does: When an inspector marks something on a physical object (a dent on a car, a crack on a wall, wear on a tire), that annotation stays locked to that exact physical location permanently. It survives across inspection sessions, across different devices, and across different inspectors. The system uses AR and feature-anchored coordinate systems to achieve this. It can also auto-calibrate scale using identifiable reference objects (such as license plates in automotive contexts).

Why it matters to partners: This means inspection findings are spatially persistent. A finding marked in January can be referenced in June by a different person on a different phone, and it's in exactly the same spot. No other inspection platform does this. Competitors like Tractable and CCC work with flat 2D photos — no persistent spatial coordinates.

Technical note (internal): Uses barycentric coordinate encoding on 3D mesh surfaces. Device-independent, viewing-angle-independent. Do NOT share encoding method details externally.

---

**Claim Family II: Passive Crowdsourced Geometry Acquisition**

What it does: Every routine inspection passively contributes to a growing 3D geometry database. No one needs to do a dedicated "3D scan." No manufacturer CAD data is needed. The system builds and refines 3D models of inspected objects as a byproduct of normal inspection workflows. Multiple independent inspections of the same object type refine the model over time.

Why it matters to partners: This creates a compounding data asset that gets more valuable the more inspections are performed. Competitors like Solera/Audatex depend on pre-built OEM CAD data (which doesn't cover every object type). Matterport requires dedicated scanning sessions with specialized hardware. TruVideo builds geometry passively from the inspections customers are already doing.

Sales talking point: "Every inspection your customers perform makes the platform smarter for every future inspection. That's a network effect built into the product."

---

**Claim Family III: Shadow-Based Dimensional Measurement**

What it does: Measures real physical dimensions (depth, width, distance, relief) from a smartphone photo. Uses the device flash as a controlled illumination source with a known spatial offset from the camera. The system computes dimensions from shadow geometry using trigonometry — not neural network depth estimation, not LiDAR, not structured light.

Why it matters to partners: A technician can measure tire tread depth, crack width, gap distance, or surface relief from a standard smartphone photo. No specialized tools. No calibration targets. No neural network that needs to be trained per object type. The measurement is deterministic and based on known physics, which makes it auditable and defensible in claims and compliance contexts.

Key differentiation: Competitors using neural network depth estimation (e.g., tire depth tools like Anyline/Tirelabs) produce probabilistic outputs that vary by model and training data. TruVideo's approach is trigonometric computation from known physical parameters — deterministic and explainable.

---

**Claim Family IV: Temporal Anomaly Detection**

What it does: Compares spatially registered 3D surfaces from different inspection sessions to detect what changed, classify the type and severity of changes, and predict future condition based on rate of change. This is baseline-to-change detection, not single-point-in-time analysis.

Why it matters to partners: For vehicle damage tracking — automatically identify new damage between inspections. For facility management (FacilityEye) — detect deterioration, structural changes, maintenance needs over time. For aviation MRO — track progressive wear and predict when intervention is needed. The system doesn't just say "there's damage here" — it says "this damage appeared between March and June, it's growing at X rate, and at this rate it will reach severity threshold Y by September."

Sales talking point: "TruVideo doesn't just tell you what's wrong today. It tells you what changed, when it changed, how fast it's changing, and what's going to happen next."

---

**Also patented (separate filing):** AI-based noise cancellation for service and industrial environments. Separate patent, details TBD for this document. Covers models trained specifically on industrial audio profiles (impact wrenches, compressors, lifts, engine sounds, etc.) that outperform generic noise cancellation by 30%+ in service environments.

---

## Block 1: Partner FAQ — "Why can't we just build this?"

### Q: We have ML engineers. Can't we build noise cancellation ourselves?

A: You can build generic noise cancellation. What you can't build quickly is noise cancellation trained on industrial audio profiles — impact wrenches at 100dB, pneumatic compressors, hydraulic lifts, engine sounds, shop chatter. TruVideo's patented models are trained specifically on automotive, fleet, aviation, field service, insurance, and construction environment audio. Generic noise cancellation (designed for offices and call centers) degrades speech-to-text accuracy by 30%+ in service environments because it was never trained on these noise sources. Building equivalent models requires thousands of hours of labeled industrial audio data that you don't have and can't easily acquire.

### Q: How is your spatial inspection different from photo-based AI damage detection?

A: Photo-based AI (Tractable, CCC, etc.) analyzes flat 2D images. It can identify damage in a photo, but it has no persistent spatial coordinates — it can't tell you exactly where on a physical object the damage is, it can't anchor annotations that persist across sessions and devices, it can't measure physical dimensions, and it can't track how damage evolves over time. TruVideo's patent-pending Spatial Inspection Platform (Provisional Application TV-PAT-2026-001) covers four distinct innovation families: persistent spatial annotations anchored to physical objects via AR, passively crowdsourced 3D geometry that builds without dedicated scanning, shadow-based dimensional measurement from a smartphone photo, and temporal anomaly detection that tracks changes across inspections. This is a fundamentally different category of technology — not better photo AI, but a spatial inspection platform.

### Q: What's the patent status?

A: TruVideo holds a provisional patent application (TV-PAT-2026-001) covering the Spatial Inspection Platform with four claim families: anchor-referenced spatial annotation, passive crowdsourced geometry acquisition, shadow-based dimensional measurement, and temporal anomaly detection. This is in addition to our separately patented AI noise cancellation technology for industrial environments. The spatial inspection platform filing is Patent Pending. These patents cover specific methods and systems that cannot be designed around — they protect the core technical approaches, not just a particular implementation.

### Q: What happens if we start with your SDK and want to switch later?

A: TruVideo's BYOS (Bring Your Own Storage) and BYOAI (Bring Your Own AI) architecture means you own your data from day one. Video files, extracted metadata, AI outputs — all stored in your infrastructure or accessible via API export. There's no proprietary data format lock-in. If you leave, you keep everything. We designed it this way because enterprise customers require it, and because we believe the technology should win on merit, not on switching costs.

### Q: Can someone just replicate the spatial inspection platform?

A: Beyond the patent protection, the Spatial Inspection Platform has a structural moat: Claim Family II (Passive Crowdsourced Geometry Acquisition) means every inspection performed on the platform contributes to a growing 3D geometry database. A competitor starting from scratch has zero geometry data. They would need to not only develop the four claim families of technology (which are patent-protected), but also build the geometry database from scratch — which can only be built by processing real inspections at scale over time. The technology and the data asset are mutually reinforcing.

### Q: What's the actual cost of building video infrastructure in-house?

A: Based on what we've seen from partners who explored building before choosing to integrate: $2-4M/year in engineering costs for a team of 8-12 engineers (video, ML, infrastructure, mobile, compliance). That covers basic video capture and upload, simple AI models, one or two DMS integrations, and initial compliance work. It does not cover the 18+ months to reach production parity, the ongoing model training and data pipeline costs, the compliance maintenance (SOC 2 audits alone are $100K+/year), or the opportunity cost of pulling your engineering team off core product work. And it does not produce patent-pending spatial inspection capabilities — those would require inventing around four patent claim families.

### Q: How long would it take to build a comparable solution?

A: The honest answer: 18-24 months to reach basic production parity, assuming a strong team and no major setbacks. That gets you functional video capture, basic AI models, and one or two integrations. It does not get you noise cancellation trained on industrial audio (requires acquiring training data you don't have), the Spatial Inspection Platform (patent-pending), passively crowdsourced 3D geometry (requires years of inspection volume to build), or the cross-industry model improvements that come from processing inspections across 6 verticals. Some capabilities — particularly the geometry data asset and the patent-protected spatial methods — cannot be replicated at any timeline.

### Q: Can we white-label this so it looks like our own technology?

A: Yes. Full white-label deployment with your branding, your domain, your customer experience. No "powered by TruVideo" badge required. Your customers interact with your brand while TruVideo's patented technology runs underneath. Many of our DMS and platform partners ship TruVideo this way — their customers never know they're using our technology, and that's by design.

### Q: What data do you have that we don't?

A: Two categories of proprietary data. First: 80M+ real-world inspection videos across 6 industries (automotive, fleet, aviation, field service, insurance, construction) with labeled findings, damage classifications, technician narrations, severity scores, spatial damage maps, and repair outcome data. Second: a passively crowdsourced 3D geometry database built from those inspections — 3D models of vehicles, equipment, and structures that improve with every inspection performed on the platform. Neither dataset can be purchased — they don't exist on any data marketplace. Both were built by processing real inspections at 12,000+ locations over 9 years. Every new inspection makes every model and every geometry more accurate. These are compounding advantages that widen over time.

### Q: What about data privacy — do you use our customer data to train models?

A: Data governance is contractual and configurable. Enterprise customers can opt out of model training entirely. When data is used for training, it's anonymized and aggregated — no PII, no customer-identifiable information enters training pipelines. SOC 2 Type II certified. HIPAA-ready architecture available. Data residency controls for regulated industries. You get full transparency into what data is processed and how.

### Q: We're a DMS/CRM platform. Why should we integrate instead of build?

A: Three reasons. First, time: integrating TruVideo takes weeks, building takes 18+ months. Second, technology: you get a patent-pending Spatial Inspection Platform and patented noise cancellation that would cost $2-4M/year to attempt to replicate — and the spatial inspection methods are patent-protected. Third, focus: your engineering team should be building DMS/CRM features, not becoming video infrastructure, computer vision, and spatial computing experts. The fastest path to offering your customers spatial inspection is embedding our technology, not reinventing it.

---

## Block 2: One-Pager — CTO Executive Summary

### TruVideo: Patent-Pending Spatial Inspection Platform

TruVideo is the visual intelligence platform that turns mobile video into structured data, automated workflows, and verifiable proof. We process 80M+ inspection videos across 12,000+ locations in 6 industries — automotive, fleet, aviation, field service, insurance, and construction.

**Patent-Pending Spatial Inspection Platform (TV-PAT-2026-001):**

Four claim families covering the full lifecycle of spatial inspection:

- **Anchor-Referenced Spatial Annotation** — Persistent spatial annotations on physical objects using AR. Annotations survive across sessions, devices, and inspectors. Auto-scale calibration. Device-independent encoding. Patent Pending.
- **Passive Crowdsourced Geometry Acquisition** — 3D geometry databases built passively from routine inspections. No dedicated scanning, no OEM CAD data, no specialized hardware. A compounding data asset. Patent Pending.
- **Shadow-Based Dimensional Measurement** — Physical measurements (depth, width, distance, relief) from a smartphone photo using shadow geometry and device flash. Trigonometric computation, not neural network estimation. Patent Pending.
- **Temporal Anomaly Detection** — Baseline-to-change detection on spatially registered surfaces. Automatic change classification, severity tracking, rate-of-change analysis, and predicted future condition. Patent Pending.

**Also Patented:**
- **AI Noise Cancellation** — Purpose-built for service and industrial environments. Trained on the acoustic profiles of impact wrenches, compressors, lifts, and engine sounds. Improves downstream AI model accuracy by 30%+ compared to generic noise processing. Patented (separate filing).

**The Data Advantage:**
Two compounding assets: 80M+ proprietary inspection videos with labeled findings across 6 industries, plus a passively crowdsourced 3D geometry database that grows with every inspection. Neither can be purchased or replicated. Both compound daily.

**Integration Options:**
- **White-Label** — Full deployment under your brand. No "powered by" required.
- **SDK** — Embed video capture, AI processing, spatial inspection, and measurement into your existing mobile and web applications.
- **API** — Programmatic access to video processing, transcription, spatial annotation, measurement, damage detection, and structured data extraction.

**Why Not Build In-House:**
Internal build estimates consistently land at $2-4M/year in engineering costs, 18+ months to production parity, and a team of 8-12 dedicated engineers. That investment produces basic capabilities without the patent-pending spatial inspection platform, the patented noise cancellation, the training data, the crowdsourced geometry, or the cross-industry model improvements that 80M+ videos provide. Integration takes weeks and delivers technology that took 9 years to build — and is protected by patent.

---

## Block 3: Technical Differentiation Table

| Dimension | Build In-House | TruVideo Platform |
|---|---|---|
| **Time to market** | 18-24 months to production parity | Weeks to integrate via SDK/API |
| **Noise cancellation** | Generic WebRTC/office-trained models | Patented models trained on industrial audio profiles |
| **Spatial inspection** | 2D photo AI, no spatial persistence | Patent-pending platform: 4 claim families covering spatial annotation, geometry, measurement, temporal tracking |
| **Spatial annotation** | None — findings exist only as photo labels | Persistent AR annotations anchored to physical objects, survive across sessions/devices/inspectors |
| **3D geometry** | Requires OEM CAD data or dedicated scanning | Passively crowdsourced from routine inspections (Patent Pending) |
| **Dimensional measurement** | Specialized hardware or NN depth estimation | Shadow-based trigonometric measurement from smartphone photo (Patent Pending) |
| **Change detection** | Manual comparison of photos | Automated temporal anomaly detection on spatially registered 3D surfaces (Patent Pending) |
| **Training data** | Public datasets (ImageNet, COCO) or small internal sets | 80M+ proprietary videos across 6 industries + crowdsourced 3D geometry database |
| **DMS integrations** | Build and certify each one (months per integration) | Pre-certified: CDK, Reynolds, Tekion, DealerSocket, more |
| **Compliance** | SOC 2 alone is 6+ months and $500K+ | SOC 2 Type II certified, HIPAA-ready, data residency |
| **Multi-tenant architecture** | Must design, build, and test from scratch | Production-hardened across 12,000+ locations |
| **White-label capability** | Custom build required | Built-in, fully brandable |
| **Uptime SLA** | No contractual guarantee until mature | 99.9% uptime SLA |
| **Ongoing engineering cost** | $2-4M/year (team of 8-12) | Platform subscription — fraction of build cost |
| **Data moat** | Starts at zero, grows slowly | 80M+ videos + crowdsourced geometry, compounding daily |
| **Patent protection** | None | Provisional patent (TV-PAT-2026-001) with 4 claim families + separate noise cancellation patent |

### Competitive Differentiation — Named Competitors

| Competitor | Their Approach | What They Lack | TruVideo Advantage |
|---|---|---|---|
| **Tractable** | 2D photo AI damage assessment | No persistent spatial coordinates, no cross-session annotation persistence, no dimensional measurement | Full spatial inspection platform with AR-anchored annotations, measurement, and temporal tracking |
| **CCC** | Photo-based estimating | No AR, no spatial persistence, no 3D geometry, no shadow measurement | Spatial platform that measures, tracks, and persists — not just identifies |
| **Solera / Audatex** | Pre-built OEM CAD data for 3D models | Dependent on manufacturer data availability, no passive geometry acquisition | Crowdsourced geometry built from inspections, works on any object |
| **Matterport** | Dedicated 3D scanning with specialized hardware | Requires intentional scanning sessions, not inspection-integrated | Geometry acquired passively during routine inspections — no workflow change |
| **Tirelabs / Anyline** | Neural network depth estimation for tread depth | Probabilistic NN output, model-dependent accuracy | Deterministic shadow-based trigonometric computation from known physical parameters |

---

## Block 4: Sales Email Template

**Subject: Re: Video inspection capabilities — the build vs. integrate question**

Hi [Name],

Good speaking with you about adding video inspection to [their platform]. I wanted to follow up on the "build vs. integrate" question your team raised.

TruVideo has filed a provisional patent application covering our Spatial Inspection Platform — four families of innovations that go far beyond photo-based damage detection. We're talking about persistent spatial annotations that survive across sessions and devices, passively crowdsourced 3D geometry that builds itself from routine inspections, shadow-based dimensional measurement from a smartphone photo, and temporal change detection that tracks how things evolve over time. This is in addition to our separately patented AI noise cancellation for industrial environments.

These capabilities are trained on 80M+ real-world inspection videos across 6 industries — a dataset that doesn't exist anywhere else and can't be purchased. And the spatial inspection methods are patent-protected.

When partners have evaluated building in-house, the estimates consistently come back at $2-4M/year with 18+ months to production parity — and that's before the patented technology, the training data, or the crowdsourced 3D geometry advantage.

Our white-label option means your customers see your brand, your experience. No "powered by" badge. Integration takes weeks, not quarters.

I put together a technology overview page that breaks down the specifics: [link to platform-technology.html]

Worth 30 minutes to walk through the technical architecture with your team?

[Your name]
