angular.module('csvTemplate', ['ui.codemirror', 'handlebars', 'download'])
.directive('csvTemplate', function (hb, download) {'use strict';

  function link(scope) {
    scope.$watch('rows', update, true);
    
    scope.filename = 'template';
    
    scope.generate = function () {
      var template = hb.compile(scope.code);
      var html = template({rows: scope.rows.data});
      download(html, scope.filename + '.html', 'html');
    };
    
    scope.code = [
      '<ul>',
      '  {{#each rows}}',
      '    <li>',
      '      ',
      '    </li>',
      '  {{/each}}',
      '</ul>'
    ].join('\n');
    
    function update() {
      if (!scope.rows) { return; }
      if (scope.rows.meta.fields) {
        scope.fields = scope.rows.meta.fields;
      } else {
        scope.customFields = {};
        
      }
    }
  }
  
  return {
    resrict: 'A',
    scope: {
      rows: '=csvTemplate'
    },
    replace: true,
    templateUrl: 'modules/csv-template/template.html',
    link: link
  };
});
