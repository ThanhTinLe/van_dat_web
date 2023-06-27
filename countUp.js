

//

// Lấy tất cả các phần tử "count-up"
const countUpElements = document.querySelectorAll('.count-up');

// Khởi tạo Intersection Observer
const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
        // Kiểm tra xem phần tử có nằm trong khung nhìn không
        if (entry.isIntersecting) {
            // Bắt đầu hiệu ứng "count up"

            let valueDisplays = document.querySelectorAll(".num");
            let interval = 1000;

            valueDisplays.forEach((valueDisplay) => {
                let startValue = 0;
                let endValue = parseInt(valueDisplay.getAttribute("data-val"));
                let duration = Math.floor(interval / endValue);
                let counter = setInterval(function () {
                    startValue += 1;
                    valueDisplay.textContent = startValue;
                    if (startValue == endValue) {
                        clearInterval(counter);
                    }
                }, duration);
            });

            // Ngừng theo dõi phần tử
            // observer.unobserve(entry.target);
        }
    });
});

// Theo dõi tất cả các phần tử "count-up"
countUpElements.forEach(function (element) {
    observer.observe(element);
});


