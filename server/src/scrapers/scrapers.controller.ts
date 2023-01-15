import { Request, Response } from 'express';
import puppeteer from 'puppeteer';
import { formatData } from './formatData';
import { scrapeJobPosting } from './scrapeJobPosting';

export const scrapeLinkedInSearch = async (req: Request, res: Response) => {
  const { position, location } = req.body;

  const locationQuery = `&location=${location}`;

  const PAGE_URL = `https://www.linkedin.com/jobs/search/?keywords=${position}${
    location && locationQuery
  }`;

  try {
    const NO_MATCH_FOUND_TEXT = 'We couldn’t find a match';
    // const browser = await puppeteer.launch({ devtools: true });
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'
    );
    await page.setViewport({ width: 1920, height: 1080 });

    await page.goto(PAGE_URL, {
      waitUntil: 'load',
    });

    const data = [];

    // await page.screenshot({ path: 'fullpage.png', fullPage: true });

    const noMatchResultElement = await page.$('.main-title');
    const noMatchResultText = await noMatchResultElement?.evaluate(
      (element) => element.textContent
    );
    const noMatchFound = noMatchResultText?.includes(NO_MATCH_FOUND_TEXT);

    if (noMatchFound) {
      res
        .status(400)
        .json({ data: [], error: 'No job postings matching your criteria.' });
    }

    // Starts at 1, because LinkedIn's search item's [data-row] attribute starts at 1
    for (let i = 1; i < 6; i++) {
      const jobPostingDetails = await page.evaluate(scrapeJobPosting);

      data.push(jobPostingDetails);

      const jobPostingSelector = `ul.jobs-search__results-list > li > div[data-row="${i}"] > a`;

      const initilActive = await page.evaluate(() => {
        return document.querySelector('.topcard__flavor-row > span a')
          ?.innerHTML;
      });

      await Promise.all([
        page.click(jobPostingSelector),
        page.waitForSelector('.topcard__flavor-row > span a'),
        page.waitForFunction(
          (initilActive) => {
            const currentActive = document.querySelector(
              '.topcard__flavor-row > span a'
            )?.innerHTML;

            return initilActive !== currentActive;
          },
          { polling: 'mutation' },
          initilActive
        ),
      ]);
    }

    await browser.close();

    const formattedData = formatData(data);

    res.status(200).json({ data: formattedData, error: null });
  } catch (error) {
    res
      .status(500)
      .json({ data: [], error: 'There was a problem with the server.' });
  }
};

export const scrapeSpecificLinkedInUrl = async (
  req: Request,
  res: Response
) => {
  const { url } = req.body;

  if (!url.includes('www.linkedin.com/jobs/view/')) {
    res.status(400).json({ data: [], error: 'Invalid URL.' });
  }

  try {
    const browser = await puppeteer.launch();
    // const browser = await puppeteer.launch({ devtools: true });
    const page = await browser.newPage();
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'
    );
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto(url, { waitUntil: 'networkidle0' });
    page.on('console', (msg) => console.error('PAGE LOG:', msg.text()));

    const jobPostingDetails = await page.evaluate(scrapeJobPosting);

    await browser.close();

    const formattedData = formatData([jobPostingDetails]);

    res.status(200).json({ data: formattedData, error: null });
  } catch (error) {
    console.error('error: ', error);
  }
};
