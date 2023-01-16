"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const cors_1 = __importDefault(require("cors"));
const postings_route_1 = __importDefault(require("./src/postings/postings.route"));
const tags_route_1 = __importDefault(require("./src/tags/tags.route"));
const categories_route_1 = __importDefault(require("./src/categories/categories.route"));
const scrapers_route_1 = __importDefault(require("./src/scrapers/scrapers.route"));
exports.prisma = new client_1.PrismaClient();
const PORT = process.env.PORT || 3001;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/postings', postings_route_1.default);
app.use('/api/tags', tags_route_1.default);
app.use('/api/categories', categories_route_1.default);
app.use('/api/scrapers', scrapers_route_1.default);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(PORT, () => {
    console.log(`Listening on the port: ${PORT}`);
});
//# sourceMappingURL=index.js.map