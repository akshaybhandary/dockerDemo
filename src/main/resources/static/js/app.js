angular.module('app', [])
  .controller('home', function($scope,$http) {
    var self = this;
    $http.get('/resource/').then(function(response) {
      $scope.greeting = response.data;
    });
})