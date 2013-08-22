function FoodListCtrl($scope, $http) {
  $http.get("js/foods.json").success(function(data) {
    $scope.foods = data;
  });
  
  $scope.orderProp = "color";
}
