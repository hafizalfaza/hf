var certificateCarousel = document.querySelector('.certificate-carousel');

if(certificateCarousel){
  var flkty = new Flickity( certificateCarousel, {
    // options
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    freeScroll: true,
    wrapAround: true
  });
}