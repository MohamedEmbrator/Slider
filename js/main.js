const sliderImages = document.querySelectorAll(".slider-container img");
const slidesCount = sliderImages.length;
let currentSlide = 1;
const slideNumber = document.getElementById("slide-number");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const pagintaionElement = document.createElement("ul");
pagintaionElement.id = "pagintaion-ul";
for (let i = 1; i <= sliderImages.length; i++) {
  const pagintaionItem = document.createElement("li");
  pagintaionItem.setAttribute("data-index", i);
  pagintaionItem.appendChild(document.createTextNode(i));
  pagintaionElement.appendChild(pagintaionItem);
}
document.getElementById("indcators").appendChild(pagintaionElement);
const creadtedUL = document.getElementById("pagintaion-ul");
check();
nextButton.onclick = function () {
  if (!nextButton.classList.contains("disabled")) {
    currentSlide++;
    check();
  }
};
prevButton.onclick = function () {
  if (!prevButton.classList.contains("disabled")) {
    currentSlide--;
    check();
  }
};
function check() {
  slideNumber.textContent = `slide #${currentSlide} of ${slidesCount}`;
  sliderImages.forEach((img) => {
    img.classList.remove("active");
  });
  document.querySelectorAll("#pagintaion-ul li").forEach((element) => {
    element.classList.remove("active");
    element.onclick = function () {
      currentSlide = +element.getAttribute("data-index");
      check();
    };
  });
  sliderImages[currentSlide - 1].classList.add("active");
  creadtedUL.children[currentSlide - 1].classList.add("active");
  if (currentSlide === 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }
  if (currentSlide === slidesCount) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}
