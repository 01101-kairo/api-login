import express from 'express'
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()

import userRoute from './modules/user/user.route.js'
import authRoute from './modules/auth/auth.route.js'

const app = express()
const PORT = process.env.PORT || 8080;
app.use(express.json())
app.use(cors())

app.use('/users', userRoute)
app.use('/auth', authRoute)

app.get('/health', (_,res) => {
  return res.send('Sistema esta operacional!')
})

app.listen(PORT, async () => {
  console.log('Servidor rodando na porta 8080')
})
