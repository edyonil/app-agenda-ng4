import { AppAgendaTelefonicaPage } from './app.po';

describe('app-agenda-telefonica App', () => {
  let page: AppAgendaTelefonicaPage;

  beforeEach(() => {
    page = new AppAgendaTelefonicaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
