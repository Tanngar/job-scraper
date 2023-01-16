"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrapeJobPosting = void 0;
function scrapeJobPosting() {
    var _a, _b, _c, _d, _e, _f, _g;
    const position = ((_a = document.querySelector('.top-card-layout__title')) === null || _a === void 0 ? void 0 : _a.textContent) || '';
    const url = ((_b = document.querySelector('.top-card-layout__entity-info [data-tracking-will-navigate]')) === null || _b === void 0 ? void 0 : _b.href) || '';
    const companyName = ((_c = document.querySelector('.topcard__flavor-row > span a')) === null || _c === void 0 ? void 0 : _c.innerHTML) || '';
    const location = ((_d = document.querySelector('.topcard__flavor--bullet')) === null || _d === void 0 ? void 0 : _d.innerHTML) || '';
    const postedAt = ((_e = document.querySelector('.posted-time-ago__text')) === null || _e === void 0 ? void 0 : _e.innerHTML) || '';
    const numOfApplicants = ((_f = document.querySelector('.num-applicants__caption')) === null || _f === void 0 ? void 0 : _f.innerHTML) || '';
    const description = ((_g = document.querySelector('.description__text > section > div.show-more-less-html__markup')) === null || _g === void 0 ? void 0 : _g.outerHTML) || '';
    return {
        url,
        position,
        companyName,
        location,
        postedAt,
        numOfApplicants,
        description,
    };
}
exports.scrapeJobPosting = scrapeJobPosting;
//# sourceMappingURL=scrapeJobPosting.js.map