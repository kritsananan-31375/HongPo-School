const slides = [
    "images/banner1.jpeg",
    "images/banner2.jpg",
    "images/banner3.jpg"
];

let current = 0;

const img = document.getElementById("slide");
const dotsContainer = document.getElementById("dots");

// 🌟 เช็คก่อนว่าในหน้านี้มี element สไลด์รูปภาพอยู่จริงไหม (ถ้าไม่มีให้ข้ามไปทำ scroll)
if (img && dotsContainer) {

    // สร้างจุด
    slides.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click", () => showSlide(i));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    function showSlide(index) {
        current = index;
        img.style.opacity = 0;

        setTimeout(() => {
            img.src = slides[current];
            img.style.opacity = 1;
        }, 300);

        updateDots();
    }

    function updateDots() {
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === current);
        });
    }

    // กำหนดให้เรียกใช้งานสไลด์แรกสุดในการเริ่มต้น
    showSlide(0);

    // autoplay ทุกๆ 8 วินาที
    setInterval(() => {
        showSlide((current + 1) % slides.length);
    }, 8000);
}

// 🌟 ตัวแปรฟังก์ชันภายนอกสำหรับปุ่มกด ซ้าย-ขวา (ตรวจสอบเผื่อหน้าอื่นไม่มีปุ่มกด)
function nextSlide() {
    if (img) showSlide((current + 1) % slides.length);
}

function prevSlide() {
    if (img) showSlide((current - 1 + slides.length) % slides.length);
}


/* ==========================================
   EFFECT: REVEAL ON SCROLL (ทำงานได้ทุกหน้าแน่นอน)
   ========================================== */
function revealOnScroll() {
    const elements = document.querySelectorAll(".reveal");

    elements.forEach(el => {
        const windowHeight = window.innerHeight;
        const top = el.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();