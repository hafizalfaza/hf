$(document).ready(function() {
	$('#fullpage').fullpage();
});


function onCheck(e){
    var checksArray = Array.from(e.parentElement.parentElement.children);
    checksArray.forEach((el) => {
        el.children[0].classList.remove('selected')
    })

    e.classList.add('selected')
    

    
}