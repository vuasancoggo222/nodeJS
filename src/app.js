import express from 'express';
import cors from 'cors';
import productRoute from './routes/product';
import authRoute from './routes/users'
import morgan from 'morgan';
import mongoose from 'mongoose';
import { readdirSync } from "fs"
import path,{ dirname } from "path"

const app = express();
//Middlewares
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
//Routes
// readdirSync(`${__dirname}/routes`).map(file => app.use("/api", require(`./routes/${file}`))) ;
app.use("/api",productRoute)
app.use("/api",authRoute)
//Connect DB
mongoose.connect("mongodb://localhost:27017/nodejs")
.then(()=> console.log("Ket noi database thanh cong"))
.catch(err => console.log(err))
  const PORT = 5000
//start Server
app.listen(PORT,() => {
  console.log(`Sever dang chay tai cong ${PORT}`);
})
