'use strict'


const images = document.querySelectorAll('.carousel img');
let cnt = 3;
let image = images[cnt];
image.style.display = 'block';

const navHandler = function (nav) {
    image.style.display = 'none';

    if (nav === "prev" && cnt-1 >= 0) {
        cnt--;
    } else (nav === "next" && cnt+1 < images.length) {
        cnt++;
    }
    image = images[cnt];
    image.style.display = 'block';
}

document.querySelector("prev").onclick = () => navHandler("prev");
document.querySelector("next").onclick = () => navHandler("next");