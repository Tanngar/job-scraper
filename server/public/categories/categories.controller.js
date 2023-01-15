var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { prisma } from '..';
export const getCategories = async (req, res) => {
    const postings = await prisma.category.findMany({
        orderBy: [
            {
                createdAt: 'desc',
            },
        ],
    });
    res.status(200).json(postings);
};
export const getCategory = async (req, res) => {
    const id = parseInt(req.params.id);
    const category = await prisma.category.findUnique({
        where: {
            id,
        },
    });
    res.status(200).json(category);
};
export const createCategory = async (req, res) => {
    const { category, color } = req.body;
    if (!category) {
        res.status(400);
    }
    const newCategory = await prisma.category.create({
        data: { name: category, color },
    });
    res.status(200).json(newCategory);
};
export const editCategory = async (req, res) => {
    const _a = req.body, { id } = _a, category = __rest(_a, ["id"]);
    if (!category) {
        res.status(400);
    }
    const editedCategory = await prisma.category.update({
        where: {
            id: parseInt(id),
        },
        data: category,
    });
    res.status(200).json(editedCategory);
};
export const deleteCategory = async (req, res) => {
    const id = parseInt(req.params.id);
    await prisma.category.delete({
        where: {
            id,
        },
    });
    res.status(200);
};
//# sourceMappingURL=categories.controller.js.map