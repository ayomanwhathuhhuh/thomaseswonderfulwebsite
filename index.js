function currentpositionfunction(theelement) {
  return +(theelement.getBoundingClientRect().top / window.innerHeight).toFixed(
    2
  );
}
// MUCH BETTER version of navbar that got deleted on accident
let navbartogglevar = false;
let primarynavbarmobile = document.querySelector(".primary-navbar-mobile");
let primarynavbar = document.querySelector(".primary-navbar");
let primarynavbarlines = (passedfunction) =>
  document
    .querySelectorAll(".primary-navbar-lines")
    .forEach((element) => passedfunction(element));
// explanation of primary navbar function since even i struggle to understand my big brain
/* i threw this into chat gpt and its explanation is pretty good...
Sure, let's break down the provided line of JavaScript code:

```javascript
let primarynavbar = (passedfunction) => document.querySelectorAll(".primary-navbar-lines").forEach((element) => passedfunction(element));
```

This line of code defines a variable `primarynavbar` and assigns it a function. Let's break it down step by step:

1. `let primarynavbar`: This declares a variable named `primarynavbar` using the `let` keyword. Variables declared with `let` can be reassigned.

2. `(passedfunction) =>`: This part signifies that the variable `primarynavbar` is being assigned a function. This function takes one argument, which is named `passedfunction`.

3. `document.querySelectorAll(".primary-navbar-lines")`: This part uses the `document.querySelectorAll()` method to select all elements in the document that have a class of `primary-navbar-lines`. This method returns a NodeList containing all matching elements.

4. `.forEach((element)=>passedfunction(element))`: This part iterates over each element in the NodeList returned by `document.querySelectorAll()`. For each element, it executes the function passed to `primarynavbar` (which is stored in the `passedfunction` parameter) with the current element as an argument.

In summary, this line of code defines a function `primarynavbar` that takes another function as an argument (`passedfunction`). It selects all elements with the class `primary-navbar-lines`, and for each of these elements, it executes the function `passedfunction`. This allows for a flexible way to perform operations on each element selected by the class `.primary-navbar-lines`.
*/

let header = document.querySelector("header");
function handlenavbar(args) {
  if (args == "resize" || args == "onload") {
    if (window.innerWidth > 768) {
      primarynavbarmobile.style.display = "none";
      primarynavbar.style.flexDirection = "row";
      header.style.maxHeight = "3rem"; // reset navbar height only when the window is big enough
      primarynavbarlines((element) => {
        element.style.opacity = "1";
        element.style.margin = "2rem";
        element.style.pointerEvents = "auto";
      });
      navbartogglevar = true // navbar fully reset probably
    } else {
      primarynavbarmobile.style.display = "flex";
      primarynavbar.style.flexDirection = "column";
      if (navbartogglevar == true || args == "onload") {
        primarynavbarlines((element) => {
          element.style.opacity = "0";
          element.style.margin = "0.5rem";
          element.style.pointerEvents = "none";
        });
      }
    }
  } else if (args == "click") {
    if (navbartogglevar == true) {
      header.style.maxHeight = "25vh";
      primarynavbarlines((element) => {
        element.style.opacity = "1";
        element.style.pointerEvents = "auto";
      });
      navbartogglevar = false;
    } else {
      header.style.maxHeight = "3rem";
      primarynavbarlines((element) => {
        element.style.opacity = "0";
        element.style.pointerEvents = "none";
      });
      navbartogglevar = true;
    }
  }
}
// run on window resize or element click
window.addEventListener("resize", () => handlenavbar("resize"));
primarynavbarmobile.addEventListener("click", () => handlenavbar("click"));
handlenavbar("onload"); // when the js file is ran for the first time.
