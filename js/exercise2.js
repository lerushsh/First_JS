function createCalendar(elem) {
    var Time = new Date();
    year = Time.getFullYear();
    mon = Time.getMonth();
    today = Time.getDate();

    let d = new Date(year, mon);
    let mas_month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    let h = '<h2 class = "calendar__h2">' + mas_month[mon] + ', ' + year + '</h2>';
    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

    d.setDate(d.getDate() - getDay(d));
    // пробелы для первого ряда
    while (d.getDate() != 1) {
        if (getDay(d) == 5 || getDay(d) == 6) {
            table += '<td class = "weekend last-month"></td>';
        } else {
            table += '<td class = "last-month">' + d.getDate() +'</td>';
        }
        d.setDate(d.getDate() + 1);
    }

    // ячейки календаря с датами
    while (d.getMonth() == mon) {
        if (d.getDate() == today) {
            table += '<td class = "today">' + d.getDate() + '</td>';
        } else {
            if (getDay(d) == 5 || getDay(d) == 6) {
                table += '<td class = "weekend">' + d.getDate() + '</td>';
            } else {
                table += '<td>' + d.getDate() + '</td>';
            }
        }
        if (getDay(d) % 7 == 6) { //перевод строки
            table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
    }

    // добить таблицу пустыми ячейками
    if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
            if (i == 5 || i == 6) {
                table += '<td class = "weekend"></td>';
            } else {
                table += '<td></td>';
            }
        }
    }

    // закрыть таблицу
    table += '</tr></table>';

    elem.innerHTML = h + table;
}
function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
    let day = date.getDay();
    if (day == 0) day = 7; // сделать воскресенье (0) последним днем
    return day - 1;
}