angular.module('domers.pads.services', [])

  .factory('PadsService', function ($firebaseArray) {
    var itemsRef = new Firebase('https://vivid-torch-7687.firebaseio.com/pads');
    return $firebaseArray(itemsRef);
  });

