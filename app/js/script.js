const hamburger = document.querySelector('#hamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click',function(){
    //Close
    if(header.classList.contains('open')){
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
    }
    //Open
    else{
        header.classList.add('open');
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
    }
});