app.controller('TurmaController', function ($scope) {
    $scope.listaTurmas = [];

    $scope.gravar = function () {
        $scope.listaTurmas.push($scope.turma);
        $scope.turma = {}
    };

    $scope.remover = function () {

    }
});