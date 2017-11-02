var fzSprinklaxSetPositionArray = [];

(function(){
    var fzSprinklaxEl = document.querySelectorAll('.fz-sprinklax');
    
    var fzSprinklaxElArray = [];
    
    fzSprinklaxEl.forEach((el) => {
        var viewportOffset = el.getBoundingClientRect();
        var top = viewportOffset.y;
        var left = viewportOffset.x;
        var height = viewportOffset.height;
        var speed = el.getAttribute('sprinklax-speed');
    
        fzSprinklaxElArray.push({
        el,
        top,
        height,
        speed
        })
    })
 
    var fzSprinklaxFuncArray = [];
    
    fzSprinklaxElArray.forEach((fzSprinklaxEl, i) => {
    
        function fzSprinklaxFunc(){
                
                var scrollTop = window.scrollY;

                function animate(){
                    fzSprinklaxEl.el.style.transform = 'translate3d(0, '+((scrollTop)*fzSprinklaxEl.speed*(-1))+'px, 0)';
                }
                
                requestAnimationFrame(animate)
        }
        
        fzSprinklaxFuncArray.push(fzSprinklaxFunc)
      
        window.addEventListener('scroll', fzSprinklaxFuncArray[i]);
        
        fzSprinklaxSetPositionArray.push(fzSprinklaxFunc);
    })

})();


