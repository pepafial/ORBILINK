import Link from "next/link";

const footerLinks = [
  { href: "/fornecedores", label: "Fornecedores" },
  { href: "/como-funciona", label: "Como funciona" },
  { href: "/planos", label: "Planos" },
  { href: "/contato", label: "Contato" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Link href="/" className="text-lg font-bold text-primary-400">
              Orbilink
            </Link>
            <p className="mt-2 max-w-sm text-sm text-slate-600">
              Marketplace B2B que conecta empresas brasileiras a fornecedores
              confiáveis.
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 sm:justify-end">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-600 transition-colors hover:text-primary-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6 text-center text-sm text-slate-500 sm:text-left">
          © {year} Orbilink. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
