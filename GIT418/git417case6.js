/*
	GIT417-75041: Chapter 6 Case Project
	Author: Brittany Carter
	Date: September 28, 2020
*/

/*This code checks the form on this page for errors and empties fields on reload.
Errors include empty text fields, empty text box, no selector selected, no check box selected, no raido buttons selected. Also the first name, last name, email, and subject field require 3 characters.  */ 

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
			 //error style
            currentElement.style.background = "rgb(255,208,208)";
            fieldsetValidity = false;
		  //check for 3 characters
         } else if (currentElement.value.length <3){
			 //error style
			 currentElement.style.background = "rgb(255,208,208)";
             fieldsetValidity = false;
			 //error if field is less than 3 characters
			 throw "At least 3 characters in each field.";
		 } 
		   //no errors
		  else {
            currentElement.style.background = "white";
         }
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
	   //this checks if the texarea is empty
	   if(message.value === "" ){
		   //error style
		   message.style.border = "1px solid red";
            fieldsetValidity = false;
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
