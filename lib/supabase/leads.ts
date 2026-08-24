import "server-only";

import type { SoftwareLeadInput } from "@/lib/validation";
import { getSupabaseAdmin } from "@/lib/supabase/admin";

export async function createSoftwareLead(input: SoftwareLeadInput) {
  const supabase = getSupabaseAdmin();

  const { data, error } = await supabase
    .from("software_leads")
    .insert({
      full_name: input.fullName,
      work_email: input.workEmail.toLowerCase(),
      phone: input.phone,
      company: input.company,
      role: input.role,
      project_stage: input.projectStage,
      budget_range: input.budgetRange,
      timeline: input.timeline,
      project_brief: input.projectBrief,
      existing_stack: input.existingStack,
      compliance_needs: input.complianceNeeds,
      locale: input.locale,
      source_url: input.sourceUrl,
      utm_source: input.utmSource,
      utm_medium: input.utmMedium,
      utm_campaign: input.utmCampaign,
      privacy_acknowledged: input.privacyAcknowledged,
    })
    .select("id")
    .single();

  if (error) {
    throw new Error(`Unable to save software lead: ${error.code}`);
  }

  return { id: data.id as string };
}
