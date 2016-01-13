angular.module('domers.pads.controllers', [])

  .controller('PadsCtrl', function ($scope, PadsService, $ionicLoading) {
    $scope.form = {};
    $ionicLoading.show({
      template: 'Loading...'
    });
    //TODO add sorting
    $scope.pads = PadsService.ref;
    PadsService.ref.$loaded(function () {
      $ionicLoading.hide();
    });

    $scope.brands = PadsService.getBrands();
    $scope.sizes = PadsService.getSizes();

    $scope.byBrandAndSize = function (pad) {
      return (!$scope.form.brand || $scope.form.brand === pad.brand) && (!$scope.form.size || $scope.form.size == pad.size);
    };
    $scope.clearFilter = function () {
      $scope.form = {};
    }
  })

  .controller('PadsDetailController', function ($scope, PadsService, PlayersService, $ionicLoading, $ionicPopover, $stateParams, $state) {
    $scope.$stateParams = $stateParams;
    $scope.$watch('$stateParams.id', function () {
      $scope.details = PadsService.ref.$getRecord($stateParams.id);
    });

    $scope.assign = function (player) {
      $scope.details.rentedBy = player.name;
      PadsService.ref.$save($scope.details);
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
  })

  .controller('NewPadsCtrl', function ($scope, PadsService, $ionicLoading, $timeout) {
    $scope.form = {};
    $scope.brands = PadsService.getBrands();
    $scope.sizes = PadsService.getSizes();


    $scope.save = function () {
      $ionicLoading.show();
      PadsService.ref.$add({
        brand: $scope.form.brand,
        size: $scope.form.size
      }).then(function () {
        $scope.statusMessage = $scope.form.brand + ' (' + $scope.form.size + ') successfully created';
      }).catch(function (err) {
        $scope.statusMessage = 'Unable to create new item';
        console.err('Failed to create new item', err);
      }).finally(function () {
        $ionicLoading.hide();
        $timeout(function () {
          $scope.statusMessage = undefined;
        }, 2000);
      });
    };
  });
