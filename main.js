"usestrict";

const complete = document.querySelector(".complete");
const formEl = document.getElementById("myForm");
const nameHolder = document.querySelector(".name-holder");
const cardHolder = document.getElementById("card-holder-name");
const digit = document.querySelector(".digit");
const cardNumber = document.getElementById("crd-number");
const dateMonth = document.querySelector(".date");
const monthEl = document.getElementById("month");
const yy = document.querySelector(".yy");
const year = document.getElementById("year");
const cvcDisplay = document.querySelector(".cvc-num");
const cvcEl = document.getElementById("cvc");
const nameError = document.getElementById("card-name-error");
const numError = document.getElementById("num-error");
const monthError = document.getElementById("expiry-month-error");
const yearError = document.getElementById("expiry-year-error");
const cvcError = document.getElementById("error-cvc");
const inputError = document.querySelector(".input-grp");
const formError = document.querySelector(".errr-msg");
const continuBtn = document.getElementById("continue");

complete.classList.add("hidden");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validate() || inputError.classList.contains("ok")) {
    formEl.classList.add("hidden");
    complete.classList.remove("hidden");
  } else {
    formError.textContent = " please fill the form with neccessary details🤗 ";
  }
  validate();
});

const validate = () => {
  let cardVal = (nameHolder.innerText = cardHolder.value);
  let numVal = (digit.innerText = cardNumber.value);
  let valMont = (dateMonth.innerText = monthEl.value);
  let valyy = (yy.innerText = year.value);

  let valcv = (cvcDisplay.innerText = cvcEl.value);
  if (cardVal === "") {
    nameError.textContent = " name can't be empty 🙅‍♂️";
    inputError.classList.add("error");
  } else if (cardVal.length < 6 || cardVal.length > 30) {
    nameError.textContent = "name too short🤔";
    inputError.classList.add("error");
    setTimeout(function () {
      nameError.classList.add("hidden");
    }, 3000);
  } else {
    nameError.textContent = "";
    inputError.classList.add("ok");
  }

  if (numVal === "") {
    numError.textContent = " number can't be empty 🤷‍♀️";
    inputError.classList.add("error");
  } else if (
    !numVal.match(/\d{16}/g) ||
    numVal.length < 16 ||
    numVal.length > 16
  ) {
    numError.textContent = " maximum characters should be 16 🤦‍♂️";
    inputError.classList.add("error");
  } else {
    numError.textContent = "";
    inputError.classList.add("ok");
  }

  if (valMont === "") {
    monthError.textContent = "please enter Date";
    inputError.classList.remove("ok");
    inputError.classList.add("error");
  } else {
    inputError.classList.add("ok");
  }

  if (valyy === "") {
    monthError.textContent = "please enter Date";
    inputError.classList.add("error");
  } else {
    inputError.classList.remove("error");
    inputError.classList.add("ok");
  }

  if (valcv === "") {
    cvcError.textContent = "please input your cvc number😎";
    inputError.classList.add("error");
  } else {
    cvcError.textContent = "";
    inputError.classList.add("ok");
  }
};
validate();

continuBtn.addEventListener("click", validate);
