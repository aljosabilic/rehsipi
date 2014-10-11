angular.module('rehsipi.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('RecipeService', function($http) {
  // Might use a resource here that returns a JSON array
  var recipes = { ean_code: '', list: [] };

  return {
    recipes_for_ean: function(ean_code) {
        if (recipes['ean_code'] == ean_code) {
            // Pass
        } else {
            $http.get('http://hackzurich14.herokuapp.com/api/' + ean_code).then(function (resp) {
                console.log(resp);

                recipes['ean_code'] = ean_code
                var product_name = resp.data['product']['name_english']

                recipes['list'].push.apply(recipes['list'], [
                    { id: 0, title: product_name, description: 'A product', img: 'http://placehold.it/100x100'}
                ]);
            }, function (err) {
                console.error(err);
            });
        }

      return recipes;
    },
    get: function(recipe_id) {
      // Simple index lookup
      return recipes[recipe_id];
    }

  }
});
