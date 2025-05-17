document.addEventListener(`DOMContentLoaded`, function () {
  const unHide = document.querySelector(`.yes`);
  const Hide = document.querySelector(`.no`);
  const label = document.querySelector(`.label`);

  Hide.addEventListener(`click`, function (e) {
    e.preventDefault();
    label.classList.add("hidden");
  });

  unHide.addEventListener(`click`, function (e) {
    e.preventDefault();
    label.classList.remove("hidden");
    unHide.checkVisibility;
  });

});
function lettersOnly(input) {
  var regex = /[^a-z]/gi;
  input.value = input.value.replace(regex, "");
}
function numbersOnly(input) {
  var regex = /[^0-9]/gi;
  input.value = input.value.replace(regex, "");
}
