const fs = require('fs').promises;
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');


// Loading recipes.json into MongoDB
let recipeSchema = new mongoose.Schema({
    name: {type: String, default: ""},
    description: {type: String, default: ""},
    image: {type: String, default: ""},
    recipeYield: {type: String, default: ""},
    cookTime: {type: String, default: ""},
    prepTIme: {type: String, default: ""},
    ingredients: {type: [String], default: ""}
})
let Recipe = mongoose.model('Recipe', recipeSchema);




const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());

app.get('/', (req, res) => res.send('It\'s working!'))

const port = 8080

app.get('/test', (req, res) => {
    res.json({ message: 'Data received GET request from the server'});
});

let diet = 'none';

app.post('/populateDB', (req, res) => {
    console.log("OH!");

    mongoose.connect('mongodb://localhost:27017/RecipesDB')
    .then(() => {
        console.log('Connected to MongoDB');
        mongoose.connection.db.dropDatabase();
    }).then(() => {
        let db = mongoose.connection;
        db.on('open', function (err) {
            if (err) throw err;
        })

    }).then(() => (
        fs.readFile('recipes.json')
    )).then((response) => (
        JSON.parse(response)
    )).then((json) => {
        const promises = json.map(recipe => {
            return Recipe.create(recipe)
            .then((result) => {console.log("Added recipe:", result.name)});
        });
        return Promise.all(promises);
    }).then((data) => {
        console.log('Done populating database!');
        res.send({success: true, amount: data.length});
    })
})

app.get('/form', (req, res) => {
    res.send(diet);
})

app.listen(port, () => {
    console.log("Server is running on port", port)
})


