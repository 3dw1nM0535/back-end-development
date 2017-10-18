//Handle user interactivity between the browser and the API

(function() {

  var addButton = document.querySelector('.btn-add');
  var deleteButton = document.querySelector('.btn-delete');
  var clickNbr = document.querySelector('#click-nbr');
  var apiURI = appURI + '/api/:id/clicks';


  //Update element with data from API
  function updateClickCount (data) {
    var clicksObject = JSON.parse(data);
    clickNbr.innerHTML = clicksObject.clicks;
  }

  //Execute ready()
  ajaxFunctions.ready (ajaxFunctions.ajaxRequest('GET', apiURI, updateClickCount));

  //Add event listener to post clicks to API and update the DOM content
  addButton.addEventListener('click', function() {
    ajaxFunctions.ajaxRequest('POST', apiURI, function () {
      ajaxFunctions.ajaxRequest('GET', apiURI, updateClickCount);
    });
  }, false);

  //Add event listener to delete clicks from API and update the DOM content
  deleteButton.addEventListener('click', function () {
    ajaxFunctions.ajaxRequest('DELETE', apiURI, function () {
      ajaxFunctions.ajaxRequest('GET', apiURI, updateClickCount);
    });
  }, false);



})();