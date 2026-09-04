// ⚠️ Remplacez cette valeur par votre domaine réel une fois le site déployé
// (ou définissez NEXT_PUBLIC_SITE_URL dans l'environnement de déploiement).
// Utilisée par les métadonnées Open Graph, le sitemap et robots.txt.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cv-demory-mael.vercel.app";

// Passe à `true` une fois le fichier `public/cv-mael-demory.pdf` déposé.
// Tant que c'est `false`, le bouton « Télécharger mon CV » du hero est masqué
// plutôt que de renvoyer une 404 aux recruteurs.
export const CV_PDF_AVAILABLE = false;
