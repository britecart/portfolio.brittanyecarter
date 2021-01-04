/*
	GIT417-75041: Chapter 3 Case Project
	Author: Brittany Carter
	Date: September 7, 2020
*/

/*NOTE: This is a digital clock I have created in the past
I have added the function  of calculating the time until 11:11:00*/

function renderTime() {
var currentTime = new Date();
var ampm = "AM"; // The variable ampm determines AM or PM
	
/* These variable get the hour minutes and seconds
comment these out and replace them with different times to test this code.
*/
var h = currentTime.getHours();
var m = currentTime.getMinutes();
var s = currentTime.getSeconds();

/* This part of the code calculates how much time until 11:11:00
the first statement calculates how many hours are left if the hour is under 11 
but the minute is correctly 11.
*/

if (h < 11 && m == 11 ){
	var wishH = 11 - h;
}	
/* this statement calculates how many hours are left if the hour is over 11 
but the minute is correctly 11.
*/
	else if(h > 11 && m == 11) {
	var wishH = 11 - (h - 12);
}
// this statement displays if the hour is 11 am or pm
	
	else if (h == 11 && m == 11 || h == 23 && m == 11 || h == 11 && m < 11){
	var wishH = 0;
}
/* this statement calculates how many hours are left if the hour is under 11 
but the minute is not 11.
*/
	else if (h < 11) {
	var wishH = 10 - h;	
}
/* this statement calculates how many hours are left if the hour is over 11 
but the minute is not 11.
*/
	else {
	var wishH = 10 - (h - 12);
}
	
/*  This section calculates how many minutes left until 11 minutes
the first statement calculates how many minutes are left if the minute is over 11 
but the second is 0.
*/
if (m > 11 && s == 0){
	var wishM = 71 - m;
	
}  	
/* this statement calculates how many minutes are left if the minute is under 11 
but the second is 0.
*/
	else if(m < 11 && s == 0) {
	var wishM = 11 - m;
}   
// this statement displays if the minutes are 11 
	else if (m == 11 && s == 0){
	var wishM = 0;
} 
/* this statement calculates how many minutes are left if the minute is over 11 
and the second over 0. */
	else if (m > 11 || m == 11 && s > 0){
	var wishM = 70 - m;
}
/* this statement calculates how many minutes are left if the minute is under 11 
and the second over 0. */
  else {
	var wishM = 10 - m;
}
	
/* This section calculates how many seconds until 0 seconds 
   The first statment displays if the seconds are 0
*/

if (s == 0){
	var wishS = 0  ;
}	
// this statement caculates how many seconds until 0 
	else {
	var wishS = 60 - s;
}

	
setTimeout('renderTime()',1000);
/* This reads military time and changes it to standard time*/
if (h == 0) { 
h = 12; } 
else if (
h > 12) { 
h = h - 12; ampm="PM"; } if (h < 10) { h = "0" + h; } if (m < 10) { m = "0" + m; } if (s < 10) { s = "0" + s; }


 /* This displays the results*/
var myClock = document.getElementById("clockDisplay"); 
myClock.textContent = "Time Now: " + h + ":" + m + ":" + s + " " + ampm + "\nTime until you can make a wish " + wishH + " hours " + wishM + " minutes " + wishS + " seconds "; 
myClock.innerText = "Time Now: " + h + ":" + m + ":" + s + " " + ampm + "\nYou can make a wish in " + wishH + " hours " + wishM + " minutes " + wishS + " seconds ";
} 

 /* Call to the function*/
		
renderTime(); 
