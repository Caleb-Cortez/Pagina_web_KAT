<?php
$activePage = 'cartas';
$isHome = false;
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buzón de Cartas - Una Página para Ti</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Raleway:wght@300;400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/cartas.css">
    <link rel="stylesheet" href="css/easter-eggs.css">
</head>
<body class="subpage-body">
    <!-- PANTALLA DE CARGA CON CARRUSEL ROMÁNTICO -->
    <section id="intro-view">
        <div class="intro-content">
            <div class="carousel-container">
                <div class="carousel-track" id="carouselTrack">
                    <div class="carousel-slide active">
                        <div class="glow-symbol">✉️</div>
                        <p class="intro-text">"Tengo algo escrito para ti..."</p>
                    </div>
                    <div class="carousel-slide">
                        <div class="glow-symbol">💌</div>
                        <p class="intro-text">"Cada sobre guarda un pedacito de mí..."</p>
                    </div>
                    <div class="carousel-slide">
                        <div class="glow-symbol">🌙</div>
                        <p class="intro-text">"Ábrelas cuando necesites sentirme cerca..."</p>
                    </div>
                    <div class="carousel-slide">
                        <div class="glow-symbol">✒️</div>
                        <p class="intro-text">"Palabras que quise decirte mil veces..."</p>
                    </div>
                </div>

                <button class="carousel-arrow prev" id="prevSlide" aria-label="Anterior">❮</button>
                <button class="carousel-arrow next" id="nextSlide" aria-label="Siguiente">❯</button>

                <div class="carousel-dots" id="carouselDots">
                    <span class="dot active" data-slide="0"></span>
                    <span class="dot" data-slide="1"></span>
                    <span class="dot" data-slide="2"></span>
                    <span class="dot" data-slide="3"></span>
                </div>
            </div>

            <div class="loader-bar-track">
                <div id="loader-bar" class="loader-bar"></div>
            </div>
            <p class="loader-hint">Preparando tus cartas...</p>
        </div>
    </section>

    <?php include __DIR__ . '/components/navbar.php'; ?>

    <!-- CONTENEDOR PRINCIPAL DE CARTAS -->
    <main class="main-container">
        <div class="view-inner letters-section-wrapper">
            
            <!-- FASE 1: EL BUZÓN (Índice de Sobres) -->
            <div id="letters-index" class="letters-index-container">
                <div class="letters-header">
                    <span class="letters-badge">✦ Cartas para cada momento ✦</span>
                    <h2>Elige una carta según lo que sientas hoy</h2>
                    <p class="letters-subtitle">Cada sobre guarda un pedacito de lo que siento por ti.</p>
                </div>

                <!-- Grid de Sobres / Tarjetas Interactivas -->
                <div class="letters-grid" id="lettersGrid">
                    <!-- Inyectado dinámicamente por JS -->
                </div>
            </div>

            <!-- FASE 2: EL PERGAMINO (Lector de Carta) -->
            <div id="letter-reader" class="letter-reader-container hidden">
                <button id="back-to-index-btn" class="back-btn">
                    <i class="fa-solid fa-arrow-left"></i> Volver al buzón
                </button>

                <div class="pergamino-card glow-border">
                    <div class="pergamino-seal">✦</div>
                    <h3 id="reader-title" class="pergamino-title">Título de la carta</h3>
                    <p id="reader-subtitle" class="pergamino-sub">Subtítulo o dedicatoria</p>
                    
                    <div id="reader-content" class="pergamino-body">
                        <!-- Contenido completo inyectado por JS -->
                    </div>

                    <div class="pergamino-footer">
                        <span id="reader-date" class="pergamino-date">Fecha o momento especial</span>
                        <span class="pergamino-signature">Con todo mi amor 💙</span>
                    </div>
                </div>
            </div>

        </div>
    </main>

    <!-- Easter egg: corazón flotante al quedarse inactivo -->
    <div id="idle-egg" class="idle-egg" title="¿Sigues ahí?">
        <i class="fa-solid fa-heart"></i>
    </div>

    <!-- Easter egg: pantalla "Te has quedado varada" -->
    <div id="stranded-screen" class="stranded-overlay hidden">
        <div class="stranded-card">
            <div class="stranded-icon">🌙</div>
            <h3 class="stranded-title">Te has quedado varada</h3>
            <p class="stranded-desc">Detente un segundo... estás en un lugar reservado solo para ti.</p>
            <label class="stranded-label" for="stranded-input">Para salir escribe:</label>
            <input type="text" id="stranded-input" class="stranded-input" placeholder="TE AMO MI VIDA"
                   autocomplete="off" autocapitalize="characters" spellcheck="false">
            <p class="stranded-hint">TE AMO MI VIDA</p>
        </div>
    </div>

    <!-- Modal para el easter egg del sello del pergamino -->
    <div id="secret-modal" class="modal-overlay hidden">
        <div class="modal-card">
            <button id="close-modal-btn" class="modal-close">&times;</button>
            <div id="modal-content">
                <!-- Contenido dinámico -->
            </div>
        </div>
    </div>

    <!-- Script exclusivo para la lógica de las cartas -->
    <script src="js/nav.js"></script>
    <script src="js/intro.js"></script>
    <script src="js/cartas.js"></script>
</body>
</html>