
function homeSection5(){
    var homeReviewCarousel = document.querySelector('.home-review-carousel');
    if(homeReviewCarousel){
        var flktyProducts = new Flickity( homeReviewCarousel, {
            // options
            cellAlign: 'left',
            contain: true,
            pageDots: false,
            wrapAround: true
          });
    }
}


