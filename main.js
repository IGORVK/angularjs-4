var app = angular.module('app', []);


app.controller('firstController', function($scope, mySuperFactory){
    
    $scope.mySuperFactory = mySuperFactory;

    $scope.hello = "Hello world firstController";// инициализация переменной в $scope
 
    //теперь определим метод в $scope
    $scope.getBookmark = function(){
        return "My Bookmark";//метод будет возвращать строку "My Bookmark"
    };//теперь эта функция будет доступна в шаблоне {{getBookmark()}}
    
    //Сделаем что-нибудь более интересное создадим функцию которая принимает в себя строку и меняет нашу переменную
    $scope.setHello = function(text){
      $scope.hello = text;  
    };// Будем вызывать кнопу по нажатию кнопки в шаблоне <button ng-click = "setHello('Foo')">Foo</button>
    // ng-click  -  это Angular атрибут который вешает на кнопку событие click
    //Сделаем еще одну кнопку для демонстрации <button ng-click = "setHello('Bar')">Bar</button> 
    //ОБРАТИ ВНИМАНИЕ НА ОДИНАРНЫЕ КОВЫЧКИ ВНУТРИ!!!! -  ng-click = "setHello('Bar')"
    
    
});



//точно так же мы можем создавать функции в фабрике

app.factory('mySuperFactory', function(){
    return {
        hello: function(){ //В этом случае в переменную hello мы записываем не строку а какую-то функцию
            return "hello World from mySuperFactory";
        }
     };
});// теперь заиджектим в нашем контроллере нашу фабрику mySuperFactory см. строка4, строка6
// теперь мы можем вызвать нашу функцию в шаблоне {{mySuperFactory.hello()}}
//Очень легко хранить функции внутри фабрики и вызывать их когда удобно!!!!!
