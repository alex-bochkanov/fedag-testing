# fedag-testing
Не получилось привязать файлы к форме тестирования в google, поэтому решил создать репозиторий с ответами на тесты и файлами с решениями задач.

Файлы названы по номерам задач, а в папке 2.react лежит приложение react с решением второй задачи.

## Данные для связи:
Телефон: __+7-926-275-76-69__

Ссылка на резюме hh: [https://hh.ru/resume/5188a881ff0b498d790039ed1f614c327a7559]

email: __sasha-bochkanov7@mail.ru__

telegram: [https://t.me/abochkanov]

### Ответы на тест
1. __Через какое время на экране отобразится элемент?__

let modal = document.querySelector('#result');

setTimeout(function () {
  modal.classList.remove('hidden');
}, 10000);

- `через 10 секунд`

2. __Какими из представленных способов можно создать функцию?__
- `let discountPrice = function (price) { return price * 0.85; };`
- `discountPrice = function (price) { return price * 0.85; };`

3. __Каким способом можно получить значение «два»из представленного массива?__

let array = ["один", "два", "три"]

- `array[1]`

4. __Какое из следующих значение не является false?__
- `Boolean("false")`

5. __Какое из следующих слов не является ключевым?__
- `array`

6. __Если вы попробуете вызвать значение как функцию, какая ошибка будет получена?__
- `TypeError`

7. __Какой оператор выбирает все элементы img в дереве DOM?__
- `Document.querySelectorAll('img')`

8. __Какого типа данных нет в javascript?__
- `Double`

9. __Какой области видимости нет в javascript?__
- `Локальная`

10. __Что будет выведено в консоль?__

const foo = [1, 2, 3]; const [n] = foo; console.log(n);

- `1`

11. __Какая пара тегов используется в HTML для встраивания JavaScript?__
- `<script></script>`

12. __Какой оператор может принимать одно выражение в качестве входных данных, а затем просматривать несколько вариантов, пока не будет найден тот, который соответствует этому значению?__
- `switch`

13. __Как называется ограничение доступа к составляющим методам класса?__
- `Инкапсуляция`

14. __На чем основан REST?__
- `HTTP`

15. __Каким образом клиент может передать данные на сервер при выполнении HTTP POST запроса?__
- `В теле запроса`

16. __Что представляет собой REST API?__
- `Архитектурный стиль для построения распределенных систем`

17. __Как указать стили для атрибута title тега <a>?__
- `a.title`

18. __При добавлении стилей прозрачности, в чем разница между использованием свойства opacityи свойства background со значением rgba()?__
- `opacity указывает уровень прозрачности элемента, включая его содержимое. Фон со значением rgba() применяет прозрачность только к цвету фона.`

19. __Какое из этих четырех свойств следует использовать для выравнивания глобальной панели навигации, которая остается фиксированной в верхней части страницы?__
- `position`

20. __Как бы вы сделали первую букву каждого абзаца на странице красной?__
- `p:first-letter { color: red; }`

21. __Как исправить синтаксическую ошибку, возникшую в результате выполнения представленного ниже кода?__

const person = (firstName, lastName) => { first: firstName, last: lastName } console.log(person("Jill", "Wilson"))

- `Добавит оператор return перед первой фигурной скобкой`

22. __Все компоненты React должны вести себя как _ по отношению к своим свойствам.__
- `Чистые функции`

23. __Что [e.target.id] называется в этом фрагменте кода?__
- `Динамический ключ`

24. __Какой ответ лучше всего описывает функциональный компонент?__
- `Функциональный компонент получает объект пропсов и возвращает элемент React`

25. __Какой тип в следующем блоке кода имеет значение orderNumber?__

ReactDOM.render(<Message orderNumber="16" />, document.getElementById('root'));

- `string`

26. __Что такое setCount?__

const [count, setCount] = useState(0);

- `Функция для обновления стейта`

27. __Что такое React?__
- `Библиотека`

28. __Что вернет вызов функции?__

function add(x = 1, y = 2) { return x + y; } 
add();

- `3`

29. __Когда используется тег <link>?__
- `При связывании таблиц стилей, внешних URL-адресов и favicon`

30. __Какой фрагмент HTML ссылается на самый верх веб-страницы?__
- `<a id="top"></a> <!-- ... --> <a href="#top">back to top</a>`

31. __Какой атрибут необходимо указать, чтобы ссылка открылась в новой вкладке?__
- `_blank`

32. __При нажатии на какой фрагмент HTML происходит телефонный звонок на мобильном устройстве?__
- `<a href="tel:802-555-1212">Call me</a>`

33. __Запрос с каким методом отправляется при сабмите формы в html?__
- `POST`

34. __Какая ссылка содержит действительный URL?__
- `<link rel="stylesheet" href="/styles for me/styles.css">`
