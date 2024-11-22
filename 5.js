/*Реализовать цикл for of для объекта, который будет на каждой итерации получать ключ и значение*/

//Создаем класс итерируемого объекта
class IterableObject extends Object {
    constructor(object) {
        super();
        Object.assign(this, object);
    }
    //Метод итератора
    [Symbol.iterator]() {
        //Получаем все пары ключ-значение этого объекта
        const entries = Object.entries(this);
        //Берем отсчет с -1, потому что в методе next() сначала прибавляем счетчику единицу, а потом исполняем код с возвратом значения и состоянием итерирования(false - продолжаем итерироваться, true - закончили)
        let i = -1;

        return {
            //Метод для взятия следующего элемента объекта
            next() {
                i++;
                return {
                    //Пара ключ-значение
                    value: entries[i],
                    //Состояние итерирования
                    done: i >= entries.length,
                };
            }
        }
    }
}

//Тестовые данные
const iterableObject = new IterableObject({
    1: 'adasdas',
    2: 'beqwr',
    3: 'cvvv'
});

//Пример теста
for (let element of iterableObject) {
    console.log(element);
}