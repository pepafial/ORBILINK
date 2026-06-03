"use client";

import { createClient } from "@/lib/supabase/client";
import { resolvePostLoginPath } from "@/lib/auth/profile";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = createClient();

    const { data, error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setError(
        signInError.message === "Invalid login credentials"
          ? "E-mail ou senha incorretos."
          : signInError.message
      );
      setLoading(false);
      return;
    }

    if (!data.user) {
      setError("Não foi possível autenticar. Tente novamente.");
      setLoading(false);
      return;
    }

    const destination =
      redirectTo && redirectTo.startsWith("/dashboard")
        ? redirectTo
        : await resolvePostLoginPath(supabase, data.user.id);

    router.push(destination);
    router.refresh();
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
          autoComplete="current-password"
          required
          minLength={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-primary-400 transition focus:border-primary-400 focus:ring-2"
          placeholder="••••••••"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-primary-400 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-300 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Entrando..." : "Entrar"}
      </button>

      <p className="text-center text-sm text-slate-600">
        Ainda não tem conta?{" "}
        <Link href="/cadastro" className="font-medium text-primary-400 hover:text-primary-300">
          Cadastre-se
        </Link>
      </p>
    </form>
  );
}
