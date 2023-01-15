export function scrapeJobPosting() {
  const position =
    document.querySelector('.top-card-layout__title')?.textContent || '';

  const url =
    (
      document.querySelector(
        '.top-card-layout__entity-info [data-tracking-will-navigate]'
      ) as HTMLAnchorElement
    )?.href || '';

  const companyName =
    document.querySelector('.topcard__flavor-row > span a')?.innerHTML || '';

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
}
