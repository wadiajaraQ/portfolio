
document.addEventListener("DOMContentLoaded", load);

function load(){
	document.getElementById("contactForm").addEventListener("submit", validate);
	document.getElementById("contactForm").addEventListener("reset", clearForm);
	document.getElementById("contactForm").reset();
}


function validate(e) {
	//	Hides all error elements on the page
	hideAllErrors();

	//	Determine if the form has errors
	if (formHasErrors()) {
		// 	Prevents the form from submitting
		e.preventDefault();
		return false;
	}
	alert("Information Send! Thank you for complete your information");
	return true;
}

function clearForm(){
    hideAllErrors();
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("coments").value = "";
}

function hideAllErrors() {

	let errorFields = document.getElementsByClassName("error");
	for(let i = 0; i < errorFields.length; i++){
		errorFields[i].style.display = "none";
	}
}

function formHasErrors() {
	// Code below here
	let errorFlag = false;
	let requiredFields = ["name","phone","email"];

	for(let i = 0; i < requiredFields.length; i++){
		let textField = document.getElementById(requiredFields[i]);
		if(!formFieldHasInput(textField)){
			document.getElementById(requiredFields[i] + "_error").style.display = "block";

			if(!errorFlag){
				textField.focus();
				textField.select();
			}

			errorFlag = true;
		}
	}

	let regex = new RegExp(/^\d{10}$/);
	let phoneValue = document.getElementById("phone").value;
	
	if(!regex.test(phoneValue)){
		document.getElementById("phone_error").style.display = "block";

		if(!errorFlag){
			document.getElementById("phone").focus();
			document.getElementById("phone").select();
		}

		errorFlag = true;
	}

	const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    let emailField = document.getElementById("email").value;

    if(!emailRegex.test(emailField)){
        document.getElementById("email_error").style.display = "block";
        existError = true;
    }


	// Code above here
	return errorFlag;
}


function formFieldHasInput(fieldElement) {
	// Check if the text field has a value
	if (fieldElement.value == null || fieldElement.value.trim() == "") {
		// Invalid entry
		return false;
	}

	// Valid entry
	return true;
}