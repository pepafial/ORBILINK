import type { SupabaseClient } from "@supabase/supabase-js";
import type { AccountType, Database } from "@/types/database";
import { getHomePathForAccountType } from "@/lib/auth/redirects";

export async function getProfileAccountType(
  supabase: SupabaseClient<Database>,
  userId: string
): Promise<AccountType | null> {
  const { data, error } = await supabase
    .from("profiles")
    .select("account_type")
    .eq("id", userId)
    .maybeSingle();

  if (error || !data) {
    return null;
  }

  return data.account_type;
}

export async function resolvePostLoginPath(
  supabase: SupabaseClient<Database>,
  userId: string
): Promise<string> {
  const accountType = await getProfileAccountType(supabase, userId);

  if (!accountType) {
    return "/";
  }

  return getHomePathForAccountType(accountType);
}
