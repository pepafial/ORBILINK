import { AuthShell } from "@/components/auth/AuthShell";
import { SignUpForm } from "@/components/auth/SignUpForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cadastro | Orbilink",
  description: "Crie sua conta de fornecedor ou revendedor no Orbilink.",
};

export default function CadastroPage() {
  return (
    <AuthShell
      title="Crie sua conta"
      subtitle="Escolha o tipo de conta e comece a usar o marketplace B2B."
    >
      <SignUpForm />
    </AuthShell>
  );
}
