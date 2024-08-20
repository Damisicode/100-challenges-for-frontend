'use strict'

let cnt = 3;
const images = document.querySelectorAll(".image-view img");
const carousel = document.querySelectorAll(".carousel img");
let image = images[cnt];
let preview = carousel[cnt];
image.style.display = 'block';
preview.style.border = '2px solid white';

const navHandler = function (nav) {
    images[cnt].style.display = 'none';
    carousel[cnt].style.border = 'none';

    if (nav === "next" && cnt+1 < images.length) {
        cnt++;
    } else if (nav === "prev" && (cnt-1) >= 0) {
        cnt--;
    }

    images[cnt].style.display = 'block';
    carousel[cnt].style.border = '2px solid white';
    carousel[cnt].scrollIntoView({
        behavior: 'smooth',  // Scroll smoothly to the element
        block: 'nearest',    // Align the element to the nearest edge of the container
        inline: 'center'     // Center the element horizontally within the container
    });
}

document.querySelector(".prev").onclick = () => navHandler("prev");
document.querySelector(".next").onclick = () => navHandler("next");


// document.querySelector(".prev").addEventListener('click', function () {
//     navHandler("prev");
//     // if ((cnt-1) >= 0) {
//     //     images[cnt].style.display = 'none';
//     //     carousel[cnt].style.border = 'none';
//     //     cnt--;
//     //     images[cnt].style.display = 'block';
//     //     carousel[cnt].style.border = '2px solid white';
//     //     carousel[cnt].scrollIntoView({
//     //         behavior: 'smooth',  // Scroll smoothly to the element
//     //         block: 'nearest',    // Align the element to the nearest edge of the container
//     //         inline: 'center'     // Center the element horizontally within the container
//     //     });
//     // }
//     // cnt--;
//     // console.log(cnt);
//     // image = document.querySelector(`.carousel img:nth-of-type(${cnt})`);
//     // console.log(image);
//     // image.style.display = 'block';
//     // document.querySelector(`.carousel img:nth-of-type(${cnt+1})`).style.display = 'none';
// })

// document.querySelector(".next").addEventListener('click', function () {
//     navHandler("next");
//     // if ((cnt+1) < images.length) {
//     //     images[cnt].style.display = 'none';
//     //     carousel[cnt].style.border = 'none';
//     //     cnt++;
//     //     images[cnt].style.display = 'block';
//     //     carousel[cnt].style.border = '2px solid white';
//     //     carousel[cnt].scrollIntoView({
//     //         behavior: 'smooth',  // Scroll smoothly to the element
//     //         block: 'nearest',    // Align the element to the nearest edge of the container
//     //         inline: 'center'     // Center the element horizontally within the container
//     //     });
//     // }
// })