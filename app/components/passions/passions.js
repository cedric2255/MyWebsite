angular.module('passions',[])

.factory('countries', function () {

    var countries = {
        europe1:[],
        europe2:[],
        america:[],
        asia:[],
        africa:[]
    };
    
    // Europe countries
    countries.europe1 = [
        {name:'BELGIUM', code:'BE'},
        {name:'CZECH_REPUBLIC', code:'CZ'},
        {name:'DENMARK', code:'DK'},
        {name:'ENGLAND', code:'GB'},
        {name:'ESTONIA', code:'EE'}
    ];
    countries.europe2 = [
        {name:'GERMANY', code:'DE'},
        {name:'ITALY', code:'IT'},
        {name:'PORTUGAL', code:'PT'},
        {name:'SPAIN', code:'ES'},
        {name:'SWEDEN', code:'SE'}
    ];
    // American countries
    countries.america = [
        {name:'BRAZIL', code:'BR'},
        {name:'CANADA', code:'CA'},
        {name:'USA', code:'US'}
    ];
    // Asian countries
    countries.asia = [
        {name:'INDONESIA', code:'ID'},
        {name:'THAILAND', code:'TH'}
    ];
    // African countries
    countries.africa = [
        {name:'MOROCCO', code:'MA'}
    ];
    
    return countries;
})

.factory('sports', function () {

    var sports = {normal:[], snowSports:{}};

    // Sports
    sports.normal = [
        {name:'SWIMMING'},
        {name:'BASKETBALL'}
    ];
    sports.snow = [
        {name:'SNOWBOARDING'},
        {name:'SKIING'}
    ];
    
    return sports;
})

.controller('PassionsCtrl', ['$scope', 'countries', 'sports', function ($scope, countries, sports) {

    $scope.countries = countries;

    $scope.sports = sports;

}]);
