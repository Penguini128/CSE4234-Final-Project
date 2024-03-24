const fs = require('fs').promises;
const mongoose = require('mongoose');

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
}).then(() => {
    console.log('Done!');
    process.exit();
})



