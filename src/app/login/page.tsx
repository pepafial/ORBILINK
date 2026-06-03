import { AuthShell } from "@/components/auth/AuthShell";
import { LoginForm } from "@/components/auth/LoginForm";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Entrar | Orbilink",
  description: "Acesse sua conta no marketplace B2B Orbilink.",
};

export default function LoginPage() {
  return (
    <AuthShell
      title="Bem-vindo de volta"
      subtitle="Entre com seu e-mail e senha para continuar."
    >
      <Suspense
        fallback={
          <p className="text-center text-sm text-slate-500">Carregando formulário...</p>
        }
      >
        <LoginForm />
      </Suspense>
    </AuthShell>
  );
}
