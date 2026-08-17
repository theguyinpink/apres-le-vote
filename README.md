# Après le vote — icônes de tous les programmes

Cette mise à jour contient le fichier `party-programs.ts` complet et les **89 icônes de chapitres** :

- La France insoumise : 18 chapitres
- Parti socialiste : 20 chapitres
- Les Écologistes : 13 chapitres
- Renaissance : 10 dossiers
- Les Républicains : 9 dossiers et orientations
- Rassemblement national : 19 livrets et documents

## Installation

Copier le contenu de ce dossier à la racine du projet `apres-le-vote` et accepter le remplacement des fichiers existants.

Les fichiers remplacés sont :

- `lib/party-programs.ts`
- `components/program-illustration.tsx`
- `components/program-explorer.tsx`
- `app/globals.css`

Le dossier suivant est ajouté :

- `public/icons/`

`party-programs.ts` contient désormais un champ facultatif `icon`, un numéro global pour chaque chapitre et le chemin exact de chacun des 89 SVG.

Les anciennes illustrations restent présentes comme solution de secours. Les SVG sont affichés avec `next/image` en mode `unoptimized`, car ils sont déjà vectoriels et ne nécessitent pas l’optimiseur d’images.

La planche `apercu-tous-les-partis.png` permet de contrôler rapidement toutes les collections. Les partis y apparaissent dans cet ordre : LFI, PS, Les Écologistes, Renaissance, LR et RN.
