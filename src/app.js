angular.module('mainApp', [
  'csv',
  'csvTemplate'
])
.config(function () {'use strict';
  if (!window.require) { return; }
  if (process.platform !== 'darwin') { return; }
  var gui = require('nw.gui');
  var mb = new gui.Menu({type:'menubar'});
  mb.createMacBuiltin('CSV 2 Template');
  gui.Window.get().menu = mb;
})
.controller('HomeController', function ($scope, csv) {'use strict';

  document.getElementsByClassName('main-window')[0].style.opacity = 1;
  
  $scope.inputChange = function (file) {
    if (!file) { $scope.fileError = 'Must be a csv file'; return; }
    $scope.fileError = null;
    $scope.file = file;
  };
  
  $scope.parse = function (file) {
    if (!file) { return; }
    $scope.loading = true;
    csv.parse(file, {
      //worker: true,
      header: true,
      complete: function (rows) {
        $scope.loading = false;
        $scope.rows = rows;
        $scope.$apply();
      },
      error: function (err) {
        console.error(err);
        $scope.loading = false;
        $scope.$apply();
      }
    });
  };
  
});
