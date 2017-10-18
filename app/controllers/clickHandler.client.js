//Handle user interactivity between the browser and the API

(function() {

  var addButton = document.querySelector('.btn-add');
  var deleteButton = document.querySelector('.btn-delete');
  var clickNbr = document.querySelector('#click-nbr');
  var apiURI = 'http://localhost:8080/api/clicks';

  //function to listen for 'DOMContentLoaded' event
  function ready (fn) {
    if (typeof fn !== 'function') {
      return;
    }

    if (document.readyState === 'complete') {
      return fn();
    }

    document.addEventListener('DOMContentLoaded', fn, false);

  }

  //AJAX request to the API
  function ajaxRequest (method, url, callback) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        callback(xmlhttp.response);
      }
    };

    xmlhttp.open(method, url, true);
    xmlhttp.send();
  }

  //Update element with data from API
  function updateClickCount (data) {
    var clicksObject = JSON.parse(data);
    clickNbr.innerHTML = clicksObject.clicks;
  }

  //Execute ready()
  ready (ajaxRequest('GET', apiURI, updateClickCount));

  //Add event listener to post clicks to API and update the DOM content
  addButton.addEventListener('click', function() {
    ajaxRequest('POST', apiURI, function () {
      ajaxRequest('GET', apiURI, updateClickCount);
    });
  }, false);

  //Add event listener to delete clicks from API and update the DOM content
  deleteButton.addEventListener('click', function () {
    ajaxRequest('DELETE', apiURI, function () {
      ajaxRequest('GET', apiURI, updateClickCount);
    });
  }, false);



})();