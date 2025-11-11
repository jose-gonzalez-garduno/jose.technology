# jose.technology — Personal & Small-Business Tech Site

Jose Technology Solutions provides professional, creative, technical, and approachable technology services to small businesses while showcasing Jose's portfolio and technical expertise for recruiters.

**Experience Qualities**:
1. **Professional yet Approachable** — Clean design that conveys technical competence without corporate stuffiness
2. **Purposefully Minimal** — Information is easy to find, with creative accents that add personality without distraction
3. **Action-Oriented** — Clear pathways to contact, schedule, or explore, reducing friction for both recruiters and business clients

**Complexity Level**: Light Application (multiple features with basic state)
The site presents multiple content types (services, portfolio, blog, contact) with form handling and routing, but maintains simplicity appropriate for a professional services site.

## Essential Features

### Home Page Hero
- **Functionality**: Eye-catching introduction with tagline and three primary CTAs
- **Purpose**: Immediately segment visitors by intent (hiring, services, content)
- **Trigger**: Landing on site root
- **Progression**: View hero → Read tagline → Click CTA (Hire/Portfolio/Services/Blog)
- **Success criteria**: Visitors understand site purpose within 3 seconds; CTAs are clearly visible and clickable

### Services Showcase
- **Functionality**: List of five core services with benefits and outcomes
- **Purpose**: Communicate value propositions to small business owners
- **Trigger**: Click "Services" nav or CTA
- **Progression**: View services list → Read service details → Click "Contact for Quote"
- **Success criteria**: Each service clearly states problem solved and outcome delivered

### Portfolio/Resume Display
- **Functionality**: Recruiter-focused resume summary, skills matrix, downloadable PDF
- **Purpose**: Enable hiring managers to quickly assess technical fit
- **Trigger**: Click "Portfolio" nav or "Hire" CTA
- **Progression**: View summary → Review skills → Download resume PDF or contact
- **Success criteria**: Key skills visible above fold; resume downloads successfully

### Blog/Content
- **Functionality**: Display blog posts with categories and dates
- **Purpose**: Demonstrate thought leadership and technical depth
- **Trigger**: Click "Blog" nav or post preview
- **Progression**: View post list → Click post → Read content → Navigate to other posts
- **Success criteria**: Posts render cleanly; navigation between posts is intuitive

### Contact & Scheduling
- **Functionality**: Contact form with validation; Calendly embed for scheduling
- **Purpose**: Reduce friction for leads to initiate conversation
- **Trigger**: Click "Contact" nav or "Get in touch" CTAs throughout site
- **Progression**: Fill form → Submit → See confirmation OR Click schedule → Select time in Calendly
- **Success criteria**: Form validates inputs; confirmation message appears; Calendly loads successfully

### About Page
- **Functionality**: Personal bio, company information, headshot
- **Purpose**: Build trust through personal connection and transparency
- **Trigger**: Click "About" nav
- **Progression**: View bio → See headshot → Understand background → Contact or navigate elsewhere
- **Success criteria**: Bio conveys both technical expertise and approachability

## Edge Case Handling
- **Form submission errors**: Display clear validation messages; preserve user input on error
- **Missing blog posts**: Show "Coming soon" state with subscription option
- **Broken resume PDF link**: Provide inline fallback text with contact option
- **Calendly loading failure**: Show alternative contact methods prominently
- **Mobile navigation**: Collapse to hamburger menu below 768px
- **Slow connections**: Show loading states for embedded content (Calendly)

## Design Direction
The design should feel modern, technical yet warm—like a boutique consultancy rather than a corporate tech giant. Balance clean minimalism with subtle creative touches (gradient accents, smooth animations on scroll). The interface should be minimal but not sterile, with personality emerging through thoughtful typography and spacing rather than heavy decoration.

**Logo Usage**: Multiple logo variants are incorporated strategically throughout the site:
- **Header**: Full logo with icon and name (`icon_and_name_logo.png`) for brand recognition
- **Footer**: Icon-only version (`icon_logo_only.png`) paired with text for compact presentation
- **About Page**: Large icon display showcasing brand identity
- **Monochrome versions** available for specialized use cases (black/white backgrounds)

## Color Selection
**Analogous color scheme** with modern blue-cyan-teal tones harmonizing with the jose.technology logo—projecting technical sophistication with a fresh, approachable energy.

