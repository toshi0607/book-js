$(document).ready(function(){
  var dataURL = 'https://api.instagram.com/v1/users/self/media/recent';
  var photoData;

  var getData = function(url) {
    $.ajax({
      url: url,
      dataType: 'jsonp',
      data: {
        access_token: '49289114.3b9d630.d22a60f550d24095a54999cbf32b512c',
        count: 12
      }
    })
    .done(function(data) {
      photoData = data;

      $(photoData.data).each(function() {
        var caption = '';
        if(this.caption) {
          caption = this.caption.text;
        }

        $('#gallery').append(
          $('<div class="img_block"></div>').append(
            $('<a></a>').attr('href', this.link).attr('target', '_blank').append(
              $('<img>').attr('src', this.images.low_resolution.url)
            )
          ).append(
            $('<p class="caption"></p>').text(caption + '♡' + this.likes.count)
          )
        );
      });
    })
    .fail(function() {
      $('#gallery').text(textStatus);
    });
  };

  getData(dataURL);
});
