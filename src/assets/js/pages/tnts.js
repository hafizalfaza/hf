var tntsCarousel = document.querySelector('.tnts-carousel');

if(tntsCarousel){
  var flkty = new Flickity( tntsCarousel, {
    // options
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    freeScroll: true,
    wrapAround: true
  });
}


var tntsSuggestionCarousel = document.querySelector('.tnts-suggestion-carousel');

if(tntsSuggestionCarousel){
  var flkty = new Flickity( tntsSuggestionCarousel, {
    // options
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    freeScroll: true,
    wrapAround: true
  });
}