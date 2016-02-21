/**
 * Created by karlkerem on 21/02/16.
 */
(function() {
  angular
    .module('hackAppApp')
    .directive('myUiGridResize', myUiGridResizeDirective);

  /* @ngInject */
  function myUiGridResizeDirective(gridUtil) {
    return {
      restrict: 'A',
      require: 'uiGrid',
      link: function($scope, $elm, $attrs, uiGridCtrl) {
        $scope.$watch($attrs.uiGrid + '.minRowsToShow', function(val) {
          var grid = uiGridCtrl.grid;

          // Initialize scrollbars (TODO: move to controller??)
          uiGridCtrl.scrollbars = [];

          // Figure out the new height
          var contentHeight = val * grid.options.rowHeight;
          var headerHeight = grid.options.hideHeader ? 0 : grid.options.headerRowHeight;
          var footerHeight = grid.options.showFooter ? grid.options.footerRowHeight : 0;
          var columnFooterHeight = grid.options.showColumnFooter ? grid.options.columnFooterHeight : 0;
          var scrollbarHeight = grid.options.enableScrollbars ? gridUtil.getScrollbarWidth() : 0;
          var pagerHeight = grid.options.enablePagination ? gridUtil.elementHeight($elm.children(".ui-grid-pager-panel").height('')) : 0;

          var maxNumberOfFilters = 0;
          // Calculates the maximum number of filters in the columns
          angular.forEach(grid.options.columnDefs, function(col) {
            if (col.hasOwnProperty('filter')) {
              if (maxNumberOfFilters < 1) {
                maxNumberOfFilters = 1;
              }
            }
            else if (col.hasOwnProperty('filters')) {
              if (maxNumberOfFilters < col.filters.length) {
                maxNumberOfFilters = col.filters.length;
              }
            }
          });
          var filterHeight = maxNumberOfFilters * headerHeight;

          var filterTextBoxHeight=0;
          $("div[ui-grid-filter]").each(function(){
            if($(this).height() > filterTextBoxHeight)filterTextBoxHeight=$(this).height();
          });

          var newHeight = headerHeight + contentHeight + footerHeight + columnFooterHeight + scrollbarHeight + filterHeight + pagerHeight + filterTextBoxHeight;

          $elm.css('height', newHeight + 'px');

          grid.gridHeight = $scope.gridHeight = gridUtil.elementHeight($elm);

          // Run initial canvas refresh
          grid.refreshCanvas();
        });
      }
    };
  }
})();
