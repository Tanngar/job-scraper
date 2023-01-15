import express from 'express';
import {
  scrapeLinkedInSearch,
  scrapeSpecificLinkedInUrl,
} from './scrapers.controller';

const router = express.Router();

router.post('/linkedin', async (req, res) => {
  scrapeLinkedInSearch(req, res);
});

router.post('/linkedin/url', async (req, res) => {
  scrapeSpecificLinkedInUrl(req, res);
});

export default router;
