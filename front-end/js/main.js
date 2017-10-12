var app = angular.module('SistemaAcademico', ['ngRoute']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/disciplina', {
            templateUrl: 'disciplina.html',
            controller: 'DisciplinaController'
        }).
        when('/turma', {
            templateUrl: 'turma.html',
            controller: 'TurmaController'
        }).
        when('/aluno', {
            templateUrl: 'aluno.html',
            controller: 'AlunoController'
        });
    }]);
