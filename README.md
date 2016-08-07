# jamnow-project
PFE Simplon

Salut les amis ^_^

Quelques consignes pour comprendre comment marche le bouzin

## Comment avoir une preview du site ?

Pour voir le site, ouvrez le terminal à la racine du projet et tapez:

`gulp`

Si tout va bien chez vous, ça lance votre navigateur par défaut avec la page d'accueil. Rien que ça ! :D

Si vous faites des modifications sur un des fichiers, à cause de ma config un peu boiteuse de `gulp-nodemon`, il faudra recharger la page... Oui, même si `BrowserSync` est sensé le faire tout seul :'(

## Concrètement il fait quoi ce monsieur Gulp dont tu parles tout le temps ?

Il nous sauve la vie. Et de l'organisation.

Il est configuré dans le **gulpfile.js**, que vous pouvez lire si vous voulez, la syntaxe est très accessible et ça explique assez bien son travail.

**Sinon, important à savoir**

Il travaille avec deux dossiers, nommés à dessein.

Le dossier **source** (src pour les intimes), est notre espace de travail. C'est dans ce dossier que nous allons coder.

**Gulp** travaille avec des **watchers** qui lui permettent de *surveiller* les modifications d'un certain groupe de fichiers et d'effectuer des actions en conséquence. Dans notre cas:

1. Il s'occupe de mettre tous nos fichiers .scss dans le global.scss, qu'il transforme en global.css

2. Il vérifie et minifie tous nos Javascripts

3. Il copie tels quels nos fichiers HTML

4. Il compresse nos images pour qu'elles prennent moins de place

5. Il lance BrowserSync pour recharger automatiquement le navigateur au fil des modifications (en théorie)

6. Il combat le crime en enfilant son costume de GulpMan

7. Il fait le café

8. Et bien plus encore... (le 8ème point, donc le symbole de l'infini, pour sous-entendre cet horizon illimité de *recettes* gulp)

Et toutes ces actions fantabuleuses, c'est génial. Mais il en fait quoi de nos fichiers ?

C'est là qu'intervient le dossier **distribution** (dist pour les intimes), qui contient notre projet *bundlé* par gulp. C'est le dossier qu'on utilisera en prod.
C'est pourquoi il faut bien faire attention:

**TOUS LES LIENS DANS INDEX.HTML SONT RELATIFS AUX CHEMINS TELS QU'ILS EXISTENT DANS LE DOSSIER DIST, ET NON SRC**

C'est une petite gymnastique du cerveau, mais il faut toujours penser que gulp vous montre le résultat tel qu'il est dans le dossier **dist**.

## Mais en vrai à part ça je code où ?

### HTML

Créez vos fichiers HTML dans le dossier dédié, à savoir `src/public/views/pages`. Donnez le bon nom à votre fichier selon la vue que vous créez, et n'oubliez pas de router votre vue.
le fichier src/public/app/app.config.js est votre ami, copiez dessus ou bien visitez [la doc de ui-router](http://angular-ui.github.io/ui-router/site/#/api/ui.router)

### SASS

Créez votre fichier .scss dans le dossier dédié, à savoir `src/public/assets/scss`. Donnez lui le bon nom selon le component qu'il est sensé refléter.
Pas de lien à faire, vu que gulp s'occupe d'importer votre fichier dans le global.scss qui est **LA** feuille de style de référence du projet :)

### JavaScript

Créer vos fichiers js dans les dossiers appropriés, selon que vous faites des **controllers** , **directives** , **services** (on appelle ça des services mais en vrai créez des Factories de préférence)... Tous situés dans `src/public/app` . Pour les javascripts _décoratifs_ , passez par `src/public/assets/js`.
Dans les deux cas, n'oubliez pas de linker vos JS dans la partie réservée à cet effet sur `src/public/views/index.html`

## Et elle est où la base de données ?

Pas là. Elle pas là, mais elle est où ?  Pas là...

**COMING SOON**