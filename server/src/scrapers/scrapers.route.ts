import express from 'express';
import { scrapeLinkedIn } from './scrapers.controller';

const router = express.Router();

router.post('/linkedin', async (req, res) => {
  scrapeLinkedIn(req, res);
});

export default router;
