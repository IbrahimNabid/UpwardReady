var getQuoteButton = document.querySelector('#getQuote');

// Add a click event listener to the button
getQuoteButton.addEventListener('click', function() {
  // Retrieve and display the quote when the button is clicked
  var category = 'inspirational';
  $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: { 'X-Api-Key': 'n3qYTHkHq2DaMMhZ+FfeXA==7KvUeJvZIVQBrPAY'},
    contentType: 'application/json',
    success: function(result) {
      // Select the element where you want to display the quote
      var quoteElement = document.querySelector('#quote');
      // Set the text content of the element to the first quote in the response data
      quoteElement.textContent = result[0].quote;
    },
    error: function ajaxError(jqXHR) {
      console.error('Error: ', jqXHR.responseText);
    }
  });
});