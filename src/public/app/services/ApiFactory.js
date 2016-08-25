jamApp.factory('ApiFactory', function() {
  var obj = {};
  var usedApi = location.origin + '/api/';
  obj.api = usedApi;
  return obj;
});
