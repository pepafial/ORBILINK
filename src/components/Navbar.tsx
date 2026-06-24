"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/fornecedores", label: "Fornecedores" },
  { href: "/como-funciona", label: "Como funciona" },
  { href: "/planos", label: "Planos" },
] as const;

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Principal"
      >
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-orbilink-800 transition-colors hover:text-orbilink-600 sm:text-2xl"
        >
          Orbilink
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-orbilink-700"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/entrar"
            className="rounded-lg px-4 py-2 text-sm font-medium text-orbilink-700 transition-colors hover:bg-orbilink-50"
          >
            Entrar
          </Link>
          <Link
            href="/cadastrar"
            className="rounded-lg bg-orbilink-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-orbilink-700"
          >
            Cadastrar
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? "Fechar" : "Abrir"} menu</span>
          {menuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-slate-200 md:hidden">
          <ul className="flex flex-col gap-1 px-4 py-3 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-orbilink-50 hover:text-orbilink-700"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 flex flex-col gap-2 border-t border-slate-100 pt-3">
              <Link
                href="/entrar"
                className="rounded-lg px-3 py-2 text-center text-sm font-medium text-orbilink-700 hover:bg-orbilink-50"
                onClick={() => setMenuOpen(false)}
              >
                Entrar
              </Link>
              <Link
                href="/cadastrar"
                className="rounded-lg bg-orbilink-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-orbilink-700"
                onClick={() => setMenuOpen(false)}
              >
                Cadastrar
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
