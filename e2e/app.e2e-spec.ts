import { XpytPage } from './app.po';

describe('xpyt App', () => {
  let page: XpytPage;

  beforeEach(() => {
    page = new XpytPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
