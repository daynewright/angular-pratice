"use strict";

app.controller('BookCtrl', function($scope, GuideCityPrices){

  GuideCityPrices.getBooks()
  .then(function(books) {
      $scope.books = books;
  });

});
