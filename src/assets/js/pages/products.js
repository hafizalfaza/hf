
var productsCarousel = document.querySelector('.products-carousel');
if(productsCarousel){
    var flktyProducts = new Flickity( productsCarousel, {
        // options
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        wrapAround: true
      });
}


//Carousel withn gradient colors

if(document.querySelector('.products-carousel')){
    var productsCarouselChildren = document.querySelector('.products-carousel').children[0].children[0].childNodes;
    
    var flickityChildrenCount = productsCarouselChildren.length;
    
    productsCarouselChildren.forEach((carouselChild, i) => {
        carouselChild.classList.remove('is-selected');
    })
    
    var selectedProductIndex;
    
    flktyProducts.on( 'select', function() {
        productsCarouselChildren.forEach((carouselChild, i) => {
            carouselChild.classList.remove('is-selected');
            carouselChild.classList.remove('init-active');
        })
    
        selectedProductIndex = flktyProducts.selectedIndex
    
        var selectedIndexes = [];
        var unselectedIndexes = [];
    
        var selectedAdder = 0;
        var unselectedAdder = 0;
    
        productsCarouselChildren.forEach((carouselChild, i) => {
            if(i<4){
    
                if(selectedProductIndex + i < flickityChildrenCount){
                    selectedIndexes.push(selectedProductIndex + i);
                }else{
                    selectedIndexes.push(selectedAdder);
                    selectedAdder+=1;
                }
            }
    
        })
    
        productsCarouselChildren.forEach((el, i) => {
            if(selectedIndexes.indexOf(i) === -1) {
                unselectedIndexes.push(i);
            }
        })
    
    
        selectedIndexes.forEach((index, i) => {
            productsCarouselChildren[index].classList.remove(productsCarouselChildren[index].classList[1])
            productsCarouselChildren[index].classList.add('item-active-'+(i+1))
        })
    
        unselectedIndexes.forEach((index, i) => {
            productsCarouselChildren[index].classList.remove(productsCarouselChildren[index].classList[1])
        })
    
    })
}


//Trending products carousel

var trendingProductsCarousel = document.querySelector('.trending-products-carousel');

if(trendingProductsCarousel){
    var flktyTrendingProducts = new Flickity( trendingProductsCarousel, {
        // options
        cellAlign: 'left',
        contain: true,
        wrapAround: true
      });
}




  window.onscroll = function(){
    var scrollTop = window.scrollY;
  }


 /*  function fzSprinklaxSetPosition(scrollTop){
      if(scrollTop > 0){
        fzSprinklaxElArray.forEach((fzSprinklaxEl) => {
            fzSprinklaxEl.el.style.transform = 'translate3d(0, '+((scrollTop)*fzSprinklaxEl.speed*(-1))+'px, 0)';
        })
      }
    
  }

 */


































  







//   var productsCarousel = document.querySelector('.products-carousel');
//   var flktyProducts = new Flickity( productsCarousel, {
//     // options
//     cellAlign: 'left',
//     contain: true,
//     pageDots: false,
//     wrapAround: true
//   });
  
  
  
//   //Carousel withn gradient colors
  
//   if(document.querySelector('.products-carousel')){
//       var productsCarouselChildren = document.querySelector('.products-carousel').children[0].children[0].childNodes;
      
//       var flickityChildrenCount = productsCarouselChildren.length;
      
//       productsCarouselChildren.forEach((carouselChild, i) => {
//           carouselChild.classList.remove('is-selected');
//       })
      
//       var selectedProductIndex;
      
//       flktyProducts.on( 'select', function() {
//           productsCarouselChildren.forEach((carouselChild, i) => {
//               carouselChild.classList.remove('is-selected');
//               carouselChild.classList.remove('init-active');
//           })
      
//           selectedProductIndex = flktyProducts.selectedIndex
      
//           var selectedIndexes = [];
//           var unselectedIndexes = [];
      
//           var selectedAdder = 0;
//           var unselectedAdder = 0;
      
//           productsCarouselChildren.forEach((carouselChild, i) => {
//               if(i<4){
      
//                   if(selectedProductIndex + i < flickityChildrenCount){
//                       selectedIndexes.push(selectedProductIndex + i);
//                   }else{
//                       selectedIndexes.push(selectedAdder);
//                       selectedAdder+=1;
//                   }
//               }
      
//           })
      
//           productsCarouselChildren.forEach((el, i) => {
//               if(selectedIndexes.indexOf(i) === -1) {
//                   unselectedIndexes.push(i);
//               }
//           })
      
      
//           selectedIndexes.forEach((index, i) => {
//               productsCarouselChildren[index].classList.remove(productsCarouselChildren[index].classList[1])
//               productsCarouselChildren[index].classList.add('item-active-'+(i+1))
//           })
      
//           unselectedIndexes.forEach((index, i) => {
//               productsCarouselChildren[index].classList.remove(productsCarouselChildren[index].classList[1])
//           })
      
//       })
//   }
  
  
//   //Trending products carousel
  
//   var trendingProductsCarousel = document.querySelector('.trending-products-carousel');
//   var flktyTrendingProducts = new Flickity( trendingProductsCarousel, {
//     // options
//     cellAlign: 'left',
//     contain: true,
//     wrapAround: true
//   });
  
//   var fzAnimateEl = document.querySelectorAll('.fz-animate');
  
  
//   var fzAnimateElArray = [];
  
  
//   var fzBglaxEl = document.querySelectorAll('.fz-bglax');
  
//   var fzBglaxElArray = [];
  
  
//   fzBglaxEl.forEach((el) => {
//     var viewportOffset = el.getBoundingClientRect();
//     var top = viewportOffset.y;
//     var left = viewportOffset.x;
//     var height = viewportOffset.height;
//     var speed = el.getAttribute('bglax-speed');
  
//     fzBglaxElArray.push({
//       el,
//       top,
//       height,
//       speed
//     })
  
//   })
  
//   fzAnimateEl.forEach((el) => {
//       var viewportOffset = el.getBoundingClientRect();
//       var top = viewportOffset.y;
//       var left = viewportOffset.x;
//       var height = viewportOffset.height;
//       var triggerOffset = el.getAttribute('fz-to');
    
//       fzAnimateElArray.push({
//         el,
//         top,
//         height,
//         triggerOffset,
//         allowActivate: true
//       })
//     })
  
  
    
  
  
//     fzAnimateFunctionsArray = [];
  
//     fzAnimateElArray.forEach((el) => {
  
//       fzAnimateFunctionsArray.push({
//           children: Array.from(el.el.children),
//           func: function(scrollTop, children){
//                   if(scrollTop >= el.top - el.triggerOffset) {
//                       children.forEach((child) => {
//                           child.classList.add('fz-active')
//                       })
//                   }                
//               }
//           }
//       )
//     })
  
//     window.onscroll = function(){
//       const scrollTop = window.scrollY;
  
//       fzAnimateFunctionsArray.forEach((func) => {
//           func.func(scrollTop, func.children);
//       })
  
//         fzBglaxElArray.forEach((fzBglaxEl) => {
//           if(scrollTop >= fzBglaxEl.top - 300 || scrollTop < (fzBglaxEl.top + fzBglaxEl.height) + 300 ) {
//               fzBglaxEl.el.style.transform = 'translate3d(0, '+((scrollTop - fzBglaxEl.top)*fzBglaxEl.speed)+'px, 0)';
//           }
//         })
  
//     }
  
  
  