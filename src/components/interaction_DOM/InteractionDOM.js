export default class InteractionDOM {
  constructor() {
    this.paymentSystemDisplay = Array.from(document.querySelectorAll('.img'));
    // массив с иконками платежных систем

    this.resultLuhnAlgorithm = Array.from(document.querySelectorAll('.luhnAlgorithm'));
    // Доступ к результатам валидации по Луну

    this.industryIdentifier = document.querySelector('.industry_identifier');
    // Доступ к результату отраслевой идентификации II

    this.preparationInId = document.querySelector('.default_InId');
    // Доступ к дефолтному ответу

    this.validInId = document.querySelector('.valid_InId');
    // Доступ к валидному результату II

    this.preparation = Array.from(document.querySelectorAll('.preparation'));
    // Доступ ко всем дефолтным результатам

    this.index = null;
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

    const arrCardName = Array.from(document.querySelectorAll('.card_name'));

    for (let i = 0; i < arrCardName.length; i += 1) {
      arrCardName[i].textContent = paymentSystem;
    }
  }

  emptyInputField() { // пустое поле ввода
    this.paymentSystemDisplay.forEach((icon) => { // показть все иконки
      icon.classList.remove('hide_card');
    });

    this.preparation.forEach((item) => {
      // Проитерировать все дефолтные ответы
      if (item.classList.contains('hideBlock')) {
        // если ответ скрыт
        item.classList.remove('hideBlock');
        // Отобразить элемент
      }
    });

    this.removeErrors();

    document.querySelector('.valid_InId').classList.add('hideBlock');
    // скрыть валидный блок

    this.resultLuhnAlgorithm.forEach((item) => {
      if (!item.classList.contains('preparation')) {
        item.classList.add('hideBlock');
      } else {
        item.classList.remove('hideBlock');
      }
    });
  }

  calculationLuhn(value) {
    this.preparation.forEach((item) => { // Итерация дефолтных ответов
      if (!item.classList.contains('hideBlock')) { // Если ответ не скрыт
        item.classList.add('hideBlock'); // Скрыть элемент
      }

      if (!value && !item.classList.contains('luhnAlgorithm') && this.index !== 1) {
      /* Если ответ отрицательный, элемент не содержит класса luhnAlgorithm,
       то перед ответом вставть элемент с ошибкой ввода */
        item.insertAdjacentHTML('beforebegin', this.returnError());
      }
    });

    if (value) {
      this.iteratingLuhn('valid_Luhn', 'invalid_Luhn');
      if (this.validInId.classList.contains('hideBlock')) {
        // Если валидное значение InId скрыто
        this.preparationInId.classList.add('hideBlock');
        // Скрыть дефолтное значение
        this.validInId.classList.remove('hideBlock');
        // Показать валидное
      }

      this.removeErrors();
      this.index = 0;
    } else if (!value) {
      this.iteratingLuhn('invalid_Luhn', 'valid_Luhn');

      document.querySelector('.valid_InId').classList.add('hideBlock');
      // скрыть валидный блок
      this.index = 1;
    }
  }

  iteratingLuhn(ferstSelector, secondSelector) {
    this.resultLuhnAlgorithm.forEach((item) => {
      // проитерировать элементы DOM - разультаты валидации
      if (item.classList.contains('preparation') && !item.classList.contains('hideBlock')) {
        // если это дефолтный элемент без класса hideBlock - скрыть его
        item.classList.add('hideBlock'); // добавть этот класс
      } else if (item.classList.contains(ferstSelector)) {
        // если это элемент отвечающий за валидный ответ - показать его
        item.classList.remove('hideBlock');
      } else if (item.classList.contains(secondSelector) && !item.classList.contains('hideBlock')) {
        // если это элемент отвечающий за невалидный ответ - скрыть его
        item.classList.add('hideBlock');
      }
    });
  }

  returnError() {
    this.failElement = `
      <p class="fail">
        We couldn't find a major industry that matched your credit card number. Sorry.
      </p>
    `;

    return this.failElement;
  }

  /* eslint-disable */
  removeErrors() { // Удаление элементов с ошибкой ввода
    Array.from(document.querySelectorAll('.fail')).forEach((item) => {
      item.parentElement.removeChild(item);
    });
  }
  /* eslint-enable */
}
