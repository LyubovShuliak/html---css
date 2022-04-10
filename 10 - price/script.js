const progressGrowth = document.querySelector(".growth");

progressGrowth.addEventListener("input", function () {
  const value = this.value === 0 ? 0 : this.value / 1000;

  this.style.background = `linear-gradient(to right, white 0%, white ${value}%, rgba(238, 255, 1, 1) ${value}%, rgba(238, 255, 1, 1) 100%)`;
  document.querySelector(".subscribers_quantity_growth").innerHTML =
    this.value + " subscribers";
});

const progress = document.querySelector(".professional");

progress.addEventListener("input", function () {
  const value = this.value === 0 ? 0 : this.value / 5000;
  this.style.background = `linear-gradient(to right, white 0%, white ${value}%, rgba(238, 255, 1, 1) ${value}%, rgba(238, 255, 1, 1) 100%)`;
  document.querySelector(".subscribers_quantity_professional").innerHTML =
    this.value + " subscribers";
});
