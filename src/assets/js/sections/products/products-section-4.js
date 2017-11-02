
function productsSection4(){
    var productsTrendingCarousel = document.querySelector('.products-trending-carousel');
    if(productsTrendingCarousel){
        var flktyProductsProducts = new Flickity( productsTrendingCarousel, {
            // options
            cellAlign: 'left',
            contain: true,
            pageDots: true,
            wrapAround: true
          });
    }
}