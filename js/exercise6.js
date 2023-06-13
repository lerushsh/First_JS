var num = 0;
let im_arr = ["im2", "im3", "im4", "im1"];
var image6 = document.getElementById("ex6__image");
image6.addEventListener("mouseout", function () {
    if (num == im_arr.length) num = 0;
    image6.src = 'images/' + im_arr[num] + '.jpg';
    num++;
});