- **Primary Color (Vibrant Blue)**: `oklch(0.50 0.18 220)` — Main brand color complementing the logo, representing technical innovation and reliability, used for primary CTAs and key elements
- **Secondary Color (Deep Cyan)**: `oklch(0.42 0.16 200)` — Supporting color for secondary actions and depth, harmonizing with primary
- **Accent Color (Bright Teal)**: `oklch(0.65 0.20 180)` — Fresh, energetic highlight for interactive elements and visual interest
- **Foreground/Background Pairings**:
  - Background (White `oklch(0.99 0 0)`): Dark text (`oklch(0.20 0.03 240)`) — Ratio 14.5:1 ✓
  - Card (Off-White `oklch(0.98 0.005 240)`): Dark text (`oklch(0.20 0.03 240)`) — Ratio 14.2:1 ✓
  - Primary (Vibrant Blue `oklch(0.50 0.18 220)`): White text (`oklch(0.99 0 0)`) — Ratio 7.2:1 ✓
  - Secondary (Deep Cyan `oklch(0.42 0.16 200)`): White text (`oklch(0.99 0 0)`) — Ratio 9.8:1 ✓
  - Accent (Bright Teal `oklch(0.65 0.20 180)`): White text (`oklch(0.99 0 0)`) — Ratio 4.7:1 ✓
  - Muted (Light Gray `oklch(0.95 0.01 240)`): Medium text (`oklch(0.55 0.04 240)`) — Ratio 5.5:1 ✓

## Font Selection
Typography should project both technical precision and approachability—clear, modern sans-serif with generous spacing for comfortable reading across long-form content.

**Primary Font**: Inter (Google Fonts) — Modern, highly legible geometric sans-serif with excellent screen rendering
**Secondary Font**: JetBrains Mono (Google Fonts) — For code snippets and technical callouts in blog posts

- **Typographic Hierarchy**:
  - H1 (Page Titles): Inter Bold / 48px / tight tracking (-0.02em) / leading-tight
  - H2 (Section Headers): Inter SemiBold / 36px / tight tracking (-0.01em) / leading-snug  
  - H3 (Subsections): Inter SemiBold / 24px / normal tracking / leading-normal
  - Body (Content): Inter Regular / 16px / normal tracking / leading-relaxed (1.75)
  - Small (Metadata): Inter Medium / 14px / wide tracking (0.01em) / leading-normal
  - Code: JetBrains Mono Regular / 14px / mono spacing

## Animations
Animations should be purposeful and subtle—primarily used to guide attention during page transitions and provide tactile feedback on interactions, never delaying user actions.

- **Purposeful Meaning**: Use smooth fade-ins on scroll to progressively reveal content sections; micro-interactions on buttons (scale on hover, subtle press effect) to reinforce clickability
- **Hierarchy of Movement**: Primary CTAs deserve prominent hover states (slight lift + shadow); secondary navigation can use simple underline animations; content cards fade in with slight upward motion on scroll

## Component Selection

- **Components**:
  - **Button**: Primary, secondary, and outline variants for different CTA hierarchies; hover states with subtle scale and shadow
  - **Card**: Service cards, blog post previews, portfolio items with subtle border and hover lift effect
  - **Input, Textarea, Label**: Contact form fields with focus states and validation feedback
  - **Dialog**: For resume preview or expanded case studies (optional enhancement)
  - **Separator**: Subtle dividers between content sections
  - **Badge**: For blog categories and skill tags
  - **Scroll Area**: For blog post list if it grows long

- **Customizations**:
  - **Hero component**: Custom full-height hero with gradient background and animated text
  - **Service Grid**: Custom 3-column responsive grid (stack on mobile)
  - **Blog Post Card**: Custom card with image, category badge, date, title, excerpt
  - **Navigation Bar**: Custom sticky header with logo, nav links, and mobile hamburger
  - **Footer**: Custom multi-column footer with links, social, copyright

- **States**:
  - Buttons: default, hover (subtle lift + shadow), active (slight scale down), disabled (reduced opacity)
  - Form inputs: default, focus (accent border + ring), error (red border + message), success (green checkmark)
  - Cards: default, hover (lift + subtle shadow increase)
  - Links: default, hover (accent color), active (darker accent)

- **Icon Selection**:
  - Navigation: `List` (mobile menu), `X` (close menu)
  - Services: `Lightning` (AI), `Rocket` (modernization), `Users` (teams), `GitBranch` (integrations), `GraduationCap` (training)
  - Social: `LinkedinLogo`, `GithubLogo`, `EnvelopeSimple`, `Calendar`
  - Actions: `DownloadSimple` (resume), `ArrowRight` (CTAs), `ArrowUpRight` (external links)
  - Blog: `Calendar` (date), `Tag` (category), `Clock` (read time)

- **Spacing**:
  - Section padding: `py-20` (desktop), `py-12` (mobile)
  - Content containers: `max-w-6xl mx-auto px-6`
  - Grid gaps: `gap-8` (desktop), `gap-6` (mobile)
  - Card padding: `p-6`
  - Button padding: `px-6 py-3` (large), `px-4 py-2` (default)

- **Mobile**:
  - Navigation collapses to hamburger menu at 768px
  - Hero text scales down from 48px to 32px on mobile
  - Service grid: 3 columns → 2 columns (tablet) → 1 column (mobile)
  - Footer: multi-column → single column stack on mobile
  - Typography: reduce heading sizes by ~30% on mobile
  - Section padding: reduce from py-20 to py-12
  - Touch targets: minimum 44px height for all interactive elements
