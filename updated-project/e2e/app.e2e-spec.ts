import { UpdatedProjectPage } from './app.po';

describe('updated-project App', () => {
  let page: UpdatedProjectPage;

  beforeEach(() => {
    page = new UpdatedProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
