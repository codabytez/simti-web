/**
 * Site copy, kept out of the components so figures and quotes can be updated
 * without touching layout or motion code.
 *
 * Curriculum content below is transcribed from the Cohort 2 curriculum PDF
 * (public/simti-cohort-2-curriculum.pdf). It replaces an invented list of
 * "8 core modules" that did not correspond to the real programme.
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

/** Phase One — the five live training days. */
export const trainingDays = [
  {
    day: "Day 1",
    title: "The Skin, Skin Barrier, Skin Types & Steroid Stewardship",
    note: "For foundation and safe practice",
    topics: [
      "Skin anatomy and physiology relevant to pharmacy practice",
      "Understanding the skin barrier",
      "Skin types and their practical implications",
      "Skin sensitivity",
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
      "Other common pigmentary concerns (dark knuckles, “sunburn”, acanthosis nigricans and more)",
      "Skin-of-colour considerations",
      "Patient expectations and counselling",
    ],
  },
  {
    day: "Day 4",
    title: "Common Skin Infections, Presentations and Lesions",
    topics: [
      "Common skin infections and treatment",
      "Differentiating between bacterial, fungal and viral presentations",
      "Common lesions pharmacists may encounter (e.g. skin tags)",
      "Appropriate pharmacy management",
    ],
  },
  {
    day: "Day 5",
    title: "Skin Health Consultation + AI-Assisted Consultation",
    topics: [
      "How to read and interpret ingredient lists",
      "Rational ingredient combinations",
      "The SIMTI skin consultation framework",
      "Practical use of AI in skin-health practice",
    ],
  },
] as const;

/** The three phases the cohort moves through. */
export const phases = [
  {
    number: "Phase One",
    title: "Five Intensive Training Days",
    body: "Live virtual sessions spread across three weekends, so there is time to absorb, practise, and return with questions.",
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
  "Make safer recommendations without guessing, and identify inappropriate combinations",
  "Match products to skin type, condition and treatment goals",
  "Recognise when a condition is out of scope and requires referral",
  "Use a structured consultation process in your pharmacy",
] as const;

export const stats = [
  { value: "142+", label: "Fellows Trained" },
  { value: "5", label: "Nigerian States Reached" },
  { value: "5", label: "Intensive Training Days" },
  { value: "96%", label: "Report Increased Clinical Confidence" },
] as const;

/** Flipping this to `true` restores the testimonials section and its nav link together. */
export const showTestimonials = true;

export const testimonials = [
  {
    quote: `Before SIMTI, I lacked confidence in assessing skin conditions, recommending appropriate treatments, and understanding the science behind professional skincare. My goal was to build strong clinical skincare knowledge, improve my practical skills, and become a confident Skin Health Pharmacist capable of providing evidence-based skincare solutions.

SIMTI has significantly improved my knowledge and confidence. I can now perform thorough skin consultations, identify common skin concerns, recommend suitable treatment plans, and make informed skincare decisions based on scientific evidence. The training has brought me much closer to becoming the Skin Health Pharmacist I aspire to be.

Honestly I would recommend them, without hesitation. They provide high-quality training that combines theory with practical experience. The knowledge, and supportive learning environment have made me more competent and confident in professional skincare practice. SIMTI has not only improved my skills but has also given me the confidence to pursue a career in aesthetic and clinical skincare with professionalism and competence.`,
    author: "Pharm Onyinyechi Okpe (B.Pharm)",
    role: "Aesthetic Pharmacist, Lagos",
  },
  {
    quote: `Before SIMTI, I struggled a lot with identifying skin conditions and didn't always have the best approach to managing different skin conditions but now I can properly identify and differentiate between skin conditions and recommend appropriate treatment plans which has helped us better serve our patients and create more opportunities for revenue generation from our skincare category at Tejjas Pharmacy.

I would definitely recommend SIMTI because being part of the pioneer cohort helped me improve, develop and broaden my knowledge of skin conditions and their treatments.`,
    author: "Tejjas Pharmacy Ltd",
    role: "Community Pharmacy",
  },
  {
    quote: `SIMTI has been refreshing for my confidence as a pharmacist while treating skin related issues. Prior to SIMTI, I used to pray to not encounter skin related issues because it comes with some complications that requires a pharmacist to be observant, intuitive and you just had to get it right because it'll give credence to your practice. SIMTI reinforced what I already knew, give me new knowledge, and built my confidence in dealing with skin related issues and general skin science.

After SIMTI, I began looking forward to encountering skin issues because I get the opportunity to show expertise and bring repute to myself and wherever I'm stationed.

A big thank you to SIMTI for the opportunity because what they are doing is unprecedented because prior to SIMTI I never knew this type of knowledge could be easily accessible.`,
    author: "Pharm Dr Nduka Benedict (PharmD)",
    role: "Community Pharmacist",
  },
  {
    quote: `Joining Cohort 1 of the Safe In My Skin Institute (SIMTI) training was such a valuable experience for me as a community pharmacist. I already had a solid foundation in patient care, but this training took my skin health knowledge to a whole new level, from confidently differentiating fungal, bacterial, and other skin infections, to understanding the ingredients and actives behind the products I recommend. The curriculum was detailed and well structured, and it has sharpened how I counsel my patients every single day. I'm proud to have been part of Cohort 1, and I would recommend SIMTI to any pharmacist looking to deepen their expertise in skin health.`,
    author: "Pharm Arachie Chidimma",
    role: "Community Pharmacist",
  },
  {
    quote: `Before SIMTI, I lacked confidence when creating skincare routines for people with different skin concerns. I mostly knew trending products or products that worked for my own routine, and I often doubted my knowledge when making recommendations. My goals were to build a stronger foundation in skin health, learn how to create routines tailored to individual needs, and confidently recommend additional products while still keeping the client's skin needs at the centre.

After SIMTI, I feel I have achieved those goals. I now have a better understanding of how to approach skin concerns and can confidently apply what I've learned to conditions such as acne, ingrown hairs, sensitive skin, rosacea, psoriasis and contact dermatitis. SIMTI has given me a much stronger foundation and a clearer way of thinking through skin-health recommendations.

I would recommend SIMTI because the training is practical and the lectures are supported with real-life examples, especially for those interested in community pharmacy practice. Understanding the skin now feels much less overwhelming, and I feel more equipped to become the kind of skin-health pharmacist I want to be.`,
    author: "Pharm Chinezerem Anita (BPharm)",
    role: "Community Pharmacist at Medplus",
  },
] as const;

export const eligibility = [
  "Licensed pharmacist (PCN registered)",
  "Customer-facing role (community or hospital pharmacy)",
  "Regularly asked about skin conditions and products",
  "Ready to add a clinical specialty to your practice",
] as const;

export const programmeDetails = [
  { icon: "calendar", label: "Cohort 2 dates", value: "10–25 October 2026" },
  { icon: "clock", label: "Delivery mode", value: "Virtual, live on Zoom" },
  { icon: "people", label: "Your trainer", value: "Pharm. Amara Owunwa" },
  { icon: "award", label: "Outcome", value: "SIMTI Certified Fellow" },
] as const;

export const heroTrustSignals = ["Cohort-Based Learning", "Live on Zoom"] as const;
