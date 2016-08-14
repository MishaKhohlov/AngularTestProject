const nameValidation = () => {
  
  return {
    restrict: 'A',
    require: '?ngModel',
    link: function (scope, elm, attrs, ctrl) {
      ctrl.$validators.username = function (modelValue) {
        if(modelValue) {
          if(modelValue.split(' ').length === 2) {
            return true
          }
        }
        return false
      };
    }
  };
};

nameValidation.$inject = [];

export {nameValidation};
