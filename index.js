
function currentpositionfunction(theelement) {
    return +(theelement.getBoundingClientRect().top / window.innerHeight).toFixed(
        2
    );
}



// all things navbar related which took 8 months to do... why
// kinda works bit janky


// hopefully simple variables?

let simplifyqueryselectionall = (jsinstructions) => { // used to shorten code hopefully more readable
    document.querySelectorAll(".primary-navbar-lines").forEach((element) => {jsinstructions(element)})
}
let primarynavbarmobile = document.querySelector(".primary-navbar-mobile"); // grabby elementy classy primary-navbar-mobile
let primarynavbar = document.querySelector(".primary-navbar"); // grabby elementy classy primary-navbar
let header = document.getElementById("header"); // ignore the ugly "getElementById" I am totally sane
// run on page load
if (window.innerWidth > 768) {
    primarynavbarmobile.style.display = "none";
    primarynavbar.style.flexDirection = "row";
    simplifyqueryselectionall((element) => {element.style.opacity = "1"});
} else {
    primarynavbarmobile.style.display = "flex";
    primarynavbar.style.flexDirection = "column";
    simplifyqueryselectionall((element) => {element.style.opacity = "0"});
}
// run on window resize
window.addEventListener("resize", (event) => {
    if (window.innerWidth > 768) {
        primarynavbarmobile.style.display = "none";
        header.style.height = "3rem"; // reset navbar height
        primarynavbar.style.flexDirection = "row"; // and direction
        simplifyqueryselectionall((element) => {element.style.opacity = "1"; element.style.margin = "0.5rem";}) // default size and stuff
        navbar = true // navbar fully reset probably
    } else {
        primarynavbarmobile.style.display = "flex"; // turn on the navbar button
        primarynavbar.style.flexDirection = "column"; // switch navbar direction
        if (navbar == true) { // added if statement because the elements kept going poof while resizing the window
            simplifyqueryselectionall((element) => {element.style.opacity = "0"; element.style.margin = "2rem";}) // turn off the navbar elements
        }
    }
});
let navbar = true;
function navbarmenuclick() {
    if (navbar == true) {
        header.style.height = "100vh";
        simplifyqueryselectionall((element) => {element.style.opacity = "1"}) // expanded
        navbar = false // expanded navbar
    } else { // run when either the window is bigger then 768 pixels OR the navbar is collapsing (idk how to spell)
        header.style.height = "3rem";
        simplifyqueryselectionall((element) => {element.style.opacity = "0";}) // turn off the navbar elements
        navbar = true // navbar back to default
    }
}
