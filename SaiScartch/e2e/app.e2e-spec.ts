import { SaiScartchPage } from './app.po';

describe('sai-scartch App', () => {
  let page: SaiScartchPage;

  beforeEach(() => {
    page = new SaiScartchPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
