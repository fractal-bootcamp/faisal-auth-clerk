import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { clerkMiddleware, clerkClient, getAuth, requireAuth } from "@clerk/express";

dotenv.config()

const app = express()
const PORT = 3000

app.use(cors({ origin: "http://localhost:5174" }))
app.use(express())
app.use(express.json())
app.use(clerkMiddleware())

app.get("/", (_req, res) => {
    res.send("I am alive")
})

app.get("/protected", requireAuth({ signInUrl: "/sign-in" }), async (req, res) => {
    const { userId } = getAuth(req)
    const user = await clerkClient.users.getUser(userId)
})

app.get("/sign-in", (req, res) => {

    res.render("sign-in")
})

app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`);
})