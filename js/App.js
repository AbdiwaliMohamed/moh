angular.module("myApp",["ngAnimate","ngSanitize","ui.bootstrap","ui.router","mds"])
    // .controller("homeCtrl",function ($scope,$rootScope,$state,$interval,$timeout,$http) {
    //
    //     $http.get("api/GetXilalka.php")
    //         .then(function (resp) {
    //             $scope.xilalka=resp.data
    //             console.log($scope.xilalka)
    //
    //         });
    //     $scope.data={}
    // })


.controller('homeCtrl', function($scope) {
    $scope.items1 = [1,2,3,4,5];
    $scope.items2 = [{img:"img/blog-5.jpg",name:"Abdiwali Mohamed mursal"},
        {img:"img/blog-4.jpg",name:"Abdiwali Mohamed mursal"},
        {img:"img/blog-3.jpg",name:"Abdiwali Mohamed mursal"},
        {img:"img/blog-2.jpg",name:"Abdiwali Mohamed mursal"},
        {img:"img/blog-1.jpg",name:"Abdiwali Mohamed mursal"},
        {img:"img/blog-3.jpg",name:"Abdiwali Mohamed mursal"}];
}).directive("owlCarousel", function() {
    return {
        restrict: 'E',
        transclude: false,
        link: function (scope) {
            scope.initCarousel = function(element) {
                // provide any default options you want
                var defaultOptions = {
                };
                var customOptions = scope.$eval($(element).attr('data-options'));
                // combine the two options objects
                for(var key in customOptions) {
                    defaultOptions[key] = customOptions[key];
                }
                // init carousel
                $(element).owlCarousel(defaultOptions);
            };
        }
    };
})
    .directive('owlCarouselItem', [function() {
        return {
            restrict: 'A',
            transclude: false,
            link: function (scope, element) {
                // wait for the last item in the ng-repeat then call init
                if (scope.$last) {
                    scope.initCarousel(element.parent());
                }
            }
        };
    }])