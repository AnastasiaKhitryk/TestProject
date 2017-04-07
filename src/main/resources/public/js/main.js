var app = angular.module("springDemo",[]);

app.controller("AppCtrl",function($scope){
    $scope.websites = [{
        iconImageUrl:'',
        id: '3421',
        website:'vk.com',
        title:'ВКонтакте',
        description:'ВКонтакте vk.com социальные сети'
    },{
        iconImageUrl:'',
        id: '3398',
        website:'mail.ru',
        title:'Mail ru',
        description:'Почтовый клиент'
    },{
        iconImageUrl:'',
        id: '3421',
        website:'vk.com',
        title:'ВКонтакте',
        description:'ВКонтакте vk.com социальные сети'
    },{
        iconImageUrl:'',
        id: '3398',
        website:'mail.ru',
        title:'Mail ru',
        description:'Почтовый клиент'
    }];


    // <tr ng-repeat="item in websites">
    //     <td><img ng-src="{{item.iconImageUrl}}"></td>
    //     <td>{{item.id}}</td>
    // <td>{{item.website}}</td>
    // <td>{{item.website}}</td>
    // <td>{{item.description}}</td>
    // </tr>
});