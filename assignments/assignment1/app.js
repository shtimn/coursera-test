(function(angular){
    'use strict';
    
    var LunchCheckController = function($scope) {
        $scope.lunchMenu = '';
        $scope.checkMenu = function(){
            var count = $scope.lunchMenu.split(',').filter(function(i){return i}).length;

            if (count == 0) {
                $scope.message = 'Please enter data first';
                $scope.isEmpty = true;
            } else if (count <= 3 ) {
                $scope.isEmpty = false;
                $scope.message = 'Enjoy!';
            } else {
                $scope.isEmpty = false;
                $scope.message = 'Too much!';
            }
        };
    };
    LunchCheckController.$inject = ['$scope'];

    var LunchCheck = angular.module('LunchCheck', []);
    LunchCheck.controller('LunchCheckController', LunchCheckController);
})(angular);