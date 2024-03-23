const express = require('express');
const routes = require('./routes');
const PORT = 3000;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {res.send('Hello World!')});

//Routes
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });