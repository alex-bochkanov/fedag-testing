/*Реализовать одну из функция массива на выбор (map, filter, reduce) и заменить ею уже существующую функцию в Array*/

Array.prototype.customMap = function(callback) {
    let result = this;

    for (let i = 0; i < this.length; i++) {
        //Проверка на пустой элемент
        if (this[i] === undefined) {
            break;
        }
        result[i] = callback(this[i], i, this);
    }
    return result;
}

//Тесты
let valueArray = [1, 2, 3, 4, 5];

let doubleArrayValue = valueArray.customMap(value => value * 2);

console.log(doubleArrayValue);