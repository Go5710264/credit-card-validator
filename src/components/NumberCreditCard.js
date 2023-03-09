export default class NumberCreditCard{
    constructor(){
        this.validateCard = this.validateCard.bind(this);
        //Фиксация контента из-за setTimeout

        this.cardNumber = document.querySelector('.card_number');
        //Доступ к полю со значением карты

        this.cardNumber.addEventListener('input', this.validateCard); 
        //Подписка на событие ввода (каждая клавиша)
    }

    validateCard(e){
        e.preventDefault(); 
        // отмена действия браузера по умолчанию (перегрузка страницы)

        if(this.timeout){
            clearTimeout(this.timeout);
        // если таймаут существует, то отменить его
        }

        const text = this.cardNumber.value;
        this.timeout = setTimeout(() => console.log(text), 300);

    }
}