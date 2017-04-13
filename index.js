/**
 * Created by Avinash Theppala on 4/13/2017.
 */
var myApp = angular
                 .module('myModule',[])
                 .controller('myController', function ($scope) {

               var technologies =[
                   {name:'C#',likes:0,dislikes:0},
                   {name:'angularJs',likes:0,dislikes:0}
               ];
                     $scope.technologies=technologies;
                                          
                     $scope.incrementLikes = function (technology) {
                         technology.likes++;
                     };

                     $scope.incrementDisLikes = function (technology) {
                         technology.dislikes++;
                     };
               });

