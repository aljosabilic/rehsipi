angular.module('rehsipi.controllers', [])

.controller('AppCtrl', function ($scope, $state, $location) {
    $scope.logout = function() {
        $location.path('/app/login');
    }
})
.controller('StartCtrl', function ($scope, $cordovaBarcodeScanner, $location) {
    $scope.scanBarcode = function() {
        $cordovaBarcodeScanner.scan().then(function(imageData) {
          // Success! Barcode data is here
        $scope.barcode = imageData.text;
        $location.path('/app/barcode');
    }, function(err) {
      // An error occured. Show a message to the user

    });
  };

  // NOTE: encoding not functioning yet
  $scope.encodeData = function() {
    $cordovaBarcodeScanner.encode(BarcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com").then(function(success) {
      // Success!
    }, function(err) {
      // An error occured. Show a message to the user

    });
  }
})
.controller('BarcodeCtrl', function($scope) {
})
.controller('LoginCtrl', function ($scope, $location) {
    $scope.login = function () {
        $location.path('/app/start');
    }
})