// TODO: write your code here
import sum from './basic';
import NumberCreditCard from '../components/number_credit_card/NumberCreditCard';
import PaymentSystem from '../components/payment_system/PaymentSystem';

document.addEventListener('DOMContentLoaded', () => {
/*
весь код приложения внутри обработчика
данного события начнет работать после загрузки DOM
*/

  console.log('worked');
  console.log(sum([1, 2]));
  new NumberCreditCard();
  new PaymentSystem();
});
