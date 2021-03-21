/*
	GIT417-75041: Chapter 9 Case Project
	Author: Brittany Carter
	Date: October 28, 2020
*/

/*This code checks the form on this page for errors and empties fields on reload.
Errors include empty text fields, empty text box, no selector selected, no check box selected, no raido buttons selected. The first name,last name, email, and subject have a min of 3 characters. First name and last name do not allow white spaces or numbers. The subject field does not allow non alphanumeric characters. The email is varified to have the correct email pattern. The message has a min length of 8 characters and a max length of 20 characters.*/ 

var submit = document.getElementById("submitBtn");

function validateForm(evt) {
	
   if (evt.preventDefault) { 
	   //prevents the form from submiting before check
      evt.preventDefault(); 
   } else {
	   //prevents the form from submiting before check in IE8
      evt.returnValue = false; 
   }
	// this vairable holds the form without error before check 
   formValidity = true; 
	//run function for form ID "contact"
   validateFields("contact");

  
	//no errors
   if (formValidity === true) {
      document.getElementById("errorText").innerHTML = "";
      document.getElementById("errorText").style.display = "none";
      document.getElementsByTagName("form")[0].submit();
   } else {
	  //Error message if there are errors
      document.getElementById("errorText").innerHTML = "Please fix the highlighted fields and try again";
      document.getElementById("errorText").style.display = "block";
      scroll(0,0);
   }
} 

//this function checks the form for errors
function validateFields(formID) {
	//variable for all input fields
   var inputElements = document.querySelectorAll("#" + formID + " input");
	//the errors will appear in the errorMessage field
   var error = document.getElementById("errorMessage");
	// this vairable holds the form without error before check 
   var fieldsetValidity = true;
	//this holds the number of input fields
   var elementCount = inputElements.length;
	// this vairable holds the checkboxs 
 
   var weather = document.getElementsByName("weather");
	// this vairable holds the radio buttons
   var timeofday = document.getElementsByName("timeofday");
	// this vairable holds the textarea
   var message = document.getElementById("message");
	// this vairable is empty 
   var currentElement;
	 
	
   try {
      for (var i = 0; i < elementCount; i++) { 
         // loop to validate all input elements in fieldset
         currentElement = inputElements[i];
		
		 
		  //check if each field is empty
         if (currentElement.value === "") {
			 	currentElement.style.background = "rgb(255,208,208)";
            throw "Please complete all fields.";
			 	
			 
			 //tests fields for character length
		 } else if(/.{3,}/.test(currentElement.value) === false){
			 	currentElement.style.background = "rgb(255,208,208)";
			 throw "Each field must be at least 3 characters long.";	
			 
			 
		 } 
	  
	    //no errors
            currentElement.style.background = "";
         	error.style.display = "none";
	  }
	   //this field holds the first name field
	   var firstName = document.getElementById("first_name");
	   //this field holds the last name field
	   var lastName = document.getElementById("last_name");
	   //this pattern allows no numbers
	   var numberCheck = /^[A-Za-z]+$/;
	   
	   //this checks the first and last name fields for white space
	   if(/\s/.test(firstName.value)=== true){
		   firstName.style.background = "rgb(255,208,208)";
		   throw "No white space will be excepted in this field";
		   
	   }else if(/\s/.test(lastName.value)=== true){
		   lastName.style.background = "rgb(255,208,208)";
		   throw "No white space will be excepted in this field";
		   
		   //this checks if there are numbers in first and last name fields
	   }else if (numberCheck.test(firstName.value) === false){
		   firstName.style.background = "rgb(255,208,208)";
		   throw "No numbers will be accepted in this field";
	   }else if (numberCheck.test(lastName.value) === false){
		   lastName.style.background = "rgb(255,208,208)";
		   throw "No numbers will be accepted in this field";
	   }
	   
	   //this holds the email field
	   var email = document.getElementById("email");
	   //email pattern for validation
	   var emailCheck = /^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/;
	
	   //this verfies that the email is valid
	   if (emailCheck.test(email.value) === false) {
		   email.style.background = "rgb(255,208,208)";
		   throw "Please provide a valid email address";
	   }
	   
	   //this holds the subject field
	   var subject = document.getElementById("subject");
	   
	   //this checks for non Alphanumeric characters
	   if (/\W/.test(subject.value)=== true){
		   subject.style.background = "rgb(255,208,208)";
		   throw "Aphanumeric characters only"
	   }

	   //element for selectors
      currentElement = document.querySelector("#" + formID + " select"); 
 
      // check that a selector is selected
      if (currentElement.selectedIndex === -1) {
		  //error style
         currentElement.style.border = "1px solid red";
         fieldsetValidity = false;
	 //no errors
      } else {
         currentElement.style.border = "1px solid rgb(152,251,152)";
      }
	   
	    if (!weather[0].checked && !weather[1].checked && !weather[2].checked) { 
         // loop to verify that a checkbox is selected
         for (i = 0; i < 3 ; i++) {
			 //error style
            weather[i].style.outline = "1px solid red";
         }
         fieldsetValidity = false;
      } else {
         for (i = 0; i < 3; i++) {
			 //no errors
            weather[i].style.outline = "";
         }
      }
	   
	   if (!timeofday[0].checked && !timeofday[1].checked && !timeofday[2].checked) { 
         // loop to verify that a radio is selected
         for (i = 0; i < 3 ; i++) {
			 //error style
            timeofday[i].style.outline = "1px solid red";
         }
         fieldsetValidity = false;
      } else {
         for (i = 0; i < 3; i++) {
			 //no errors
            timeofday[i].style.outline = "";
         }
      }
	   //this pattern is min length 8 and max length 20
	   var characterCheck =/^.{8,20}$/;
	   
	   //this checks if the texarea is empty
	   if(message.value === "" ){
		   //error style
		   message.style.border = "1px solid red";
            fieldsetValidity = false;
		   
		   
	   } //tests fields for correct pattern length
	   
		 else if(characterCheck.test(message.value) === false){
			 	message.style.border = "1px solid red";
			 throw "Each field must be at least 8 characters and max 20 characters.";
	   
		 } else {
		   //no errors
            message.style.border = "1px solid rgb(152,251,152)";
         }
	   
	 
      if (fieldsetValidity === false) { 
         // error for empty fields 
            throw "Please complete all fields.";
        
      } else {
		  //no errors
         error.style.display = "none";
      }
  
   }
	//display errors 
   catch(msg) {
      error.style.display = "block";
      error.innerHTML = msg; 
      formValidity = false;
	    //error style
   }
}

