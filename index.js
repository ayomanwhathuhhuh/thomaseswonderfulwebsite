
function currentpositionfunction(theelement) {
    return +(theelement.getBoundingClientRect().top / window.innerHeight).toFixed(
        2
    );
}
// MUCH BETTER version of navbar that got deleted on accident
let navbartogglevar = false;
let primarynavbarmobile = document.querySelector(".primary-navbar-mobile");
let primarynavbar = document.querySelectorAll(".primary-navbar-lines");
let header = document.querySelector("header");
function handlenavbar(args) {
    if (args == "resize" || args == "onload") {
        if (window.innerWidth > 768) {
            primarynavbarmobile.style.display = "none";
            primarynavbar.style.flexDirection = "row";
        } else {
            primarynavbarmobile.style.display = "flex";
            primarynavbar.style.flexDirection = "column";
        }
    } else if (args == "click") {
        if (navbartogglevar == true) {
            header.style.height = "3rem";
            navbartogglevar = false;
        } else {
            header.style.height = "25vh";
            navbartogglevar = true;
        }
    }
}
// run on window resize or element click
window.addEventListener("resize", () => handlenavbar("resize"));
primarynavbarmobile.addEventListener("click", () => handlenavbar("click"));

handlenavbar("onload"); // when the js file is ran for the first time.

// others
// gotta love javascript and how cursed it is
doxerboxer.innerText = "nothing...";
/*
if (location.protocol !== 'file:') {
    const getJSON = async url => {
        const response = await fetch(url);
        return response.json();
    }
    let doxerboxer = document.getElementById("doxerboxer");
    let doxarray = []
    doxerboxer.innerText = "nothing...";
    getJSON("https://geolocation-db.com/json/")
        .then(data => { // first lookup for basic information not very accurate
            doxarray[0] = data; // make sure to store that ipv4 address
            getJSON(`https://ezcmd.com/apps/api_ezip_locator/lookup/GUEST_USER/-1/${data.IPv4}`) // use previous data (ip address) to find exact details
                .then(data2 => {
                    doxarray[1] = data2; // new exact details i.e hometown state city
                    datafinish(); // call the final function since all of the information is now here
                })
        })
        doxerboxer.innerText = "nothing... still";
    function datafinish() {
        let short = doxarray[1].nearest_postal_code_info; // to make the array readable
        let firstarray = [short.country_name, short.country_code, short.postal_code, short.place_name, short.state, short.province, "Latitude " + short.lat + " Degrees", "Longitude " + short.lon + " Degrees"];
        let intostring = ""
        firstarray.map((value) => { // get all values from the array and put them all into a string (seperated with line breaks)
            intostring += value + "\n"
        })
        doxerboxer.innerText = "IPv4: " + doxarray[0].IPv4 + "\n" + intostring; // get all information and set the div text
    }
} else {
    console.log("local file don't dox");
    doxerboxer.innerText = "currently on local file no dox";
}
*/