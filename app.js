const navbar = document.querySelector(".navbar");

let oldValue = 0;

window.addEventListener("scroll", function (e) {
  // Get the new Value
  newValue = window.pageYOffset;
  // console.log(window.pageYOffset);

  //Subtract the two and conclude
  // if (oldValue - newValue < 0) {
  //   console.log("Down");
  //   navbar.style.transform = "translateY(-60px)";
  // } else if (oldValue - newValue > 0) {
  //   console.log("Up");
  //   navbar.style.transform = "translateY(0px)";
  // }
  // // Update the old value
  // oldValue = newValue;

  if (newValue > 0) {
    navbar.style.backgroundColor = "rgb(136, 0, 199)";
  } else if (newValue == 0) {
    navbar.style.backgroundColor = "transparent";
  }
});