function validiateEmail(){
var error = document.getElementById("errorMessage");
// this vairable holds the form without error before check 
   var fieldsetValidity = true;
	var error = document.getElementById("errorMessage");
   var emailInput = document.getElementById("email");
   var emailCheck = /^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/;
try {
      if (emailCheck.test(emailInput.value) === false) {
         throw "Please provide a valid email address";
      }
       // remove any email error styling and message
      emailInput.style.background = "";
      error.innerHTML = "";
      error.style.display = "none";

   }
   catch(msg) {
      // display error message
      error.innerHTML = msg;
      error.style.display = "block";
	formValidity = false;
      // change input style
      emailInput.style.background = "rgb(255,208,208)";
   }
}

//this function removes selector selected on load
function removeSelect() {
   var emptyBoxes = document.getElementsByTagName("select");
   for (var i = 0; i < emptyBoxes.length; i++) {
      emptyBoxes[i].selectedIndex = -1;
      emptyBoxes[i].style.boxShadow = "none";
   }
}
//this function clears textboxes on load
function clearInput(formID){
var inputElements = document.querySelectorAll("#" + formID + " input");
var elementCount = inputElements.length;
for (var i = 0; i < elementCount; i++) { 
        currentElement = inputElements[i];
	currentElement.value === "";
}
}
//This function creates event listeners and calls to the function that checks the form for errors
function createEventListeners() {
	submit.addEventListener("click", validateForm, false);
	}

//this function sets up page
function setUp(){
	createEventListeners();
	removeSelect();
    clearInput("contact");
}

// run setUp function when page finishes loading
if (window.addEventListener) {
   window.addEventListener("load", setUp, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", setUp);
}
