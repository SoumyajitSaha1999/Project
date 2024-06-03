let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let carouselDom = document.querySelector(".carousel");
let listItemDom = document.querySelector(".carousel .list");
let thunbnailDom = document.querySelector(".carousel .thunbnail");

nextDom.onclick = function() {
    showSlider("next");
}

prevDom.onclick = function() {
    showSlider("prev")
}

let timeRunning = 3000;
let runTimeOut;

let timeAutoNext = 6000;
let runAutoNext = setTimeout(() => {
    next.click();
}, timeAutoNext);

function showSlider(type) {
    let itemSlider = document.querySelectorAll(".carousel .list .item");
    let itemThumbnail = document.querySelectorAll(".carousel .thunbnail .item");

    if(type === "next") {
        listItemDom.appendChild(itemSlider[0]);
        thunbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add("next");
    } else {
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thunbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add("prev")
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove("next")
        carouselDom.classList.remove("prev")
    }, timeRunning);

    clearTimeout(runAutoNext);
    runAutoNext = setTimeout(() => {
        next.click();
    }, timeAutoNext);

}