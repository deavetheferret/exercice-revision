var triggerA = document.querySelector(".trigger-a");

triggerA.addEventListener("click", () => {
  triggerA.classList.toggle("activate");
});

var triggerB = document.querySelector(".trigger-b");
var boxB = document.querySelector(".box-b");

triggerB.addEventListener("click", () => {
  boxB.classList.toggle("activate");
});

var triggerC = document.querySelector(".trigger-c");
var boxBA = document.querySelector(".box-ba");
var boxCA = document.querySelector(".box-ca");

triggerC.addEventListener("click", () => {
  boxBA.classList.toggle("not-shown");
  boxCA.classList.toggle("not-shown");
});
