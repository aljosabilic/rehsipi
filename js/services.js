angular.module('rehsipi.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('RecipeService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var recipes = [
    { id: 0, title: 'Cat flambe', description: 'Deliciously flambed cat', img: 'http://placehold.it/100x100' },
    { id: 1, title: 'Dog souffle', description: 'Lovable. Loyal almost to a fault. Delicious', img: 'http://placehold.it/100x100'},
    { id: 2, title: 'Turtle tartar', description: 'Everyone likes turtles', img: 'http://placehold.it/100x100' },
    { id: 3, title: 'Shark fin soup', description: 'Work your jaws', img: 'http://placehold.it/100x100' }
  ];

  return {
    all: function() {
      return recipes;
    },
    get: function(recipe_id) {
      // Simple index lookup
      return recipes[recipe_id];
    }
  }
});
