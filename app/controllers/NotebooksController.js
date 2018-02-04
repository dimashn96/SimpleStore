'use strict';

catalogApp.controller('NotebooksController', function ($scope, $routeParams, dataService, paginationService) {

    $scope.items = [];

    dataService.getNotebooks().then((response) => {

        $scope.items = response.data.notebooks;

        paginationService.setItemsLength($scope.items.length);
        paginationService.resetCurrentPage();

    });

    $scope.id = $routeParams["id"];

});