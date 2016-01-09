angular.module('domers.new-item.controllers', ['domers.pads.services'])

  .controller('NewItemCtrl', function ($scope, PadsService, $ionicLoading) {
    $scope.brands = ['Barnett', 'Easton', 'Bike', 'Riddell', 'Schutt', 'Douglas'];
    $scope.sizes = ['S', 'M', 'L', 'XL'];
    $scope.form = {};

    $scope.save = function () {
      $ionicLoading.show();
      PadsService.$add({
        brand: $scope.form.brand,
        size: $scope.form.size
      }).then(function () {
        $scope.statusMessage = $scope.form.brand + ' (' + $scope.form.size + ') successfully created';
      }).catch(function (err) {
        $scope.statusMessage = 'Unable to create new item';
        console.err('Failed to create new item', err);
      }).finally(function () {
        $ionicLoading.hide();
      });
    };
  });
