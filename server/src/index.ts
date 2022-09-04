import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.end('Hi from new server!');
});

app.listen(3001, () => {
    console.log(`Listening on port 3001`);
});