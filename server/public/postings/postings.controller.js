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
export const getPostings = async (req, res) => {
    const postings = await prisma.posting.findMany({
        orderBy: [
            {
                createdAt: 'desc',
            },
        ],
    });
    res.status(200).json(postings);
};
export const getPosting = async (req, res) => {
    const id = parseInt(req.params.id);
    const posting = await prisma.posting.findUnique({
        where: {
            id,
        },
    });
    res.status(200).json(posting);
};
export const createPosting = async (req, res) => {
    const posting = req.body;
    if (!posting) {
        res.status(400);
    }
    const newPosting = await prisma.posting.create({
        data: Object.assign(Object.assign({}, posting), { analyzedDescription: '' }),
    });
    res.status(200).json(newPosting);
};
export const editPosting = async (req, res) => {
    const _a = req.body, { id } = _a, posting = __rest(_a, ["id"]);
    if (!posting) {
        res.status(400);
    }
    const editedPosting = await prisma.posting.update({
        where: {
            id: parseInt(id),
        },
        data: posting,
    });
    res.status(200).json(editedPosting);
};
export const deletePosting = async (req, res) => {
    const id = parseInt(req.params.id);
    await prisma.posting.delete({
        where: {
            id,
        },
    });
    res.status(200);
};
//# sourceMappingURL=postings.controller.js.map