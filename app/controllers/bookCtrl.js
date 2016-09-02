"use strict";

app.controller('BookCtrl', function($scope, $q, $http){

  let getBooks = function(){
    return $q(function(resolve, reject){
      $http.get('../data/guides.json')
      .success(function(bookObject){
        resolve(bookObject);
      })
      .error(function(error){
        reject(error);
      });
    });
  };

  getBooks()
  .then(function(books) {
      $scope.books = books;
  });

});
