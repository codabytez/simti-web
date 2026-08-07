/**
 * Single source of truth for site-wide constants.
 *
 * `applyUrl` is the canonical application path. Applications are handled
 * entirely by Tix; the site does not collect applicant data itself.
 */
export const site = {
  name: "SIMTI",
  fullName: "Safe In My Skin Training Institute",
  /** Per the Cohort 2 curriculum document's sign-off. */
  tagline: "Barrier-First Science, Always",
  url: "https://safeinmyskintraininginstitute.com",
  email: "hello@safeinmyskintraininginstitute.com",
  applyUrl: "https://tix.africa/discover/safe-in-my-skin-training-institute-simti-cohort",
  curriculumPdf: "/simti-cohort-2-curriculum.pdf",
  social: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
} as const;
