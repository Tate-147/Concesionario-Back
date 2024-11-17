import express from "express";

const PORT = 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>hello world</h1>");
});

app.get("/cars", (req, res) => {
    const body = req.body;
    console.log(body);
    res.send(body);
});

app.get("/cars/:id/:idsub", (req, res) => {
    const { id, idsub } = req.params;
    res.send(`id: ${id} idsub: ${idsub}`);
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})