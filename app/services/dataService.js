'use strict';

catalogApp.factory('dataService', function($http) {

    let config;
    let data = {};

    let getPhones = () => get('phones');
    let getTablets = () => get('tablets');
    let getNotebooks = () => get('notebooks');

    function get(type) {
        if (!config) {
            return $http({method: 'GET', url: 'config/config.json'})
                .then(function (response) {
                    config = response.data.config;
                    data[type] = $http({method: 'GET', url: response.data.config[type]});
                    return data[type]
            })
        } else {
            if (!data[type]) {
                data[type] = $http({method: 'GET', url: config[type]});
                return data[type];
            } else {
                return data[type]
            }
        }
    }

    return {
        getPhones: getPhones,
        getTablets : getTablets,
        getNotebooks : getNotebooks
    }

});