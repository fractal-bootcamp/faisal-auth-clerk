import express, { NextFunction, Request, Response } from "express"
import dotenv from "dotenv"
import cors from "cors"
import { PrismaClient } from "@prisma/client";
import { clerkMiddleware, clerkClient, getAuth, requireAuth } from "@clerk/express";

dotenv.config()

const app = express()
const PORT = 3000
const prisma = new PrismaClient()

const identifyUserMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = getAuth(req)
    if (!userId) {
        return next() // Do nothing if there is no auth user
    }

    try {
        const clerkUser = await clerkClient.users.getUser(userId)

        let user = await prisma.user.findUnique({
            where: { clerkId: userId }
        })

        if (!user) {
            user = await prisma.user.create({
                data: {
                    name: clerkUser.firstName || "Unknown.",
                    clerkId: userId
                }
            })
        }
        req.user = user
        next()

    } catch (error) {
        console.error("Error in identifyUserMiddleware:", error);
        res.status(500).json({ message: "Internal server error." })
    }
}

app.use(cors({ origin: true }))
app.use(express.json())
app.use(clerkMiddleware())
app.use(identifyUserMiddleware)

app.get("/", (_req: Request, res: Response) => {
    res.send("I am alive")
})

app.get("/protected", requireAuth({ signInUrl: "/sign-in" }), async (req: Request, res: Response) => {
    const { userId } = getAuth(req)

    if (userId) {
        const user = await clerkClient.users.getUser(userId)
        res.json({ user })
    } else {
        res.json({ message: "You are not logged in." })
    }
})

app.get("/sign-in", (_req: Request, res: Response) => {
    res.render("sign-in")
})

app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`)
})