// Utilisée par les métadonnées Open Graph, le sitemap et robots.txt.
// Pour brancher un domaine personnalisé, définir NEXT_PUBLIC_SITE_URL dans les
// variables d'environnement Vercel : inutile de toucher à cette valeur de repli.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mael-demory.dev";

// Tant que c'est `false`, le bouton « Télécharger mon CV » du hero est masqué
// plutôt que de renvoyer une 404 aux recruteurs.
export const CV_PDF_AVAILABLE = true;

// CV PDF servi selon la langue du site (fichiers dans `public/`), avec le nom
// proposé au téléchargement.
export const CV_PDF = {
    en: { href: "/cv-mael-demory.pdf", fileName: "Mael-Demory-CV-EN.pdf" },
    fr: { href: "/cv-mael-demory-fr.pdf", fileName: "Mael-Demory-CV-FR.pdf" },
} as const;
