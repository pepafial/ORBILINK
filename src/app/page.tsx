import Link from "next/link";

export default function HomePage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orbilink-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full bg-orbilink-100 px-4 py-1 text-sm font-medium text-orbilink-800">
            Marketplace B2B brasileiro
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Conecte sua empresa aos melhores{" "}
            <span className="text-orbilink-600">fornecedores</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Na Orbilink, compradores e fornecedores negociam com transparência, agilidade e
            confiança — tudo em um só lugar.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/cadastrar"
              className="w-full rounded-lg bg-orbilink-600 px-8 py-3 text-center text-sm font-semibold text-white shadow-md transition-colors hover:bg-orbilink-700 sm:w-auto"
            >
              Começar agora
            </Link>
            <Link
              href="/como-funciona"
              className="w-full rounded-lg border border-orbilink-300 bg-white px-8 py-3 text-center text-sm font-semibold text-orbilink-700 transition-colors hover:bg-orbilink-50 sm:w-auto"
            >
              Como funciona
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-3">
          {[
            {
              title: "Fornecedores verificados",
              description: "Catálogo curado com empresas confiáveis em todo o Brasil.",
            },
            {
              title: "Negociação simplificada",
              description: "Cotações, propostas e pedidos em um fluxo único.",
            },
            {
              title: "Escala B2B",
              description: "Feito para volumes, contratos e relações de longo prazo.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-base font-semibold text-orbilink-800">{item.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
