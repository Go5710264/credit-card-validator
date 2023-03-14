import InteractionDOM from '../interaction_DOM/InteractionDOM';

export default class PaymentSystem {
  constructor() {
    this.passDOM = new InteractionDOM();
    // создание экземпляра класса для взаимодействия с DOM

    this.cardNumber = document.querySelector('.card_number');
    // Доступ к полю со значением карты

    this.paymentSystemDefinition = this.paymentSystemDefinition.bind(this);
    // Фиксация контента
    this.cardNumber.addEventListener('input', this.paymentSystemDefinition);
    // Обработчик события ввода в поле
  }

  paymentSystemDefinition() { // определение платежной системы
    const firstNumber = +this.cardNumber.value[0];
    // Доступ к первому числу карты
    const nextNumber = +this.cardNumber.value[1];
    // Доступ ко второму числу карты

    // Условная конструкция вычисления принадлежности карты к платежной системе
    if (firstNumber === 1
        || (firstNumber === 3 && nextNumber === 5)) {
      this.passDOM.showIcon('JCB');
    } else if (firstNumber === 2) {
      this.passDOM.showIcon('MIR');
    } else if ((firstNumber === 3 && nextNumber === 0)
        || (firstNumber === 3 && nextNumber === 6)) {
      this.passDOM.showIcon('Diners club');
    } else if (firstNumber === 3) {
      this.passDOM.showIcon('AmericanExpress');
    } else if (firstNumber === 4) {
      this.passDOM.showIcon('Visa');
    } else if (firstNumber === 5) {
      this.passDOM.showIcon('MasterCard');
    } else if (firstNumber === 6) {
      this.passDOM.showIcon('Discover');
    } else { this.passDOM.emptyInputField(); }
  }
}
