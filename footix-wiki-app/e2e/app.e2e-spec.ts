import { FootixWikiAppPage } from './app.po';

describe('footix-wiki-app App', () => {
  let page: FootixWikiAppPage;

  beforeEach(() => {
    page = new FootixWikiAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
