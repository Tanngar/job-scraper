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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postings_controller_1 = require("./postings.controller");
const router = express_1.default.Router();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, postings_controller_1.getPostings)(req, res);
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, postings_controller_1.getPosting)(req, res);
}));
router.post('/', (req, res) => {
    (0, postings_controller_1.createPosting)(req, res);
});
router.put('/:id', (req, res) => {
    (0, postings_controller_1.editPosting)(req, res);
});
router.delete('/:id', (req, res) => {
    (0, postings_controller_1.deletePosting)(req, res);
});
exports.default = router;
//# sourceMappingURL=postings.route.js.map