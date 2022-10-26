import express from "express";
import cors from "cors";
import InvestmentRoute from "./routes/InvestmentRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(InvestmentRoute);

app.listen(3000, () => {
    console.log('listening on port 3000')
})