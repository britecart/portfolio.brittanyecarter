/*
	GIT417-75041: Chapter 4 Case Project
	Author: Brittany Carter
	Date: September 14, 2020
*/

/*This code checks the form on this page for errors,
errors include empty text fields, firstname and lastname fields under 3 characters, and message field under 4 characters*/ 
function checkFormForError(event) {
	
//this vairable holds the form without error before check 
	var formHasErr = false;
//This prevents the form from submiting before check
    event.preventDefault();
 
	try {
//These variables hold each form field
		var firstName = document.getElementById("first_name").value;
		var lastName = document.getElementById("last_name").value;
		var email = document.getElementById("email").value;
		var subject = document.getElementById("subject").value;
		var message = document.getElementById("message").value;
		var charcode = firstName.charCode;
//This code checks if any field is blank
		if (firstName === "" || lastName === "" || email === "" || subject === ""|| message === "") {
			throw "Please complete all fields";
//This code checks the length of the first and last name
			} else if(firstName.length < 3 || lastName.length < 3){
				throw "Full name Please";
//This code checks the length of the message field
			}else if (message.length < 4){
				throw "Message must be at least 4 characters";
//This code returns a message if there are no errors
			}else{ 
				document.getElementById("errorMessage").innerHTML = "You did it! Form Submitted!" 
			}	
		}
//This code displays the error message
	catch (err) {
		console.log(err);
		formHasErr = true;
		document.getElementById("errorMessage").innerHTML = err;
		document.getElementById("errorMessage").style.display = "block";
		}
//This code shows in console until form has no error
	finally {
		if (formHasErr) {
			console.log("Please resolve all form errors.");
			}
		}
} 
//This function creates event listeners and calls to the function that checks the form for errors
function createEventListeners() {
	var submit = document.getElementById("submitBtn");
	submit.addEventListener("click", checkFormForError, false);
	}

//This creates event listeners on load
window.addEventListener("load", createEventListeners(), false);
