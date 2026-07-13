/** @type {import('next').NextConfig} */
const nextConfig = {
  // Un package-lock.json existe dans le dossier home : sans ceci, Turbopack
  // prend /Users/mael comme racine et surveille tout le home en dev (OOM).
  turbopack: {
    root: import.meta.dirname,
  },
  allowedDevOrigins: ['192.168.1.21'],
  
};



export default nextConfig;
