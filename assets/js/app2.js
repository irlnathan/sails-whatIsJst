angular.module('jstExample', ['ngSanitize']);

angular.module('jstExample').controller('appController', function($scope){

  $scope.template = JST['assets/templates/myTemplate.ejs']( {message: "mymessage"} )

});
