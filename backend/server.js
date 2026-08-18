const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("La Doble Digital - Backend funcionando 🚀");
});

app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});