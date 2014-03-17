// JavaScript Document

function getWeather(lat, long){
	/*$.ajax({
	  url: 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long,
	  success: function(data){weer = data;}
	});*/
	var test = 10;
	$.getJSON('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&units=metric',
					 function(data){
						 	var dataToStore = JSON.stringify(data);
							localStorage.setItem('weer', dataToStore);
						 	localStorage.setItem('icon', data.weather[0].main);
							localStorage.setItem('wind', data.wind.speed);
						 });
}