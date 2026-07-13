# DESIGN.md — Direction visuelle du portfolio

Direction : sobriété Apple (apple.com / iOS). L'objectif est un rendu calme, dense en contenu,
sans aucun marqueur "généré par IA" (dégradés décoratifs, glassmorphism généralisé, orbes floues).

## Palette

- **Fond** : `#f5f5f7` (clair) / `#000000` (sombre). Surfaces : blanc pur / `#1c1c1e`.
- **Texte** : `#1d1d1f` / `#f5f5f7`. Secondaire : `#6e6e73` / `#a1a1a6`.
- **Un seul accent** : bleu `#0071e3` (clair) / `#0a84ff` (sombre). Réservé aux liens,
  boutons et libellés d'eyebrow. Aucun dégradé de texte, aucune autre couleur décorative.
- Tuiles imbriquées (logos, stats) : `muted` (`#f5f5f7` sur carte blanche / `#2c2c2e` sur `#1c1c1e`).

## Typographie

- Geist (proche de SF Pro). Hiérarchie par graisse + taille, pas par couleur.
- Titres display : `font-semibold`, tracking négatif (`-0.02em` et plus serré en grand), leading ~1.1.
- Pattern de titre de section Apple : partie forte en `foreground`, suite de phrase en `muted-foreground`
  dans le même `h2` ("Parcours. Formation et expérience.").
- Corps : 14–15px, leading confortable, tracking neutre.

## Surfaces et profondeur

- Cartes : `.surface-card` — blanches/sombres, `rounded-3xl`, ombre quasi nulle en clair, aucune en sombre.
  Pas de bordures visibles en mode clair, pas de backdrop-blur sur les cartes.
- Le matériau translucide (`.nav-material`, blur + saturate) est réservé au chrome flottant
  (dock de navigation, boutons theme/GitHub). Jamais deux matériaux empilés.
- `prefers-reduced-transparency` : le matériau devient opaque.

## Élément signature

Le nom du hero, en display géant sur deux lignes (uppercase, `clamp(3.25rem, 11vw, 6.5rem)`),
dont la graisse de Geist (fonte variable 100–900) réagit à la proximité du curseur lettre par
lettre via des springs. C'est le seul geste spectaculaire de la page — tout le reste doit rester
discipliné. Désactivé en `prefers-reduced-motion` et sur pointeur tactile (graisse fixe 500).

## Motion

- Springs critiquement amortis (`type: "spring", bounce: 0, duration ~0.7`) pour les entrées.
- Pill active de la nav : `layoutId` + spring raide (stiffness 400 / damping 32).
- Feedback au press (`:active { scale }`) instantané sur tout élément interactif.
- Hover : levée max 3px + ombre douce. Pas de rotations, pas de glows pulsés.
- `MotionConfig reducedMotion="user"` + media query CSS : les slides deviennent des fondus.

## Interdits (marqueurs vibecodés)

Texte en dégradé, orbes floues de fond, grille décorative, cartes inclinées, pills multicolores
(emerald/orange), glassmorphism sur le contenu, animations infinies voyantes, ombres colorées.
