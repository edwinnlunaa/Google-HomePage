const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
// this references search input and search button

searchButton.addEventListener('click', function() {

    const searchQuery = searchInput.value.trim();
  // this gives the value enetered in the search

    if (searchQuery !== '') {
      
        // this displays the alert with the search query
        alert('You searched for: ' + searchQuery);
    } else {
      
        alert('Please enter a search query');
      // this displays an alert if the search  query is empty
    }
});