import { BattlefieldPage } from './app.po';

describe('battlefield App', function() {
  let page: BattlefieldPage;

  beforeEach(() => {
    page = new BattlefieldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
