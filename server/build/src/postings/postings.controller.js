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
exports.deletePosting = exports.editPosting = exports.createPosting = exports.getPosting = exports.getPostings = void 0;
const index_1 = require("../../index");
const getPostings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const postings = yield index_1.prisma.posting.findMany({
        orderBy: [
            {
                createdAt: 'desc',
            },
        ],
    });
    res.status(200).json(postings);
});
exports.getPostings = getPostings;
const getPosting = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const posting = yield index_1.prisma.posting.findUnique({
        where: {
            id,
        },
    });
    res.status(200).json(posting);
});
exports.getPosting = getPosting;
const createPosting = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const posting = req.body;
    if (!posting) {
        res.status(400);
    }
    const newPosting = yield index_1.prisma.posting.create({
        data: Object.assign(Object.assign({}, posting), { analyzedDescription: '' }),
    });
    res.status(200).json(newPosting);
});
exports.createPosting = createPosting;
const editPosting = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.body, { id } = _a, posting = __rest(_a, ["id"]);
    if (!posting) {
        res.status(400);
    }
    const editedPosting = yield index_1.prisma.posting.update({
        where: {
            id: parseInt(id),
        },
        data: posting,
    });
    res.status(200).json(editedPosting);
});
exports.editPosting = editPosting;
const deletePosting = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    yield index_1.prisma.posting.delete({
        where: {
            id,
        },
    });
    res.status(200);
});
exports.deletePosting = deletePosting;
//# sourceMappingURL=postings.controller.js.map