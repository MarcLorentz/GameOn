function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

const closeButton = document.querySelector(".close");

closeButton.addEventListener("click", function () {
  modalbg.style.display = "none";
});
//const formData = document.querySelectorAll(".formData");
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  let success = document.getElementById("successContainer");
  //let myInput = document.querySelector(".btn-submit");
  //let formTxt = document.querySelector(".bground");

  e.preventDefault();
  let isValid = true;

  const firstName = document.getElementById("first");
  const lastName = document.getElementById("last");
  const email = document.getElementById("email");
  const birthDate = document.getElementById("birthdate");
  const tournamentNumber = document.getElementById("quantity");
  const mentionsAgreement = document.getElementById("checkbox1");

  // errors
  const errorFirstName = document.getElementById("firstname-error");
  const errorLastName = document.getElementById("lastname-error");
  const errorEmail = document.getElementById("email-error");
  const errorBirthDate = document.getElementById("birthdate-error");
  const errorNumber = document.getElementById("number-error");
  const errorLocation = document.getElementById("location-error");
  const errorAgreement = document.getElementById("agreement-error");

  console.log(firstName.value);
  console.log(lastName.value);
  console.log(email.value);
  console.log(birthDate.value);
  console.log(tournamentNumber.value);
  //console.log(radioValue.value);
  console.log(mentionsAgreement.checked);
  //console.log(wishAgreement.checked);

  //error firstName
  if (firstName.value.length <= 2) {
    errorFirstName.innerText = "Veuillez renseigner ce champs.";
    isValid = false;
  }

  //error lastName
  if (lastName.value.length <= 2) {
    errorLastName.innerText = "Veuillez renseigner ce champs.";
    isValid = false;
  }

  //error email
  var validRegex = "[a-z._-]+@[a-z._-]+\\.[a-z._-]+";
  if (email.value.match(validRegex)) {
  } else {
    //alert("invalid email!");
    errorEmail.innerText = "Veuillez entrer une adresse mail valide";
    isValid = false;
    return false;
  }

  //error birthdate
  var dateformat = /^\d{4}[./-]\d{2}[./-]\d{2}$/;
  // Match the date format through regular expression
  if (birthDate.value.match(dateformat)) {
    isValid = true;
  } else {
    //alert("Invalid date format!");
    errorBirthDate.innerText = "Vous devez entrer votre date de naissance.";
    isValid = false;
    return false;
  }

  //errorTournament
  if (!tournamentNumber.value) {
    errorNumber.innerText = "Vous devez sélectionner un chiffre.";
    isValid = false;
  }

  //error Location
  let radioValue = document.querySelectorAll('input[name="location"]');
  let city = "";
  for (let i = 0; i < radioValue.length; i++) {
    if (radioValue[i].checked) {
      city = radioValue[i].value;
      break;
    }
  }
  console.log(city);
  if (city == "") {
    errorLocation.innerText = "Veuillez sélectionner une ville";
    return false;
  }

  //error mentionsAgreement
  if (mentionsAgreement.checked) {
  } else {
    errorAgreement.innerText =
      "vous devez vérifier que vous accepter les termes et conditions.";
    isValid = false;
  }
  console.log(mentionsAgreement.value);
  const myInput = document.querySelector(".btn-submit");
  if (!myInput.checked) {
  } else {
    isValid = false;
  }
  console.log(myInput);

  console.log(isValid);

  const successMessage = document.getElementById("successContainer");
  const closeModale = document.querySelector(".btn-close");
  if (isValid === true) {
    form.style.display = "none";
    successMessage.style.display = "block";
    closeModale.style.display = "block";
  }
  closeModale.addEventListener("click", function () {
    modalbg.style.display = "none";
  });
});
