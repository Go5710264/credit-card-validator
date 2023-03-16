import InteractionDOM from '../interaction_DOM/InteractionDOM';

export default class NumberCreditCard {
  constructor() {
    this.validateCard = this.validateCard.bind(this);
    // Фиксация контента

    this.cardNumber = document.querySelector('.card_number');
    // Доступ к полю со значением карты

    this.validationCheckButton = document.querySelector('.validation_check_button');
    // Доступ к кнопке ввода
    this.validationCheckButton.addEventListener('click', this.validateCard);
    // Подписка на событие ввода (клик на кнопку ввода)

    this.passDOM = new InteractionDOM();
    // создание экземпляра класса для взаимодействия с DOM
  }

  validateCard(e) {
    e.preventDefault();
    // отмена действия браузера по умолчанию (перегрузка страницы)

    if (this.cardNumber.value.trim() === '') {
      this.passDOM.emptyInputField();

      return false;
    }

    this.passDOM.calculationLuhn(this.lohnAlgorithm(this.cardNumber.value));
    // валидация по алгоритму Луна и отправка результатов в DOM

    return false;
  }

  // нужно перенести в другой компонент
  lohnAlgorithm(setValue) {
    let ch = 0;
    const num = String(setValue).replace(/\D/g, '');
    // заменить в строке все нецифры на пустые промежутки

    const isOdd = num.length % 2 !== 0;
    // длинна массива должна быть нечетной

    if (num === '') { return false; }
    // если передается путая строка вернуть false

    for (let i = 0; i < num.length; i += 1) {
      let n = parseInt(num[i], 10);
      // из массива строк вывести числовое значение

      // eslint-disable-next-line
      ch += (isOdd | 0) === (i % 2) && (n *= 2) > 9 ? (n - 9) : n;

    }

    this.lohnAlgorithmResult = (ch % 10) === 0;

    return this.lohnAlgorithmResult;
  }
}
