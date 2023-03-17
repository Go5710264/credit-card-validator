import puppeteer from 'puppeteer';
// для запуска браузера необходимо заимпортить папитор
jest.setTimeout(30000); // среднее время работы jest 5000, увеличение времени работы

describe('Page start', () => { // формирование сценариев в обертке
  let browser;
  let page; // введение сущности - страницы

  beforeEach(async () => {
    browser = await puppeteer.launch({ // при запуске указываются опции

      headless: false, // показывать реальный браузер
      slowMo: 100,
      devtools: true, // видеть инструменты разработчика

    });

    page = await browser.newPage(); // открыть в браузере новую страницу
  });

  test('checking invalid card entry', async () => {
    await page.goto('http://localhost:9000'); // переход страницы на нужный URL адрес (указан в webpack.config.js)

    await page.waitForSelector('.card_number'); // дождаться появления тега с данным селектором

    await page.type('.card_number', '353020249262465'); // ввести в поле данные карты
    await page.click('.validation_check_button'); // вызвать событие click на button

    // Должны быть блоки с данными селекторами
    await page.waitForSelector('.fail');
  });

  afterEach(async () => {
    await browser.close();
  });
});
