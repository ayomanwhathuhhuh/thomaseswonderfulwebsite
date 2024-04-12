function currentpositionfunction(theelement) {
  return +(theelement.getBoundingClientRect().top / window.innerHeight).toFixed(
    2
  );
}
// MUCH BETTER version of navbar that got deleted on accident
let navbartogglevar = false;
let header = document.querySelector("header");
let primarynavbar = document.querySelector(".primary-navbar");
let primarynavbarmobile = document.querySelector(".primary-navbar-mobile");
let primarynavbarlines = document.querySelectorAll(".primary-navbar-lines"); // typescript is strange
function handlenavbar(args) {
  if (args == "resize" || args == "onload") {
    if (window.innerWidth > 768) {
      primarynavbarmobile.style.display = "none";
      primarynavbar.style.flexDirection = "row";
      header.style.maxHeight = "3rem"; // reset navbar height only when the window is big enough
      primarynavbarlines.forEach((line) => {
        line.style.opacity = "1";
        line.style.margin = "2rem";
        line.style.pointerEvents = "auto";
      });
    } else {
      primarynavbarmobile.style.display = "flex";
      primarynavbar.style.flexDirection = "column";
      if (navbartogglevar == true || args == "onload") {
        primarynavbarlines.forEach((line) => {
          line.style.opacity = "1";
          line.style.margin = "2rem";
          line.style.pointerEvents = "auto";
        });
      }
    }
  } else if (args == "click") {
    if (navbartogglevar == true) {
      header.style.maxHeight = "3rem";
      primarynavbarlines.forEach((line) => {
        line.style.opacity = "1";
        line.style.margin = "2rem";
        line.style.pointerEvents = "auto";
      });
    } else {
      header.style.maxHeight = "25vh";
      primarynavbarlines.forEach((line) => {
        line.style.opacity = "1";
        line.style.margin = "2rem";
        line.style.pointerEvents = "auto";
      });
    }
    navbartogglevar = !(navbartogglevar);
  }
}
// run on window resize or element click
window.addEventListener("resize", () => handlenavbar("resize"));
primarynavbarmobile.addEventListener("click", () => handlenavbar("click"));
handlenavbar("onload"); // when the js file is ran for the first time.
