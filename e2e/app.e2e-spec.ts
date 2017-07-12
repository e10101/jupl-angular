import { JuplAngularPage } from './app.po';

describe('jupl-angular App', () => {
  let page: JuplAngularPage;

  beforeEach(() => {
    page = new JuplAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
