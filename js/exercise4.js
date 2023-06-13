var button4 = document.getElementsByClassName("button4")[0];
button4.addEventListener("click", function () {
    var blocks = document.querySelectorAll('.exercise4-block');
    var randomBlock = blocks[Math.floor(Math.random() * blocks.length)];
    setTimeout(function () {
        randomBlock.style.display = "none";
    }, 120);
});

