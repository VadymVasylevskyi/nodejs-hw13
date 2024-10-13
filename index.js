import express from 'express';
import connectDB from './config/db.js';

import magazineRoutes from './routes/magazineRoutes.js';
import articleRoutes from './routes/articleRoutes.js';

const app = express();

connectDB();

app.use(express.json());

app.use('/api', magazineRoutes);
app.use('/api', articleRoutes);

app.listen(3000, () => {
  console.log(`Сервер запущен на порту 3000`);
});