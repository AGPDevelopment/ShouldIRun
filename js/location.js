// JavaScript Document
// Location functions

function getCurrentLocation(){
	navigator.geolocation.getCurrentPosition(
											 function(position){
												 var teruggeven = {	"lat": position.coords.latitude,
												 					"long": position.coords.longitude,
																	"speed": position.coords.speed};
												return teruggeven
												 },
											 function(error){return null;});
}

function getFutureLocation(){
	// get next calendar entry
	var startDate = new Date(2014,2,15,18,30,0,0,0); // beware: month 0 = january, 11 = december
	var endDate = new Date(2014,2,15,19,30,0,0,0);
	var title = "My nice event";
	var location = "Home";
	var notes = "Some notes about this event.";
	var success = function(message) { alert("Success: " + JSON.stringify(message)); };
	var error = function(message) { alert("Error: " + message); };
	
	window.plugins.calendar.findEvent(title,location,notes,startDate,endDate,success,error);
	/*if(){		// is entry, get that location
		
	} else {	// if not, go home
		// where is home?
	}*/
}