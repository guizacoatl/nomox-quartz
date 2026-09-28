import { QuartzComponent } from '@quartz-community/types';

interface PagefindSearchOptions {
    /** Affiche le panneau d'aperçu du contenu de la page à côté des résultats */
    enablePreview: boolean;
}
declare const _default: (userOpts?: Partial<PagefindSearchOptions>) => QuartzComponent;

export { _default as PagefindSearch, type PagefindSearchOptions };
