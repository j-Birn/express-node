import express from 'express'
import path from 'path'
import { requestTime, logger } from './middlewares.js'

const __dirname = path.resolve()
const PORT = process.env.PORT ?? 3000
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(requestTime)
app.use(logger)

app.get('/', (req, res) => {
	res.render('index', { title: 'Main page', active: 'main' })
})

app.get('/features', (req, res) => {
	res.render('features', { title: 'Features page', active: 'features' })
})

app.listen(PORT, () => {
	console.log(`Server has been started on port ${PORT}...`)
})