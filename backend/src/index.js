import express from 'express';
import { PORT } from './config.js'
import america from 'colors'
import usersRoutes  from './routes/user.routes.js'
import indexRoutes from './routes/index.routes.js'
import morgan from 'morgan'

const app = express()

app.use(express.json())

app.use(morgan('dev'));

app.use(usersRoutes)
app.use(indexRoutes)

app.listen(PORT)
console.log(`Server on port ${PORT}`.america);




