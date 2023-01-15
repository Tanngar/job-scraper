import express from 'express';
import {
  getPostings,
  getPosting,
  createPosting,
  editPosting,
  deletePosting,
} from './postings.controller';

const router = express.Router();

router.get('/', async (req, res) => {
  getPostings(req, res);
});

router.get('/:id', async (req, res) => {
  getPosting(req, res);
});

router.post('/', (req, res) => {
  createPosting(req, res);
});

router.put('/:id', (req, res) => {
  editPosting(req, res);
});

router.delete('/:id', (req, res) => {
  deletePosting(req, res);
});

export default router;
