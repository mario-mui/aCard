angular.module('a_card_module', [])
  .directive('aCard', function () {

    // link function
    function link(scope, element, attrs, ctrl) {
      scope.mouseAction = 'leave'
    }

    return {
      restrict: 'E',
      scope: {},
      require: '?ngModpel',
      template:
      '<div class="a-card-info">' +
        '<div class="content" ng-mouseleave="mouseAction= \'leave\'" ng-mouseover="mouseAction = \'over\'">' +
          '<div class="content-list">' +
            '<span class="title">上传时间:</span>' +
            '<span class="data">2016-10-10</span>' +
          '</div>' +
          '<div class="content-list">' +
            '<span class="title">文件大小:</span>' +
            '<span class="data">44M</span>' +
          '</div>' +
          '<div class="content-list">' +
            '<span class="title">版本号:</span>' +
            '<span class="data">v4.1.2</span>' +
        '</div>' +
        '</div>' +
        '<div class="a-card-action" ng-class="mouseAction" ng-mouseleave="mouseAction= \'leave\'" ng-mouseover="mouseAction = \'over\'">' +
          '<div class="content">' +
          '<button>上传</button>'+
          '</div>' +
        '</div>' +
      '</div>',
      link: link
    };
  });