export default class InteractionDOM {
  constructor() {
    this.paymentSystemDisplay = Array.from(document.querySelectorAll('.img'));
    // массив с иконками платежных систем

    this.resultLuhnAlgorithm = Array.from(document.querySelectorAll('.luhnAlgorithm'));
    // Доступ к результатам валидации по Луну
  }

  showIcon(paymentSystem) {
    // аргумент - название платежной системы по результатам ввода первых 2х цифр

    this.paymentSystemDisplay.forEach((icon) => {
      // протерировать массив платежных систем
      if (!icon.classList.contains('hide_card') && icon.getAttribute('alt') !== paymentSystem) {
        // если иконка не содержить класс hide_card и
        // данный тег НЕ содержит атрибут alt со значением аргумента
        icon.classList.add('hide_card');
        // скрыть элемент
      } else if (icon.getAttribute('alt') === paymentSystem) {
        // если данный тег содержит атрибут alt равный аргументу
        icon.classList.remove('hide_card');
        // показать элемент
      }
    });
  }

  emptyInputField() {
    // пустое поле ввода
    this.paymentSystemDisplay.forEach((icon) => {
      icon.classList.remove('hide_card');
      // показть все иконки
    });
  }

  calculationLuhn(value) {
    if (value) {
      // Если результат алгоритма Луна валиден

      this.resultLuhnAlgorithm.forEach((item) => {
        // проитерировать элементы DOM - разультаты валидации
        if (item.classList.contains('preparation') && !item.classList.contains('hideBlock')) {
          // если это дефолтный элемент без класса hideBlock - скрыть его
          item.classList.add('hideBlock'); // добавть этот класс
        } else if (item.classList.contains('valid_Luhn')) {
          // если это элемент отвечающий за валидный ответ - показать его
          item.classList.remove('hideBlock');
          item.classList.add('showBlock');
        } else if (item.classList.contains('invalid_Luhn') && !item.classList.contains('hideBlock')) {
          // если это элемент отвечающий за невалидный ответ - скрыть его
          item.classList.remove('showBlock');
          item.classList.add('hideBlock');
        }
      });
    }

    if (!value) {
      // Если результат алгоритма Луна невалиден

      this.resultLuhnAlgorithm.forEach((item) => {
        // проитерировать элементы DOM - разультаты валидации
        if (item.classList.contains('preparation') && !item.classList.contains('hideBlock')) {
          // если это дефолтный элемент без класса hideBlock - скрыть его
          item.classList.add('hideBlock');
        } else if (item.classList.contains('invalid_Luhn')) {
          // если это элемент отвечающий за невалидный ответ - показать его
          item.classList.remove('hideBlock');
          item.classList.add('showBlock');
        } else if (item.classList.contains('valid_Luhn') && !item.classList.contains('hideBlock')) {
          // если это элемент отвечающий за валидный ответ - скрыть его
          item.classList.remove('showBlock');
          item.classList.add('hideBlock');
        }
      });
    }
  }
}
