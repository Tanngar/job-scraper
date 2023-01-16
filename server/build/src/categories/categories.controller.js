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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.editCategory = exports.createCategory = exports.getCategory = exports.getCategories = void 0;
const index_1 = require("../../index");
const getCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const postings = yield index_1.prisma.category.findMany({
        orderBy: [
            {
                createdAt: 'desc',
            },
        ],
    });
    res.status(200).json(postings);
});
exports.getCategories = getCategories;
const getCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const category = yield index_1.prisma.category.findUnique({
        where: {
            id,
        },
    });
    res.status(200).json(category);
});
exports.getCategory = getCategory;
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category, color } = req.body;
    if (!category) {
        res.status(400);
    }
    const newCategory = yield index_1.prisma.category.create({
        data: { name: category, color },
    });
    res.status(200).json(newCategory);
});
exports.createCategory = createCategory;
const editCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.body, { id } = _a, category = __rest(_a, ["id"]);
    if (!category) {
        res.status(400);
    }
    const editedCategory = yield index_1.prisma.category.update({
        where: {
            id: parseInt(id),
        },
        data: category,
    });
    res.status(200).json(editedCategory);
});
exports.editCategory = editCategory;
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    yield index_1.prisma.category.delete({
        where: {
            id,
        },
    });
    res.status(200);
});
exports.deleteCategory = deleteCategory;
//# sourceMappingURL=categories.controller.js.map