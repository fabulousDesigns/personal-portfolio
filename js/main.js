$('#user-info #testimonials .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        560: {
            items: 2
        }
    }
});

//hire button
let BTN = document.getElementById("hireBtn");

BTN.addEventListener("click", () => {
    alert("Get in Touch To hire me šā\nā Email :  hazardmburu10@gmail.com\n š Telephone :  +254110026199");
});
//footer hire btn
let btn = document.getElementById("Btn");
btn.addEventListener("click", () => {
    alert("Get in Touch To hire me šā\nā Email :  hazardmburu10@gmail.com\n š Telephone :  +254110026199");
})