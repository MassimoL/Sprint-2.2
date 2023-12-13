// Exercise 6

function validate() {
    let error = 0;
    event.preventDefault(); // To avoid reloading the page when clicking SAVE and to display the console.log

    let lettersOnly = /^[A-Za-z]+$/;
    let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,3})+$/;
    let numberFormat = /^\d{9}$/;
    let passwordFormat = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

    // Get the input fields
    let fName = document.getElementById("fName");
    let fEmail = document.getElementById("fEmail");
    let fAddress = document.getElementById("fAddress");
    let fLastN = document.getElementById("fLastN");
    let fPassword = document.getElementById("fPassword");
    let fPhone = document.getElementById("fPhone");

    // Get the error elements
    let errorName = document.getElementById("errorName");
    let errorEmail = document.getElementById("errorEmail");
    let errorAddress = document.getElementById("errorAddress");
    let errorLastN = document.getElementById("errorLastN");
    let errorPassword = document.getElementById("errorPassword");
    let errorPhone = document.getElementById("errorPhone");

    // Validate fields entered by the user:
    (fName.value === "" || !lettersOnly.test(fName.value)) ? showError(fName, errorName) : clearError(fName, errorName);
    (fEmail.value === "" || !emailFormat.test(fEmail.value)) ? showError(fEmail, errorEmail) : clearError(fEmail, errorEmail);
    (fAddress.value === "") ? showError(fAddress, errorAddress) : clearError(fAddress, errorAddress);
    (fLastN.value === "" || !lettersOnly.test(fLastN.value)) ? showError(fLastN, errorLastN) : clearError(fLastN, errorLastN);
    (fPassword.value === "" || !passwordFormat.test(fPassword.value)) ? showError(fPassword, errorPassword) : clearError(fPassword, errorPassword);
    (fPhone.value === "" || !numberFormat.test(fPhone.value)) ? showError(fPhone, errorPhone) : clearError(fPhone, errorPhone);

    if (error > 0) {
        console.log("Error");
    } else {
        console.log("OK" +
            "\nName: " + fName.value +
            "\nEmail: " + fEmail.value +
            "\nAddress: " + fAddress.value +
            "\nLast Name: " + fLastN.value +
            "\nPassword: " + fPassword.value +
            "\nPhone: " + fPhone.value);
    }

    function showError(field, element) {
        error++;
        element.style.display = 'block';
        field.classList.add('is-invalid');
    }

    function clearError(field, element) {
        error--;
        element.style.display = 'none';
        field.classList.remove('is-invalid');
    }
}