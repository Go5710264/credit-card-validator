// TODO: write your code here
import sum from './basic';
import NumberCreditCard from '../components/number_credit_card/NumberCreditCard';

document.addEventListener('DOMContentLoaded', () => {
/*
весь код приложения внутри обработчика 
данного события начнет работать после загрузки DOM
*/

    console.log('worked');
    console.log(sum([1, 2]));
    const valueCard = new NumberCreditCard()
});