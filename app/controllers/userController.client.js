//User controller ==> works magic on the client side

(function() {

  var profileId = document.querySelector('#profile-id') || null;
  var profileUserName = document.querySelector('#profile-username') || null;
  var profileRepos = document.querySelector('#profile-repos') || null;
  var displayName= document.querySelector('#display-name');
  var apiURI = appURI + '/api/:id';

  //updatehtml element content with data from AJAX call
  function updateInnerElement(data, element, userProperty) {
    element.innerHTML = data[userProperty];
  }

  ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiURI, function () {
    var userObject = JSON.parse(data);

    updateInnerElement(userObject, displayName, 'displayName');

    if (profileId !== null) {
      updateInnerElement(userObject, profileId, 'id');
    }

    if (profileUserName !== null) {
      updateInnerElement(userObject, profileUserName, 'username');
    }
if (profileRepos !== null) {
  updateInnerElement(userObject, profileRepos, 'publicRepos');
}

  }));

})();