$(function () {
  $('.selection').change('.selection option:selected', function (event) {
    event.preventDefault();
    var chosenSelection = $('.selection option:selected').text().toLowerCase();

    var url = 'https://api.nytimes.com/svc/topstories/v2/' + chosenSelection + '.json';
    url += '?' + $.param({
      'api-key': "2bf76347a7e6499eb91472662db68710"
    });
    $.ajax({
        url: url,
        method: 'GET',
      })
      .done(function (data) {
        console.log(data);

        var filteredArticle = data.results.filter(function (val) {
          return val.multimedia.length > 0;
        }).slice(0, 12);
        $.each(filteredArticle, function(index, value){
$('.articleFlex').appened('<li>ghhggfvg</li>')
        });


      })
      .fail(function (err) {
        throw err;
      });

  });

});