"use strict";

app.factory('GuideCityPrices', ($q, $http) => {
  let getBooks = () => {
      return $q((resolve, reject) => {
        $http.get('../data/guides.json')
        .success((bookObject) => {
          resolve(bookObject);
        })
        .error((error) => {
          reject(error);
        });
      });
    };

  return {getBooks};
});
