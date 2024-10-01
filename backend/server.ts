import express from "express"

const app = express()
const PORT = 3000

app.use(express())
app.use(express.json())

app.get("/", (_req, res) => {
    res.send("I am alive")
})

app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`);
})