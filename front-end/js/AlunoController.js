app.controller('AlunoController', function ($scope) {
    $scope.listaAlunos = [];

    $scope.gravar = function () {
        $scope.listaAlunos.push($scope.aluno);
        $scope.aluno = {}
    };

    $scope.remover = function () {

    }
});