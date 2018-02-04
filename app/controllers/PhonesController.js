'use strict';

catalogApp.controller('PhonesController', function ($scope, $routeParams, dataService, paginationService) {

    $scope.items = [];

    dataService.getPhones().then((response) => {

        $scope.items = response.data.phones;

        paginationService.setItemsLength($scope.items.length);
        paginationService.resetCurrentPage();

    });

    $scope.id = $routeParams["id"];

});