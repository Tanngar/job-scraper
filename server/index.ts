import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import postingsRouter from './src/postings/postings.route';
import tagsRouter from './src/tags/tags.route';
import categoriesRouter from './src/categories/categories.route';
import scrapersRouter from './src/scrapers/scrapers.route';

export const prisma = new PrismaClient();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/postings', postingsRouter);
app.use('/api/tags', tagsRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/scrapers', scrapersRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Listening on the port: ${PORT}`);
});
