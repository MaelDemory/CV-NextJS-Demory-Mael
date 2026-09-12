// Utilisée par les métadonnées Open Graph, le sitemap et robots.txt.
// Pour brancher un domaine personnalisé, définir NEXT_PUBLIC_SITE_URL dans les
// variables d'environnement Vercel : inutile de toucher à cette valeur de repli.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mael-demory.dev";

// Passe à `true` une fois le fichier `public/cv-mael-demory.pdf` déposé.
// Tant que c'est `false`, le bouton « Télécharger mon CV » du hero est masqué
// plutôt que de renvoyer une 404 aux recruteurs.
export const CV_PDF_AVAILABLE = false;
