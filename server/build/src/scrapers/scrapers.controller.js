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
exports.scrapeSpecificLinkedInUrl = exports.scrapeLinkedInSearch = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const formatData_1 = require("./formatData");
const scrapeJobPosting_1 = require("./scrapeJobPosting");
const scrapeLinkedInSearch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { position, location } = req.body;
    const locationQuery = `&location=${location}`;
    const PAGE_URL = `https://www.linkedin.com/jobs/search/?keywords=${position}${location && locationQuery}`;
    try {
        const NO_MATCH_FOUND_TEXT = 'We couldn’t find a match';
        // const browser = await puppeteer.launch({ devtools: true });
        const browser = yield puppeteer_1.default.launch();
        const page = yield browser.newPage();
        yield page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36');
        yield page.setViewport({ width: 1920, height: 1080 });
        yield page.goto(PAGE_URL, {
            waitUntil: 'load',
        });
        const data = [];
        // await page.screenshot({ path: 'fullpage.png', fullPage: true });
        const noMatchResultElement = yield page.$('.main-title');
        const noMatchResultText = yield (noMatchResultElement === null || noMatchResultElement === void 0 ? void 0 : noMatchResultElement.evaluate((element) => element.textContent));
        const noMatchFound = noMatchResultText === null || noMatchResultText === void 0 ? void 0 : noMatchResultText.includes(NO_MATCH_FOUND_TEXT);
        if (noMatchFound) {
            res
                .status(400)
                .json({ data: [], error: 'No job postings matching your criteria.' });
        }
        // Starts at 1, because LinkedIn's search item's [data-row] attribute starts at 1
        for (let i = 1; i < 6; i++) {
            const jobPostingDetails = yield page.evaluate(scrapeJobPosting_1.scrapeJobPosting);
            data.push(jobPostingDetails);
            const jobPostingSelector = `ul.jobs-search__results-list > li > div[data-row="${i}"] > a`;
            const initilActive = yield page.evaluate(() => {
                var _a;
                return (_a = document.querySelector('.topcard__flavor-row > span a')) === null || _a === void 0 ? void 0 : _a.innerHTML;
            });
            yield Promise.all([
                page.click(jobPostingSelector),
                page.waitForSelector('.topcard__flavor-row > span a'),
                page.waitForFunction((initilActive) => {
                    var _a;
                    const currentActive = (_a = document.querySelector('.topcard__flavor-row > span a')) === null || _a === void 0 ? void 0 : _a.innerHTML;
                    return initilActive !== currentActive;
                }, { polling: 'mutation' }, initilActive),
            ]);
        }
        yield browser.close();
        const formattedData = (0, formatData_1.formatData)(data);
        res.status(200).json({ data: formattedData, error: null });
    }
    catch (error) {
        res
            .status(500)
            .json({ data: [], error: 'There was a problem with the server.' });
    }
});
exports.scrapeLinkedInSearch = scrapeLinkedInSearch;
const scrapeSpecificLinkedInUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { url } = req.body;
    if (!url.includes('www.linkedin.com/jobs/view/')) {
        res.status(400).json({ data: [], error: 'Invalid URL.' });
    }
    try {
        const browser = yield puppeteer_1.default.launch();
        // const browser = await puppeteer.launch({ devtools: true });
        const page = yield browser.newPage();
        yield page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36');
        yield page.setViewport({ width: 1920, height: 1080 });
        yield page.goto(url, { waitUntil: 'networkidle0' });
        page.on('console', (msg) => console.error('PAGE LOG:', msg.text()));
        const jobPostingDetails = yield page.evaluate(scrapeJobPosting_1.scrapeJobPosting);
        yield browser.close();
        const formattedData = (0, formatData_1.formatData)([jobPostingDetails]);
        res.status(200).json({ data: formattedData, error: null });
    }
    catch (error) {
        console.error('error: ', error);
    }
});
exports.scrapeSpecificLinkedInUrl = scrapeSpecificLinkedInUrl;
//# sourceMappingURL=scrapers.controller.js.map