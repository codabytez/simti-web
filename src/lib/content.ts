/**
 * Site copy, kept out of the components so figures and quotes can be updated
 * without touching layout or motion code.
 *
 * Curriculum content below is transcribed from the Cohort 2 curriculum PDF
 * (public/simti-cohort-2-curriculum.pdf). It replaces an invented list of
 * "8 core modules" that did not correspond to the real programme.
 *
 * ⚠️ VERIFY BEFORE LAUNCH — `stats` and `testimonials` are still unconfirmed.
 */

export const problems = [
  {
    title: "Bleaching creams dispensed without guidance",
    body: "Hydroquinone and mercury-laced products move across pharmacy counters daily, often without a word of clinical counsel.",
  },
  {
    title: "Topical steroids misused at the point of sale",
    body: "Potent corticosteroids are routinely recommended for conditions they cannot treat, and discontinued without a taper.",
  },
  {
    title: "Skin of colour conditions misdiagnosed or overlooked",
    body: "Dermatology training in Nigeria rarely centres the realities of melanin-rich skin. Pharmacists inherit the same blind spots.",
  },
] as const;

export const pillars = [
  {
    index: "01",
    title: "The Barrier-First Framework",
    body: "Understand how the skin barrier works before any recommendation. Every clinical decision starts here.",
  },
  {
    index: "02",
    title: "Skin of Colour Expertise",
    body: "Trained for the dermatological realities of Nigerian patients: melanin-rich skin, common presentations, and cultural context.",
  },
  {
    index: "03",
    title: "Clinical Confidence at the Counter",
    body: "Turn every dispensing moment into expert skin consultation, and leave each interaction with a clear, evidence-based recommendation.",
  },
] as const;

/** Phase One — the four live training days. */
export const trainingDays = [
  {
    day: "Day 1",
    title: "The Skin, Skin Barrier, Skin Types & Steroid Stewardship",
    note: "For foundation and safe practice",
    topics: [
      "Skin anatomy and physiology relevant to pharmacy practice",
      "Understanding the skin barrier",
      "Skin types and their practical implications",
      "Appropriate steroid and steroid-combination product use vs misuse",
      "Steroid stewardship and pruritus",
      "When to manage, co-manage, or refer",
    ],
  },
  {
    day: "Day 2",
    title: "Inflammatory Skin Conditions",
    topics: [
      "Dermatitis spectrum",
      "Psoriasis",
      "Rosacea",
      "Pharmacy-appropriate management",
      "Red flags and referral thresholds",
    ],
  },
  {
    day: "Day 3",
    title: "Acne & Pigmentary Disorders",
    topics: [
      "Acne assessment and treatment approach",
      "Common reasons acne treatment fails",
      "Post-inflammatory hyperpigmentation",
      "Other common pigmentary concerns",
      "Skin-of-colour considerations",
      "Patient expectations and counselling",
    ],
  },
  {
    day: "Day 4",
    title: "Skin Infections + AI-Assisted Consultation",
    topics: [
      "Common skin infections and treatment",
      "Differentiating bacterial, fungal and inflammatory presentations",
      "Appropriate pharmacy management",
      "AI-assisted consultation",
      "Practical use of AI in skin-health practice",
    ],
  },
] as const;

/** The four phases the cohort moves through. */
export const phases = [
  {
    number: "Phase One",
    title: "Four Intensive Training Days",
    body: "Live virtual sessions spread across two weekends, so there is time to absorb, practise, and return with questions.",
  },
  {
    number: "Phase Two",
    title: "Practical Assignments",
    body: "Learning continues after the live sessions. Participants join small clinical circles, reinforcing the material through collaboration and problem-solving rather than passive revision.",
  },
  {
    number: "Phase Three",
    title: "SIMTI Research Challenge",
    body: "Each team receives a skin-health research question. The objective is to learn how pharmacists contribute to evidence generation — exceptional teams may be invited to develop their work with the SIMTI research team toward peer-reviewed submission.",
  },
  {
    number: "Phase Four",
    title: "SIMTI Skin Health Summit 2026",
    body: "Cohort 2 concludes with the inaugural summit: a gathering of pharmacists, clinicians and educators advancing skin health practice. Selected participants present research posters.",
  },
] as const;

/** Applies across every training day, per the curriculum document. */
export const crossCuttingThemes = [
  "Cosmetic product literacy",
  "Clinical decision-making",
  "Patient counselling",
  "Referral thresholds",
  "Co-management",
  "Case discussions",
] as const;

export const outcomes = [
  "Assess common skin presentations and select appropriate skincare products",
  "Read ingredient lists and understand what cosmetic ingredients actually do",
  "Make safer recommendations and identify inappropriate combinations",
  "Match products to skin type, condition and treatment goals",
  "Recognise when a condition is out of scope and requires referral",
  "Use a structured consultation process",
] as const;

/** ⚠️ Unverified — confirm each figure before this ships. */
export const stats = [
  { value: "142+", label: "Pharmacists Trained" },
  { value: "11", label: "Nigerian States Reached" },
  { value: "4", label: "Intensive Training Days" },
  { value: "96%", label: "Report Increased Clinical Confidence" },
] as const;

/**
 * Testimonials are hidden site-wide until the placeholder attributions below
 * are replaced with real, consented names. Flipping this to `true` restores the
 * section and its nav link together — nothing else needs touching.
 */
export const showTestimonials = false;

/** ⚠️ Placeholder attributions — replace with real, consented names. */
export const testimonials = [
  {
    quote:
      "SIMTI gave me a clinical language for conversations I was already having. I now know exactly what to ask, and what to recommend.",
    author: "Pharmacist A.",
    role: "Community Pharmacy, Lagos",
  },
  {
    quote:
      "I used to dread skin questions. Now I look forward to them. The Barrier-First Framework changed how I see every consultation.",
    author: "Pharmacist B.",
    role: "Hospital Pharmacy, Abuja",
  },
  {
    quote:
      "The cohort model made it possible. Learning alongside colleagues kept me accountable and made the material stick.",
    author: "Pharmacist C.",
    role: "Community Pharmacy, Port Harcourt",
  },
] as const;

export const eligibility = [
  "Licensed pharmacist (PCN registered)",
  "Customer-facing role (community or hospital pharmacy)",
  "Regularly asked about skin conditions and products",
  "Ready to add a clinical specialty to your practice",
] as const;

export const programmeDetails = [
  { icon: "calendar", label: "Cohort 2 dates", value: "3–4 & 10–11 October 2026" },
  { icon: "clock", label: "Delivery mode", value: "Virtual, live on Zoom" },
  { icon: "people", label: "Your trainer", value: "Pharm. Amara Owunwa" },
  { icon: "award", label: "Concludes with", value: "SIMTI Skin Health Summit" },
] as const;

export const heroTrustSignals = ["Cohort-Based Learning", "Live on Zoom"] as const;
