# MediFlow AI SaaS UI Kit — Figma Make 자동 생성 프롬프트

> 이 프롬프트를 Figma Make(또는 AI 코드 생성 도구)에 그대로 붙여넣으면
> MediFlow AI SaaS UI Kit의 전체 디자인 시스템을 재현할 수 있습니다.
> `{{파라미터}}` 값을 교체하면 다른 브랜드에도 즉시 적용됩니다.

---

## ▸ SYSTEM CONTEXT

You are a Figma design system generator.
Generate a complete, production-ready Figma component library based on the following specifications.
All values use the token system defined below. Do NOT use arbitrary hex values — always reference tokens.

---

## ▸ 1. Token System

### Color Tokens

```
/* Primary */
color/primary/500 = {{Brand.Primary}}        /* #0F766E */
color/primary/600 = {{Brand.Primary.600}}    /* #134E4A — hover */
color/primary/100 = {{Brand.Primary.100}}    /* #CCFBF1 — selected bg */

/* Surface */
color/surface/base   = {{Brand.Surface.Base}}   /* #FFFFFF — card, modal */
color/surface/subtle = {{Brand.Surface.Subtle}} /* #F0FDFA — page bg */
color/surface/elevated = #334155               /* dark mode only */
color/surface/overlay  = rgba(0,0,0,0.4)

/* Neutral Scale */
color/neutral/900 = #0F172A   /* primary text */
color/neutral/700 = #334155   /* body text */
color/neutral/500 = #64748B   /* secondary text */
color/neutral/300 = #CBD5E1   /* input border default */
color/neutral/200 = #E2E8F0   /* card border, divider */
color/neutral/100 = #F1F5F9   /* skeleton bg */
color/neutral/50  = #F8FAFC   /* table header bg */

/* Semantic */
color/error/500   = #EF4444
color/success/500 = #22C55E
color/warning/500 = #F59E0B

/* AI — MediFlow 전용 */
color/ai/base             = {{Brand.AI.Base}}  /* #7C3AED — AI 진단 기능 */
color/ai/state/processing = #A855F7
color/ai/state/result     = #22C55E
color/ai/state/alert      = #F59E0B
```

### Spacing Tokens (4px grid, Tailwind 매핑)

```
spacing/0 = 0px
spacing/1 = 4px    /* gap: inner elements */
spacing/2 = 8px    /* gap: button icon-label */
spacing/3 = 12px   /* padding: card inner gap */
spacing/4 = 16px   /* padding: card, input */
spacing/5 = 24px   /* gap: section */
spacing/6 = 32px   /* gap: section large */
spacing/7 = 48px   /* padding: page */
spacing/8 = 64px   /* padding: page large */
```

### Border Radius Tokens

```
radius/none = 0px
radius/sm   = 4px    /* Button, Input, Badge */
radius/md   = 8px    /* Card, Dropdown, Modal */
radius/lg   = 12px   /* AICard, Panel */
radius/xl   = 16px   /* Sheet, Drawer */
radius/full = 9999px /* Avatar, Chip, Toggle */
```

### Typography Tokens

```
text/h1         = 30px / 700 / line-height:1.2  / letter-spacing:-0.02em
text/h2         = 24px / 600 / line-height:1.25 / letter-spacing:-0.01em
text/h3         = 20px / 600 / line-height:1.3  / letter-spacing:-0.01em
text/body/lg    = 16px / 400 / line-height:1.6  / letter-spacing:0
text/body/md    = 14px / 400 / line-height:1.6  / letter-spacing:0
text/body/sm    = 12px / 400 / line-height:1.5  / letter-spacing:0.01em
text/caption    = 10px / 500 / line-height:1.4  / letter-spacing:0.08em
```

### Motion Tokens

```
motion/fast = {{Brand.Motion.Fast}}   /* 100ms ease-out — hover, focus */
motion/base = {{Brand.Motion.Base}}   /* 200ms ease-in-out — open, close */
motion/slow = 300ms ease-in-out       /* modal, drawer, page transition */
```

---

## ▸ 2. Component Specifications

### [Atom] Button

```
Layer: _Button/Base (private) → Button/Type/Size/State

Variants:
  Type  = Primary | Secondary | Ghost | Danger
  Size  = SM(h:32px) | MD(h:40px) | LG(h:48px)
  State = Default | Hover | Active | Disabled | Loading

Boolean Properties:
  Icon = None | Left | Right | Only

Slots:
  Label = text (Instance Swap)

Token Binding:
  Primary/Default bg   → color/primary/500
  Primary/Hover   bg   → color/primary/600
  Secondary/Default    → surface/base + border 1px primary/500
  Ghost/Default        → transparent
  Danger/Default  bg   → color/error/500
  padding(MD)          → spacing/2 spacing/4 (8px 16px)
  radius               → radius/sm
  transition           → motion/fast

Auto Layout:
  direction: horizontal
  align: center
  gap: spacing/2
  height: fixed per size
  width: hug contents
```

