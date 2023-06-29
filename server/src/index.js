import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json);

app.use(cors());

mongoose.connect(`mongodb+srv://mohitom2002:<password>@cluster0.xozenu7.mongodb.net/?retryWrites=true&w=majority`)

const PORT = 1234
app.listen(PORT, () => console.log(`server listening on ${PORT}`))