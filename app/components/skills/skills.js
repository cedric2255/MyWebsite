angular.module('skills',[])

.factory('skillsList', function () {

  var projectManagement = {certifications:[], tools:[]};
  var agile = {certifications:[], tools:[]};
  var programming = {backend:[], frontend:[], database:[], tools:[]};
  var skills = {projectManagement, agile, programming};

  // Project Management
  skills.projectManagement.certifications = [
    {name:'Project Management Professional', icon:'PMP'}
  ];
  skills.projectManagement.tools = [
    {name:'MS Project', width:'90%'},
    {name:'Confluence', iconClass:'devicon-confluence-plain', width:'90%'}
  ];

  // Agile
  skills.agile.certifications = [
    {name:'Professional Scrum Master I', icon:'PSMI'},
    {name:'Certified Scrum Product Owner', icon:'CSPO'}
  ];
  skills.agile.tools = [
    {name:'Jira', iconClass:'devicons devicons-jira', width:'90%'}
  ];

  // Programming Languages
  skills.programming.backend = [
    {name:'Java', iconClass:'devicon-java-plain', width:'90%'},
    {name:'C++', iconClass:'devicon-cplusplus-plain', width:'90%'}
  ];
  skills.programming.frontend = [
    {name:'Bootstrap', iconClass:'devicon-bootstrap-plain', width:'80%'},
    {name:'Angular', iconClass:'devicon-angularjs-plain', width:'65%'},
    {name:'HTML', iconClass:'devicon-html5-plain', width:'65%'},
    {name:'CSS', iconClass:'devicon-css3-plain', width:'50%'}
  ];
  skills.programming.database = [
    {name:'SQL', iconClass:'devicons devicons-database', width:'70%'}
  ];
  skills.programming.tools = [
    {name:'Bitbucket', iconClass:'devicon-bitbucket-plain', width:'90%'},
    {name:'Eclipse', iconClass:'devicons devicons-eclipse', width:'80%'}
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
