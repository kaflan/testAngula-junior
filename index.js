(function() {
  'use strict';
  var userList = null;
  var app = angular.module('app', []);
  function save(){
    localStorage.setItem('userList', JSON.strinify(userList));
  }
  function load(){
    userList = localStorage.getItem('userList');
  }
  app.controller('ListCntrl', function($scope) {
    $scope.users = [];
    load();
    if (userList !== null) {
      $scope.users = userList;
    }
    $scope.add = function() {
      $scope.newUser.name = '';
      $scope.newUser.email = '';
      $scope.newUser.phone = '';
      $scope.newUser.address = '';
      $scope.newUser.street = '';
      $scope.newUser.city = '';
      $scope.newUser.state = '';
      $scope.newUser.zip = '';
      $scope.users.push(angular.copy($scope.newUser));
      userList = $scope.users;
      save();
    };
    $scope.delUser = function(item) {
      var index = $scope.users.indexOf(item);
      $scope.users.splice(index, 1);
      userList = $scope.users;
      save();
    };
  });
})();
