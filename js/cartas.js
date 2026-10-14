document.addEventListener("DOMContentLoaded", () => {
    // Banco de Cartas (Puedes agregar, quitar o editar las que quieras)
    const bancoCartas = [
        {
            id: "carta-1",
            titulo: "Para cuando me extrañes",
            subtitulo: "Abre esta carta cuando quieras sentirme cerca de ti.",
            extracto: "Un recordatorio de que la distancia no importa cuando el pensamiento te lleva a mi lado...",
            contenido: [
                "Sé que a veces los días se ponen pesados o el tiempo parece avanzar más lento, y es justo en esos momentos cuando más quisiera estar abrazándote.",
                "Quiero que sepas que, sin importar en qué esté o qué tan ocupado me encuentre, una parte de mi mente y de mi corazón siempre te está buscando.",
                "Cierra los ojos un segundo y recuerda cada risa, cada charla interminable y cada mirada. Estoy contigo, siempre."
            ],
            fecha: "Guardada para siempre"
        },
        {
            id: "carta-2",
            titulo: "El día que nos conocimos",
            subtitulo: "Lo que nunca te dije sobre el instante en que cruzamos miradas.",
            extracto: "Hay momentos en la vida que cambian el rumbo de todo sin previo aviso...",
            contenido: [
                "Aquel día comenzó como cualquier otro, completamente normal, sin imaginar que mi vida estaba a punto de dar el giro más bonito de todos.",
                "Desde el primer instante en que te vi, hubo algo en tu forma de ser y de sonreír que se quedó grabado en mi cabeza de inmediato.",
                "El tiempo ha pasado, pero sigo guardando esa primera impresión como uno de los tesoros más grandes que la vida me pudo regalar."
            ],
            fecha: "El inicio de todo"
        },
        {
            id: "carta-3",
            titulo: "Promesas para el futuro",
            subtitulo: "Lo que sueño y construyo cada día pensando en los dos.",
            extracto: "Un vistazo a los capítulos que aún nos faltan por escribir juntos...",
            contenido: [
                "No sé exactamente qué sorpresas nos tenga preparados el mañana, pero de lo que sí estoy completamente seguro es de lo que quiero construir a tu lado.",
                "Quiero ser el refugio al que siempre quieras regresar, el cómplice de tus locuras y el apoyo incondicional en cada meta que te propongas.",
                "Gracias por dejarme caminar contigo y por convertir cada día ordinario en una verdadera aventura."
            ],
            fecha: "Hacia adelante"
        }
    ];

    const lettersGrid = document.getElementById("lettersGrid");
    const lettersIndex = document.getElementById("letters-index");
    const letterReader = document.getElementById("letter-reader");
    const backToIndexBtn = document.getElementById("back-to-index-btn");

    const readerTitle = document.getElementById("reader-title");
    const readerSubtitle = document.getElementById("reader-subtitle");
    const readerContent = document.getElementById("reader-content");
    const readerDate = document.getElementById("reader-date");

    // Renderizar tarjetas en el buzón
    if (lettersGrid) {
        lettersGrid.innerHTML = "";
        bancoCartas.forEach(carta => {
            const card = document.createElement("div");
            card.className = "letter-card";
            card.innerHTML = `
                <div class="letter-card-icon"><i class="fa-solid fa-envelope"></i></div>
                <h3>${carta.titulo}</h3>
                <p>"${carta.extracto}"</p>
                <span class="letter-card-action">Abrir carta ✨</span>
            `;

            card.addEventListener("click", () => {
                abrirCarta(carta);
            });

            lettersGrid.appendChild(card);
        });
    }

    function abrirCarta(carta) {
        readerTitle.textContent = carta.titulo;
        readerSubtitle.textContent = carta.subtitulo;
        readerDate.textContent = carta.fecha;

        readerContent.innerHTML = "";
        carta.contenido.forEach(parrafo => {
            const p = document.createElement("p");
            p.textContent = parrafo;
            readerContent.appendChild(p);
        });

        lettersIndex.classList.add("hidden");
        letterReader.classList.remove("hidden");
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (backToIndexBtn) {
        backToIndexBtn.addEventListener("click", () => {
            letterReader.classList.add("hidden");
            lettersIndex.classList.remove("hidden");
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // EASTER EGG: 5 clics en el sello ✦ del pergamino revelan una posdata secreta
    const seal = document.querySelector(".pergamino-seal");
    const modal = document.getElementById("secret-modal");
    const modalContent = document.getElementById("modal-content");
    const closeModalBtn = document.getElementById("close-modal-btn");

    const posdatasSecretas = [
        "Si llegaste hasta aquí tocando el sello... es porque eres igual de curiosa que yo. Te quiero.",
        "Guardé este sobre solo para verte sonreír cuando lo descubrieras.",
        "Hay cartas que nunca termino de escribir, porque siempre tengo algo más que decirte.",
        "Ninguna de estas cartas dice todo lo que siento. Es imposible caber en palabras."
    ];

    let sealClicks = 0;

    function mostrarPosdata() {
        if (!modal || !modalContent) return;
        const posdata = posdatasSecretas[Math.floor(Math.random() * posdatasSecretas.length)];
        modalContent.innerHTML = `
            <h3 class="modal-title">✦ Posdata Secreta ✦</h3>
            <p class="modal-body"><em>"${posdata}"</em></p>
        `;
        modal.classList.remove("hidden");
    }

    // EASTER EGG: CÓDIGO SECRETO POR TECLADO (escribe "amor")
    const codigoSecreto = "amor";
    let bufferTeclas = "";

    document.addEventListener("keydown", (e) => {
        if (e.key.length !== 1) return;
        bufferTeclas = (bufferTeclas + e.key.toLowerCase()).slice(-codigoSecreto.length);
        if (bufferTeclas === codigoSecreto) {
            bufferTeclas = "";
            if (!modal || !modalContent) return;
            modalContent.innerHTML = `
                <h3 class="modal-title">💙 Código Secreto Aceptado</h3>
                <p class="modal-body">Escribiste la palabra que lo resume todo: <em>AMOR</em>.<br><br>Cada carta de este buzón nació justo de ahí.</p>
            `;
            modal.classList.remove("hidden");
        }
    });

    if (seal) {
        seal.addEventListener("click", () => {
            sealClicks++;
            if (sealClicks >= 5) {
                sealClicks = 0;
                mostrarPosdata();
            } else {
                seal.style.transform = "scale(1.35)";
                setTimeout(() => { seal.style.transform = ""; }, 180);
            }
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", () => modal.classList.add("hidden"));
    }
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) modal.classList.add("hidden");
        });
    }

    // EASTER EGG: corazón tras 20s de inactividad que te lleva a "Te has quedado varada"
    const idleEgg = document.getElementById("idle-egg");
    const strandedScreen = document.getElementById("stranded-screen");
    const strandedInput = document.getElementById("stranded-input");
    const fraseSalida = "TE AMO MI VIDA";
    const IDLE_MS = 20000;

    function cerrarVarada() {
        if (strandedScreen) strandedScreen.classList.add("hidden");
        if (idleEgg) idleEgg.classList.remove("show");
    }

    // El corazón aparece y crece durante los 20s hasta quedar visible y dorado
    if (idleEgg) idleEgg.classList.add("show");

    if (idleEgg) {
        idleEgg.addEventListener("click", (e) => {
            e.stopPropagation();
            if (!strandedScreen) return;
            strandedScreen.classList.remove("hidden");
            if (strandedInput) {
                strandedInput.value = "";
                setTimeout(() => strandedInput.focus(), 100);
            }
        });
    }

    if (strandedInput) {
        strandedInput.addEventListener("input", () => {
            const valor = strandedInput.value.trim().toUpperCase();
            if (valor === fraseSalida) cerrarVarada();
        });
    }

    // EASTER EGG: código Konami (↑ ↑ ↓ ↓ ← → ← → B A)
    const secuenciaKonami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    let indiceKonami = 0;

    function lluviaDeCorazones() {
        const simbolos = ["💛", "💙", "💜", "💖", "✨"];
        for (let i = 0; i < 20; i++) {
            const corazon = document.createElement("span");
            corazon.className = "konami-heart";
            corazon.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];
            corazon.style.left = Math.random() * 100 + "vw";
            corazon.style.animationDuration = (Math.random() * 1.5 + 1.8) + "s";
            corazon.style.fontSize = (Math.random() * 18 + 14) + "px";
            document.body.appendChild(corazon);
            setTimeout(() => corazon.remove(), 3800);
        }
    }

    document.addEventListener("keydown", (e) => {
        const tecla = e.key.length === 1 ? e.key.toLowerCase() : e.key;
        if (tecla === secuenciaKonami[indiceKonami]) {
            indiceKonami++;
            if (indiceKonami === secuenciaKonami.length) {
                indiceKonami = 0;
                lluviaDeCorazones();
                if (!modal || !modalContent) return;
                modalContent.innerHTML = `
                    <h3 class="modal-title">🕹️ Código Clásico Activado</h3>
                    <p class="modal-body">Descubriste el cheat code retro de esta página.<br><br>Has subido tu nivel de amor a <em>∞</em>. 💛</p>
                `;
                modal.classList.remove("hidden");
            }
        } else {
            indiceKonami = 0;
        }
    });
});