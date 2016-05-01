'use strict';

/**
 * @ngdoc function
 * @name smartCityFrontEndApp.controller:ProAddressCtrl
 * @description
 * # SearchCtrl
 * Controller of the smartCityFrontEndApp
 */
angular.module('smartCityFrontEndApp')
  .controller('ProAddressCtrl', function ($scope, $rootScope) {
    $scope.displayedView = 0;
    $scope.animateSwitchClass = 'animate-switchLeft';
    $scope.prev = function() {
        if ($scope.displayedView > 0) {
            $scope.animateSwitchClass = 'animate-switchRight';
            if ($scope.displayedView === 1){
                $rootScope.$broadcast('saveAdress');
            }
            $scope.displayedView--;
        }
    };
    $scope.next = function() {
        if ($scope.displayedView < 2) {
            $scope.animateSwitchClass = 'animate-switchLeft';
            if ($scope.displayedView !== 1){
                $scope.displayedView++;
            }
            else{
                $rootScope.$broadcast('getLatLon', function(){$scope.displayedView++;});
            }
        }
    };
  });
