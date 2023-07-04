const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
firstImg2 = carousel.querySelectorAll(".image-hover")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

var s = 0;
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    if(carousel.scrollLeft == scrollWidth ){
       carousel.scrollLeft = 0;
    }

}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + firstImg.clientWidth; 
        
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); 
    });
});

const autoSlide = () => {
    
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
    

    positionDiff = Math.abs(positionDiff); 
    let firstImgWidth = firstImg.clientWidth + firstImg.clientWidth ;

       
    
   
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) {
        return carousel.scrollLeft += positionDiff > firstImgWidth / 100 ? valDifference : -positionDiff;
    }
    
    carousel.scrollLeft -= positionDiff > firstImgWidth / 100 ? valDifference : -positionDiff;
}




const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);







$(document).ready(function(){
    $("*").mousedown(function(){
        $(".image").addClass("h-img");
        $(".container").addClass("h-container");
    });
  });


  

  $(document).ready(function(){
    
    $("*").mouseup(function(){
        $(".image").removeClass("h-img");
        $(".container").removeClass("h-container");
        });
  });


$(document).ready(function(){
    $(".left").mouseenter(function(){
        $(".Cursor_left").addClass("hover_Cursor");
    });
  });

  $(document).ready(function(){
    $(".right").mouseenter(function(){
        $(".Cursor_right").addClass("hover_Cursor");
    });
  });

  $(document).ready(function(){
    $(".right").mouseleave(function(){
        $(".Cursor_right").removeClass("hover_Cursor");
    });
  });
  
  $(document).ready(function(){
    $(".left").mouseleave(function(){
        $(".Cursor_left").removeClass("hover_Cursor");
        $(".Cursor_right").removeClass("hover_Cursor");
    });
  });

const myTimeout = setTimeout(myGreeting, 1000);
function myGreeting() {

        $("#loogo").addClass("loogo1")
        const myTimeout = setTimeout(myGreeting, 2500);
function myGreeting() {

 $("#loogo").removeClass("loogo1")
 
}
 
}




$("#loogo").hover(function(){

$("#loogo").addClass("loogo1")



const myTimeout = setTimeout(myGreeting, 2500);
function myGreeting() {

 $("#loogo").removeClass("loogo1")
 
}
});



let mouseCursor = document.querySelector(".Cursor");
let mouseCursor2 = document.querySelector(".Cursor2");



window.addEventListener('mousemove',cursor);


function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';

    mouseCursor2.style.top = e.pageY + 'px';
    mouseCursor2.style.left = e.pageX + 'px';
};




$("#ar-mr-text").click(function(){
    $("#ar-mr").show();
});




$("#ar-mr").click(function(){
    $("#ar-mr").hide();
});