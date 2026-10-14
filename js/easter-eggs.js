document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".navbar-logo");
    const jarBtn = document.getElementById("wish-jar-btn");
    const starBtn = document.getElementById("starry-night-btn");
    const modal = document.getElementById("secret-modal");
    const modalContent = document.getElementById("modal-content");
    const closeModalBtn = document.getElementById("close-modal-btn");
    const canvas = document.getElementById("starry-canvas");

    function showSecretModal(title, text) {
        modalContent.innerHTML = `
            <h3 class="modal-title">${title}</h3>
            <p class="modal-body">${text}</p>
        `;
        modal.classList.remove("hidden");
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", () => {
            modal.classList.add("hidden");
        });
    }
    // EASTER EGG 1: MANTENER PRESIONADO EL LOGO
    let pressTimer;

    if (logo) {
        logo.style.cursor = "pointer";

        const startPress = () => {
            logo.style.transition = "transform 2.5s ease, color 2.5s ease";
            logo.style.color = "#FFFFFF";
            logo.style.transform = "scale(1.05)";
            
            pressTimer = setTimeout(() => {
                showSecretModal(
                    "✦ Nota Secreta Descubierta ✦",
                    "¡Encontraste el primer secreto! Si estás leyendo esto es porque mantuviste la curiosidad intacta. Gracias por ser el motivo de cada detalle de esta página. ❤️"
                );
                resetLogo();
            }, 2500);
        };

        const resetLogo = () => {
            clearTimeout(pressTimer);
            logo.style.transition = "all 0.3s ease";
            logo.style.color = "";
            logo.style.transform = "";
        };

        logo.addEventListener("mousedown", startPress);
        logo.addEventListener("mouseup", resetLogo);
        logo.addEventListener("mouseleave", resetLogo);

        logo.addEventListener("touchstart", (e) => {
            e.preventDefault();
            startPress();
        });
        logo.addEventListener("touchend", resetLogo);
    }

    // EASTER EGG 2: EL FRASCO DE DESEOS
    const deseosSecretos = [
        "Deseo que nunca te falten razones para sonreír.",
        "Deseo seguir compartiendo tardes infinitas a tu lado.",
        "Deseo ser siempre tu lugar seguro y tu refugio.",
        "Deseo que todos tus sueños más grandes se hagan realidad."
    ];

    if (jarBtn) {
        jarBtn.addEventListener("click", () => {
            const deseo = deseosSecretos[Math.floor(Math.random() * deseosSecretos.length)];
            
            showSecretModal(
                "✨ Frasco de Deseos Oculto",
                `Has abierto el frasco... Un deseo secreto ha salido para ti:<br><br><em>"${deseo}"</em>`
            );
        });
    }
    // EASTER EGG 3: MODO "NOCHE ESTRELLADA"
    let isStarryActive = false;
    let ctx, animationId, stars = [];

    function initCanvas() {
        ctx = canvas.getContext("2d");
        resizeCanvas();
        createStars();
    }

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createStars() {
        stars = [];
        const count = Math.floor((canvas.width * canvas.height) / 8000);
        for (let i = 0; i < count; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5 + 0.5,
                alpha: Math.random(),
                speed: Math.random() * 0.02 + 0.005
            });
        }
    }

    function animateStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        stars.forEach(star => {
            star.alpha += star.speed;
            if (star.alpha > 1 || star.alpha < 0) star.speed = -star.speed;

            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(163, 193, 225, ${Math.abs(star.alpha)})`;
            ctx.shadowBlur = 8;
            ctx.shadowColor = "#A3C1E1";
            ctx.fill();
        });

        animationId = requestAnimationFrame(animateStars);
    }

    if (starBtn && canvas) {
        initCanvas();
        window.addEventListener("resize", resizeCanvas);

        starBtn.addEventListener("click", () => {
            isStarryActive = !isStarryActive;

            if (isStarryActive) {
                canvas.classList.add("active");
                starBtn.style.borderColor = "#A3C1E1";
                starBtn.style.color = "#A3C1E1";
                starBtn.style.boxShadow = "0 0 20px #A3C1E1";
                animateStars();
            } else {
                canvas.classList.remove("active");
                starBtn.style.borderColor = "";
                starBtn.style.color = "";
                starBtn.style.boxShadow = "";
                cancelAnimationFrame(animationId);
            }
        });
    }

    // ================= NUEVOS EASTER EGGS =================

    // EASTER EGG 5: DOBLE CLIC EN EL MENSAJE DEL DÍA
    const dailyCard = document.querySelector(".daily-card");
    const razonesSecretas = [
        "Me enamora tu forma de reírte de tus propios chistes.",
        "Amo que hables de lo que te apasiona con esa chispa en los ojos.",
        "Me pierde tu manera de cuidar a los demás sin que nadie lo note.",
        "Me encanta cómo cambia tu voz cuando algo te emociona de verdad.",
        "Amo esos silencios contigo que dicen más que mil palabras.",
        "Me gusta que seas mi persona favorita a cualquier hora del día."
    ];

    if (dailyCard) {
        const dailyMessage = document.getElementById("dailyMessage");
        dailyCard.addEventListener("dblclick", () => {
            if (!dailyMessage) return;
            const razon = razonesSecretas[Math.floor(Math.random() * razonesSecretas.length)];
            dailyMessage.textContent = `"${razon}"`;
            dailyMessage.classList.remove("secret-glow");
            void dailyMessage.offsetWidth;
            dailyMessage.classList.add("secret-glow");
        });
    }
});
