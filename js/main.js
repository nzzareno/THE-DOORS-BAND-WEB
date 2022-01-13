
    $(window).on("load", function(){
           $(".loader").fadeOut(1500);
    });

var nav = document.querySelector('nav'); 

window.addEventListener('scroll', function(event) { 
    event.preventDefault();

    if (window.scrollY <= 270) { 
        nav.style.backgroundColor = '#092009;'; 
        
        
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

document.addEventListener("click",function (e){
  if(e.target.classList.contains("gallery-ruin")){
      const src = e.target.getAttribute("src");
      document.querySelector(".modal-img").src = src;
      const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
      myModal.show();
  }
})



const submit = document.querySelector('#btn-submit'),
			form = document.querySelector('#form');

submit.addEventListener('click', (e) => {
	e.preventDefault();
	form.reset();
}, false);

