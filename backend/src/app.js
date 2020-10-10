import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import path from 'path'

import indexRouter from './router/index.router'

const app = express();
app.set('port' , process.env.PORT || 3000)

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors({origin:"http://localhost:4200"}))


//router
app.use(indexRouter)

app.use(express.static(path.resolve('./dist/public')))

export default app;