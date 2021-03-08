function printerText(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm(){
    // const email = document.loginForm.email.value;
    const pswd = document.loginForm.pswd.value;

    // var emailError = true;
    var pswdError = true;

    // if(email == ""){
    //     printerText('emailError', 'Please enter a valid email')
    // }
    // else {
    //     var regex = /^\S+@\S+\.\S+$/;
    //     if (regex.test(email) === false){
    //         printerText('emailError', 'Please enter a valid email')
    //     }
    //     else {
    //         printerText('email Error', '')
    //     } emailError = false;
    // }

    if (pswd == ""){
        printerText('pswdError', "Please enter your password")
    }
    else {
        var regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if(regex.test(pswd) === false){
            printerText("pswdError", "Min: 6 character in form Asd4$1");
        }
        else {
            printerText('pswdError', "")
            pswdError = false;
        }
    }
}