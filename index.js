require('dotenv').config();

const express = require('express');
const users = require('./routers/users');
const tournaments = require('./routers/tournaments');
const teams = require('./routers/teams');
const playerTypes = require('./routers/playerTypes');
const player = require('./routers/players');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hello from simple server :)');
});

app.use(express.json());

app.use('/api/users', users);
app.use('/api/tournaments', tournaments);
app.use('/api/teams', teams);
app.use('/api/player-types', playerTypes);
app.use('/api/players', player);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
