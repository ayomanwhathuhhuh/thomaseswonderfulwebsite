
function currentpositionfunction(theelement) {
    return +(theelement.getBoundingClientRect().top / window.innerHeight).toFixed(
        2
    );
}



// all things navbar related which took 8 months to do... why
// kinda works bit janky


// hopefully simple variables?

let simplifyqueryselectionall = (jsinstructions) => { // used to shorten code hopefully more readable
    document.querySelectorAll(".primary-navbar-lines").forEach((element) => { jsinstructions(element) })
}
let primarynavbarmobile = document.querySelector(".primary-navbar-mobile"); // grabby elementy classy primary-navbar-mobile
let primarynavbar = document.querySelector(".primary-navbar"); // grabby elementy classy primary-navbar
let header = document.getElementById("header"); // ignore the ugly "getElementById" I am totally sane
// run on page load
if (window.innerWidth > 768) {
    primarynavbarmobile.style.display = "none";
    primarynavbar.style.flexDirection = "row";
    simplifyqueryselectionall((element) => { element.style.opacity = "1"; element.style.pointerEvents = "auto"; });
} else {
    primarynavbarmobile.style.display = "flex";
    primarynavbar.style.flexDirection = "column";
    simplifyqueryselectionall((element) => { element.style.opacity = "0"; element.style.pointerEvents = "none"; });
}
// run on window resize
let debounce = false; // to stop the event from running a trillion times
window.addEventListener("resize", (event) => {
    if (debounce == false) {
        if (window.innerWidth > 768) {
            primarynavbarmobile.style.display = "none";
            header.style.height = "3rem"; // reset navbar height
            primarynavbar.style.flexDirection = "row"; // and direction
            simplifyqueryselectionall((element) => { element.style.opacity = "1"; element.style.margin = "0.5rem"; element.style.pointerEvents = "auto"; }) // default size and stuff
            navbar = true // navbar fully reset probably
        } else {
            primarynavbarmobile.style.display = "flex"; // turn on the navbar button
            primarynavbar.style.flexDirection = "column"; // switch navbar direction
            if (navbar == true) { // added if statement because the elements kept going poof while resizing the window
                simplifyqueryselectionall((element) => { element.style.opacity = "0"; element.style.margin = "2rem"; element.style.pointerEvents = "none"; }) // turn off the navbar elements
            }
        }
        debounce = true
        setTimeout(() => { debounce = false; }, 50);
    }
});
let navbar = true;
function navbarmenuclick() {
    if (navbar == true) {
        header.style.height = "50vh";
        simplifyqueryselectionall((element) => { element.style.opacity = "1"; element.style.pointerEvents = "auto"; }) // expanded
        navbar = false // expanded navbar
    } else { // run when either the window is bigger then 768 pixels OR the navbar is collapsing (idk how to spell)
        header.style.height = "3rem";
        simplifyqueryselectionall((element) => { element.style.opacity = "0"; element.style.pointerEvents = "none"; }) // turn off the navbar elements
        navbar = true // navbar back to default
    }
}


// others
// gotta love javascript and how cursed it is
if (location.protocol !== 'file:') {
    const getJSON = async url => {
        const response = await fetch(url);
        return response.json();
    }
    let doxerboxer = document.getElementById("doxerboxer");
    let doxarray = []

    getJSON("https://geolocation-db.com/json/")
        .then(data => { // first lookup for basic information not very accurate
            doxarray[0] = data; // make sure to store that ipv4 address
            getJSON(`https://ezcmd.com/apps/api_ezip_locator/lookup/GUEST_USER/-1/${data.IPv4}`) // use previous data (ip address) to find exact details
                .then(data2 => {
                    doxarray[1] = data2; // new exact details i.e hometown state city
                    datafinish(); // call the final function since all of the information is now here
                })
        })

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