import { SuperAppPage } from './app.po';

describe('super-app App', function() {
  let page: SuperAppPage;

  beforeEach(() => {
    page = new SuperAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
