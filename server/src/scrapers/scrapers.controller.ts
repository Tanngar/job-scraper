import { Request, Response } from 'express';
import puppeteer, { ElementHandle } from 'puppeteer';

export const scrapeLinkedIn = async (req: Request, res: Response) => {
  const { position, location } = req.body;

  const PAGE_URL = `https://www.linkedin.com/jobs/search/?keywords=${position}&location=${location}&refresh=true&position=1&pageNum=0`;

  try {
    const browser = await puppeteer.launch({ devtools: true });
    // const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'
    );
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto(PAGE_URL);
    // await page.goto(PAGE_URL, { waitUntil: 'networkidle0' });

    page.on('console', (msg) => console.log('PAGE LOG:', msg.text()));

    const data = [];

    // const initialActive = await page.$(
    //   'ul.jobs-search__results-list > li > div.base-card'
    // );

    const initialActive = await page.$('.job-search-card--active');

    for (let i = 1; i < 5; i++) {
      const jobPostingSelector = `ul.jobs-search__results-list > li > div[data-row="${i}"] > a`;

      const jobPostingDetails = await page.evaluate((jobPostingSelector) => {
        const url = (
          document.querySelectorAll(jobPostingSelector)[0] as HTMLAnchorElement
        ).href;

        const position =
          document.querySelector('h2.top-card-layout__title')?.textContent ||
          '';

        const companyName =
          document.querySelector('.topcard__flavor-row > span a')?.innerHTML ||
          '';

        const location =
          document.querySelector('.topcard__flavor--bullet')?.innerHTML || '';

        const postedAt =
          document.querySelector('.posted-time-ago__text')?.innerHTML || '';

        const numOfApplicants =
          document.querySelector('.num-applicants__caption')?.innerHTML || '';

        const description =
          document.querySelector(
            '.description__text > section > div.show-more-less-html__markup'
          )?.outerHTML || '';

        return {
          url,
          position,
          companyName,
          location,
          postedAt,
          numOfApplicants,
          description,
        };
      }, jobPostingSelector);

      // await page.screenshot({
      //   path: 'buddy-screenshot' + i + '.png',
      //   fullPage: true,
      // });

      data.push(jobPostingDetails);

      const currentActive = await page.$('.job-search-card--active');

      await Promise.all([
        page.click(jobPostingSelector),
        page.waitForFunction(
          (jobPostingSelector) =>
            !document
              .querySelector(jobPostingSelector)
              ?.parentElement?.className.includes('job-search-card--active'),
          {},
          jobPostingSelector
        ),
        // page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
      ]);
      // '!document.querySelectorAll("ul.jobs-search__results-list > li > div.base-card")[0].className.includes("job-search-card--active")'
    }

    await browser.close();

    const trimAndRemoveLineBreaks = (text: string) => {
      return text.replace(/(\r\n|\n|\r)/gm, '').trim();
    };

    const formattedData = data.map((posting) =>
      Object.fromEntries(
        Object.entries(posting).map(([key, value]) => [
          key,
          trimAndRemoveLineBreaks(value),
        ])
      )
    );

    res.status(200).json(formattedData);
  } catch (e) {
    console.log('error: ', e);
  }
};
