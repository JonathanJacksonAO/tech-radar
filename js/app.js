/**
 * Created by furrm on 14/11/2014.
 */

angular.module('app', [])
.controller('AppCtrl', ['$scope', function($scope){

        $scope.name = "Legend";

        $scope.data = radar_data;

        $scope.checked = true;



        $scope.selectBlimp = function(data){
//            alert("blimp selected");

            $scope.checked = false;

            $scope.name = data.name;
            $scope.description = data.description;

        };

//        $scope.msg = "123";
        function selectBlimp2(data){
            alert("blimp 2 selected");
            $scope.$apply(function() {

            });
        }

        $scope.$watch("name", function(newVal, oldVal){
//            alert('scope.name changed')
        });
    }])
    .directive('markup', function(){
        return{
            restrict:'E',
            replace:true,
            transclude:true,
            scope:{
                markdown: "@"
            },
            link: function(scope, element, attrs) {



                scope.$watch('markdown', function(newVal, oldVal){
//                    alert(newVal);
                    var htmlText = scope.markdown;
                    element.html(marked(htmlText));
                });
            }
        }
    })
;