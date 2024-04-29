
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

const titles = document.querySelectorAll('.footer_title');

titles.forEach(title => {
    title.addEventListener('click', () => {
        const list = title.nextElementSibling;
        list.classList.toggle('active');
    });
});

// data modal 

//  (() => {
//     const refs = {
//         openMenuBtn: document.querySelector(".data-modal3-open"),
//         closeMenuBtn: document.querySelector(".data-modal3-close"), menu: document.querySelector(".data-modal3"),
//         body: document.querySelector(".body"),
//     }; refs.openMenuBtn.addEventListener("click", toggleMenu); refs.closeMenuBtn.addEventListener("click", toggleMenu);
//     function toggleMenu() { refs.menu.classList.toggle("is-hidden"); refs.body.classList.toggle("no-scroll"); }
// })();