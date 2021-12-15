

var nav = document.querySelector('nav'); 

window.addEventListener('scroll', function(event) { 
    event.preventDefault();

    if (window.scrollY <= 260) { 
        nav.style.backgroundColor = 'pink'; 
        
        
    } else {
        nav.style.backgroundColor = '#000';
        
       
    }

});














document.addEventListener("click",function (e){
  if(e.target.classList.contains("gallery-item")){
      const src = e.target.getAttribute("src");
      document.querySelector(".modal-img").src = src;
      const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
      myModal.show();
  }
})



