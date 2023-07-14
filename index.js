function scrollToTop() {
    // Sử dụng phương thức scrollTo() của window để cuộn đến vị trí x = 0, y = 0
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Thêm thuộc tính này để có hiệu ứng cuộn mượt (smooth scrolling)
    });
}


const elements = document.querySelectorAll('.scroll-animation');

function checkScroll() {
    elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition - windowHeight <= 0) {
            element.classList.add('show');
        }
    });
}

window.addEventListener('scroll', checkScroll);



document.addEventListener('DOMContentLoaded', function () {
    var smoothScrollLinks = document.getElementsByClassName('smooth-scroll');

    for (var i = 0; i < smoothScrollLinks.length; i++) {
        smoothScrollLinks[i].addEventListener('click', function (event) {
            event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ 'a'

            var targetId = this.getAttribute('href'); // Lấy giá trị của thuộc tính href
            var targetElement = document.querySelector(targetId); // Chọn phần tử muốn cuộn đến

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth' // Áp dụng hiệu ứng trượt mượt (smooth scroll)
                });
            }
        });
    }
});


//swiper

// const swiper = new Swiper('.swiper', {
//     spaceBetween: 100,
//     slidesPerView: 3,
//     loop: true,
//     speed: 7000,
//     autoplay: {
//         delay: 0,
//         disableOnInteraction: false,
//     },
//     allowTouchMove: false,
//     keyboard: false,

// });

var swiper = new Swiper(".mySwiper", {
    // Optional parameters
    // slidesPerView: 5,
    spaceBetween: 0,
    centeredSlides: true,
    speed: 1500,
    autoplay: {
        delay: 0,
    },
    loop: true,
    slidesPerView: 'auto',
    allowTouchMove: false,
    disableOnInteraction: true,
    // If we need pagination
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    // Breakpoints
    // breakpoints: {
    //   640: {
    //     slidesPerView: 2,
    //     spaceBetween: 20,
    //   },
    //   768: {
    //     slidesPerView: 4,
    //     spaceBetween: 40,
    //   },
    //   1024: {
    //     slidesPerView: 5,
    //     spaceBetween: 50,
    //   },
    // },
});