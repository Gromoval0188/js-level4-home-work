
// 1. вывести одной строкой минимальное значние массива array с помощью деструктуризации и Math
const array = [1,2,3,4,6,710,34013,013];
console.log(Math.min(...array));

// 2.функция multiply не принимает явно никаких параметров
function multiply() {
  const nums = [...arguments];
  const sum = nums.reduce((sum, current) => {
    return sum * current;
  });
  console.log(sum);

}

multiply(100,200,83902,1230) // В результате фукнции должно вернутся число, которое является результатом умножения всех аргументов переданых в функцию

// 3. У нас есть фукниця totalPrice, с помощью деструктуризации объекта сделать так, что б функция работала.
const product = {
  productName: 'Water',
  price: 20,
  count: 3
}

function totalPrice(item) {
  const { price, count} = product;
  return price * count;
}
console.log(totalPrice);

//4. написать объект в котором будет свойство items (изначально пустой массив), 
// метод объекта setItems который принимает массив значений и устанавливает этот массив как значение свойста items
// метод объекта sum котроый возвращает сумму всех элементов массива items 
// метод maxValue который возвращает максимальное значение из массива items с использованием деструктуризации массива.
const object = {
  items: [],
  setItems (nums) {
    this.items = nums;
  },
  sum: function () {
    sum = this.items;
    return sum.reduce((acc, num) => acc + num);
  },
  maxValue() {
    return Math.max(...this.items);
  },
};
// 5. Написать функционал что б при вызове showPrediction выводилась случайная фраза из массива predictsArr1 для predictions1 и predictsArr2 для predictions2

const predictsArr1 = [
    'Удача придет откуда не ждете.',
    'Давние долги будут возвращены вам.',
    'Вас ожидает неожиданное денежное поступление.',
    'Все неоконченные дела будут завершены.',
    'Яркое приключение уже поджидает вас.',
    'Планирование времени поможет вам не опоздать на встречу.',
    'Интуиция на этот раз не подведет вас. Используйте это.',
    'Прислушайтесь к себе и ответ на вопрос будет найден.',
    'Появится возможность отправиться в дорогу.',
    'Ваш ценный опыт сможет кому-то помочь, если перестанете его прятать в себе.',
    'Вам не удастся понравиться абсолютно всем, не тратьте на это энергию.',
    'Одежда, которая вас старит, не достанется вам.'
  ]
  
const obj = {
    predictions: [],
        setPredictions(arr) {
          this.predictions = arr;
        },
        showPrediction() {
          const { predictions } = this;
          const Numm = this.takeNumber();
          return predictions[Numm];
        },
        takeNumber() {
          const number = Math.floor(Math.random() * predictsArr1.length);
          return number;
        },
}
const predictions = obj;
predictions.setPredictions(predictsArr);