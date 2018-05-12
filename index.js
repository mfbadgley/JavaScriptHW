// Get references to the tbody element, input field and button
var tbody = document.querySelector("tbody");
var DateInput = document.querySelector("#Date-time");
var CityInput = document.querySelector("#City");
var StateInput = document.querySelector("#State");
var CountryInput = document.querySelector("#Country");

var searchBtn = document.querySelector("#search-date");
var searchCityBtn = document.querySelector("#search-city");
var searchStateBtn = document.querySelector("#search-State");
var searchCountryBtn = document.querySelector("#search-Country");
var RefreshBtn = document.querySelector("#refresh"); 

// Add an event listener to the searchButtons, call specific function when clicked
searchBtn.addEventListener("click", handleSearchButtonClick);
searchCityBtn.addEventListener("click", handleSearchButtonClick);
searchStateBtn.addEventListener("click", handleSearchButtonClick);
searchCountryBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredData to be the name of the dataset in the data.js file initially (which is dataSet)
var filteredData = dataSet;

// renderTable renders the filteredData to the tbody
function renderTable() {
  tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {
    // Get get the current data object and its fields, filteredData is the entire dataset dictionary
    var data = filteredData[i];
    var fields = Object.keys(data);//this will return an array of key values of data; 
    // Create a new row in the tbody, set the index to be i + startingIndex
    var row = tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {//this is length of the fields array; 
      // For every field in the data object, create a new cell at set its inner text 
      //to be the current value at the current datasets field
      var field = fields[j];//this indexes thru the fields array, the key values 
      var cell = row.insertCell(j);
      cell.innerText = data[field];
    }
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing trailing whitespace, put it into a variable filterDate...
  var filterDate = DateInput.value.trim();
  var filterCity = CityInput.value.trim();
  var filterState = StateInput.value.trim();
  var filterCountry = CountryInput.value.trim()

  if (filterDate !=""){//f the date input field has text in it, run the function

  // Set filteredData to an array of all whose "datetime" matches the filter; 
    filteredData = dataSet.filter(function(data) {
    var dataDate = data.datetime;//first put the datetime into variable
    //dataDate, then check if it equals the user input dateTime..


    return dataDate === filterDate;
  });

}
   if (filterCity !=""){

    filteredData = dataSet.filter(function(data) {
      var dataCity = data.city;

    return dataCity === filterCity;

   });
  }
  if (filterState !=""){

    filteredData = dataSet.filter(function(data) {
      var dataState = data.state;
      
    return dataState === filterState;

   });
  }
  if (filterCountry !=""){

    filteredData = dataSet.filter(function(data) {
      var dataCountry = data.country;
      
    return dataCountry === filterCountry;

   });
  }
  if (filterCity!=="" && filterDate!==""){
    filteredData = dataSet.filter(function(data) {
      var dataDate = data.datetime;
      var dataCity = data.city; 
    
   return dataCity===filterCity && dataDate===filterDate;
    });
  }
  if (filterCity!=="" && filterDate!==""&& filterState!==""){
    filteredData = dataSet.filter(function(data) {
      var dataDate = data.datetime;
      var dataCity = data.city; 
      var dataState=data.state;
    
   return dataCity===filterCity && dataDate===filterDate && dataState===filterState;
    });
  }
  if (filterCity!=="" && filterDate!==""&& filterState!==""&& filterCountry!==""){
    filteredData = dataSet.filter(function(data) {
      var dataDate = data.datetime;
      var dataCity = data.city; 
      var dataState=data.state;
      var dataCountry=data.country; 
    
   return dataCity===filterCity && dataDate===filterDate && dataState===filterState && dataCountry===filterCountry;
    });
  }
   renderTable();
}
// Render the table for the first time on page load

renderTable();