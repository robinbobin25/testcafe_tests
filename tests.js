import { Selector } from 'testcafe';
// import HomePage from './home-page.js';

const HomePage = require('./page-objects/home-page.js').default;
const page = new HomePage();

fixture `Check Job search works`
    .page `https://www.indeed.jobs/`;

test('My first job search', async t => {
    await t
        .typeText(page.jobInput, 'AQA')
        .click(page.selectArea)
        .click(page.selectOptions)
        .click(page.findButton)
        .expect(Selector(".pageTitle2").innerText).contains("Open Jobs");
});  