"use client";

import { createClient } from "@/lib/supabase/client";
import { getHomePathForAccountType } from "@/lib/auth/redirects";
import type { AccountType } from "@/types/database";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const accountOptions: { value: AccountType; label: string; description: string }[] = [
  {
    value: "fornecedor",
    label: "Fornecedor",
    description: "Vendo produtos para revendedores",
  },
  {
    value: "revendedor",
    label: "Revendedor",
    description: "Compro de fornecedores no marketplace",
  },
];

export function SignUpForm() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState<AccountType>("revendedor");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    const supabase = createClient();

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName.trim(),
          account_type: accountType,
        },
      },
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    if (!data.user) {
      setError("Não foi possível criar a conta. Tente novamente.");
      setLoading(false);
      return;
    }

    if (data.session) {
      const { error: profileError } = await supabase.from("profiles").upsert({
        id: data.user.id,
        full_name: fullName.trim(),
        account_type: accountType,
      });

      if (profileError) {
        setError(
          "Conta criada, mas não foi possível salvar o perfil. Entre em contato com o suporte."
        );
        setLoading(false);
        return;
      }

      router.push(getHomePathForAccountType(accountType));
      router.refresh();
      return;
    }

    setSuccess(
      "Conta criada! Verifique seu e-mail para confirmar o cadastro antes de entrar."
    );
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <p
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
        >
          {error}
        </p>
      )}

      {success && (
        <p
          role="status"
          className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-800"
        >
          {success}
        </p>
      )}

      <div>
        <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-slate-700">
          Nome
        </label>
        <input
          id="fullName"
          type="text"
          autoComplete="name"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-primary-400 transition focus:border-primary-400 focus:ring-2"
          placeholder="Seu nome ou razão social"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-primary-400 transition focus:border-primary-400 focus:ring-2"
          placeholder="voce@empresa.com.br"
        />
      </div>

      <div>
        <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-slate-700">
          Senha
        </label>
        <input
          id="password"
          type="password"
          autoComplete="new-password"
          required
          minLength={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-primary-400 transition focus:border-primary-400 focus:ring-2"
          placeholder="Mínimo de 6 caracteres"
        />
      </div>

      <fieldset>
        <legend className="mb-2 text-sm font-medium text-slate-700">Tipo de conta</legend>
        <div className="space-y-2">
          {accountOptions.map((option) => (
            <label
              key={option.value}
              className={`flex cursor-pointer gap-3 rounded-lg border p-3 transition ${
                accountType === option.value
                  ? "border-primary-400 bg-primary-50/20"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <input
                type="radio"
                name="accountType"
                value={option.value}
                checked={accountType === option.value}
                onChange={() => setAccountType(option.value)}
                className="mt-1 text-primary-400 focus:ring-primary-400"
              />
              <span>
                <span className="block text-sm font-medium text-slate-900">{option.label}</span>
                <span className="block text-xs text-slate-600">{option.description}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-primary-400 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-300 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Criando conta..." : "Criar conta"}
      </button>

      <p className="text-center text-sm text-slate-600">
        Já tem conta?{" "}
        <Link href="/login" className="font-medium text-primary-400 hover:text-primary-300">
          Entrar
        </Link>
      </p>
    </form>
  );
}
