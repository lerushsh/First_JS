function ShowTime() {
    var Time = new Date();
    var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    number_day = Time.getDate();
    var months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]
    month = Time.getMonth();
    year = Time.getFullYear();
    day = Time.getDay();
    let par = document.getElementsByClassName("DateTime")[0];
    if (number_day < 10) {
        number_day = "0" + number_day;
    }
    
    hour = Time.getHours();
    min = Time.getMinutes();
    sec = Time.getSeconds();
    if(hour >= 12){
        hour -= 12;
        text = "(pm)"
    } else{
        text = "(am)"
    }
    if(hour < 10){
        hour = "0" + hour;
    }
    if(min < 10){
        min = "0" + min;
    }
    if(sec < 10){
        sec = "0" + sec;
    }
    par.innerHTML = number_day + " " + months[month] + " " + year + ", " + days[day] +" " + hour + ":" + min + ":" + sec + text;
}
