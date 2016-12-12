angular.module('skills',[])

.factory('skillsList', function () {

    var skills = {backend:[], frontend:[], database:[], agile:[], tools:[]};
    
    skills.backend = [
        {name:'C#', icon:'dotnet', width:'65%'},
        {name:'Java', icon:'java', width:'50%'}
    ];

    skills.frontend = [
        {name:'Javascript', icon:'javascript_badge', width:'80%'},
        {name:'Bootstrap', icon:'bootstrap', width:'80%'},
        {name:'Angular', icon:'angular', width:'65%'},
        {name:'HTML', icon:'html5', width:'65%'},
        {name:'CSS', icon:'css3', width:'50%'}
    ];

    skills.database = [
        {name:'SQL', icon:'database', width:'70%'}
    ];

    skills.agile = [
        {name:'Jira', icon:'jira', width:'65%'}
    ];

    skills.tools = [
        {name:'Git', icon:'git', width:'80%'},
        {name:'Eclipse', icon:'eclipse', width:'75%'},
        {name:'Visual Studio', icon:'visualstudio', width:'70%'}
    ];
    
    return skills;
})

.factory('scrum', function () {

    var scrum = {certifications:[], popover:{}};

    scrum.certifications = [
        {name:'Professional Scrum Master I', icon:'PSMI'},
        {name:'Certified Scrum Product Owner', icon:'CSPO'}
    ];

    scrum.popover = {url: 'scrumCertifsPopover.html', title: 'CERTIFICATIONS'};
    
    return scrum;
})

.controller('SkillsCtrl', ['$scope', 'skillsList', 'scrum', function ($scope, skillsList, scrum) {

    $scope.skills = skillsList;

    $scope.scrum = scrum;

}]);
