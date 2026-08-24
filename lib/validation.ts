import { z } from "zod";

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .optional()
    .transform((value) => value || null);

const optionalUrl = z
  .string()
  .trim()
  .max(1000)
  .optional()
  .transform((value) => value || null)
  .refine((value) => value === null || URL.canParse(value), "Invalid URL");

export const softwareLeadSchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  workEmail: z.string().trim().email().max(254),
  phone: optionalText(40),
  company: z.string().trim().min(2).max(160),
  role: optionalText(120),
  projectStage: z.enum([
    "idea",
    "scoping",
    "building",
    "modernizing",
    "scaling-team",
  ]),
  budgetRange: z.enum([
    "under-15k",
    "15k-30k",
    "30k-75k",
    "75k-150k",
    "150k-plus",
    "not-sure",
  ]),
  timeline: z.enum(["asap", "1-3-months", "3-6-months", "6-plus-months", "flexible"]),
  projectBrief: z.string().trim().min(30).max(5000),
  existingStack: optionalText(1000),
  complianceNeeds: optionalText(1000),
  locale: z.enum(["en", "vi"]),
  sourceUrl: optionalUrl,
  utmSource: optionalText(160),
  utmMedium: optionalText(160),
  utmCampaign: optionalText(240),
  privacyAcknowledged: z.literal(true),
  website: z.string().max(0).optional(),
});

export type SoftwareLeadInput = z.infer<typeof softwareLeadSchema>;

