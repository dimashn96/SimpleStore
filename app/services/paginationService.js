'use strict';

catalogApp.factory('paginationService', function() {

    let _itemsLength;
    let _currentPage = 0;
    let _itemsPerPage = 3;

    let setItemsLength = (length) => _itemsLength = length;
    let resetCurrentPage = () => _currentPage = 0;
    let getCurrentPage = () => _currentPage;
    let getItemsPerPage = () => _itemsPerPage;
    let pageForward = () => _currentPage++;
    let pageBack = () => _currentPage--;
    let firstPage = () => _currentPage === 0;
    let numberOfPages = () => Math.ceil(_itemsLength / _itemsPerPage);
    let startingItem = () => _currentPage * _itemsPerPage;
    let setItemsPerPage = (itemsPerPage) => {
        _itemsPerPage = itemsPerPage;
        resetCurrentPage();
    };
    let lastPage = () => {
        let lastPageNum = Math.ceil(_itemsLength / _itemsPerPage - 1);
        return _currentPage === lastPageNum
    };

    return {
        setItemsPerPage: setItemsPerPage,
        setItemsLength: setItemsLength,
        getCurrentPage: getCurrentPage,
        getItemsPerPage: getItemsPerPage,
        resetCurrentPage: resetCurrentPage,
        pageForward: pageForward,
        pageBack: pageBack,
        firstPage: firstPage,
        lastPage: lastPage,
        numberOfPages: numberOfPages,
        startingItem: startingItem
    }

});