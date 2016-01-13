angular.module('domers.pads.services', [])

  .factory('PadsService', function ($firebaseArray, apiUrl) {
    var itemsRef = new Firebase(apiUrl + '/pads');
    return $firebaseArray(itemsRef);
  });

