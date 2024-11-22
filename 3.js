/*Реализуйте функцию для вывода всех ключей объекта, включая ключи его прототипа*/

function PlayerObject (nickName, level, email, battlePass) {
    this.nickName = nickName,
    this.level =  level,
    this.email = email,
    this.battlePass = battlePass
}
//Создаем экземпляр функции
const Player1 = new PlayerObject('MegaBasher', 56, 'mb@mail.com', true);
//Добавляем в прототип новый ключ с названием class
PlayerObject.prototype.class = 'Mage';
//Произойдет перебор всех значений ключей объекта и консоль выведутся ключи в формате string, включая ключи прототипа
for (const key in Player1) {
    console.log(key);
}

//Такой метод выведет массив значений ключей, НО не выведет ключи прототипа 
const objectKeys = Object.keys(Player1);
console.log(objectKeys);