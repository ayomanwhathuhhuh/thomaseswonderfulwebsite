
function currentpositionfunction(theelement) {
    return +(theelement.getBoundingClientRect().top / window.innerHeight).toFixed(
        2
    );
}



// hopefully simple?
let navbartogglevar = false;
let simplifyqueryselectionall = (args) => { document.querySelectorAll(".primary-navbar-lines").forEach((element) => args(element)) }; // fancier function

let enableelements = () => {
    document.querySelectorAll(".primary-navbar-lines").forEach((element) => {
        element.style.opacity = "1"; element.style.pointerEvents = "auto";
    })
}
let disableelements = () => {
    document.querySelectorAll(".primary-navbar-lines").forEach((element) => {
        element.style.opacity = "0"; element.style.pointerEvents = "none";
    })
}
let resizeelements = () => {
    document.querySelectorAll(".primary-navbar-lines").forEach((element) => {
        element.style.opacity = "1"; element.style.margin = "2rem"; element.style.pointerEvents = "auto";
    })
    header.style.height = "3rem";
    header.style.transition = "all 0.5s";
}
let unresizeelements = () => {
    document.querySelectorAll(".primary-navbar-lines").forEach((element) => {
        element.style.opacity = "0"; element.style.margin = "0.5rem"; element.style.pointerEvents = "none";
    })
    header.style.transition = "all 0.5s";
}
let primarynavbarmobile = document.querySelector(".primary-navbar-mobile");
let primarynavbar = document.querySelector(".primary-navbar");
let header = document.querySelector("header");
function handlenavbar(args) {
    if (args == "resize" || args == "onload") {
        if (window.innerWidth > 768) {
            primarynavbarmobile.style.display = "none";
            primarynavbar.style.flexDirection = "row";
            header.style.transition = "none";
            setTimeout(resizeelements(), 50); // wait for css transition to be set to none THEN run function
            navbartogglevar = false;
            console.log('e');
        } else {
            console.log('e2');
            if (navbartogglevar !== true) { // if the navbar is already expanded don't break everything
                primarynavbarmobile.style.display = "flex";
                header.style.transition = "none";
                primarynavbar.style.flexDirection = "column";
                setTimeout(unresizeelements(), 50);
            }
        }
    } else if (args == "click") {
        if (navbartogglevar == true) {
            header.style.height = "3rem";
            disableelements();
            navbartogglevar = false;
        } else {
            header.style.height = "25vh";
            enableelements();
            navbartogglevar = true;
        }
    }
}
// run on window resize or element click
window.addEventListener("resize", () => handlenavbar("resize"));
primarynavbarmobile.addEventListener("click", () => handlenavbar("click"));
handlenavbar("onload"); // initial load