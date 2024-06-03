// For API - visit the site
// News API: https://emailvalidation.io/
// https://app.emailvalidation.io/dashboard

// For loading image - https://loading.io/

let result = {
  tag: "",
  free: true,
  role: false,
  user: "rahul",
  email: "rahul@gmail.com",
  score: 0.48,
  state: "undeliverable",
  domain: "gmail.com",
  reason: "invalid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: false,
  did_you_mean: "",
  format_valid: true,
};

const API_KEY = "ema_live_9Vts4KBH1m4gjPkKGzCnwzHqZlS9Endt4qDZ9Y5c";

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    resultCont.innerHTML = `<img src="./Image/loading.svg" width= "100px" alt="">`;

    let email = document.getElementById("email").value;
    let API_KEY = "ema_live_9Vts4KBH1m4gjPkKGzCnwzHqZlS9Endt4qDZ9Y5c";

    let url = `https://api.emailvalidation.io/v1/info?apikey=${API_KEY}&email=${email}`;
    let res = await fetch(url);
    let result = await res.json();

    let str = ``;
    for (API_KEY of Object.keys(result)) {
        if(result[API_KEY] !== "" && result[API_KEY]!== " ") { 
            str = str + `<div>${API_KEY}: ${result[API_KEY]}</div>`
        }
    }

    console.log(str);
    resultCont.innerHTML = str;
});


