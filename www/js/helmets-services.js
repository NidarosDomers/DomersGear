angular.module('domers.helmets.services', [])

  .factory('HelmetsService', function ($firebaseArray, apiUrl) {
    var itemsRef = new Firebase(apiUrl + '/helmets');
    return $firebaseArray(itemsRef);
  });

