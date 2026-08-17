# Après le vote — version production

Cette archive contient le projet complet et ses assets, sans `node_modules` ni caches de build.

## Installation
```bash
npm install
npm run lint
npm run build
```

## Ajustements de production
- suppression de la métadonnée `codex-preview: development`;
- badge `Présidentielle 2027`;
- liens Reconquête mis à jour vers `https://leprogrammepourlafrance.fr/`;
- 26 logos convertis en WebP 512×512 et allégés;
- test HTML adapté au mode production.

`package-lock.json` est conservé.
