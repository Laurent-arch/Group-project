// Defining a function to display errorText message
function printerrtext(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form
function validateForm() {
  // Retrieving the values of form elements
  const firstname = document.demoForm.firstname.value;
  const lastname = document.demoForm.lastname.value;
  const email = document.demoForm.email.value;
  const pswd1 = document.demoForm.pswd1.value;
  const pswd2 = document.demoForm.pswd2.value;
//   const hobbies = [];
//   const checkboxes = document.getElementsByName("hobbies[]");

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      // Populate hobbies array with selected values
      hobbies.push(checkboxes[i].value);
    }
  }

  // Defining errorText variables with a default value
  var firstnameError = (emailError = lastnameError = pswdError = true);
  // Validate name
  if (firstname == "") {
    printerrtext("nameError", "Please enter your name");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(firstname) === false) {
      printerrtext("nameError", "Please enter a valid name");
    } else {
      printerrtext("nameError", "");
      nameError = false;
    }
  }
  // Validate email address
  if (email == "") {
    printerrtext("emailError", "Please enter your email address");
  } else {
    // Regular expression for basic email validation
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      printerrtext("emailError", "Please enter a valid email address");
    } else {
      printerrtext("emailError", "");
      emailError = false;
    }
  }


  // Validate Password
  if (pswd == "") {
    printerrtext("pswdError", "Please enter your password");
  } else {
    var regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (regex.test(pswd) === false) {
      printerrtext("pswdError", "Min : 6 character in form Asd4$l");
    } else {
      printerrtext("pswdError", "");
      pswdError = false;
    }
  }



  // Prevent the form from being submitted if there are any errtexts
  if (
    (nameError ||
      emailError ||
      mobileError ||
      countryError ||
      genderError ||
      pswdError) == true
  ) {
    return false;
  } 
}
