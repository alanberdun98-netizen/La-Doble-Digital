const express = require("express");

const app = express();

app.use(express.static("../"));
const PORT = 3000;

app.get("/api/noticias", (req, res) => {
    res.json([
        {
            titulo: "primera noticia",
            categoria: "politica"
        }
    ]);
});

app.get("/", (req, res) => {
    const path = require("path");
    res.sendFile(path.join(__dirname, "../index.html"));
});



app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});