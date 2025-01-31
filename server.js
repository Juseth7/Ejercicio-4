// Importar Express
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());


app.use(express.static('public'));

let users = [];

app.post('/register', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ success: false, message: 'Nombre y correo electrónico son requeridos' });
    }

    users.push({ name, email });

    res.json({ success: true });
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});