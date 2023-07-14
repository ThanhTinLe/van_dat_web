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

// // Lấy tất cả các slide
// const slides = document.querySelectorAll('.highway-car');

// // Tạo một slide mới sao chép từ slide đầu tiên và thêm vào sau slide cuối cùng
// const firstSlide = slides[0].cloneNode(true);
// document.querySelector('.highway-lane').appendChild(firstSlide);

// // Khởi tạo animation cho tất cả các slide
// slides.forEach(slide => {
//     slide.style.animation = 'infinityloop 10s linear infinite';
// });

