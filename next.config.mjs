/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/entrar", destination: "/login", permanent: true },
      { source: "/cadastrar", destination: "/cadastro", permanent: true },
    ];
  },
};

export default nextConfig;
