angular.module('experience',[])

.factory('jobs', function () {

    var jobs = [
        {
            id: "amadeus",
            title: "JOB_TITLE_SENIOR_SOFTWARE_ENGINEER_SCRUM_MASTER",
            company: "AMADEUS North America",
            city: "Boston",
            country: "USA",
            beginDate: new Date(2017, 0, 1, 0, 0, 0, 0),
            endDate: 'CURRENT',
            dateFormat: "MMM yyyy",
            companyDescription: "COMPANY_DESCRIPTION_AMADEUS",
            companyWebsite: "http://www.amadeus.com",
            projects: [
                {
                    id: "Southwest",
                    title: "PROJECT_MANAGEMENT",
                    objective: "OBJECTIVE_SOUTHWEST",
                    achievements: [
                        "ACHIEVEMENTS_BUDGET_COST_MANAGEMENT",
                        "ACHIEVEMENTS_RISK_MANAGEMENT",
                        "ACHIEVEMENTS_SCOPE_TIME_INTEGRATION_QUALITY_MANAGEMENT"
                    ]
                },
                {
                    id: "flight_search_shopping",
                    title: "FLIGHT_SEARCH_SHOPPING_PLATFORM",
                    objective: "OBJECTIVE_AMADEUS_SHOPPING",
                    achievements: [
                        "ACHIEVEMENTS_DESIGN_DEV_BACKEND",
                        "ACHIEVEMENTS_PRIORITIZATION",
                        "ACHIEVEMENTS_COLLABORATE_ALL",
                        "ACHIEVEMENTS_PERFECT_JAVA_SPRING",
                        "ACHIEVEMENTS_IMPROVE_SWAGGER_HIBERNATE"
                    ]
                }
            ]
        },

        {
            id: "thales_services",
            title: "JOB_TITLE_SOFTWARE_ENGINEER_SCRUM_MASTER",
            company: "THALES Services",
            contractingCompany: "AMADEUS",
            city: "Sophia-Antipolis",
            country: "FRANCE",
            beginDate: new Date(2011, 9, 3, 0, 0, 0, 0),
            endDate: new Date(2016, 5, 20, 0, 0, 0, 0),
            dateFormat: "yyyy",
            companyDescription: "COMPANY_DESCRIPTION_AMADEUS",
            companyWebsite: "http://www.amadeus.com",
            projects: [
                {
                    id: "fraud_detection",
                    title: "FRAUD_DETECTION",
                    objective: "OBJECTIVE_AMADEUS_FRAUDS",
                    achievements: [
                        "ACHIEVEMENTS_DESIGN_DEV_BACKEND",
                        "ACHIEVEMENTS_DESIGN_DEV_FRONTEND",
                        "ACHIEVEMENTS_SCRUM_MASTER_COM_PROD",
                        "ACHIEVEMENTS_PRIORITIZATION",
                        "ACHIEVEMENTS_COLLABORATE_ALL",
                        "ACHIEVEMENTS_PERFECT_CPP_SQL",
                        "ACHIEVEMENTS_PERFECT_JS_HTML_CSS"
                    ]
                },
                {
                    id: "reaccommodation",
                    title: "REACCOMMODATION",
                    objective: "OBJECTIVE_AMADEUS_REACC",
                    achievements: [
                        "ACHIEVEMENTS_EXPERT_DESIGN_DEV_BACKEND",
                        "ACHIEVEMENTS_PRIORITIZATION",
                        "ACHIEVEMENTS_COLLABORATE_ALL",
                        "ACHIEVEMENTS_PERFECT_CPP_SQL"
                    ]
                },
                {
                    id: "service_management",
                    title: "SERVICE_MANAGEMENT",
                    objective: "OBJECTIVE_AMADEUS_SERVICES",
                    achievements: [
                        "ACHIEVEMENTS_DESIGN_DEV_BACKEND",
                        "ACHIEVEMENTS_DESIGN_DEV_FRONTEND",
                        "ACHIEVEMENTS_PRIORITIZATION",
                        "ACHIEVEMENTS_COLLABORATE_ALL",
                        "ACHIEVEMENTS_PERFECT_CPP_SQL",
                        "ACHIEVEMENTS_PERFECT_JS_HTML_CSS"
                    ]
                }
            ]
        },

        {
            id: "cns_vallauris",
            title: "JOB_TITLE_SOFTWARE_DEVELOPER_VOLUNTEER",
            company: "CNS Vallauris",
            city: "Vallauris",
            country: "FRANCE",
            beginDate: new Date(2016, 0, 1, 0, 0, 0, 0),
            dateFormat: "yyyy",
            companyDescription: "COMPANY_DESCRIPTION_CNS_VALLAURIS",
            companyWebsite: "http://www.cnsvallauris.fr",
            projects: [
                {
                    id: "website",
                    title: "WEBSITE",
                    objective: "OBJECTIVE_CNS_VALLAURIS_WEBSITE",
                    portfolio:  [
                        {
                            'image': 'assets/img/swimboost/home.jpg',
                            'id': 0
                        },
                        {
                            'image': 'assets/img/swimboost/contact.jpg',
                            'id': 1
                        },
                        {
                            'image': 'assets/img/swimboost/team_auto.jpg',
                            'id': 2
                        },
                        {
                            'image': 'assets/img/swimboost/result_auto.jpg',
                            'id': 3
                        },
                        {
                            'image': 'assets/img/swimboost/connection.jpg',
                            'id': 4
                        }
                    ],
                    achievements: [
                        "ACHIEVEMENTS_DESIGN_DEV_WEBSITE",
                        "ACHIEVEMENTS_LEARN_ANGULAR_BOOTSTRAP",
                        "ACHIEVEMENTS_AUTONOMOUS_WORK",
                        "ACHIEVEMENTS_VALLAURIS_RESULTS"
                    ]
                }
            ]
        },

        {
            id: "thales_communications",
            title: "JOB_TITLE_SOFTWARE_DEVELOPER_INTERN",
            company: "THALES Communications & Security",
            city: "Colombes",
            country: "FRANCE",
            beginDate: new Date(2011, 2, 1, 0, 0, 0, 0),
            endDate: new Date(2011, 7, 31, 0, 0, 0, 0),
            dateFormat: "MMM yyyy",
            companyDescription: "COMPANY_DESCRIPTION_THALES_COM",
            companyWebsite: "https://www.thalesgroup.com/en",
            projects: [
                {
                    id: "army_tactical_system",
                    title: "ARMY_TACTICAL_SYSTEM",
                    objective: "OBJECTIVE_THALES_COM_ARMY",
                    achievements: [
                        "ACHIEVEMENTS_ARTILLERY_PROFESSION",
                        "ACHIEVEMENTS_COLLABORATE",
                        "ACHIEVEMENTS_DESIGN_IMPL_GUI",
                        "ACHIEVEMENTS_TEST_SOFTWARE",
                        "ACHIEVEMENTS_DOTNET_CSHARP_WPF"
                    ]
                }
            ]
        },

        {
            id: "airbus",
            title: "JOB_TITLE_SOFTWARE_DEVELOPER_INTERN",
            company: "AIRBUS Defense & Space",
            exCompanyName: "EADS",
            city: "Elancourt",
            country: "FRANCE",
            beginDate: new Date(2010, 2, 1, 0, 0, 0, 0),
            endDate: new Date(2010, 5, 30, 0, 0, 0, 0),
            dateFormat: "MMM yyyy",
            companyDescription: "COMPANY_DESCRIPTION_AIRBUS_DEFENSE",
            companyWebsite: "https://airbusdefenceandspace.com",
            projects: [
                {
                    id: "video_camera",
                    title: "VIDEO_CAMERA",
                    objective: "OBJECTIVE_AIRBUS_VIDEO_CAMERA",
                    achievements: [
                        "ACHIEVEMENTS_BUSINESS_ANALYSIS",
                        "ACHIEVEMENTS_COLLABORATE",
                        "ACHIEVEMENTS_GUI_CPP",
                        "ACHIEVEMENTS_MICROCONTOLLER_C",
                        "ACHIEVEMENTS_TEST_SOFTWARE",
                        "ACHIEVEMENTS_IMPROVE_C_CPP"
                    ]
                }
            ]
        }
    ];

    return jobs;
})

.controller('ExperienceCtrl', ['$scope', 'jobs', function ($scope, jobs) {

    $scope.jobs = jobs;
    
    $scope.activeSlide = 0;
    
    $scope.changeActiveSlide = function(newActiveSlide) {
        $scope.activeSlide = newActiveSlide;
    };

}]);
