# quartz-pdf-embed

Plugin local pour **Quartz v5** qui transforme la syntaxe Obsidian `![[fichier.pdf]]` en une iframe avec lien de fallback cliquable.

## Résultat visuel

```
┌─────────────────────────────────────┐
│                                     │
│      [iframe du PDF affiché]        │
│                                     │
├─────────────────────────────────────┤
│  📄 mon-fichier.pdf  (lien)         │
└─────────────────────────────────────┘
```

## Installation

Copier le dossier dans ton projet Quartz :

```
.quartz/
└── plugins/
    └── quartz-pdf-embed/   ← coller ici
        ├── dist/
        │   ├── index.js
        │   └── index.d.ts
        ├── src/
        │   └── index.ts
        └── package.json
```

Puis dans `quartz.config.yaml` :

```yaml
plugins:
  - source: local:quartz-pdf-embed
    enabled: true
    options:
      height: "800px"   # optionnel
      width: "100%"     # optionnel
    order: 15
```

## Syntaxes supportées

```markdown
![[mon-document.pdf]]
![[mon-document.pdf|Titre personnalisé]]
![[dossier/sous-dossier/fichier.pdf]]
```

## Où placer le PDF

Le fichier PDF doit être dans le dossier `content/` de ton projet Quartz,
par exemple : `content/mon-document.pdf`

Il sera accessible à l'URL `/mon-document.pdf` sur ton site.

## Options

| Option   | Défaut    | Description                  |
|----------|-----------|------------------------------|
| `height` | `"800px"` | Hauteur de l'iframe          |
| `width`  | `"100%"`  | Largeur de l'iframe          |
