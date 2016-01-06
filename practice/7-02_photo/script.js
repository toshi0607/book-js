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
      console.dir(photoData);
    })
    .fail(function() {
      $('#gallery').text(textStatus);
    })
  }

  getData(dataURL);
});
