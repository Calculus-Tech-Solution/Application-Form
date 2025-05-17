document.addEventListener(`DOMContentLoaded`, function () {
  const unHide = document.querySelector(`.yes`);
  const Hide = document.querySelector(`.no`);
  const label = document.querySelector(`.label`);
  const form = this.documentElement.querySelector(`#Signup-Form`);
  const dateInput = document.querySelector(`#bob`);
  const errorMessage = document.querySelector(`error-message`);

  Hide.addEventListener(`click`, function (e) {
    e.preventDefault();
    label.classList.add("hidden");
  });

  unHide.addEventListener(`click`, function (e) {
    e.preventDefault();
    label.classList.remove("hidden");
    unHide.checkVisibility;
  });

  form.addEventListener(`submit`, function (event) {
    const selectedDate = new Date(dateInput);
    const minDate = new Date(`1980-01-01`);
    const maxDate = new Date(`2015-12-31`);

    if (!dateInput.value) {
      errorMessage.textContent = `Please select a date.`;
      event.preventDefault();
    } else if (selectedDate < minDate || selectedDate > maxDate) {
      errorMessage.textContent = `Applicant must be 10years or Older`;
      event.preventDefault();
    } else {
      errorMessage.textContent = ``;
    }
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
