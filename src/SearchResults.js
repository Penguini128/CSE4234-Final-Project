const express = require('express');
const cors = require('cors');
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

app.post('/form', (req, res) => {
    console.log("OH!");
    diet = req.body.diet;
    console.log(diet);
    res.send('done');
})

app.get('/form', (req, res) => {
    res.send(diet);
})

app.listen(port, () => {
    console.log("Server is running on port", port)
})