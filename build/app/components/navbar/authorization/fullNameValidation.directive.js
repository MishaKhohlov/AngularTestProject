/**
 * @ngdoc directive
 * @name authorization.directive:nameValid
 * @restrict A
 * @scope
 * form ngModel
 * @description
 * This validation data in full name form through regExp and js logic.(only two word without number and space in the middle of a word)
 * You can use another solution:
 * RefExp for two words, but hard support and expand solution
 * const NAME_REGEXP = /^[\w]+(\s+[\w]+)$/;
 * @example
 *  <input type="text" name="username" ng-model="register.username" name-valid required>
 */

const nameValidation = () => {
  //only words
  const WORD = /^([a-z]+)$/i;
  return {
    restrict: 'A',
    require: '?ngModel',
    link: function (scope, elm, attrs, ctrl) {
      ctrl.$validators.username = function (modelValue) {
        if (modelValue) {
          const arr = modelValue.split(' ');
          if (arr.length === 2 && WORD.test(arr[0]) && WORD.test(arr[1])) {
            return true;
          }
        }
        return false;
      };
    }
  };
};

nameValidation.$inject = [];

export {nameValidation};
