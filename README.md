# Portfolio — Maël Demory

Portfolio-CV personnel : parcours, compétences, projets et contact, présentés dans une
interface bilingue (anglais par défaut / français) inspirée du langage visuel d'Apple.

## Stack

- **Next.js 16** (App Router, prérendu statique) + **React 19** + **TypeScript**
- **Tailwind CSS** pour le style, tokens de design dans `app/globals.css`
- **Framer Motion** pour les animations (springs amortis, respect de `prefers-reduced-motion`)
- Déployé sur **Vercel**

## Architecture

| Emplacement | Rôle |
|---|---|
| `app/page.tsx` | Page unique : hero, à propos, parcours, compétences, projets, passions, contact |
| `app/translations.ts` | Tout le contenu éditorial, en anglais et en français |
| `app/globals.css` | Tokens de couleurs (clair/sombre), matériaux, boutons, focus |
| `app/logos/` | Tuiles de logos des compétences |
| `components/` | Section passions, carte de base, toggle de thème |
| `DESIGN.md` | Direction visuelle et règles de design du projet |
| `tasks/CV-AUDIT.md` | Audit du contenu et suivi des améliorations (recherche de stage) |
| `tasks/CV-EN.md` | Source du CV anglais, à garder alignée sur `app/translations.ts` |

Particularités : switch de langue EN/FR persisté en `localStorage`, thème clair/sombre
initialisé avant le premier paint (préférence stockée puis système), image Open Graph et
icône Apple générées au build (`app/opengraph-image.tsx`, `app/apple-icon.tsx`).

## Développement

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint    # ESLint 9 (flat config)
npm run build   # build de production + prérendu
```

Pour modifier le contenu (à propos, parcours, projets, passions), éditez `app/translations.ts` —
chaque entrée existe en anglais et en français. Les compétences sont groupées par niveau de maîtrise
dans `competenceLevels` (`app/page.tsx`).

Le bouton « Télécharger mon CV » du hero est masqué tant que `CV_PDF_AVAILABLE` vaut `false`
(`app/site.ts`) : passez-le à `true` après avoir déposé `public/cv-mael-demory.pdf`.
