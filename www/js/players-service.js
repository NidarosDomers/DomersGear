angular.module('domers.players.services', [])

  .factory('PlayersService', function ($firebaseArray) {
    var itemsRef = new Firebase('https://vivid-torch-7687.firebaseio.com/players');
    return $firebaseArray(itemsRef);
  });

