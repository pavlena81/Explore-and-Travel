
function btnUpToTop() {
    const myButton = document.getElementById('myBtn')
console.log(myButton);

     window.onscroll = function () {
  scrollFunction();
     }
    
    
    function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = 'block';
  }      
  else {
    myButton.style.display = 'none';
  }
}
    myButton.addEventListener('click', topFunction)
    
}

 btnUpToTop();

 function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
