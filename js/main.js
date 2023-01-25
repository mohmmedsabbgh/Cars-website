$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
function showNav() {
    document.getElementById("iconRes").classList.toggle("active");
    document.getElementById("navRes").classList.toggle("active");
}

