<?php
$activePage = 'inicio';
$isHome = true;
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Una Página para Ti</title>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Raleway:wght@300;400;500&display=swap" rel="stylesheet">
    <!-- FontAwesome 6 para Iconos Profesionales -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Estilos -->
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/easter-eggs.css">
    <link rel="stylesheet" href="css/desk.css">
</head>
<body class="home-body">

    <!-- 0. PANTALLA DE BIENVENIDA MISTERIOSA CON CARRUSEL -->
    <section id="intro-view">
        <div class="intro-content">
            <div class="carousel-container">
                <div class="carousel-track" id="carouselTrack">
                    <div class="carousel-slide active">
                        <div class="glow-symbol">💖</div>
                        <p class="intro-text">"Cada latido de mi corazón tiene tu nombre..."</p>
                    </div>
                    <div class="carousel-slide">
                        <div class="glow-symbol">🎂</div>
                        <p class="intro-text">"Celebrando la hermosa casualidad de conocerte..."</p>
                    </div>
                    <div class="carousel-slide">
                        <div class="glow-symbol">✨</div>
                        <p class="intro-text">"Iluminas mis días de la forma más mágica..."</p>
                    </div>
                    <div class="carousel-slide">
                        <div class="glow-symbol">🎵</div>
                        <p class="intro-text">"La melodía perfecta que le da sentido a todo..."</p>
                    </div>
                    <div class="carousel-slide">
                        <div class="glow-symbol">🌌</div>
                        <p class="intro-text">"Un universo entero creado solo para ti..."</p>
                    </div>
                </div>

                <button class="carousel-arrow prev" id="prevSlide" aria-label="Anterior">❮</button>
                <button class="carousel-arrow next" id="nextSlide" aria-label="Siguiente">❯</button>
                
                <div class="carousel-dots" id="carouselDots">
                    <span class="dot active" data-slide="0"></span>
                    <span class="dot" data-slide="1"></span>
                    <span class="dot" data-slide="2"></span>
                    <span class="dot" data-slide="3"></span>
                    <span class="dot" data-slide="4"></span>
                </div>
            </div>

            <button id="enter-btn" class="cinematic-btn">Entrar</button>
        </div>
    </section>

    <!-- APLICACIÓN PRINCIPAL -->
    <div id="main-app" >
        
        <!-- NAVBAR SUPERIOR ANCHO Y LLAMATIVO -->
        <?php include __DIR__ . '/components/navbar.php'; ?>

        <!-- VISTAS INDEPENDIENTES -->
        <main class="main-container">
            
            <!-- SECCIÓN INICIO CON LA TARJETA CENTRAL Y ACCESOS RÁPIDOS -->
            <section id="view-inicio" class="content-view active">
                <div class="view-inner center-hero">
                    
                    <!-- Tarjeta Central del Mensaje del Día -->
                    <div class="daily-card glow-border">
                        <span class="daily-badge">✦ Pensamiento del día ✦</span>
                        <h1 id="dailyMessage" class="daily-phrase">Cargando mensaje especial...</h1>
                        <p class="daily-sub">Un detalle nuevo guardado especialmente para hoy.</p>
                    </div>

                    <!-- El Cofre Nocturno: objetos interactivos sobre la mesa -->
                    <div class="desk-surface-wrapper">
                        <div class="letters-header">
                            <span class="letters-badge">✦ El Cofre Nocturno ✦</span>
                            <h2>Selecciona un objeto para descubrir su historia</h2>
                            <p class="letters-subtitle">Cada detalle sobre esta mesa guarda un pedacito de lo nuestro.</p>
                        </div>

                        <div class="desk-container">
                            <!-- Objeto 1: El Sobre con Sello de Cera (Mi Carta) -->
                            <a href="cartas.php" class="desk-item letter-envelope-item" data-title="Mis Cartas para Ti">
                                <div class="item-glow"></div>
                                <div class="envelope-graphic">
                                    <div class="wax-seal">✦</div>
                                </div>
                                <div class="item-info">
                                    <h3>El Buzón de Cartas</h3>
                                    <p>Sobres sellados con palabras desde el alma.</p>
                                    <span class="item-action">Abrir cartas →</span>
                                </div>
                            </a>

                            <!-- Objeto 2: El Mapa Estelar (Constelación) -->
                            <a href="#constelacion" class="desk-item telescope-item" data-target="constelacion" data-title="Nuestra Constelación">
                                <div class="item-glow"></div>
                                <div class="object-icon-box">
                                    <i class="fa-solid fa-wand-magic-sparkles"></i>
                                </div>
                                <div class="item-info">
                                    <h3>Mapa Estelar</h3>
                                    <p>Nuestros momentos escritos en el cielo nocturno.</p>
                                    <span class="item-action">Explorar estrellas →</span>
                                </div>
                            </a>

                            <!-- Objeto 3: La Libreta de Notas (Tu Espacio) -->
                            <a href="#espacio" class="desk-item notebook-item" data-target="espacio" data-title="Tu Espacio Personal">
                                <div class="item-glow"></div>
                                <div class="object-icon-box">
                                    <i class="fa-solid fa-book-open"></i>
                                </div>
                                <div class="item-info">
                                    <h3>Tu Libreta Secreta</h3>
                                    <p>Un refugio reservado solo para tus pensamientos.</p>
                                    <span class="item-action">Escribir nota →</span>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            <section id="view-recuerdos" class="content-view">
                <div class="view-inner">
                    <h2>Nuestros recuerdos</h2>
                    <p>Instantes congelados en el tiempo.</p>
                </div>
            </section>

            <section id="view-admiro" class="content-view">
                <div class="view-inner">
                    <h2>Lo que admiro de ti</h2>
                    <p>Cualidades y pequeños detalles que hacen la diferencia.</p>
                </div>
            </section>

            <section id="view-cancion" class="content-view">
                <div class="view-inner">
                    <h2>Nuestra canción</h2>
                    <p>La melodía que define nuestra historia.</p>
                </div>
            </section>

            <section id="view-constelacion" class="content-view">
                <div class="view-inner">
                    <h2>Constelación de recuerdos</h2>
                    <p>Toca cada estrella para revelar un secreto.</p>
                </div>
            </section>

            <section id="view-espacio" class="content-view">
                <div class="view-inner">
                    <h2>Tu espacio</h2>
                    <p>Un lugar reservado para que tú también guardes tus recuerdos aquí.</p>
                </div>
            </section>

            <section id="view-declaracion" class="content-view">
                <div class="view-inner">
                    <h2 class="gold-text">Mi declaración final</h2>
                    <p>El mensaje más importante de toda esta experiencia.</p>
                </div>
            </section>

        </main>
    </div>

    <!-- BOTONES Y ELEMENTOS DE LOS EASTER EGGS -->
    <div id="wish-jar-btn" class="easter-btn jar-btn" title="Frasco de Deseos">
        <i class="fa-solid fa-whiskey-glass"></i>
    </div>

    <div id="starry-night-btn" class="easter-btn star-btn" title="Modo Noche Estrellada">
        <i class="fa-solid fa-wand-magic-sparkles"></i>
    </div>

    <canvas id="starry-canvas"></canvas>

    <!-- Fondo de partículas sutiles (polvo de estrellas) -->
    <canvas id="ambient-canvas"></canvas>

    <div id="secret-modal" class="modal-overlay hidden">
        <div class="modal-card glow-border">
            <button id="close-modal-btn" class="modal-close">&times;</button>
            <div id="modal-content">
                <!-- Contenido dinámico -->
            </div>
        </div>
    </div>

    <!-- Scripts de la aplicación principal y easter eggs -->
    <script src="js/nav.js"></script>
    <script src="js/intro.js"></script>
    <script src="js/ambient.js"></script>
    <script src="js/main.js"></script>
    <script src="js/easter-eggs.js"></script>
</body>
</html>