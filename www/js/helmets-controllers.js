angular.module('domers.helmets.controllers', [])

  .controller('HelmetsCtrl', function ($scope, HelmetsService, $ionicLoading) {
    $ionicLoading.show({
      template: 'Loading...'
    });
    //TODO add sorting
    $scope.helmets = HelmetsService;
    HelmetsService.$loaded(function () {
      $ionicLoading.hide();
    });
  })

  .controller('HelmetsDetailsCtrl', function ($scope, HelmetsService, PlayersService, $ionicLoading, $ionicPopover, $stateParams, $state) {
    $scope.$stateParams = $stateParams;
    $scope.$watch('$stateParams.id', function () {
      $scope.details = HelmetsService.$getRecord($stateParams.id);
    });

    $scope.assign = function (player) {
      $scope.details.rentedBy = player.name;
      HelmetsService.$save($scope.details);
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

  .controller('NewHelmetsCtrl', function ($scope, HelmetsService, $ionicLoading, $timeout) {
    $scope.form = {};
    $scope.brands = ['Riddell', 'Schutt'];
    $scope.sizes = ['S', 'M', 'L', 'XL'];


    $scope.save = function () {
      $ionicLoading.show();
      HelmetsService.$add({
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
