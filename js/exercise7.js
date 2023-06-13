var ex7_panel = document.getElementsByClassName("ex7__p")[0];
var ex7_end = document.getElementsByClassName("ex7__end")[0];
ex7_panel.style.display = "none";
ex7_end.style.display = "none";
var ex7_button = document.getElementsByClassName("ex7__button")[0];
ex7_button.addEventListener("click", function () {
    this.classList.toggle("active");
    if (ex7_panel.style.display == "block") {
        ex7_panel.style.display = "none";
    } else {
        ex7_panel.style.display = "block";
    }
});
var j;
var ex7_el = document.getElementsByClassName("ex7__el");
var k = 0;
for (j = 0; j < ex7_el.length; j++) {
    ex7_el[j].onclick = function () {
        this.style.transition = 'opacity 1s 0s';
        this.style.opacity = '0';
        setTimeout(function () {
            this.style.display = "none";
        },1000);
        k++;
        setTimeout(function () {
            ShowNonCandy();
        }, 1000);
    }
}
function ShowNonCandy() {
    if (k == 4) {
        var ex7_end = document.getElementsByClassName("ex7__end")[0];
        ex7_end.style.display = "block";
    }
}