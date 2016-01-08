angular.module('domers.new-item.controllers', ['domers.pads.services'])

  .controller('NewItemCtrl', function ($scope, PadsService) {
    $scope.brands = ['Barnett', 'Easton', 'Bike', 'Riddell', 'Schutt', 'Douglas'];
    $scope.sizes = ['S', 'M', 'L', 'XL'];

    $scope.save = function () {
      console.log('HEAI');
    };
  });
