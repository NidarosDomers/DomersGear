angular.module('domers.players.services', [])

  .factory('PlayersService', function ($firebaseArray, apiUrl) {
    var itemsRef = new Firebase(apiUrl + '/players');
    return $firebaseArray(itemsRef);
  });

