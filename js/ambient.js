document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("ambient-canvas");
    if (!canvas) return;

    // Respeta la preferencia de movimiento reducido
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationId;
    let running = false;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createParticles();
    }

    function createParticles() {
        particles = [];
        const count = Math.max(40, Math.floor((canvas.width * canvas.height) / 18000));
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 0.9 + 0.4,
                alpha: Math.random() * 0.4 + 0.1,
                twinkle: Math.random() * 0.015 + 0.003,
                phase: Math.random() * Math.PI * 2,
                vy: Math.random() * 0.15 + 0.03,
                drift: Math.random() * 0.2 - 0.1
            });
        }
    }

    function animate() {
        if (running) return;
        running = true;

        const step = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.y -= p.vy;
                p.x += p.drift;
                p.phase += p.twinkle;

                if (p.y < -5) p.y = canvas.height + 5;
                if (p.x < -5) p.x = canvas.width + 5;
                if (p.x > canvas.width + 5) p.x = -5;

                const flicker = 0.6 + Math.sin(p.phase) * 0.4;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(200, 220, 245, ${Math.max(0, p.alpha * flicker)})`;
                ctx.fill();
            });

            animationId = requestAnimationFrame(step);
        };

        step();
    }

    function stop() {
        running = false;
        cancelAnimationFrame(animationId);
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animate();

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            stop();
        } else {
            animate();
        }
    });
});
