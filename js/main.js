
// const text = document.querySelector('.nombrefoot')
// const strText = text.textContent;
// const splitText = strText.split("");
// text.textContent = "";

// for(let i = 0; i < splitText.length; i++) {
//     text.innerHTML += "<span>" + splitText[i] + "</span>";
// }


// let char = 0;
// let timer = setInterval(onTick, 50);

// function onTick(){
//     const span = text.querySelectorAll('span')[char];
//     span.classList.add('rash');
//     char++
//     if(char === splitText.length){
//         complete();
//         return;
//     }
// }






// function complete(){
//     clearInterval(timer);
//     timer = null;
// }












var nav = document.querySelector('nav'); 

window.addEventListener('scroll', function(event) { 
    event.preventDefault();

    if (window.scrollY <= 260) { 
        nav.style.backgroundColor = '#000'; 
        
    } else {
        nav.style.backgroundColor = 'purple';
        
       
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



