import { prisma } from '..';

const MOCK_DESCRIPTION =
  '<div class="show-more-less-html__markup show-more-less-html__markup--clamp-after-5">        <p><strong>Front-end Engineer</strong></p><p>PNO is the Nordic’s largest trailer rental company. We are a family-owned company established in 1975 with our head office in Copenhagen and branches in Germany, Finland, Norway, Sweden, Denmark, Holland, and Poland.</p><p><br></p><p>Our purpose is to lead the transition to sustainable freight, and we strongly believe that PNO can be a key driver of change in the logistics industry. We are growing rapidly, entering 1-2 new markets a year and taking more market share in existing countries. Overall, PNO expects to grow 20% each year towards 2027.</p><p><br></p><p><strong>About the job</strong></p><p>We are looking for a talented new colleague to join our development team in Copenhagen to take part in our journey to expand our digital landscape. Our current team is cross-functional and we all have strong areas of expertise. We are a somewhat small unpretentious self-organizing team working in an agile setting together with our Product Manager.</p><p><br></p><p><strong>Our technology stack</strong></p><ul><li>Event sourcing and a micro service architecture is the foundation for our digital platform(s)</li><li>NATS Streaming is powering the event streams</li><li>Services are primarily built with Go</li><li>GitHub, Drone and CI/CD makes sure every commit is deployable</li><li>Everything is deployed using Docker/containers on AWS</li><li>Front-ends are built using Vuejs (JavaScript + TypeScript) that communicate with back-end through JSON APIs</li></ul><p><br></p><p><strong>Skills</strong></p><ul><li>You have knowledge about the technologies we use, in particular sound experience with technologies used on the front-end of our stack</li><li>We appreciate and expect a pragmatic, open, and friendly approach to teamwork</li><li>We do not expect you to be equally strong in everything but we do expect you to know your own strengths and also in which areas you aspire to grow</li><li>We expect that you also bring your honest self to work every day and you are opinionated by experience, listen to qualified arguments and be pragmatic about finding solutions</li><li>Being a certified B Corp is something that underpins many choices in PNO, and if social and environmental impact is important to you, then you will fit right in!</li></ul><p><br></p><p><strong>Benefits</strong></p><ul><li>Generous salary and meaningful work</li><li>Company healthcare insurance and pension plan</li><li>Flexible working hours and vacation policy</li><li>Your choice in hardware, whatever equipment helps you get the job done</li></ul>      </div>';

export async function highightTags(text: string) {
  const tags = await prisma.tag.findMany({
    include: {
      category: true,
    },
  });

  const test = text.replace(
    // tags[0].text,
    'JavaScript',
    `<span class='${tags[0].category.color} rounded-sm p-1 w-fit text-white'>JavaScript</span>`
  );
  console.log('test', test);

  const matches = tags.filter((tag) => {
    const pattern = `\\b${tag.text}\\b`;
    const reg = new RegExp(pattern, 'gi');

    return text.match(reg);
  });
}
