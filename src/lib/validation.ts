import { z } from "zod";

export const AGENCY_TYPES = [
  { value: "creative", label: "Creative agency" },
  { value: "digital_marketing", label: "Digital marketing" },
  { value: "branding", label: "Branding studio" },
  { value: "web_development", label: "Web / product development" },
  { value: "production", label: "Production house" },
  { value: "pr_communications", label: "PR & communications" },
  { value: "consulting", label: "Consulting" },
  { value: "other", label: "Other" },
] as const;

export const TEAM_SIZES = [
  { value: "1-5", label: "1 – 5" },
  { value: "6-15", label: "6 – 15" },
  { value: "16-30", label: "16 – 30" },
  { value: "31-60", label: "31 – 60" },
  { value: "60+", label: "60+" },
] as const;

export const waitlistSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please tell us your name.")
    .max(120, "That looks too long."),
  email: z
    .string()
    .trim()
    .min(1, "We need an email to confirm your spot.")
    .email("That doesn't look like a valid email."),
  agency_type: z.enum(
    AGENCY_TYPES.map((t) => t.value) as [string, ...string[]],
    { message: "Pick the option that fits best." }
  ),
  team_size: z.enum(
    TEAM_SIZES.map((t) => t.value) as [string, ...string[]],
    { message: "Pick your team size." }
  ),
  challenge: z
    .string()
    .trim()
    .min(4, "A short sentence is plenty — what's your biggest pain?")
    .max(1000, "Keep it under 1000 characters."),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;
