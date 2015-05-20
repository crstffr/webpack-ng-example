var angular = require('angular');
var chassis = require('chassis').name;

angular
    .module('spscp', [chassis])
    .factory('$exceptionHandler', require('exceptionHandler'))
    .config(function ($locationProvider) {

        /**
         * Use this to enable the HTML5 Mode for the UI Router.
         * webpack-dev-server doesn't handle URL rewrites, so
         * it doesn't work all that great during development.
         *

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        */

    });
