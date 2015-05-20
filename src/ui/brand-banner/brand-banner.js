// var switcher = require('app-switcher').name;

module.exports =

require('spsui')
    .directive('spsBrandBanner', BrandBannerDirective);

/**
 * Brand Banner
 * A panel in the UI that houses the SPS global branding and a variety
 * of other application navigation features.
 *
 * @returns Angular Directive
 */
function BrandBannerDirective() {
    return {
        restrict: 'E',
        transclude: true,
        controller: BrandBannerController,
        templateUrl: require('./brand-banner.html'),
        link: function (scope, element, attrs, controller) {

        }
    };
}

/**
 *
 * @constructor
 * @ngInject
 */
function BrandBannerController() {


}


