import { WebcatBlackPage } from './app.po';

describe('webcat-black App', () => {
  let page: WebcatBlackPage;

  beforeEach(() => {
    page = new WebcatBlackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
