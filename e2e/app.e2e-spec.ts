import { Ng2formPage } from './app.po';

describe('ng2form App', () => {
  let page: Ng2formPage;

  beforeEach(() => {
    page = new Ng2formPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
