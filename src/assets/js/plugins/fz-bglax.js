var fzBgLaxSetPositionArray = [];
var fzTopBglaxSetPosition;

(function(){
    var fzBglaxEl = document.querySelectorAll('.fz-bglax');
    var fzBglaxElArray = [];
    var testArray = [];

    fzBglaxEl.forEach((el) => {
        var viewportOffset = el.getBoundingClientRect();
        var top = viewportOffset.y;
        var left = viewportOffset.x;
        var height = viewportOffset.height;
        var speed = el.getAttribute('bglax-speed');
      
        fzBglaxElArray.push({
          el,
          top,
          height,
          speed
        })
      })

      fzTopBglaxSetPosition = function (){
        if(fzBglaxElArray.length > 0){
            fzBglaxElArray[0].el.style.transform = 'translate3d(0, '+150+'px, 0)';
          }
      }

      /* fzTopBglaxSetPosition(); */
      
      document.body.classList.add('js-loaded');  

    var fzBgLaxFuncArray = [];
    
    fzBglaxElArray.forEach((fzBglaxEl, i) => {
    
        function fzBglaxFunc(){
                
                var scrollTop = window.scrollY;

                if(scrollTop >= fzBglaxEl.top - 300 && scrollTop < (fzBglaxEl.top + fzBglaxEl.height) + 300 ) {

                    function animate(){
                        fzBglaxEl.el.style.transform = 'translate3d(0, '+(Math.round((scrollTop - fzBglaxEl.top)*fzBglaxEl.speed))+'px, 0)';
                        fzBglaxEl.el.style.webkitTransform = 'translate3d(0, '+(Math.round((scrollTop - fzBglaxEl.top)*fzBglaxEl.speed))+'px, 0)';
                        fzBglaxEl.el.style.mozTransform = 'translate3d(0, '+(Math.round((scrollTop - fzBglaxEl.top)*fzBglaxEl.speed))+'px, 0)';
                        fzBglaxEl.el.style.msTransform = 'translate3d(0, '+(Math.round((scrollTop - fzBglaxEl.top)*fzBglaxEl.speed))+'px, 0)';
                        fzBglaxEl.el.style.oTransform = 'translate3d(0, '+(Math.round((scrollTop - fzBglaxEl.top)*fzBglaxEl.speed))+'px, 0)';
                    }
                    requestAnimationFrame(animate)
                }
        }
        
        fzBgLaxFuncArray.push(fzBglaxFunc)
      
        window.addEventListener('scroll', fzBgLaxFuncArray[i]);
        
        fzBgLaxSetPositionArray.push(fzBglaxFunc);
    })

})();


