wiseQuiz.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/company", {
        templateUrl : "company.html"
    }); 
});