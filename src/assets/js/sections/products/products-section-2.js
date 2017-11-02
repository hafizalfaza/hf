
function productsSection2(){
    var productsProductsCarousel = document.querySelector('.products-products-carousel');
    if(productsProductsCarousel){
        var flktyProductsProducts = new Flickity( productsProductsCarousel, {
            // options
            cellAlign: 'left',
            contain: true,
            pageDots: false,
            wrapAround: true
          });


    
          var productsProductsCarouselChildren = productsProductsCarousel.children[0].children[0].childNodes;
          
          var flickityChildrenCount = productsProductsCarouselChildren.length;
          
          productsProductsCarouselChildren.forEach((carouselChild, i) => {
              carouselChild.classList.remove('is-selected');
          })
          
          var selectedProductIndex;
          
          flktyProductsProducts.on( 'select', function() {
            productsProductsCarouselChildren.forEach((carouselChild, i) => {
                  carouselChild.classList.remove('is-selected');
                  carouselChild.classList.remove('init-active');
              })
          
              selectedProductIndex = flktyProductsProducts.selectedIndex
          
              var selectedIndexes = [];
              var unselectedIndexes = [];
          
              var selectedAdder = 0;
              var unselectedAdder = 0;
          
              productsProductsCarouselChildren.forEach((carouselChild, i) => {
                  if(i<4){
          
                      if(selectedProductIndex + i < flickityChildrenCount){
                          selectedIndexes.push(selectedProductIndex + i);
                      }else{
                          selectedIndexes.push(selectedAdder);
                          selectedAdder+=1;
                      }
                  }
          
              })
          
              productsProductsCarouselChildren.forEach((el, i) => {
                  if(selectedIndexes.indexOf(i) === -1) {
                      unselectedIndexes.push(i);
                  }
              })
          
          
              selectedIndexes.forEach((index, i) => {
                productsProductsCarouselChildren[index].classList.remove(productsProductsCarouselChildren[index].classList[1])
                productsProductsCarouselChildren[index].classList.add('item-active-'+(i+1))
              })
          
              unselectedIndexes.forEach((index, i) => {
                productsProductsCarouselChildren[index].classList.remove(productsProductsCarouselChildren[index].classList[1])
              })
          
          })


    }



    //Carousel withn gradient colors

if(document.querySelector('.products-carousel')){
    
}



}

