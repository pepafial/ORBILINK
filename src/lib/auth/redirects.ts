import type { AccountType } from "@/types/database";

export function getHomePathForAccountType(accountType: AccountType): string {
  return accountType === "fornecedor" ? "/dashboard/fornecedor" : "/buscar";
}
