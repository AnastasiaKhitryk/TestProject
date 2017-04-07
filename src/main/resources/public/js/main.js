var app = angular.module("springDemo",[]);

app.controller("AppCtrl",function($scope, $http){
    $scope.websites = [];

    //$http.get('http://localhost:8099/api/stackoverflow');
    // success(function(data){
    //     $scope.websites = data;
    // });


    // <tr ng-repeat="item in websites">
    //     <td><img ng-src="{{item.iconImageUrl}}"></td>
    //     <td>{{item.id}}</td>
    // <td>{{item.website}}</td>
    // <td>{{item.website}}</td>
    // <td>{{item.description}}</td>
    // </tr>

    $http({
        method: 'GET',
        url: 'http://localhost:8099/api/stackoverflow'
    }).then(function successCallback(response) {
        $scope.websites = response.data;
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
});