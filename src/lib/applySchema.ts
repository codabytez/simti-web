import { z } from "zod";

const NIGERIAN_STATES = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT - Abuja",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
] as const;

export const applySchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name is too long"),

  email: z.string().email("Please enter a valid email address"),

  phone: z.string().regex(/^(\+234|0)[789]\d{9}$/, "Please enter a valid Nigerian phone number"),

  pcnNumber: z
    .string()
    .min(3, "Please enter your PCN registration number")
    .max(20, "PCN number looks too long"),

  workplace: z
    .string()
    .min(2, "Please enter your current place of work")
    .max(150, "Workplace name is too long"),

  workplaceType: z.enum(["community", "hospital", "other"], {
    error: "Please select your pharmacy type",
  }),

  state: z.enum(NIGERIAN_STATES, {
    error: "Please select your state",
  }),

  motivation: z
    .string()
    .min(80, "Please write at least 80 characters")
    .max(1000, "Please keep your response under 1000 characters"),

  consent: z.boolean().refine((v) => v === true, "You must agree to be contacted"),
});

export type ApplyFormValues = z.infer<typeof applySchema>;
export { NIGERIAN_STATES };
