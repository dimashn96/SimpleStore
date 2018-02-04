'use strict';

catalogApp.controller('TabletsController', function ($scope, $routeParams, dataService, paginationService) {

    $scope.items = [];

    dataService.getTablets().then((response) => {

        $scope.items = response.data.tablets;

        paginationService.setItemsLength($scope.items.length);
        paginationService.resetCurrentPage();

    });

    $scope.id = $routeParams["id"];

});