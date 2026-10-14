document.addEventListener("DOMContentLoaded", () => {
    const introView = document.getElementById("intro-view");
    if (!introView) return;

    const slides = introView.querySelectorAll(".carousel-slide");
    const dots = introView.querySelectorAll(".dot");
    const prevBtn = document.getElementById("prevSlide");
    const nextBtn = document.getElementById("nextSlide");
    const enterBtn = document.getElementById("enter-btn");
    const loaderBar = document.getElementById("loader-bar");

    // Cada página (inicio / cartas) tiene su propia intro y se muestra una vez por sesión
    const INTRO_KEY = "introSeen-" + (loaderBar ? "cartas" : "index");

    if (sessionStorage.getItem(INTRO_KEY) === "1") {
        introView.style.display = "none";
        setTimeout(() => document.dispatchEvent(new CustomEvent("intro:done")), 0);
        return;
    }

    let currentSlide = 0;
    let slideInterval;
    let finished = false;

    // --- Carrusel ---
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (dots[i]) dots[i].classList.remove("active");
        });
        currentSlide = (index + slides.length) % slides.length;
        if (slides[currentSlide]) slides[currentSlide].classList.add("active");
        if (dots[currentSlide]) dots[currentSlide].classList.add("active");
    }

    function nextSlide() { showSlide(currentSlide + 1); }
    function prevSlide() { showSlide(currentSlide - 1); }

    function startAutoSlide() {
        if (slides.length < 2) return;
        slideInterval = setInterval(nextSlide, 4500);
    }

    function stopAutoSlide() { clearInterval(slideInterval); }

    if (nextBtn) nextBtn.addEventListener("click", (e) => { e.stopPropagation(); stopAutoSlide(); nextSlide(); startAutoSlide(); });
    if (prevBtn) prevBtn.addEventListener("click", (e) => { e.stopPropagation(); stopAutoSlide(); prevSlide(); startAutoSlide(); });
    dots.forEach((dot, i) => {
        dot.addEventListener("click", (e) => { e.stopPropagation(); stopAutoSlide(); showSlide(i); startAutoSlide(); });
    });

    startAutoSlide();

    // --- Cierre de la intro ---
    function finishIntro() {
        if (finished) return;
        finished = true;
        sessionStorage.setItem(INTRO_KEY, "1");
        stopAutoSlide();
        introView.classList.add("fade-out");
        setTimeout(() => {
            introView.style.display = "none";
            document.dispatchEvent(new CustomEvent("intro:done"));
        }, 800);
    }

    if (enterBtn) {
        // Modo botón: espera la acción del usuario
        enterBtn.addEventListener("click", (e) => { e.stopPropagation(); finishIntro(); });
    } else if (loaderBar) {
        // Modo auto: barra de progreso; se puede saltar tocando la pantalla
        const duration = 4800;
        loaderBar.style.transition = `width ${duration}ms linear`;
        requestAnimationFrame(() => { loaderBar.style.width = "100%"; });
        const autoTimer = setTimeout(finishIntro, duration + 300);
        introView.addEventListener("click", () => { clearTimeout(autoTimer); finishIntro(); });
    } else {
        // Respaldo: cierre automático
        setTimeout(finishIntro, 5000);
    }
});
