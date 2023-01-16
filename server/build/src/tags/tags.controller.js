"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTag = exports.createTag = exports.getTagsByCategoryId = exports.getTags = void 0;
const index_1 = require("../../index");
const getTags = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tags = yield index_1.prisma.tag.findMany({
        orderBy: [
            {
                createdAt: 'desc',
            },
        ],
        include: {
            category: true,
        },
    });
    res.status(200).json(tags);
});
exports.getTags = getTags;
const getTagsByCategoryId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { categoryId } = req.body;
    const tags = yield index_1.prisma.tag.findMany({
        where: {
            categoryId,
        },
        orderBy: [
            {
                createdAt: 'desc',
            },
        ],
    });
    res.status(200).json(tags);
});
exports.getTagsByCategoryId = getTagsByCategoryId;
const createTag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { text, type } = req.body;
    const cateogryId = parseInt(req.body.categoryId);
    const tag = yield index_1.prisma.tag.create({
        data: { text, type, category: { connect: { id: cateogryId } } },
    });
    res.status(200).json(tag);
});
exports.createTag = createTag;
const deleteTag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        yield index_1.prisma.tag.delete({
            where: {
                id,
            },
        });
        res.status(200);
    }
    catch (e) {
        console.error(e);
    }
});
exports.deleteTag = deleteTag;
//# sourceMappingURL=tags.controller.js.map