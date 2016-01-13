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

  .controller('PadsDetailController', function ($scope, PadsService, PlayersService, $ionicLoading, $ionicPopover, $stateParams, $state) {
    $scope.$stateParams = $stateParams;
    $scope.$watch('$stateParams.id', function () {
      $scope.details = PadsService.$getRecord($stateParams.id);
    });

    $scope.assignPad = function (player) {
      $scope.details.rentedBy = player.name;
      PadsService.$save($scope.details);
      $scope.closePopover();
    };

    $scope.players = PlayersService;

    $ionicPopover.fromTemplateUrl('templates/select-player.html', {
      scope: $scope
    }).then(function (popover) {
      $scope.popover = popover;
    });

    $scope.openPopover = function ($event) {
      $scope.popover.show($event);
    };
    $scope.closePopover = function () {
      $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function () {
      $scope.popover.remove();
    });
    // Execute action on hide popover
    $scope.$on('popover.hidden', function () {
      // Execute action
    });
    // Execute action on remove popover
    $scope.$on('popover.removed', function () {
      // Execute action
    });

    $scope.selectPlayer = function (id) {
      $state.go('app.players', {
        padId: id
      });
    }
  });
