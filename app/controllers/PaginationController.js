'use strict';

catalogApp.controller('PaginationController', function ($scope, $routeParams, dataService, paginationService) {

    $scope.setItemsPerPage = (itemsPerPage) => paginationService.setItemsPerPage(itemsPerPage);
    $scope.itemsPerPage = () => paginationService.getItemsPerPage();
    $scope.currentPage = () => paginationService.getCurrentPage();
    $scope.firstPage = () => paginationService.firstPage();
    $scope.lastPage = () => paginationService.lastPage();
    $scope.numberOfPages = () => paginationService.numberOfPages();
    $scope.startingItem = () => paginationService.startingItem();
    $scope.pageBack = () => paginationService.pageBack();
    $scope.pageForward = () => paginationService.pageForward();

});