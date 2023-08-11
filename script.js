function classToggle() {
    const navs = document.querySelectorAll('.navbar-items')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  
  document.querySelector('.btn-logo')
    .addEventListener('click', classToggle);

   

   var slide = document.getElementById("slider")
   var btn1 = document.getElementById("dot1")
   var btn2 = document.getElementById("dot2")
   var btn3 = document.getElementById("dot3")

   btn1.onclick = function(){
    slide.style.transform = "translateX(50px)";
   }
   btn2.onclick = function(){
    slide.style.transform = "translateX(-100px)";
   }
   btn3.onclick = function(){
    slide.style.transform = "translateX(-300px)";
   }