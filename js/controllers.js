angular.module('rehsipi.controllers', [])

.controller('AppCtrl', function ($scope, $state, $location) {
    $scope.logout = function() {
        $location.path('/app/login');
    }
})
.controller('StartCtrl', function ($scope, $location, $cordovaBarcodeScanner) {
    $scope.item = { name: '' };

    $scope.scanBarcode = function() {
        $cordovaBarcodeScanner.scan().then(function(imageData) {
          // Success! Barcode data is here
            var barcode = imageData.text;
            $location.path('/app/recipe_list/' + barcode);
    }, function(err) {
        // An error occured. Show a message to the user
            console.log(err);
    });
  };

  $scope.searchItem = function() {
      $location.path('/app/recipe_list/' + $scope.item.name);
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
.controller('RecipeListCtrl', function ($scope, $stateParams, RecipeService) {
    search_parameter = $stateParams.search_parameter;
    if (isNaN(search_parameter)) {
        // Not a number, i.e. search query
        $scope.recipes = RecipeService.recipes_for_string(search_parameter)
    } else {
        $scope.recipes = RecipeService.recipes_for_ean(search_parameter);
    }
})
.controller('RecipeDetailsCtrl', function($scope, $stateParams, RecipeService) {
    $scope.recipe = RecipeService.get($stateParams.recipe_id)
})