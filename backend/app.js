const express = require('express');

//create an express application
const app = express();

//cette instruction nous donne la possibilité d'accéder au corps de la requête envoyé depuis le front par l'extraction du contenu du json
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // * c'est pour autoriser tout le monde à accéder à notre front
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // pour définir les méthodes de notre serveur
    next();
  });

//ici nous allons afficher les données ici du formulaire de l'interface graphique
app.post('/api/stuff', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
      message: 'Objet créé !'
    });
  });  

//Un middleware est une fonction express qui peut lire 
// /api/stuff qui est le npoint ou l'url ou la route principale. 
//cette url peut encore être replacée par https://localhost:3000//api/stuff
//On attribue un middleware à une route spécique
app.get('/api/stuff', (req, res, next) => {
    const stuff = [
      {
        _id: 'oeihfzeoi',
        title: 'Mon premier objet',
        description: 'Les infos de mon premier objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 4900,
        userId: 'qsomihvqios',
      },
      {
        _id: 'oeihfzeomoihi',
        title: 'Mon deuxième objet',
        description: 'Les infos de mon deuxième objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 2900,
        userId: 'qsomihvqios',
      },
    ];
    res.status(200).json(stuff);
  });








module.exports = app;