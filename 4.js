/*Решите задачу*/

//Тестовые массивы, объекты и JSON-строки
let arrayJSON = '[1, d, d1]';
let arrayJSONEmpty = '[]';

let objectJSON = "{a: 1, b: 2}";
let objectJSONEmpty = "{}";

let array = [12312, 14];
let arrayEmpty = [];

let object = {a: 1, b: 2};
let objectEmpty = {};

function checkEmpty (value) {
    //Если значение массив
    if (Array.isArray(value)) {
        //Если значение пустой массив
        return value.length === 0;
    }
    //Если значение объект
    else if (typeof value === 'object') {
        //Если значение пустой объект
        return Object.keys(value).length === 0;
    }
    //Если значение строка
    else if (typeof value === 'string') {
        try {
            //Пробуем спарсить строку с помощью JSON.parse
            const result = JSON.parse(value);
            //Смотрим тип спаршенной строки
            const type = Object.prototype.toString.call(result);
            //Если тип объект и он пустой &&(и) тип массив и пустой массив, то возвращаем true 
            return (type === '[object Object]' && Object.keys(result).length === 0) || (type === '[object Array]' && result.length === 0);
        } catch (e) {
            //Если строка не JSON, то просто возвращаем false
            return false;
        }
    }
    else {
        //Если не подошло ни одно из условий выше
        return false;
    }
}
console.log('Проверка массивов JSON');
console.log(checkEmpty(arrayJSON)); //false
console.log(checkEmpty(arrayJSONEmpty)); //true
console.log('Проверка объектов JSON');
console.log(checkEmpty(objectJSON)); //false
console.log(checkEmpty(objectJSONEmpty)); //true

console.log('Проверка массивов');
console.log(checkEmpty(array)); //false
console.log(checkEmpty(arrayEmpty)); //true
console.log('Проверка объектов');
console.log(checkEmpty(object)); //false
console.log(checkEmpty(objectEmpty)); //true