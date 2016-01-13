angular.module('domers.pads.services', [])

  .factory('PadsService', function ($firebaseArray, apiUrl) {

    var itemsRef = new Firebase(apiUrl + '/pads');
    var ref = $firebaseArray(itemsRef);

    function getBrands() {
      return ['Barnett', 'Easton', 'Bike', 'Riddell', 'Schutt', 'Douglas'];
    }

    function getSizes() {
      return ['S', 'M', 'L', 'XL'];
    }

    return {
      ref: ref,
      getBrands: getBrands,
      getSizes: getSizes
    }
  });

