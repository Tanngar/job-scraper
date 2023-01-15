import express from 'express';
import { getCategories, getCategory, createCategory, editCategory, deleteCategory, } from './categories.controller';
const router = express.Router();
router.get('/', async (req, res) => {
    getCategories(req, res);
});
router.get('/:id', async (req, res) => {
    getCategory(req, res);
});
router.post('/', (req, res) => {
    createCategory(req, res);
});
router.put('/:id', (req, res) => {
    editCategory(req, res);
});
router.delete('/:id', (req, res) => {
    deleteCategory(req, res);
});
export default router;
//# sourceMappingURL=categories.route.js.map