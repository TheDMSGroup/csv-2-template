angular.module('csv', ['papa'])
.factory('csv', function (papa) {'use strict';
  return papa;
})
.directive('csv', function () {'use strict';
  return {
    restrict: 'A',
    scope: {
      change: '&csv'
    },
    link: function (scope, elem, attrs) {
      // Check if it's an input and has type="file"
      if (attrs.type !== 'file' || elem[0].nodeName !== 'INPUT') { return; }
      
      elem.bind('change', function (event) {
        var file = event.target.files[0];
        if (file.type !== 'text/csv') { scope.change({file: false}); }
        else { scope.change({file: file}); }
        scope.$apply();
      });
    }
  };
});