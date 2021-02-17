const express = require('express');
const uuid = require('uuid');

const app = express();
const port = 3000;
const users = [
  {
    name: "hola cocacola",
    age: 555,
    id: 1,
  }
];

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.post('/users', (req, res) => {
  const newUser = { ...req.body }; // Copia superficial
  newUser.id = uuid.v4();

  users.push(newUser);
  res.json(newUser);
});

app.get('/users', (req, res) => {
  res.json(users);
});


app.listen(port, () => console.log(`App running on port ${port}`));