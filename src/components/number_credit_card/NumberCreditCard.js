// import PaymentSystem from '../payment_system/PaymentSystem';

export default class NumberCreditCard {
  constructor() {
    this.validateCard = this.validateCard.bind(this);
    // Фиксация контента из-за setTimeout

    this.cardNumber = document.querySelector('.card_number');
    // Доступ к полю со значением карты

    this.validationCheckButton = document.querySelector('.validation_check_button');
    // Доступ к кнопке
    this.validationCheckButton.addEventListener('click', this.validateCard);
    // Подписка на событие ввода (каждая клавиша)
  }

  iconDisplay() { // отображение иконки карты
    const firstNumberCard = +this.cardNumber.value[0];
    // Доступ к первому числу карты
    const nextNumberCard = +this.cardNumber.value[1];
    // Доступ ко второму числу карты

    if (firstNumberCard === 1 || (firstNumberCard === 3 && nextNumberCard === 5)) {
      // JCB
      console.log('JCB');
    } else if (firstNumberCard === 2) {
      // MIR
      console.log('MIR');
    } else if (firstNumberCard === 3 && nextNumberCard === 0) {
      // Diners Club
      console.log('Diners Club');
    } else if (firstNumberCard === 3) {
      // American Express
      console.log('american express');
    } else if (firstNumberCard === 4) {
      // Visa
      console.log('visa');
    } else if (firstNumberCard === 5) {
      // MasterCard
      console.log('mastercard');
    } else if (firstNumberCard === 6) {
      // Discover
      console.log('Discover');
    } else { console.log('хз че за карта'); }
  }

  validateCard(e) {
    e.preventDefault();
    // отмена действия браузера по умолчанию (перегрузка страницы)

    console.log(this.lohnAlgorithm(this.cardNumber.value));
    this.iconDisplay();
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

    for (let i = 0; i < num.length; i + 1) {
      let n = parseInt(num[i], 10);
      // из массива строк вывести числовое значение

      ch += (isOdd | 0) === (i % 2) && (n *= 2) > 9 ? (n - 9) : n;
    }

    return (ch % 10) === 0;
  }
}
