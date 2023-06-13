var button5 = document.getElementsByClassName("ex5__button")[0];
button5.addEventListener("click", function () {
    var nom_par1 = prompt('Введите номер абзаца:');
    if (nom_par1 != null) {
        if (nom_par1 < 1 || nom_par1 > 8) {
            alert("Таких абзацев нет :(");
        } else {
            if (nom_par1 != 8 && nom_par1 != 1)
                f = confirm("Поменять со следующим элементом?");
            else f = 0;
            if(f || nom_par1 == 1){
                var par1 = document.getElementsByClassName("ex5__paragraph")[nom_par1-1];
                var par2 = document.getElementsByClassName("ex5__paragraph")[nom_par1];
                par1.parentNode.insertBefore(par2,par1);
            } else{
                var par1 = document.getElementsByClassName("ex5__paragraph")[nom_par1-1];
                var par2 = document.getElementsByClassName("ex5__paragraph")[nom_par1-2];
                par2.parentNode.insertBefore(par1,par2);
            }
        }
    }
});