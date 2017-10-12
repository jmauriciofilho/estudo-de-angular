app.controller('DisciplinaController', function ($scope) {
    $scope.listaDisciplinas = [];

       $scope.gravar = function () {
           $scope.listaDisciplinas.push($scope.disciplina);
           $scope.disciplina = {}
       };

       $scope.remover = function () {
           var disciplinas = $scope.listaDisciplinas;
           console.log(disciplinas)
       }
});