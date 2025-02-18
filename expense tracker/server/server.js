import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';
import bodyParser from 'body-parser';
import expenseRoutes from './routes/expenseRoutes.js'

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/", expenseRoutes);


app.listen(PORT, () => {
    console.log(`server up! running on port ${PORT}`);
})