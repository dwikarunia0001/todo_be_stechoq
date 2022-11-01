const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt')
const express = require('express')
const cors = require('cors')
// Prisma Client
const prisma = new PrismaClient()
const app = express()
// const port = 8000

// Handle cors, form data, and json
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// REST API Routes
app.get('/', async (req, res) => {
    res.status(200).send({
        status: true,
        message: 'Hello this is API from Express Tutorial'
    })
})

app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany()
    res.json(users)
})

app.listen(8000, () => {
    console.log(`Server is running on http://localhost:8000`)
})