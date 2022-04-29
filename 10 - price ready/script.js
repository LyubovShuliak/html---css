const progressGrowth = document.querySelector(".pp_growth");

progressGrowth.addEventListener("input", function () {
  const value = this.value === 0 ? 0 : this.value / 1000;

  this.style.background = `linear-gradient(to right, white 0%, white ${value}%, rgba(238, 255, 1, 1) ${value}%, rgba(238, 255, 1, 1) 100%)`;
  document.querySelector(".subscribers_quantity_growth").innerHTML =
    this.value + " subscribers";
});

const progress = document.querySelector(".pp_professional");

progress.addEventListener("input", function () {
  const value = this.value === 0 ? 0 : this.value / 5000;
  this.style.background = `linear-gradient(to right, white 0%, white ${value}%, rgba(238, 255, 1, 1) ${value}%, rgba(238, 255, 1, 1) 100%)`;
  document.querySelector(".subscribers_quantity_professional").innerHTML =
    this.value + " subscribers";
});

// const tbody = document.querySelectorAll("tbody");

// const tr = document.createElement("tr");

// if (window.matchMedia("(max-width: 1024px)").matches) {
//   tbody.forEach((el) => {
//     const td = el.children;

//     [...td].forEach((el) => {
//       const parent = el.parentNode;
//       const newTr = document.createElement("tr");

//       newTr.style.backgroundColor = el.style.background;
//       const newTd = document.createElement("td");
//       newTd.style.textAlign = "center";
//       newTd.innerText = el.children[0].innerText;

//       el.removeChild(el.children[0]);
//       newTd.colSpan = 4;
//       newTr.appendChild(newTd);
//       parent.insertBefore(newTr, el);
//     });
//   });
// }
