var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
url += '?' + $.param({
  'api-key': "2bf76347a7e6499eb91472662db68710"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  
  console.log(result);
}).fail(function(err) {
  throw err;
});

$(function(){


});
var $dataSet = data.results.filter(function (object) {
        return objec.multimedia.length;
      }).splice(0, 12);