### [Atom] Input

```
Layer: Input/Type/State

Variants:
  Type  = Text | Password | Email | Number | Search | Select
  State = Default | Focus | Filled | Error | Disabled

Boolean: LeadingIcon | TrailingIcon

Token Binding:
  border(Default) → 1px color/neutral/300
  border(Focus)   → 2px color/primary/500
  border(Error)   → 2px color/error/500
  bg              → color/surface/base
  height          → fixed 40px
  radius          → radius/sm
```

### [Atom] Badge

```
Variants:
  Type  = Status | Count | Label
  Color = Primary | Success | Warning | Error | Neutral | AI
  Size  = SM | MD

Token Binding:
  padding → spacing/1 spacing/2
  radius  → radius/full
  font    → text/caption
```

### [Atom] Avatar

```
Variants:
  Type = Image | Initials | Pet | Staff
  Size = XS(24) | SM(32) | MD(40) | LG(48)

Token Binding:
  radius → radius/full
```

### [Molecule] FormField

```
Layer: FormField/State → Input/Type/State

Variants:
  State = Default | Focus | Filled | Error | Disabled

Auto Layout: vertical, gap: spacing/1

Slots: Label, InputText, HelperText

Token Binding:
  helper(error) → color/error/500
```

### [Molecule] Card

```
Layer: _Card/Base (private) → Card/Type/State

Variants:
  Type  = {{Domain.CardType}}   /* patient|appointment|diagnosis|lab|ai */
  State = Default | Loading | Empty | Error
  Size  = SM | MD | LG | Full

Slots: Header, Body, Footer

Boolean: Footer

Token Binding:
  bg     → color/surface/base
  border → 1px color/neutral/200
  radius → radius/md
  padding → spacing/4
  gap     → spacing/3
```

### [Organism] Table

```
Layer: Table/State + Row/State + Cell/Type

Table States: Default | Empty | Loading | Error
Row States:   Default | Hover | Selected | Disabled | Loading

Cell Types: Text | Badge | Avatar | Action (Slot)

Row = repeatable Instance

Token Binding:
  header bg    → color/neutral/50
  row default  → color/surface/base
  row hover    → color/neutral/50
  row selected → color/primary/100
  skeleton     → color/neutral/100

DO NOT: real data in Figma, change height in loading state
```

### [Organism] AICard

```
Layer: AICard/State + Props(riskLevel)

State (Variant axis):
  Idle | Processing | Result | Error

riskLevel (Boolean Prop — NOT Variant):
  safe | alert

Slot: ResultSection (RiskBadge + RecommendText)

Token Binding:
  bg(idle)       → color/surface/base
  bg(processing) → color/ai/state/processing
  bg(result/safe)→ color/ai/state/result
  bg(alert)      → color/ai/state/alert
  radius         → radius/lg
  padding        → spacing/4
  gap            → spacing/3

Usage: <AICard state="result" riskLevel="critical" />
```

---

## ▸ 3. Layout System

```
L1 Page Level:    padding ≥ spacing/7(48px)
L2 Section Level: gap = spacing/5–6 (24–32px)
L3 Component:     padding = spacing/4(16px), gap = spacing/3(12px)
L4 Inner:         gap = spacing/1–2 (4–8px)

Grid: 12-column, 24px gutter
DO NOT skip levels (L1→L4 direct)
DO NOT use arbitrary px — 4px multiples only
```

### Responsive Breakpoints

```
md  = 768px  — 4col  — tablet minimum
lg  = 1024px — 8col  — sidebar collapsed
xl  = 1280px — 12col — default layout
2xl = 1536px — 12col — desktop optimal

IF viewport < lg  → Sidebar hidden, Cards 1col stack
IF viewport = lg  → Sidebar icon-only, Cards 2+1col
IF viewport ≥ xl  → Sidebar full, Cards 3col
```

---

## ▸ 4. Dark Mode

```
Implementation: Figma Variables Mode (NOT separate components)

Key pairs:
  surface/base:   Light=#FFFFFF / Dark=#1E293B
  surface/subtle: Light=#F8FAFC / Dark=#0F172A
  neutral/900:    Light=#0F172A / Dark=#F1F5F9

Elevation in Dark Mode:
  → border + surface/elevated combo (Shadow Token not supported)
  DO NOT use box-shadow for dark mode elevation

Steps:
  1. Create Variable Collection "Color System"
  2. Add Mode: Light / Dark
  3. Enter semantic token values per mode
  4. Bind components to semantic tokens (NOT primitives)
  5. Toggle mode at Frame level to verify
```

