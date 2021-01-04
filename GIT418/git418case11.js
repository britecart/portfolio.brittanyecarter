/*
	GIT418-74011: Chapter 11 Case Project
	Author: Brittany Carter
	Date: November 10, 2020
*/

/*This code displays an api that shows the latest global covid-19 information*/ 

function getCovidInfo(){
	//the data is first set to null
	var data = null;
	//creates xml http request
	var xhr = new XMLHttpRequest();
	
	xhr.withCredentials = true;
	
	//this api requires an event listener
xhr.addEventListener("readystatechange", function () {
	
	if (this.readyState === this.DONE) {
		//parse the JSON format to convert the strin into an object
		var responseObject = JSON.parse(this.responseText);
		//this is where the data will be displayed
		var covidResults = document.getElementById("covidResults");
		//this is the number format, it will have a comma for every thousand
		var comma = new Intl.NumberFormat('en-US'); 
		//these place the individual data into a variable
		var cases = comma.format(responseObject.data["confirmed"]);
		var deaths = comma.format(responseObject.data["deaths"]);
		
		//this displays the data
		covidResults.textContent = "\nGlobal Cases:";
		covidResults.textContent += "\n" + cases + " people";
		covidResults.textContent += "\n\nGlobal Deaths:" ;
		covidResults.textContent += "\n" + deaths + " people";
		
		covidResults.innerText = "\nGlobal Cases:";
		covidResults.innerText += "\n" + cases + " people";
		covidResults.innerText += "\n\nGlobal Deaths:" ;
		covidResults.innerText += "\n" + deaths + " people";
	}
});
//this gets the website
xhr.open("GET", "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total");
//this has my password
xhr.setRequestHeader("x-rapidapi-key", "ac27624ce1msha816798ae06cb7bp1c214ejsn72a65502cd94");
//this has the api information
xhr.setRequestHeader("x-rapidapi-host", "covid-19-coronavirus-statistics.p.rapidapi.com");


xhr.send(data);
}