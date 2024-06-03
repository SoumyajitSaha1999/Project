
const button = document.getElementById("get-location-button");


async function getData(lat, long){
    const promise = fetch(
        `http://api.weatherapi.com/v1/current.json?key=d0c17541f755420892e125738231810 &q=${lat},${long}&aqi=yes`
    );
    return (await promise).json();
} 

async function gotLocation(position){
    console.log(position);

    const result = await getData(position.coords.latitude, position.coords.longitude);
    console.log(result);
}

function failedToGet(){
    console.log("There is some issue");
}

button.addEventListener("click", async () => {

    /* navigator Object available in javascript by default. In 
    getCurrentPosition take 2 call back function. First one is successCallback
    and second one is errorCallback */

    const result = navigator.geolocation.getCurrentPosition(gotLocation, failedToGet);
})