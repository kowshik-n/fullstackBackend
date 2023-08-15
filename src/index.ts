import express from 'express';
const app = express();
import dotenv from 'dotenv';
import connectDB from './connectConfig/config';
import routing from './routes/createCourseRoutes';
import cors from 'cors';
dotenv.config();

const { PORT } = process.env;

connectDB();

app.use(
  cors({
    // Frontend URL
  })
);

app.use(express.json());

app.use('/v1', routing);

app.listen(PORT, () => {
  console.log(`Port connect success ${PORT}`);
});
