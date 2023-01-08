# DEVENIR DEVELOPEUR FULLSTACK EN JAVASCRIPT N°1
Proprietaire: `Mpepus`

copyleft©2023: vous avez l'autorisation de copier, modifier et distriuer les copies modifiés




## Rapport du projet
---------------------------------------------------------------------------------------------------------

---------------------------------------------------------------------------------
Dans ce rapport, je ferais une synthèse assez explicite de cette formation openclassroom, sur comment faire un backend en javascript. 
Dans ce travail, je vais partir d'un template angularjs et construire le backend de ce denier.  
  I install all tools for this work:  
  * To install Nodejs,
  * we create folder name __go-fullstack__ after we clone the repository of angularjs template  an use the next command:
    *  > cd go-fullstack  -->  `git clone https://github.com/OpenClassrooms-Student-Center/go-fullstack-v3-fr.git`
  * Repository is cloned we have to install any components to execute the frontend.
    * > For this, within frontend folder (`cd frontend`) we use `npm install`        
  * View to result of frontend an use the next command:
    * > To do `npm run start` 
  * Now create a backend folder within we construct the application backend 

Nous avons déjà installé notre frontend, maintenant nous allons nous conscentrer sur le backend. Pour ce faire dans le dossier backend nous allons commencer:
*  Par initialiser notre server via la commande `npm init` au niveau du point par défaut(*index.js*) nous allons mette *`server.js`*. Une fois l'initialisation terminée, nous pouvons voir qu'un fichier *`package.json`* a été crée qui permettra de rescenser tous les modules installer pour notre backend.
*  Nous allons essayer un code pour voir comment lancer notre serveur et voir l'effet:
   * Soit le code: `console.log("Hello word")`
    > En tapant `node server` dans le terminal on peut voir s'afficher *`Hello word`*. 
    
    Le problème avec cette commande c'est que nous serons obligée de la relancée après que notre servr.js ait été modifié, c'est fatisdieux mais nous pouvons éviter cela à installation un outil qui rafraichira automatiquement pour nous.
*  Nous allons installer maintenant *nodemon* qui redémarrera automatiquement notre server lorsque les modifications seront éffectuées.
   * Pour cela nous allons utiliser la commande `npm install -g nodemon` __*-g*__ permet d'installer globalement  cet outil, c'est-à-dire qu'il pouraa être disponible en dehors de notre projet, on pourra le lancer dans un autre projet javascript sans avoir besoin de l'installer à nouveau
   * Suivie de `nodemon server` dans notre terminal pour lancer notre serveur. MAintenant grâce à ce dernier on peut modifier notre fichier __server.js__ sans problème.
*  Nous installons maintenant express qui est une librairie javascript pour la construction d'application du type client-side. en utilisant la commande `npm install express` toujours dans le dossier backend.
   * Dans le fichier __`app.js`__ nous allons crée des middleware qui sont des fonctions express qui traitent les réponse et requête.

__Remarque :__ Une API (Application Programming Interface) ou interface de programmation d'application est programme qui est utilisé pour faire le lien entre deux ou plusieurs partie du code. Des concepts sont beaucoup utilisés, *__CRUD__* pour `Create-Read-Update-Delete` et *__CORS__* pour `Cross-Origin-Ressource-Sharing` qui est une mésure de sécurité entre le frontend et le backend lorsque les deux ne partagent pas la même origine.

---------------------------------------------------------------------------------------------------------
## INSTALLATION 
---------------------------------------------------------------------------------------------------------

---------------------------------------------------------------------------------------------------------
__NB :__ Il s'agit d'une application web permettant aux utilisateurs de mettre en vente leur vieux objets
1. Ouvrir le terminal et faire:
   1. `mkdir GO-FULLSTACK`
   2. `cd GO-FULLSTACK`
   3. `mkdir frontend` puis `mkdir backend`
2. Nous allons maintenant cloner les dépôt que nous avons besoin:
   1. Ouvrir le terminal
   2. >Se positionner dans le dossier GO-FULLSTACK et faire `cd frontend` suivie d'un `git clone https://github.com/OpenClassrooms-Student-Center/go-fullstack-v3-fr.git`
   3. >Se positionner dans le dossier GO-FULLSTACK et faire `cd backend` suivie d'un `git clone https://github.com/Mpepus/GO-FULLSTACK.git`
3. Dans la racine du projet faire:
      >`npm install` commande qui permettra d'installer toutes les dépendances de notre projet pour pouvoir l'exécuter en local. 
