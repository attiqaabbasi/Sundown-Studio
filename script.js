const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

let elemCont = document.querySelector("#elem-container");
let fixedImage = document.querySelector("#fixed-images");
elemCont.addEventListener("mouseenter",()=> {
  fixedImage.style.visibility = "visible";
})
elemCont.addEventListener("mouseleave", () => {
  fixedImage.style.visibility = "hidden";
})

let elements = document.querySelectorAll(".elem");
elements.forEach((e) => {
  e.addEventListener("mouseenter", () => {
    let image = e.getAttribute("data-elem");
    fixedImage.style.backgroundImage = `url(${image})`;
  })
})
