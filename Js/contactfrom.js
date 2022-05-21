const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorMessage = document.querySelectorAll(".error");

function validateForm(){

    clearMesssages();
    let errorFlag = false;


    if (nameInput.value.length < 5){
        errorMessage[0].innerText = "Please enter your name, minimum 5 characters long";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if (!isValidEmail(email.value)){
        errorMessage[1].innerText = "Please enter a valid Email ";
        email.classList.add("error-border");
        errorFlag = true;
    }
    if (subject.value.length <14 ) {
        errorMessage[2].innerText = "Minimum 15 characters long";
        subject.classList.add("error-border");
        errorFlag = true;
    }
    if (message.value.length < 25){
        errorMessage[3].innerText = "Minimum 25 characters requierd";
        message.classList.add("error-border");
        errorFlag = true;
    }

    if(!errorFlag) {
        success.innerText = "Success!";
    }
}

function clearMesssages() {
    for (let i = 0; i < errorMessage.length; i++) {
        errorMessage[i].innerText ="";
    }
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    subject.classList.remove("error-border");
    message.classList.remove("error-border");
}
// email validation
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}