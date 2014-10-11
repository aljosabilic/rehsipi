angular.module('rehsipi.controllers', [])

.controller('AppCtrl', function ($scope, $state, $location) {
    $scope.logout = function() {
        $location.path('/app/login');
    }
})
.controller('StartCtrl', function ($scope, $cordovaBarcodeScanner) {
    $scope.scan_result = 'No scan performed yet'

    $scope.scanBarcode = function() {
        alert('Scanning barcode');

        $cordovaBarcodeScanner.scan().then(function(imageData) {
          // Success! Barcode data is here
            alert(imageData.text);

            console.log("Barcode Format -> " + imageData.format);
            console.log("Cancelled -> " + imageData.cancelled);

            //$scope.$apply(function() {
            //    $scope.scan_result = 'Success';
            //    $scope.barcode = imageData.text;
            //});
    }, function(err) {
        // An error occured. Show a message to the user
            console.log(err)
            //$scope.$apply(function() {
            //    $scope.scan_result = 'Error: ' + err
            //});
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
.controller('LoginCtrl', function ($scope, $location) {
    $scope.login = function () {
        $location.path('/app/start');
    }
})