const button = document.getElementById("click-button")

function showTime(){
    const currentTime = new Date();
    // console.log(currentTime); <-- at Oct 21 2023 20:02:40

    // Now you want human redable time
    const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    document.getElementById("time").innerText = time;
}

let interval = setInterval(showTime, 1000) ;

button.addEventListener("click", () => {
    clearInterval(interval);
})