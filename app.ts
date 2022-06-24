import express from "express";
import path from "path";

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

app.listen(port, () => {
    return console.log(`Server running on http://localhost:${port}`);
});
