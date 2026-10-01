/** @type {import('next').NextConfig} */
const nextConfig = {
  // Un package-lock.json existe dans le dossier home : sans ceci, Turbopack
  // prend /Users/mael comme racine et surveille tout le home en dev (OOM).
  turbopack: {
    root: import.meta.dirname,
  },
  allowedDevOrigins: ['192.168.1.21'],
  // Adresses courtes imprimées sur le CV : chacune ouvre la section Projets
  // sur le bon projet (le slug doit exister dans `projectSlugs`, app/page.tsx).
  async redirects() {
    return [
      { source: '/raytracer', destination: '/?project=raytracer#projets', permanent: false },
      { source: '/f1dle', destination: '/?project=f1dle#projets', permanent: false },
      { source: '/f1-ticket', destination: '/?project=f1-ticket-system#projets', permanent: false },
    ];
  },
};



export default nextConfig;
