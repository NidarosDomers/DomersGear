angular.module('domers.pads.controllers', [])

  .controller('PadsCtrl', function ($scope) {
    $scope.pads = [{
      id: 0,
      brand: 'Schutt',
      size: 'XL'
    }, {
      id: 1,
      brand: 'Schutt',
      size: 'L',
      rentedBy: 'Torgeir'
    }, {
      id: 2,
      brand: 'Riddell',
      size: 'S',
      rentedBy: 'Rino Michael Solstad'
    }, {
      id: 3,
      brand: 'Douglas',
      size: 'M',
      rentedBy: 'Sondre Mære Overskaug'
    }];
  })

  .controller('PadsDetailController', function ($scope, $stateParams) {
    $scope.$stateParams = $stateParams;
    $scope.$watch('$stateParams.id', function () {
      $scope.details = details[$stateParams.id];
    });

    var details = [{
      id: 0,
      brand: 'Schutt',
      size: 'XL'
    }, {
      id: 1,
      brand: 'Schutt',
      size: 'L',
      rentedBy: 'Torgeir'
    }, {
      id: 2,
      brand: 'Riddell',
      size: 'S',
      rentedBy: 'Rino Michael Solstad'
    }, {
      id: 3,
      brand: 'Douglas',
      size: 'M',
      rentedBy: 'Sondre Mære Overskaug'
    }];
  });
