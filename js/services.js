angular.module('rehsipi.services', [])

.factory('RecipeService', function($http, $location) {
  // Might use a resource here that returns a JSON array
  var recipes = { search_parameter: '', product: '', list: [] };

  return {
    recipes_for_ean: function(ean_code) {
        if (recipes['search_parameter'] == ean_code) {
            // Pass
        } else {
            recipes['list'] = [];

            $http.get('http://hackzurich14.herokuapp.com/api/' + ean_code + '?recipes=1').then(function (resp) {
                recipes['search_parameter'] = ean_code;
                var product_name = resp.data['product']['name_english'];
                recipes['product'] = product_name

                var recipe_list = resp.data['recipes']
                recipes['list'].push.apply(recipes['list'], recipe_list);
            }, function (err) {
                console.error(err);
                alert('Product not found');
                $location.path('/app/start');
            });
        }

      return recipes;
    },
    recipes_for_string: function(search_string) {
        if (recipes['search_parameter'] == search_string) {
            // Pass
        } else {
            recipes['list'] = [];

            $http.get('http://hackzurich14.herokuapp.com/api/searchrecipe/' + search_string + '?recipes=1').then(function (resp) {
                recipes['search_parameter'] = search_string;
                var product_name = search_string;
                recipes['product'] = product_name

                var recipe_list = resp.data
                recipes['list'].push.apply(recipes['list'], recipe_list);
            }, function (err) {
                console.error(err);
                alert('No recipes found!');
                $location.path('/app/start');
            });
        }

        return recipes;
    },
    get: function(recipe_id) {
      for (recipe in recipes.list) {
          if (recipes.list[recipe].id == recipe_id) {
              return recipes.list[recipe];
          }
      }
    }
  }
});
