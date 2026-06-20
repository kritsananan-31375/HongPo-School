function revealOnScroll() {
    // ดึงคลาส .reveal ทุกตัวบนหน้าเว็บมาคำนวณการแสดงผล
    const elements = document.querySelectorAll(".reveal");

    elements.forEach(el => {
        const windowHeight = window.innerHeight;
        const top = el.getBoundingClientRect().top;

        // ถ้าองค์ประกอบเลื่อนเข้ามาในระยะจอภาพ ให้แสดงผลลอยขึ้นมา
        if (top < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

// เปิดระบบดักจับการเลื่อนหน้าจอ (Scroll)
window.addEventListener("scroll", revealOnScroll);

// สั่งทำงาน 1 ครั้งแรกทันทีที่เปิดหน้าเว็บ เพื่อเปิดเอฟเฟกต์ส่วนบนสุดของจอ
revealOnScroll();