// Exercise 6

function validate(event) {

	let error = 0;	

	event.preventDefault(); // To avoid reloading the page when clicking SAVE and to display the console.log
	
	let lettersOnly = /^[A-Za-z]+$/
    let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,3})+$/
    let numberFormat = /^\d{9}$/
    let passwordFormat = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/
	
	// Get the input fields
	let fName = document.getElementById("fName").value;
	let fEmail = document.getElementById("fEmail").value;
	let fAddress = document.getElementById("fAddress").value;
	let fLastN = document.getElementById("fLastN").value;
	let fPassword = document.getElementById("fPassword").value;
	let fPhone = document.getElementById("fPhone").value;

	// Get the error elements
	let errorName = document.getElementById("errorName");
	let errorEmail = document.getElementById("errorEmail");
	let errorAddress = document.getElementById("errorAddress");
	let errorLastN = document.getElementById("errorLastN");
	let errorPassword = document.getElementById("errorPassword");
	let errorPhone = document.getElementById("errorPhone");
	
	// Validate fields entered by the user: 
	(fName === "" || !lettersOnly.test(fName)) ? showError(errorName) : clearError(errorName);
	(fEmail === "" || !emailFormat.test(fEmail)) ? showError(errorEmail) : clearError(errorEmail);
	(fAddress === "") ? showError(errorAddress) : clearError(errorAddress);
	(fLastN === "" || !lettersOnly.test(fLastN)) ? showError(errorLastN) : clearError(errorLastN);
	(fPassword === "" || !passwordFormat.test(fPassword)) ? showError(errorPassword) : clearError(errorPassword);
	(fPhone === "" || !numberFormat.test(fPhone)) ? showError(errorPhone) : clearError(errorPhone);

	  // Add an event listener to the form to capture the input:
	let form = document.querySelector("form"); 
	form.addEventListener("submit", validate);

	function showError(element) {
        error++;
        element.style.display = 'block';  
        element.classList.add('is-invalid'); 
	}

	function clearError(element) {
        error--;
        element.style.display = 'none';  
        element.classList.remove('is-invalid'); 
    }

	if(error > 0){
		console.log("Error");
	}else{
		console.log("OK" +
		"\nName: " + fName + 
		"\nEmail: " + fEmail + 
		"\nAddress: " + fAddress +
		"\nLast Name: " + fLastN + 
		"\nPassword: " + fPassword +
		"\nPhone: " + fPhone);
	}

}