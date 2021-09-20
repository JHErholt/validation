function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function validate() {
  const $result = $("#result");
  const email = $("#mail").val();
  $result.text("");

//   if (validateEmail(email)) {
//     $result.text(email + " is valid :)");
//     $result.css("color", "green");
//   } else {
//     $result.text(email + " is not valid :(");
//     $result.css("color", "red");
//   }
  return false;
}
$("#mail").on("input", validate);

// Få hvilken dag det er idag og substrater med 18 og 90
var n = new Date();
var max = n.getFullYear() - 18 + '-' + ("   0" + (n.getMonth() + 1)).slice(-2) + '-' + ("0" + n.getDate()).slice(-2);
var min = n.getFullYear() - 90 + '-' + ("   0" + (n.getMonth() + 1)).slice(-2) + '-' + ("0" + n.getDate()).slice(-2);
var bdayInput = document.getElementById('bday')
bdayInput.max = max
bdayInput.min = min

// Tjekker om det er tal eller backspace
function validateChar(e) {
    var charValue = String.fromCharCode(e.keyCode);
    if ((isNaN(charValue)) && (e.which != 8)) { // Backspace er 8
        e.preventDefault();
    }
    return true;
}
function validateChar1(e) {
    var charValue = String.fromCharCode(e.keyCode);
    if ((isNaN(charValue)) && (e.which != 0)) {
    }else
    e.preventDefault();
    return true;
}

// tjekker hvis formen er tom
function validateForm() {
    var fName = document.getElementById('fName')
    var lName = document.getElementById('lName')
    var bday = document.getElementById('bday')
    var phone = document.getElementById('phone')
    var mail = document.getElementById('mail')
    var reMail = document.getElementById('reMail')
    var password = document.getElementById('password')
    var rePassword = document.getElementById('rePassword')

    console.log(fName.value)
    console.log(lName.value)
    console.log(bday.value)
    console.log(phone.value)
    console.log(mail.value)
    console.log(reMail.value)
    console.log(password.value)
    console.log(rePassword.value)

    var removeError = document.querySelectorAll('.error')

    if (fName && fName.value == '') {
        for (let i = 0; i < removeError.length; i++) {
            removeError[i].classList.remove('error')
        }
        fName.focus()
        fName.classList.add('error')
        return false
    }

    if (lName && lName.value == '') {
        for (let i = 0; i < removeError.length; i++) {
            removeError[i].classList.remove('error')
        }
        lName.focus()
        lName.classList.add('error')
        return false
    }

    if (bday && bday.value == '') {
        for (let i = 0; i < removeError.length; i++) {
            removeError[i].classList.remove('error')
        }
        bday.focus()
        bday.classList.add('error')
        return false
    }

    if (phone && phone.value == '') {
        for (let i = 0;i < removeError.length; i++){
            removeError[i].classList.remove('error')
        }
        phone.focus()
        phone.classList.add('error')
        return false
    }

    if (mail && mail.value == '') {
        for (let i = 0;i < removeError.length; i++){
            removeError[i].classList.remove('error')
        }
        mail.focus()
        mail.classList.add('error')
        return false
    }

    const email = $("#mail").val();
    if (validateEmail(email)) {

    } else {
        for (let i = 0;i < removeError.length; i++){
            removeError[i].classList.remove('error')
        }
        mail.focus()
        mail.classList.add('error')
        return false
    }
    
    if (reMail && reMail.value == '') {
        for (let i = 0;i < removeError.length; i++){
            removeError[i].classList.remove('error')
        }
        reMail.focus()
        reMail.classList.add('error')
        return false
    }

    if (reMail.value !== mail.value) {
        for (let i = 0;i < removeError.length; i++){
            removeError[i].classList.remove('error')
        }
        reMail.focus()
        reMail.value = ""
        reMail.classList.add('error')
        return false
    }

    if (password && password.value == '') {
        for (let i = 0;i < removeError.length; i++){
            removeError[i].classList.remove('error')
        }
        password.focus()
        password.classList.add('error')
        return false
    }

    if (rePassword && rePassword.value == '') {
        for (let i = 0;i < removeError.length; i++){
            removeError[i].classList.remove('error')
        }
        rePassword.focus()
        rePassword.classList.add('error')
        return false
    }

    if (rePassword.value !== password.value) {
        for (let i = 0;i < removeError.length; i++){
            removeError[i].classList.remove('error')
        }
        rePassword.focus()
        rePassword.value = ""
        rePassword.classList.add('error')
        return false
    }
    for (let i = 0; i < removeError.length; i++) {
        removeError[i].classList.remove('error')
    }
    return true
}

var form = document.querySelector('form')
form.addEventListener('submit', function (e) {
    if (validateForm() === true) {
        alert('Hej ' + fName.value + ' ' + lName.value + ' din fødselsdag er ' + bday.value + ', dit telefon nummer er ' + phone.value + ' og din mail er ' + mail.value)
    } else {
        e.preventDefault();
    }
})


