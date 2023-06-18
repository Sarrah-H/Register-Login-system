// register
const EmailIn = document.getElementById('EmailIn');
const NameIn = document.getElementById('NameIn');
const PassIn = document.getElementById('PassIn');
const Submitbtn = document.getElementById('butt');
const mailVal = document.getElementById('mailVal');
const PassVal = document.getElementById('PassVal');

// sign in 
const EmailLog = document.getElementById('Email');
const PassLog = document.getElementById('Pass');
const signInB = document.getElementById('submit-button');

const UserInfo = [];



// if (localStorage.getItem('UserData') != null) {
//     UserInfo.push(JSON.parse(localStorage.getItem('UserData')))
// }




// const mailregx = /^[a-zA-z0-9_]{3,15}@[a-zA-Z]{3,10}\.[a-zA-Z]{2,3}$/
// const passregx = /^[a-zA-z0-9_]{3,15}@[a-zA-Z]{3,10}\.[a-zA-Z]{2,3}$/

/**
 * [] or 
 * [a-z A-Z 0-9 -_] == /w
 * {} num of repeating refers to the [] bafore only 
 */




if (Submitbtn) {

    Submitbtn.addEventListener('click', function () {
        var user = {
            Email: EmailIn.value,
            Name: NameIn.value,
            PassIn: PassIn.value
        }

        UserInfo.push(user)
        localStorage.setItem('UserData', JSON.stringify(UserInfo));
        ClearInputs();


    })
}


function ClearInputs() {
    EmailIn.value = "";
    NameIn.value = "";
    PassIn.value = "";
}

if (EmailIn && PassIn) {
    EmailIn.addEventListener("blur", function () {
        let mailregx = /^[a-zA-z0-9_]{3,15}@[a-zA-Z]{3,10}\.[a-zA-Z]{2,3}$/

        if (mailregx.test(EmailIn.value) == true) {
            console.log('true');
            EmailIn.classList.add('is-valid')
            mailVal.classList.add('hide-error-msg')
            2711
            EmailIn.classList.remove('is-invalid')
        } else {
            console.log('false');
            EmailIn.classList.add('is-invalid')
            mailVal.classList.remove('hide-error-msg')
            EmailIn.classList.remove('is-valid')
        }
    })

    PassIn.addEventListener('blur', function () {
        let pssregx = /^[a-zA-Z0-9_@!#$%^&*()]{3,15}$/

        if (pssregx.test(PassIn.value) == true) {
            PassIn.classList.add('is-valid')
            PassIn.classList.remove('is-invalid')
            PassVal.classList.toggle('vis')
        } else {
            PassIn.classList.add('is-invalid')
            PassIn.classList.remove('is-valid')

        }
    })
}

function ClearInput() {
    EmailLog.value = "";
    PassLog.value = "";
}

if (signInB) {

    signInB.addEventListener('click', (e) => {
        var database = JSON.parse(localStorage.getItem('UserData'));

        if (database.some(validateUser)) {
            window.open(href = "YouRN.html");


        } else {

            mailVal.classList.remove('hide-error-msg')

        }
    });
}



function validateUser(element) {
    var mailLog = EmailLog.value;
    var PasLog = PassLog.value;
    ClearInput();
    return element.Email === mailLog && element.PassIn === PasLog


}
