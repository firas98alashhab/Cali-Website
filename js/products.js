const textC = document.getElementsByClassName("text-cali");
const nums = document.querySelectorAll(".nums .num");
const all_2 = document.querySelectorAll(".all-2");
const PRODUCTS = document.getElementById("avs-products");
const logo = document.getElementById("loogo");





const myTimeout = setTimeout(myGreeting, 1000);
function myGreeting() {

        $("#loogo").addClass("loogo1")
        const myTimeout = setTimeout(myGreeting, 2500);
        function myGreeting() {

                $("#loogo").removeClass("loogo1")

        }

}




$("#loogo").hover(function () {

        $("#loogo").addClass("loogo1")



        const myTimeout = setTimeout(myGreeting, 2500);
        function myGreeting() {

                $("#loogo").removeClass("loogo1")

        }
});




$(document).ready(function () {
        $(".an-vr").hover(function () {
                $(".an-vr-t").css("margin-left", "1px");
        }, function () {
                $(".an-vr-t").css("margin-left", "110%");
        });
});






let started = false;








function startCount(el) {
        let goal = el.dataset.goal;
        let count = setInterval(() => {
                el.textContent++;
                if (el.textContent == goal)
                        clearInterval(count);
        }, 1500 / goal);
}





const nav = document.querySelector('.nav');
let isScrolled = false;

window.addEventListener('scroll', () => {
    if (window.scrollY > 0 && !isScrolled) {
        nav.classList.add('nav2');
        isScrolled = true;
    } else if (window.scrollY === 0 && isScrolled) {
        nav.classList.remove('nav2');
        isScrolled = false;
    }
});





$(".image-1").click(function () {
        $(".container-1").removeClass("h");
        $(".container-2").addClass("h");
        $(".container-4").addClass("h");
        $(".container-3").addClass("h");
        // $(".image-2").removeClass("h");
        // $(".image-1").addClass("h");

});


$(".image-2").click(function () {
        $(".container-3").removeClass("h");
        $(".container-1").addClass("h");
        $(".container-2").addClass("h");
        $(".container-4").addClass("h");
        // $(".image-3").removeClass("h");
        // $(".image-2").addClass("h");

});

$(".image-3").click(function () {
        $(".container-2").removeClass("h");
        $(".container-3").addClass("h");
        $(".container-4").addClass("h");
        $(".container-1").addClass("h");
        // $(".image-4").removeClass("h");
        // $(".image-3").addClass("h");

});

$(".image-4").click(function () {
        $(".container-4").removeClass("h");
        $(".container-2").addClass("h");
        $(".container-3").addClass("h");
        $(".container-1").addClass("h");
        // $(".image-1").removeClass("h");
        // $(".image-4").addClass("h");

});


let hover = false;

$(".all-2").hover(function () {
        hover = true;

        if (hover = true) {
                $(".all").addClass("animat2");
                hover = false;
        }
        else {
                $(".all").removeClass("animat2");
        }


});




const carousel = document.querySelector(".carousel"),
        arrowIcons = document.querySelectorAll(".next-client");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
        let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
        // arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
        if (carousel.scrollLeft == scrollWidth) {
                carousel.scrollLeft = 0;
        }
}

arrowIcons.forEach(icon => {
        icon.addEventListener("click", () => {
                let firstImgWidth = firstImg.clientWidth + 14;
                carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
                // carousel.scrollLeft = 0;
                setTimeout(() => showHideIcons(), 60);
        });
});

const autoSlide = () => {
        if (carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

        positionDiff = Math.abs(positionDiff);
        let firstImgWidth = firstImg.clientWidth + 14;

        if (carousel.scrollLeft > prevScrollLeft) {
                return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
        }
        carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {

        isDragStart = true;
        prevPageX = e.pageX || e.touches[0].pageX;
        prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
        if (!isDragStart) return;
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

        if (!isDragging) return;
        isDragging = false;
        autoSlide();
}


$(".map button").click(function () {
        $("button").removeClass("btn-activ");

        $(this).addClass("btn-activ");
});


$(".Egypt-btn").click(function () {
        $(".Saudi").fadeOut(300);
        $(".Jordan").fadeOut(300);

        $(".Egypt").fadeIn(300);

});



$(".Jordan-btn").click(function () {
        $(".Saudi").fadeOut(300);
        $(".Egypt").fadeOut(300);

        $(".Jordan").fadeIn(300);

});



$(".Saudi-btn").click(function () {
        $(".Jordan").fadeOut(300);
        $(".Egypt").fadeOut(300);

        $(".Saudi").fadeIn(300);

});





//        ---------->FIRAS LOGIC<---------
const hiddenElement = document.querySelectorAll('.hiddden');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (!entry.target.classList.contains('show')) {
                entry.target.classList.add('show');
            }
        } else {
            entry.target.classList.add('hiddden');
        }
    });
});

hiddenElement.forEach((el) => observer.observe(el));












