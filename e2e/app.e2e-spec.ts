import { Escape2paradisePage } from './app.po';

describe('escape2paradise App', function() {
  let page: Escape2paradisePage;

  beforeEach(() => {
    page = new Escape2paradisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
