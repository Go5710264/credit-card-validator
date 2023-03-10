import PaymentSystem from "../payment_system/PaymentSystem";

export default class NumberCreditCard{
    constructor(){
        this.validateCard = this.validateCard.bind(this);
        //Фиксация контента из-за setTimeout

        this.cardNumber = document.querySelector('.card_number');
        //Доступ к полю со значением карты
        this.validationCheckButton = document.querySelector('.validation_check_button');

        this.validationCheckButton.addEventListener('click', this.validateCard); 
        //Подписка на событие ввода (каждая клавиша)
    }

    validateCard(e){
        e.preventDefault(); 
        // отмена действия браузера по умолчанию (перегрузка страницы)
        
        console.log(this.lohnAlgorithm(this.cardNumber.value))

        new PaymentSystem()

        // if(this.timeout){
        //     clearTimeout(this.timeout);
        // // если таймаут существует, то отменить его
        // }

        // const text = this.cardNumber.value;
        // this.timeout = setTimeout(() => console.log(text), 300);

    }

    // visa - 4
    // mastercart - 51 55
    // Diners Club 300 305, 3638
    // american express - 3
    // jcb - 1, 35
    // Discover - 6011/65 
    // mir 2     

    lohnAlgorithm(setValue) {
        let ch = 0;
        const num = String(setValue).replace(/\D/g, ''); 
        // заменить в строке все нецифры на пустые промежутки

        const isOdd = num.length % 2 !== 0; 
        // длинна массива должна быть нечетной
      
        if ('' === num) {return false}; 
        // если передается путая строка вернуть false
      
        for (let i = 0; i < num.length; i++) {
          let n = parseInt(num[i], 10); 
          // из массива строк вывести числовое значение
      
          ch += (isOdd | 0) === (i % 2) && 9 < (n *= 2) ? (n - 9) : n;
        }
      
        return 0 === (ch % 10);
    };
}