(function() {
    var cpapp = angular.module('cpapp', ['restangular']);

    cpapp.controller('CpCtrl', ['$scope', 'Restangular',function($scope, Restangular) {
    $scope.searchTerm = {};
    $scope.searchTerm.term = '31200';
    $scope.foundElements;
    $scope.loaded = false;

    //find similar entries
    $scope.findSimilar = function(){
    $scope.loaded = false;
        Restangular.one('/api/postalCodes/search/findSimilar?term='+$scope.searchTerm.term ,'').get().then(function(embeddedData) {
            var postalCodes = embeddedData._embedded.postalCodes;
            $scope.postalCodes = postalCodes;
            $scope.foundElements = postalCodes.length;
            $scope.loaded = true;
        });
    };
    $scope.findSimilar('');

    }]);
}());