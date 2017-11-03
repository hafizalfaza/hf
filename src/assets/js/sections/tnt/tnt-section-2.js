
function tntSection2(){
    var tntTipsCarousel = document.querySelector('.tnt-tips-carousel');
    if(tntTipsCarousel){
        var flktyTntTips = new Flickity( tntTipsCarousel, {
            // options
            cellAlign: 'left',
            contain: true,
            pageDots: false,
            wrapAround: true
          });


    
          var tntTipsCarouselChildren = tntTipsCarousel.children[0].children[0].childNodes;
          
          var flickityChildrenCount = tntTipsCarouselChildren.length;
          
          tntTipsCarouselChildren.forEach((carouselChild, i) => {
              carouselChild.classList.remove('is-selected');
          })
          
          var selectedProductIndex;
          
          flktyTntTips.on( 'select', function() {
            tntTipsCarouselChildren.forEach((carouselChild, i) => {
                  carouselChild.classList.remove('is-selected');
                  carouselChild.classList.remove('init-active');
              })
          
              selectedProductIndex = flktyTntTips.selectedIndex
          
              var selectedIndexes = [];
              var unselectedIndexes = [];
          
              var selectedAdder = 0;
              var unselectedAdder = 0;
          
              tntTipsCarouselChildren.forEach((carouselChild, i) => {
                  if(i<4){
          
                      if(selectedProductIndex + i < flickityChildrenCount){
                          selectedIndexes.push(selectedProductIndex + i);
                      }else{
                          selectedIndexes.push(selectedAdder);
                          selectedAdder+=1;
                      }
                  }
          
              })
          
              tntTipsCarouselChildren.forEach((el, i) => {
                  if(selectedIndexes.indexOf(i) === -1) {
                      unselectedIndexes.push(i);
                  }
              })
          
          
              selectedIndexes.forEach((index, i) => {
                tntTipsCarouselChildren[index].classList.remove(tntTipsCarouselChildren[index].classList[1])
                tntTipsCarouselChildren[index].classList.add('item-active-'+(i+1))
              })
          
              unselectedIndexes.forEach((index, i) => {
                tntTipsCarouselChildren[index].classList.remove(tntTipsCarouselChildren[index].classList[1])
              })
          
          })


    }



    //Carousel withn gradient colors

if(document.querySelector('.products-carousel')){
    
}



}

