import express from 'express';
import cors from 'cors';
import productRoute from './routes/product';
import morgan from 'morgan';
const app = express();
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use('/api',productRoute)

  const PORT = 5000
app.listen(PORT,() => {
  console.log("sever dang chay");
})
