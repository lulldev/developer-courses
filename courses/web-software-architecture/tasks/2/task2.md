# Task 2

## Ввод-вывод и первый функционал

1. Реализуйте возможность добавления новых строк и столбцов для вашей таблицы Excel.
2. Создайте обработку консольного пользовательского ввода (команд) для возможности манипуляции над excel-таблицей. Реализуйте для пользователя возможность добавления нового столбца и новой строки из консоли, а также изменение ячеек.\
   Пример:

```sh
username ~ % node excel.js
-------------------------
|   | A | B | C | D | E |
-------------------------
| 1 |   |   |   |   |   |
-------------------------
| 2 |   |   |   |   |   |
-------------------------
| 3 |   |   |   |   |   |
-------------------------
| 4 |   |   |   |   |   |
-------------------------
| 5 |   |   |   |   |   |
-------------------------
| 6 |   |   |   |   |   |
-------------------------

Commands:
1 - add new row
2 - add new col
3 - change cell

>>> 1

-------------------------
|   | A | B | C | D | E |
-------------------------
| 1 |   |   |   |   |   |
-------------------------
| 2 |   |   |   |   |   |
-------------------------
| 3 |   |   |   |   |   |
-------------------------
| 4 |   |   |   |   |   |
-------------------------
| 5 |   |   |   |   |   |
-------------------------
| 6 |   |   |   |   |   |
-------------------------
| 7 |   |   |   |   |   |
-------------------------

Commands:
1 - add new row
2 - add new col
3 - change cell

```

---

Возможные пути реализации (выбрать один из):

1. Класс `ExcelTable` и отдельный обработчик консольного ввода-вывода
2. Класс `ExcelTable`, обрабатывающий таблицу через методы; класс `ExcelConsolePrinter`, форматирующий структуру данных таблицы в консольный вид; класс `ExcelApplication`, связывающий `ExcelTable` и `ExcelConsolePrinter`
3. (более сложный вариант) паттерн **Команда** (https://refactoring.guru/ru/design-patterns/command), где выделяются классы для каждой команды: ExcelTable::addNewRow, ExcelTable::addNewCol, ExcelTable::changeCell; ExcelApplication назначает команды + связывает с консольным вводом-выводом.

---

## Справочная информация:

[Классы: базовый синтаксис](https://learn.javascript.ru/class)

[Паттерн "Команда"](https://refactoring.guru/ru/design-patterns/command)

[Паттерн "Команда" в JS](https://gist.github.com/NazimovDmitrii/b4e1704f37a5b248915a8bea0904a3e1)