$(function () {
  $('.selection').change(function (event) {
    event.preventDefault();
    var chosenSelection = $('.selection option:selected').text().toLowerCase();


    $('header').addClass('header-to-top')
    $('.logo').addClass('resize-logo')

    var $news = $('.articleFlex');
    $news.empty();

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
          return val.multimedia.length !== 0;
        }).slice(0, 12);
        var $viewImage = $('.articleFlex');
        var listItem = '';
        $.each(filteredArticle, function (index, value) {

          var title = value.abstract;
          var image = value.multimedia[4].url;

          listItem += '<li class="li-article"><div id="wrapper"><p class="text">'
          listItem += title
          listItem += '</p></div>'
          listItem += '<a href="' + value.url + '"><img class="li-image" src="'
          listItem += image
          listItem += '"/></a></li>'
        })
        $viewImage.append(listItem);
      })

  });

});