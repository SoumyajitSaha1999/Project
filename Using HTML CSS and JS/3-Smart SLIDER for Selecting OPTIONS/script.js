var slider = document.querySelector(".slider");
var thumb = document.getElementById("thumb");

var isDragging = false;
var currentPositionX = 0;
var maxPositionX = slider.clientWidth;

function startDragging(event) {
  isDragging = true;
  changeThumbWidth(event);
  event.preventDefault();
}
function changeThumbWidth(event) {
    if(isDragging) {
        var slideRect = slider.getBoundingClientRect();
        var positionX = event.clientX - slideRect.left;
        positionX = Math.min(Math.max(positionX, 0),maxPositionX);
        currentPositionX = positionX;
        thumb.style.width = positionX + "px";
        thumb.style.cursor = "grabbing";
        document.body.style.cursor = "grabbing";
    }
}
thumb.addEventListener("mousedown", startDragging);
thumb.addEventListener("mousemove", changeThumbWidth);
document.addEventListener("mousemove", changeThumbWidth);

function stopDragging() {

    let parcent = currentPositionX/maxPositionX;
    let finalPosition = 0;

    if(parcent >= 0 && parcent < 0.12) {
        finalPosition = 0;
    }
    else if(parcent >= 0.12 && parcent < 0.37) {
        finalPosition = 0.25 * maxPositionX;
    }
    else if(parcent >= 0.37 && parcent < 0.62) {
        finalPosition = 0.5 * maxPositionX;
    }
    else if(parcent >= 0.62 && parcent < 0.87) {
        finalPosition = 0.75 * maxPositionX;
    }
    else if(parcent >= 0.87 && parcent < 1) {
        finalPosition = maxPositionX;
    }

    thumb.style.width = finalPosition + "px"

    isDragging = false;
    thumb.style.cursor = "grab";
    document.body.style.cursor = "grab";
}
thumb.addEventListener("mouseup", stopDragging);
document.addEventListener("mouseup", stopDragging);
