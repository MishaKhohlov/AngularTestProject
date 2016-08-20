import $ from 'jquery';

/**
 * @type directive
 * @class home.Directive:scroll
 * @memberOf home
 * @description
 * Directive create parallax effect for background element,
 * through a change value in property background-position
 * @example
 *  <div scroll-event ng-style="scrollValue">
 */

const scrollEvent = ($window) => {
  return {
    restrict: 'A',
    link: (scope, elm) => {
      let posElEnd;
      let posEl;
      let currentVal = -500;

      angular.element(document).ready(()=> {
        posElEnd = $(elm).offset().top;
        posEl = posElEnd - $($window).height();
      });

      scope.scrollValue = {'background-position': '50%' + currentVal + 'px'};

      angular.element($window).bind('scroll', function () {
        if (this.pageYOffset > posEl && this.pageYOffset <= posElEnd + 250) {
          const posVal = ~~(currentVal + (this.pageYOffset - posEl) / 2);
          scope.scrollValue = {'background-position': '50%' + posVal + 'px'};
        }
        scope.$apply();
      });
    }
  }
};

scrollEvent.$inject = ['$window'];

export {scrollEvent};
