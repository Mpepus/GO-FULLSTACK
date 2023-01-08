const express = require('express');

//create an express application
const app = express();

//Un middleware est une fonction express qui peut lire 
app.use((req, res, next) => {
    console.log("requête traitée");
    next();
});

app.use((req, res, next) => {
    res.status(201);
    next();
});

app.use((req, res, next) => {
    res.json({messages: 'Votre requête a bien été traitée'})
    next();
});

app.use((req, res, next) => {
    console.log("réponse envoyée avec succès");
});








module.exports = app;