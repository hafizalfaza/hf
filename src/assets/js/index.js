window.onbeforeunload = function () {
  document.body.style.display = 'none';
  window.scrollTo(0, 0);
}

var testimonialCarousel = document.querySelector('.testimonial-carousel');

if(testimonialCarousel){
  var flkty = new Flickity( testimonialCarousel, {
    // options
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    freeScroll: true,
    wrapAround: true
  });
}


let isMenuActive = false;
let isTransitioning = false;

var scrollTop;




function toggleMenu(){
  
  if(!isTransitioning){
    if(isMenuActive){
          isTransitioning = true
          document.querySelector('.parent-container').classList.remove('transformed')
          document.querySelector('.btn-menu').classList.remove('active');
          document.querySelector('.header-menu').classList.remove('active');
          document.querySelector('.menu-container').classList.remove('active');

          document.querySelector('.links-container').classList.remove('menu-open');


          setTimeout(() => {
            document.querySelector('.parent-container').classList.remove('height-shrunk')
            isMenuActive = false;
            window.scrollTo(0, scrollTop);

            fzBgLaxSetPositionArray.forEach((func) => {
              func(scrollTop);
            })

            fzSprinklaxSetPosition(scrollTop);
          }, 500)

          setTimeout(() => {
            isTransitioning = false
          }, 1500)
      
          
        }else{
          scrollTop = window.scrollY;
          isTransitioning = true
          document.querySelector('.parent-container').classList.add('height-shrunk')
          document.querySelector('.parent-container').classList.add('transformed')
          document.querySelector('.btn-menu').classList.add('active');
          document.querySelector('.header-menu').classList.add('active');
          document.querySelector('.menu-container').classList.add('active');


          document.querySelector('.links-container').classList.add('menu-open');

          document.querySelector('.parent-container').scrollTo(0, scrollTop);

          fzBgLaxSetPositionArray.forEach((func) => {
            func(scrollTop);
          })

          fzSprinklaxSetPositionArray.forEach((func) => {
            func(scrollTop);
          })

          isMenuActive = true;

          setTimeout(() => {
            isTransitioning = false
          }, 1500)

        }
  }
  
}


/* particlesJS.load('particles-js', 'assets/js/particlesjs-config.json', function() {
  
}); */