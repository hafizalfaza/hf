(function(){
    var fzAnimateEl = document.querySelectorAll('.fz-animate');
    
    var fzAnimateElArray = [];

    fzAnimateEl.forEach((el) => {
        var viewportOffset = el.getBoundingClientRect();
        var top = viewportOffset.y;
        var left = viewportOffset.x;
        var height = viewportOffset.height;
        var triggerOffset = el.getAttribute('fz-to');
      
        fzAnimateElArray.push({
          el,
          top,
          height,
          triggerOffset,
          allowActivate: true
        })
      })

    var fzAnimateFuncArray = [];
    
      fzAnimateElArray.forEach((el, i) => {
    
        var children = Array.from(el.el.children);
    
        var fzAnimateFunc = function (){
                
                var scrollTop = window.scrollY;
                if(scrollTop >= el.top - el.triggerOffset &&  el.allowActivate) {
                      var children = Array.from(el.el.children);
                    children.forEach((child) => {
                        child.classList.add('fz-active')
                    })
                    el.allowActivate = false;
                }
            }
        
        fzAnimateFuncArray.push(fzAnimateFunc)
      
        window.addEventListener('scroll', fzAnimateFuncArray[i]);
    })
})();


