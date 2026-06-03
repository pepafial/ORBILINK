import Link from "next/link";

export default function Home() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/30 to-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full bg-primary-50/40 px-4 py-1 text-sm font-medium text-primary-300">
            Marketplace B2B brasileiro
          </p>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Conecte sua empresa aos melhores{" "}
            <span className="text-primary-400">fornecedores</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 sm:text-xl">
            Orbilink simplifica a compra entre empresas: descubra parceiros,
            compare propostas e feche negócios com segurança.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/cadastro"
              className="w-full rounded-lg bg-primary-400 px-8 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-300 sm:w-auto"
            >
              Começar agora
            </Link>
            <Link
              href="/como-funciona"
              className="w-full rounded-lg border border-primary-200 px-8 py-3 text-center text-sm font-semibold text-primary-400 transition-colors hover:bg-primary-50/20 sm:w-auto"
            >
              Como funciona
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
