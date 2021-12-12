angular.module("myApp",["ngAnimate","ngSanitize","ui.bootstrap","ui.router","mds"])
    .controller("homeCtrl",function ($scope,$rootScope,$state,$interval,$timeout,$http) {
        $http.get("api/getProducts.php")
            .then(function (resp) {
                $scope.products=resp.data
            });
        $scope.data={}

        $scope.register=function () {
            $http.post("api/register.php",$scope.data).then(function (resp) {
                if(resp.data.status){
                    toastr.success("Successfully Regitered !","Success",{timeOut:2000})
                    $rootScope.id=resp.data.id
                }
                else{
                    toastr.error("User Already Exist","Error",{timeOut:2000})
                }
            })
        }
        $scope.data={}
        $scope.login=function () {
            $http.post("api/login.php",$scope.data)
                .then(function (resp) {
                    if(resp.data.status) {
                        toastr.success("Welcome " + $scope.data.email, "Success", {timeOut: 2000})
                        $rootScope.id = resp.data.id
                    }
                    else{
                        toastr.error("Wrong Username or Password","Error",{timeOut:2000})
                        $scope.data.email=""
                        $scope.data.pass=""
                    }
                })
        }
    })


