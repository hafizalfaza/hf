window.addEventListener('scroll', function(){
    var centersContainer = document.querySelector('.centers-main-container');
    if(centersContainer){
        var centersContainerHeight = centersContainer.offsetHeight;
        const scrollTop = window.scrollY;
    
        var centersMapContainer = document.querySelector('.centers-map-container')
        var viewportOffset = centersMapContainer.getBoundingClientRect();
        var top = viewportOffset.y;
        var left = viewportOffset.x;
        var height = viewportOffset.height;
    
        var fixedOnTop = false;

        if(scrollTop + centersMapContainer.offsetHeight <= centersContainerHeight){
            if(!fixedOnTop){

                function animate(){
                    centersMapContainer.style.transform = 'translate3d(0, 0, 0)';
                }

                requestAnimationFrame(animate)
                
                fixedOnTop = true;
            }
            
        }else{

            function animate(){
                centersMapContainer.style.transform = 'translate3d(0, '+ (-(scrollTop - (centersContainerHeight-centersMapContainer.offsetHeight)))+'px, 0)';
                centersMapContainer.style.webkitTransform = 'translate3d(0, '+ (-(scrollTop - (centersContainerHeight-centersMapContainer.offsetHeight)))+'px, 0)';
                centersMapContainer.style.mozTransform = 'translate3d(0, '+ (-(scrollTop - (centersContainerHeight-centersMapContainer.offsetHeight)))+'px, 0)';
                centersMapContainer.style.msTransform = 'translate3d(0, '+ (-(scrollTop - (centersContainerHeight-centersMapContainer.offsetHeight)))+'px, 0)';
                centersMapContainer.style.oTransform = 'translate3d(0, '+ (-(scrollTop - (centersContainerHeight-centersMapContainer.offsetHeight)))+'px, 0)';
            }

            requestAnimationFrame(animate);
            
            fixedOnTop = false;
        }
    }
    
    
});