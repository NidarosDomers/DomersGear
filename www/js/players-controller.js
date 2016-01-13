angular.module('domers.players.controllers', [])

  .controller('PlayersListCtrl', function ($scope, PlayersService, PadsService, $ionicLoading, $stateParams, $ionicHistory, $state) {
    $ionicLoading.show({
      template: 'Loading...'
    });
    //TODO add sorting
    $scope.players = PlayersService;
    PlayersService.$loaded(function () {
      $ionicLoading.hide();
    });

    /*$scope.assignPad = function (player) {
      var pad = PadsService.$getRecord($stateParams.padId);
      pad.rentedBy = player.name;
      PadsService.$save(pad);

      $ionicHistory.nextViewOptions({
        disableBack: true
      });
      $state.go('app.details', {
        id: $stateParams.padId
      })
     }*/
  })

  .controller('NewPlayerCtrl', function ($scope, PlayersService, $ionicLoading, $timeout) {
    $scope.form = {};

    $scope.save = function () {
      $ionicLoading.show();
      PlayersService.$add({
        name: $scope.form.name
      }).then(function () {
        $scope.statusMessage = $scope.form.name + ' has been successfully registered';
      }).catch(function (err) {
        $scope.statusMessage = 'Unable to create new player item';
        console.err('Failed to create new player item', err);
      }).finally(function () {
        $ionicLoading.hide();
        $scope.form = {};
        $timeout(function () {
          $scope.statusMessage = undefined;
        }, 2000);
      });
    };
  });

