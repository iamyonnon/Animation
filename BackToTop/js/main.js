var myButton = document.getElementById('myBtn');
window.onscroll = function() {
    scrollFunction();
}
function scrollFunction() {
    if(document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        myButton.style.display = 'block';
    }
    else {
        myButton.style.display = 'none';
    }
}

function clickToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}