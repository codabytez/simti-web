"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { applySchema, ApplyFormValues, NIGERIAN_STATES } from "@/lib/applySchema";
import { FormField, inputBase } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function ApplyForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ApplyFormValues>({
    resolver: zodResolver(applySchema),
  });

  async function onSubmit(data: ApplyFormValues) {
    // TODO: replace with actual submission endpoint
    await new Promise((r) => setTimeout(r, 800));
    console.log(data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <p className="font-display text-3xl font-semibold text-brown-dark mb-3">
          Application received.
        </p>
        <p className="text-brown-light max-w-md mx-auto">
          Thank you for applying to the SIMTI Fellows Programme. We&apos;ll be in touch at the email
          address you provided within 5 working days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {/* Row 1 — name + email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField label="Full name" error={errors.fullName?.message} required>
          <input
            {...register("fullName")}
            placeholder="Dr. Amaka Okonkwo"
            className={cn(inputBase, errors.fullName && "border-red-400 focus:ring-red-200")}
          />
        </FormField>

        <FormField label="Email address" error={errors.email?.message} required>
          <input
            {...register("email")}
            type="email"
            placeholder="amaka@pharmacy.ng"
            className={cn(inputBase, errors.email && "border-red-400 focus:ring-red-200")}
          />
        </FormField>
      </div>

      {/* Row 2 — phone + PCN */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField label="Phone number" error={errors.phone?.message} required>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+2348012345678"
            className={cn(inputBase, errors.phone && "border-red-400 focus:ring-red-200")}
          />
        </FormField>

        <FormField label="PCN registration number" error={errors.pcnNumber?.message} required>
          <input
            {...register("pcnNumber")}
            placeholder="PCN/RPh/..."
            className={cn(inputBase, errors.pcnNumber && "border-red-400 focus:ring-red-200")}
          />
        </FormField>
      </div>

      {/* Row 3 — workplace + type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField label="Current place of work" error={errors.workplace?.message} required>
          <input
            {...register("workplace")}
            placeholder="Pharmacy name or hospital"
            className={cn(inputBase, errors.workplace && "border-red-400 focus:ring-red-200")}
          />
        </FormField>

        <FormField label="Pharmacy type" error={errors.workplaceType?.message} required>
          <select
            {...register("workplaceType")}
            className={cn(inputBase, errors.workplaceType && "border-red-400 focus:ring-red-200")}
            defaultValue=""
          >
            <option value="" disabled>
              Select type
            </option>
            <option value="community">Community pharmacy</option>
            <option value="hospital">Hospital pharmacy</option>
            <option value="other">Other</option>
          </select>
        </FormField>
      </div>

      {/* Row 4 — state */}
      <FormField label="State of practice" error={errors.state?.message} required>
        <select
          {...register("state")}
          className={cn(inputBase, errors.state && "border-red-400 focus:ring-red-200")}
          defaultValue=""
        >
          <option value="" disabled>
            Select state
          </option>
          {NIGERIAN_STATES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </FormField>

      {/* Row 5 — motivation */}
      <FormField
        label="Why do you want to join the SIMTI Fellows Programme?"
        error={errors.motivation?.message}
        required
      >
        <textarea
          {...register("motivation")}
          rows={5}
          placeholder="Tell us about your current practice, what gaps you experience, and what you hope to take away from the cohort..."
          className={cn(
            inputBase,
            "resize-none",
            errors.motivation && "border-red-400 focus:ring-red-200"
          )}
        />
        <p className="text-xs text-brown-light/60 text-right">Min. 80 characters</p>
      </FormField>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <input
          {...register("consent")}
          type="checkbox"
          id="consent"
          className="mt-1 h-4 w-4 rounded border-border accent-teal cursor-pointer"
        />
        <label
          htmlFor="consent"
          className="text-sm text-brown-light cursor-pointer leading-relaxed"
        >
          I agree to be contacted by SIMTI about my application and programme updates.
          {errors.consent && (
            <span className="block text-xs text-red-600 mt-1">{errors.consent.message}</span>
          )}
        </label>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full md:w-auto justify-center"
      >
        {isSubmitting ? "Submitting…" : "Submit Application"}
      </Button>
    </form>
  );
}