---

## ▸ 5. Figma File Page Structure

```
00 _Cover      ← 표지, 버전, 파일 설명
01 Foundation  ← Color / Typography / Spacing / Radius / Motion
02 Atoms       ← Button / Badge / Avatar / Icon / Input (단독)
03 Molecules   ← FormField (Label+Input+Helper) / Card / List Item / Toast
04 Organisms   ← Table / AICard / Nav / Modal
05 Templates   ← Dashboard / Detail / Form / Empty
06 Screens     ← Composition Only (컴포넌트 재정의 금지)
07 _Archive    ← deprecated (보관용)
```

---

## ▸ 6. Naming Convention

```
Pattern: ComponentName/Type/Size/State
Private: _ComponentName/Base (hidden from assets panel)
PascalCase for components, camelCase for internal layers

Examples:
  Button/Primary/MD/Default
  Card/Patient/Default/MD
  Table/State=Empty
  AICard/State=Result → riskLevel=critical (separate prop)

Figma → React mapping:
  Button/Primary/MD/Default → <Button variant="primary" size="md" />
  AICard/State=Result       → <AICard state="result" riskLevel="critical" />
```

---

## ▸ 7. Dashboard Composition (Screen Layer)

```
Frame: Dashboard/Default
  └ Section/Topbar
      └ Nav/Topbar
  └ Section/Sidebar
      └ Nav/Sidebar
  └ Section/Content
      └ Section/Metrics · gap=L2(24px) · [Card ×3 ref→Page7]
          └ Card/Patient/Default/SM
          └ Card/Appointment/Default/SM
          └ Card/Lab/Default/SM
      └ Section/PatientList · [Table ref→Page7]
          └ Table/State=Default
      └ Section/AIResult · [AICard ref→Page7]
          └ AICard/State=Idle

Composition Rules:
  DO NOT redefine components inside screen frames
  DO NOT modify token values at screen level
  Layer naming: Frame/Name → Section/Name → Component/Name
```

---

## ▸ 8. Accessibility Rules

```
WCAG AA minimum for all text:
  body text: 4.5:1 minimum
  large text (18px+): 3:1 minimum

Critical failures to avoid:
  DO NOT use ai/state/alert (#F59E0B) as text color on white → 2.15:1 FAIL
  DO NOT use white text on error/500 (#EF4444) → 3.76:1 FAIL
  AI State tokens (processing/result/alert) = background only
  Text on AI backgrounds → use neutral/900

Focus:
  focus-visible outline: 2px solid color/primary/500
  outline-offset: 2px
```

---

## ▸ 9. Reusable Parameters (교체 순서 준수)

```
/* 반드시 아래 순서대로 find-replace */
1. {{Brand.Primary.600}} → #134E4A    /* hover */
2. {{Brand.Primary.100}} → #CCFBF1    /* selected bg */
3. {{Brand.Primary}}     → #0F766E    /* primary */
4. {{Brand.Surface.Base}}   → #FFFFFF
5. {{Brand.Surface.Subtle}} → #F0FDFA
6. {{Brand.AI.Base}}     → #7C3AED    /* AI feature color, remove if no AI */
7. {{Brand.Motion.Fast}} → 100ms ease-out
8. {{Brand.Motion.Base}} → 200ms ease-in-out
9. {{Domain.CardType}}   → patient|appointment|diagnosis|lab|ai
```

---

## ▸ 10. Generation Instructions for Figma Make

```
GOAL:
  Generate a complete Figma component library for MediFlow AI SaaS.
  Output: Variables Collection + Component Set + Screen Templates.

STEP 1 — Variables
  Create "Color System" collection with Light/Dark modes.
  Enter all token values from Section 1.
  Set primitive/ folder as "Hide from publishing".

STEP 2 — Foundation Frame (Page 01)
  Create color swatches, spacing scale, typography samples.
  Link each to corresponding Variable.

STEP 3 — Atoms (Page 02)
  Build Button first: _Button/Base (private) → Button variants.
  Apply token bindings exactly as specified in Section 2.
  Verify Dark Mode toggle before proceeding.

STEP 4 — Molecules → Organisms (Pages 03–04)
  Compose from Atoms only. No raw styling.
  AICard: State as Variant, riskLevel as separate Boolean prop.

STEP 5 — Templates → Screens (Pages 05–06)
  Composition only. Reference components from Pages 02–04.
  DO NOT override component styles at this level.

CONSTRAINTS:
  All colors → Variable reference (no raw hex)
  All spacing → spacing token (no arbitrary px)
  Dark Mode → Variable Mode switch (no duplicate components)
  Shadow in Dark → border + surface/elevated (no shadow token)
```
