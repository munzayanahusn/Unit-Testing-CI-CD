const express = require('express');
const routes = require('./routes');
const PORT = 3000;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {res.send('Hello World!')});

//Routes
app.use(routes);

console.log('NODE_ENV', process.env.NODE_ENV);
if (process.env.NODE_ENV !== 'test'){
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = app;