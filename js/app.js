$(function() { //document ready

var cityList = ["NYC", "SF", "LA", "ATX", "SYD"]; //variable containing all the cities
function addCity(city) { //function to add each city to the Select #city-type
	$('#city-type').append("<option value='" + city + "'>" + city + "</option>")};

cityList.forEach(addCity);//forEach loop to run the process for each city

//ifelse to change the background when city selected from Select #city-list
$('#city-type').change(function(){ // selecting an option will run the function
    // event.preventDefault(); //prevents the submits default action
    var city = $('#city-type').val(); //save user input to compare in conditional
    $('#city-type').val(''); //conditional that takes the various expected inputs from user and returns the correct image
    if (city =="NYC"){ 
      $('body').attr('class','nyc');
    } else if (city == "SF") {      
       $('body').attr('class','sf');
    } else if (city == "LA") {      
       $('body').attr('class','la');
    } else if (city =="ATX") {      
       $('body').attr('class','austin');
    } else if (city == "SYD") {      
       $('body').attr('class','sydney');
    }
  })
})