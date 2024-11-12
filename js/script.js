const button = document.getElementById("negative");

let moveX = 0;
let moveY = 0;
let stopX = 0;
let stopY = 0;
let isMoving = false;

function animation() {
    if (isMoving) {
        requestAnimationFrame(animation);
        moveX += (stopX - moveX) * 0.2;
        moveY += (stopY - moveY) * 0.2;

        button.style.transform = `translate(${moveX}px, ${moveY}px)`;

        if (Math.abs(stopX - moveX) < 0.2 && Math.abs(stopY - moveY) < 0.2) {
            isMoving = false;
        }
    }
}

button.addEventListener("mouseover", function() {
    stopX = Math.random() * 801 - 400;
    stopY = Math.random() * 401 - 400;
    isMoving = true;
    animation();
});