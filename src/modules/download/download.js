angular.module('download', [])
.factory('download', function () {'use strict';
  return function (text, filename, type) {
    type = type || 'text';
    filename = filename || 'download.txt';
    
    if (!window.require) {
    
      var pom = document.createElement('a');
      pom.setAttribute(
        'href',
        'data:text/' + type + ';charset=utf-8,' + encodeURIComponent(text)
      );
      pom.setAttribute('download', filename);
      pom.click();
    
    } else {
      
      var fs = require('fs');
      var path = require('path');
      var input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.setAttribute('nwsaveas', filename);
      
      input.addEventListener('change', function () {
        fs.writeFile(this.value, text, function (err) {
          if (err) { return alert(err); }
          alert('File saved successfully');
        });
      }, false);
      input.click();
      
    }
  };
});
