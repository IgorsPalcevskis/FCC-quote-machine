$( document ).ready(function() {

// global variables for quoteText and Author
  var quote;
  var author;

  function getNewQuote() {
// ajax http request for forismatic API
    $.ajax({
      url:'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&',
// using jsonp to work around Access control allow origin
      jsonp:'jsonp',
      dataType:'jsonp',
// function to run when api request successful
      success: function(response) {
        quote = response.quoteText;
        author = response.quoteAuthor;
// puts quoteText and quoteAuthor in to html elemnts with selected IDs
        $('#quote-content').text('"' + quote + '"');
        if(author){
          $('#quote-author').text('Said by - ' + author);
        }else {
          $('#quote-author').text('Said by - unknown Author');
        }
      }
    });
  }
// runs getNewQuote() function first time page is loaded
  getNewQuote();
// clicking button requests new quote
  $('#get-another-quote-button').on('click', function(event) {
// prevents page from jumping up when new quote is requested
    event.preventDefault();
    getNewQuote();
  });
// clicking button tweets quote and fills in default text with a quoteText
  $('#tweet-quote').on('click', function(event) {
    event.preventDefault();
    window.open('https://twitter.com/home/?status=' + encodeURIComponent('"'+ quote + '"' + ' - ' + author));
  });
});
<<<<<<< HEAD
// testing github
=======
>>>>>>> bc0e20cf9d2880601b4afe9d158c02c49ae3b59a
