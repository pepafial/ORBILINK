import { SignOutButton } from "@/components/auth/SignOutButton";
import { createClient } from "@/lib/supabase/server";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Buscar produtos | Orbilink",
};

export default async function BuscarPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, account_type")
    .eq("id", user.id)
    .maybeSingle();

  if (profile?.account_type === "fornecedor") {
    redirect("/dashboard/fornecedor");
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-primary-400">Área do revendedor</p>
          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            Buscar produtos
          </h1>
          <p className="mt-2 text-slate-600">
            Olá, {profile?.full_name ?? user.email}. Em breve você poderá explorar o
            catálogo de fornecedores aqui.
          </p>
        </div>
        <SignOutButton />
      </div>
    </section>
  );
}
