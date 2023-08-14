import express from 'express';
const app = express();
import dotenv from 'dotenv';
import connectDB from './connectConfig/config';
import routing from './routes/createCourseRoutes';

dotenv.config();

const { PORT } = process.env;

connectDB();

app.use(express.json());

app.use('/v1', routing);

app.listen(PORT, () => {
  console.log(`Port connect success ${PORT}`);
});
