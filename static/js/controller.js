var app = angular.module('myApp', ['ngAnimate']);

app.controller("FoodListCtrl", function($scope, $http, $filter) {
  $http.get("js/foods.json").success(function(data) {
    $scope.foods = data;

    $scope.green_greens = $filter('filter')(data, {color:"Green-Green"});
    $scope.greens = $filter('filter')(data, function(food) {
      if (food.color == "Green") { return true; }
    });
    $scope.green_yellows = $filter('filter')(data, {color:"Green-Yellow"});
    $scope.yellows = $filter('filter')(data, function(food) {
      if (food.color == "Yellow") { return true; }
    });
    $scope.yellow_reds = $filter('filter')(data, {color:"Yellow-Red"});
    $scope.reds = $filter('filter')(data, function(food) {
      if (food.color == "Red") { return true; }
    });

    //$scope.green_greens = FilterFoodCategories(green_greens, $filter)
  });
  
  $scope.orderProp = "color";
})

//function FilterFoodCategories(foods, $filter) {
//  var filtered = new Object();
//  filtered.veg_non_starchy = $filter('filter')(foods, {category:"Vegetable:Non-Starchy"});
//  filtered.herbs = $filter('filter')(foods, {category:"Herbs"});
//
//  return filtered;
//}
