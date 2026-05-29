"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Loader2,
  Lock,
  RefreshCw,
  Users,
} from "lucide-react";
import { toast } from "sonner";

import { Container, Section, SectionLabel } from "@/components/shared/container";
import {
  AGENCY_TYPES,
  TEAM_SIZES,
  waitlistSchema,
  type WaitlistInput,
} from "@/lib/validation";
import { cn } from "@/lib/utils";

type FormState = WaitlistInput;
type FieldErrors = Partial<Record<keyof FormState, string>>;

const INITIAL: FormState = {
  name: "",
  email: "",
  agency_type: "",
  team_size: "",
  challenge: "",
};

export function Waitlist() {
  const [values, setValues] = React.useState<FormState>(INITIAL);
  const [errors, setErrors] = React.useState<FieldErrors>({});
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    const parsed = waitlistSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      setErrors(
        Object.fromEntries(
          Object.entries(fieldErrors).map(([k, v]) => [k, v?.[0]])
        ) as FieldErrors
      );
      toast.error("Please fix the highlighted fields.");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        duplicate?: boolean;
        message?: string;
        issues?: Record<string, string[]>;
      };

      if (!res.ok) {
        if (res.status === 422 && json.issues) {
          const next: FieldErrors = {};
          for (const [k, v] of Object.entries(json.issues)) {
            next[k as keyof FormState] = v?.[0];
          }
          setErrors(next);
        }
        toast.error(json.error ?? "Something went wrong. Please try again.");
        setStatus("idle");
        return;
      }

      setStatus("success");
      toast.success(
        json.duplicate
          ? "You're already on the list — we'll be in touch."
          : "You're in. Check your inbox for confirmation.",
        { duration: 5000 }
      );
    } catch (err) {
      console.error(err);
      toast.error("Network error. Please try again.");
      setStatus("idle");
    }
  };

  return (
    <Section id="waitlist" className="overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — pitch */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <Image
                src="/opssync-mark.svg"
                alt="OpsSync"
                width={56}
                height={56}
                priority
                className="rounded-[24%]"
              />
              <SectionLabel number="09">Waitlist</SectionLabel>
            </div>

            <h2 className="mt-8 max-w-xl text-balance text-[36px] font-medium leading-[1.04] tracking-[-0.025em] text-foreground sm:text-[48px] lg:text-[56px]">
              Get early access to{" "}
              <span className="serif-italic text-zinc-500">OpsSync.</span>
            </h2>

            <p className="mt-5 max-w-lg text-pretty text-[15.5px] leading-relaxed text-zinc-500 sm:text-[16.5px]">
              We&apos;re opening access in waves to a small group of design-first
              agencies. Tell us about your operation — we&apos;ll prioritise the
              teams we can help fastest.
            </p>

            {/* Differentiators */}
            <ul className="mt-10 space-y-5">
              {[
                {
                  icon: Users,
                  k: "Client portals",
                  v: "Every client gets their own panel for updates, approvals, and files.",
                },
                {
                  icon: Lock,
                  k: "Bank-grade security",
                  v: "AES-256 at rest, TLS 1.3 in flight, SOC 2-aligned infrastructure.",
                },
                {
                  icon: RefreshCw,
                  k: "Continuously updated",
                  v: "We ship every Friday. Your feature requests become roadmap items.",
                },
              ].map((b) => (
                <li key={b.k} className="flex items-start gap-4 border-t border-zinc-200 pt-5">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-forest-100 bg-forest-50 text-forest-700">
                    <b.icon className="size-4" />
                  </span>
                  <div>
                    <div className="text-[14.5px] font-semibold text-foreground">
                      {b.k}
                    </div>
                    <div className="mt-0.5 text-[13.5px] leading-relaxed text-zinc-500">
                      {b.v}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-zinc-500">
              <span className="inline-flex items-center gap-1.5">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-forest-500 opacity-50" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-forest-700" />
                </span>
                1,400+ agencies on the waitlist
              </span>
              <span className="hidden h-3 w-px bg-zinc-200 sm:inline-block" />
              <span>Replies within 24h</span>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-5 lg:flex lg:flex-col">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <SuccessCard
                  key="success"
                  name={values.name.split(" ")[0] || "there"}
                  onReset={() => {
                    setValues(INITIAL);
                    setStatus("idle");
                  }}
                />
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_24px_64px_-32px_rgba(0,0,0,0.18)] sm:p-7 lg:h-full lg:justify-center lg:p-9"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <h3 className="text-[15px] font-semibold tracking-[-0.005em] text-foreground">
                      Join the waitlist
                    </h3>
                    <span className="inline-flex items-center gap-1 rounded-full border border-forest-100 bg-forest-50 px-2 py-0.5 text-[10.5px] font-medium text-forest-700">
                      <Lock className="size-3" />
                      Secure
                    </span>
                  </div>

                  <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
                    <UnderlineField label="Full name" htmlFor="name" error={errors.name}>
                      <input
                        id="name"
                        autoComplete="name"
                        placeholder="Jane Doe"
                        value={values.name}
                        onChange={(e) => update("name", e.target.value)}
                        aria-invalid={!!errors.name}
                        className={underlineInput}
                      />
                    </UnderlineField>

                    <UnderlineField label="Work email" htmlFor="email" error={errors.email}>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@agency.com"
                        value={values.email}
                        onChange={(e) => update("email", e.target.value)}
                        aria-invalid={!!errors.email}
                        className={underlineInput}
                      />
                    </UnderlineField>

                    <div className="grid grid-cols-2 gap-4">
                      <UnderlineField
                        label="Agency type"
                        htmlFor="agency_type"
                        error={errors.agency_type}
                      >
                        <NativeSelect
                          id="agency_type"
                          value={values.agency_type}
                          onChange={(e) => update("agency_type", e.target.value)}
                          aria-invalid={!!errors.agency_type}
                          placeholder="Choose"
                          options={AGENCY_TYPES}
                        />
                      </UnderlineField>

                      <UnderlineField
                        label="Team size"
                        htmlFor="team_size"
                        error={errors.team_size}
                      >
                        <NativeSelect
                          id="team_size"
                          value={values.team_size}
                          onChange={(e) => update("team_size", e.target.value)}
                          aria-invalid={!!errors.team_size}
                          placeholder="Choose"
                          options={TEAM_SIZES}
                        />
                      </UnderlineField>
                    </div>

                    <UnderlineField
                      label="What hurts most right now?"
                      htmlFor="challenge"
                      error={errors.challenge}
                      meta={
                        <span className="font-mono text-[10px] text-zinc-400">
                          {values.challenge.length}/1000
                        </span>
                      }
                    >
                      <textarea
                        id="challenge"
                        placeholder="One sentence is plenty."
                        value={values.challenge}
                        onChange={(e) => update("challenge", e.target.value)}
                        aria-invalid={!!errors.challenge}
                        maxLength={1000}
                        rows={2}
                        className={cn(underlineInput, "resize-none py-2.5 leading-relaxed")}
                      />
                    </UnderlineField>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="group mt-2 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground text-[14px] font-medium text-background transition-all hover:bg-foreground/90 active:scale-[0.99] disabled:opacity-50"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="size-4 animate-spin" />
                          Saving your spot…
                        </>
                      ) : (
                        <>
                          Join the waitlist
                          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-[11px] text-zinc-500">
                      Takes 30 seconds · We never share your email
                    </p>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ---------- subcomponents ---------- */

const underlineInput = cn(
  "peer w-full appearance-none border-0 border-b border-zinc-200 bg-transparent px-0 py-2 text-[14.5px] text-foreground transition-colors",
  "placeholder:text-zinc-400",
  "focus:border-foreground focus:outline-none focus:ring-0",
  "aria-[invalid=true]:border-red-400"
);

function UnderlineField({
  label,
  htmlFor,
  error,
  meta,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  meta?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <div className="flex items-baseline justify-between">
        <label
          htmlFor={htmlFor}
          className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-zinc-500"
        >
          {label}
        </label>
        {meta}
      </div>
      <div className="mt-1">{children}</div>
      {error && (
        <p
          className="mt-1 text-[11px] text-red-500"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}

function NativeSelect({
  id,
  value,
  onChange,
  placeholder,
  options,
  ...rest
}: {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder: string;
  options: readonly { value: string; label: string }[];
} & Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  "id" | "value" | "onChange"
>) {
  return (
    <div className="relative">
      <select
        id={id}
        value={value}
        onChange={onChange}
        {...rest}
        className={cn(
          underlineInput,
          "appearance-none pr-6",
          value === "" && "text-zinc-400"
        )}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value} className="text-foreground">
            {o.label}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-0 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
    </div>
  );
}

function SuccessCard({
  name,
  onReset,
}: {
  name: string;
  onReset: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-start rounded-2xl border border-zinc-200 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_24px_64px_-32px_rgba(0,0,0,0.18)] sm:p-8 lg:h-full lg:justify-center lg:p-9"
    >
      <motion.span
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="grid size-12 place-items-center rounded-full bg-forest-700"
      >
        <CheckCircle2 className="size-6 text-white" strokeWidth={1.8} />
      </motion.span>

      <h3 className="mt-6 text-[24px] font-medium leading-tight tracking-[-0.02em] text-foreground sm:text-[28px]">
        You&apos;re on the list, <span className="serif-italic">{name}.</span>
      </h3>
      <p className="mt-2 text-[14.5px] leading-relaxed text-zinc-500">
        Confirmation sent to your inbox. We&apos;ll reach out as your spot
        opens up.
      </p>

      <div className="mt-7 flex items-center gap-2 text-[13px]">
        <a
          href={`mailto:hello@opssync.app?subject=${encodeURIComponent("My agency stack")}`}
          className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3.5 py-2 font-medium text-foreground transition-colors hover:border-zinc-300"
        >
          Share your stack
          <ArrowUpRight className="size-3.5" />
        </a>
        <button
          type="button"
          onClick={onReset}
          className="rounded-full px-3.5 py-2 text-zinc-500 transition-colors hover:text-foreground"
        >
          Add another
        </button>
      </div>
    </motion.div>
  );
}
