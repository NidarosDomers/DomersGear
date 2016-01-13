angular.module('domers.helmets.services', [])

  .factory('HelmetsService', function ($firebaseArray, apiUrl) {
    var itemsRef = new Firebase(apiUrl + '/helmets');
    var ref = $firebaseArray(itemsRef);

    function getBrands() {
      return ['Riddell', 'Schutt'];
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

