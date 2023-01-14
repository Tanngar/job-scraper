import express from 'express';
import { createTag, deleteTag, getTags } from './tags.controller';

const router = express.Router();

router.get('/', async (req, res) => {
  getTags(req, res);
});

router.post('/', async (req, res) => {
  createTag(req, res);
});

router.delete('/:id', async (req, res) => {
  deleteTag(req, res);
});

export default router;
