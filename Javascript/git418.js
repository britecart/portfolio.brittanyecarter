/*
	GIT418-74011: Chapter 12 Case Project
	Author: Brittany Carter
	Date: November 18, 2020
*/

/*This code validates whether each field is filled and a checkbox has been checked using jquery. The orginal javascript validation is commented out. 


It then creates a song table with the input fields: song name, band name, and anime given by the user if there are no errors. This code also add or removes the checkbox value to the array anGenre whether the checkbox is checked. This value is then added to the table under genre*/ 

//Global Variables
//empty variable for the song list
var songList;
var button = document.getElementById("createBtn");
//empty array
var anGenre = [];
//jquery selectors for input and checkboxes
var  text = ('#songFields input[type="text"]');
var check =('#songFields input[type="checkbox"]');

//Custom object contents
function Song(name, band, anime){
	this.songName = name;
	this.songBand = band;
	this.songAnime = anime;
}

//This function creates the song table
function createSongList(){
	//prevents page reload
	preventReload(event);
	//no errors before validation
	//formValidity = true;
	//variables containg the input values
	var songName = document.getElementById("songName").value;
	var songBand = document.getElementById("band").value;
	var songAnime = document.getElementById("anime").value;
	var displayDiv = document.getElementById("songTable");
	
	/*run validate function on songFields
	validateFields(songFields);
	if there are no erorrs */ 
	
	//JQuery Validation:
	
	//this makes sure the webpage is ready
	$(document).ready(function(){
		//checks if form is submited
		$("songForm").submit();
		
         //this goes through the inputs and checkboxes that they are complete
         if( $(text).filter(function() { return this.value === ''; }).length === 0 &&  $('#songFields input[type="checkbox"]:checked').length > 0) {
		
		//if input fields have value, remove error class 
			$(text).removeClass("error");
			$(check).removeClass("errorCheck");
		//create songlist
			var addSong = new Song(songName, songBand, songAnime);
			createSongDisplay(addSong);
				
			 //no error message
			$("#errorMessage").html("");
		//if input is empty
		}else{
			//adds error class style
			$(text).addClass("error");
			$(check).addClass("errorCheck");
			//error message
			$("#errorMessage").html("Please complete all fields");
			//console log
			console.log("Please fix errors");	
		}
	});
	
	
	
	
	/* Javascript validation
	if(formValidity === true){
		//creates new object 
	   var addSong = new Song(songName, songBand, songAnime);
		//displays each new object in a new div
		createSongDisplay(addSong);
		//this displays the array on the console
		console.log(anGenre);
	  }else{
	if there are errors this shows in the console
	  console.log("Please fix errors")
	   }*/
}

//This function creates a new table row for each song object
function createSongDisplay(song){
	//the variable holds the table
	var table = document.getElementById("songTable");
	//this variable inserts a row
	var row = table.insertRow();
	//this variable holds each cell needed
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	//this populates the row with the information given by the user
	//this was coded with the help of this codepen: https://codepen.io/anon/pen/pXVLQx 
	cell1.innerHTML = song.songName, 
	cell2.innerHTML = song.songBand,
	cell3.innerHTML = song.songAnime,
	//array
	cell4.innerHTML = anGenre;
}


//This function prevents the form from reloading the page
function preventReload(event){
	event.preventDefault();
}

function addGenre(event) {
   if (event === undefined) { // get caller element in IE8
      event = window.event;
   }
   var callerElement = event.target || event.srcElement;
   var genreName = callerElement.value;
	// if box has just been checked
   if (callerElement.checked) { 
      // add checkbox value to anGenre array
      anGenre.push(genreName);
      // add checkbox value to list in profile section
      var newGenre = document.createElement("li");
      newGenre.innerHTML = genreName;
      document.getElementById("genreChecked").appendChild(newGenre);
      
   } else { // if box has just been unchecked
      var listItems = document.querySelectorAll("#genreChecked li");
      for (var i = 0; i < listItems.length; i++) {
         if (listItems[i].innerHTML === genreName) {
            //this variable removes 1 from the i to get correct index
			 var r = i-1;
			 // remove element at index i from array
            anGenre.splice(r, 1); 
            // remove vaule from checked list
            listItems[i].parentNode.removeChild(listItems[i]);
            break;
         }
      }
   }
}
// convert form input to strings for submission
function convertToString() {
   // convert lodging array to string
   arrayString = anGenre.toString();
   // convert profile object to string
   objectString = JSON.stringify(profile);
}

/*Javascript form validation
function validateFields(formID) {
	//variable for all input fields
   var inputElements = document.querySelectorAll("input");
	//the errors will appear in the errorMessage field
   var error = document.getElementById("errorMessage");
	// this vairable holds the form without error before check 
   var fieldsetValidity = true;
	//this holds the number of input fields
   var elementCount = inputElements.length;

	// this vairable is empty 
   var currentElement;
	
   try {
      for (var i = 0; i < elementCount; i++) { 
         // loop to validate all input elements in fieldset
         currentElement = inputElements[i];
		 
		  //check if each field is empty
         if (currentElement.value === "") {
            throw "Please complete all fields.";
			 
			 //tests fields for character length
		 } else if(/.{3,}/.test(currentElement.value) === false){
			 throw "Each field must be at least 3 characters long.";
			 
			 //tests fields for letters
		 } else if (/[a-z]/i.test(currentElement.value) === false){
			 throw "Only letters will be accepted";
		 } 
	  
	    //no errors
            currentElement.style.background = "";
         	error.style.display = "none";
	  }
   }
	//display errors 
   catch(msg) {
      error.style.display = "block";
      error.innerHTML = msg; 
      formValidity = false;
	    //error style
	  currentElement.style.background = "rgb(255,208,208)";
   }
}*/
	
//this function clears the input values
function clearInput(){
var inputElements = document.querySelectorAll("input");
var elementCount = inputElements.length;
for (var i = 0; i < elementCount; i++) { 
        currentElement = inputElements[i];
		currentElement.value === "";
	}
}
function createEventListeners() {
   //this variale holds the checkboxs
   var genre = document.getElementsByName("genre");
	//this listens for wheather the box is checked or unchecked
   if (genre[0].addEventListener) {
      for (var i = 0; i < genre.length; i++) {
         genre[i].addEventListener("change", addGenre, false);
      }
   } else if (genre[0].attachEvent) {
      for (var i = 0; i < genre.length; i++) {
         genre[i].attachEvent("onchange", addGenre);
      }
   }  
	button.addEventListener("click", createSongList, false);
}


//this function sets up page
function setUp(){
	createEventListeners();
    clearInput();
}

// run setUp function when page finishes loading
if (window.addEventListener) {
   window.addEventListener("load", setUp, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", setUp);
}
