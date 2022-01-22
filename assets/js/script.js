// TODO: Find the Search Form in the DOM and assign it to a variable
var searchFormEl = document.getElementById('search-input');
var selectFormEl = document.getElementById('format-input');
var searchBtnEl = document.getElementById('submit');

function handleSearchFormSubmit(event) {
  event.preventDefault();

  // TODO: Obtain the values submitted in the form and assign them to variables
  var userInput = searchFormEl.value.trim();
  var selectInput = selectFormEl.value();
  // TODO: Validate that at least the search input field has a value
  searchBtnEl.addEventListener("click", function(){
  if (userInput === '') {
    alert('Please enter a search term');
  }
}
  // TODO: Build a URI with query string to take the user to the results page and supply the form inputs

  // TODO: Programmatically set the user's current location, to take them to the results page
}

// TODO: Add the above function as an event handler for the form submission

handleSearchFormSubmit();
