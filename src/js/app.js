// TODO: write your code here
import NumberCreditCard from '../components/number_credit_card/NumberCreditCard';
import PaymentSystem from '../components/payment_system/PaymentSystem';

document.addEventListener('DOMContentLoaded', () => {
/*
весь код приложения внутри обработчика
данного события начнет работать после загрузки DOM
*/
  new NumberCreditCard();

  new PaymentSystem();
});
