angular.module('domers.pads.controllers', [])

  .controller('PadsCtrl', function ($scope, PadsService, $ionicLoading) {
    $ionicLoading.show({
      template: 'Loading...'
    });
    //TODO add sorting
    $scope.pads = PadsService;
    PadsService.$loaded(function () {
      $ionicLoading.hide();
    });
  })

  .controller('PadsDetailController', function ($scope, PadsService, $ionicLoading, $stateParams, $state) {
    $scope.$stateParams = $stateParams;
    $scope.$watch('$stateParams.id', function () {
      $scope.details = PadsService.$getRecord($stateParams.id);
    });

    $scope.selectPlayer = function (id) {
      $state.go('app.players', {
        padId: id
      });
    }
  });
