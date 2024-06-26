import express from 'express'
import cors from 'cors'
import router from './routes/routes.js'

const PORT = process.env.PORT || 9090

const app = express()
app.use(express.json())
app.use(cors())

app.use('/', router)

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))