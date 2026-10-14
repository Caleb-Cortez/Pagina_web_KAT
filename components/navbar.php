<?php
// Componente reutilizable del navbar.
// Variables opcionales que la página define antes del include:
//   $activePage  -> 'inicio' | 'cartas' | '' (enlace marcado como activo)
//   $isHome      -> true en la página de inicio (SPA con data-target)
$activePage = $activePage ?? '';
$isHome = $isHome ?? false;

$navItems = [
    ['id' => 'inicio',       'label' => 'Inicio'],
    ['page' => 'cartas.php', 'label' => 'Mi carta', 'key' => 'cartas'],
    ['id' => 'recuerdos',    'label' => 'Recuerdos'],
    ['id' => 'admiro',       'label' => 'Lo que admiro'],
    ['id' => 'cancion',      'label' => 'Canción'],
    ['id' => 'constelacion', 'label' => 'Constelación'],
    ['id' => 'espacio',      'label' => 'Tu espacio'],
    ['id' => 'declaracion',  'label' => 'Declaración', 'highlight' => true],
];
?>
<header class="navbar-header">
    <div class="navbar-container">
        <?php if ($isHome): ?>
            <span class="navbar-logo">✦ Una Página para Ti</span>
        <?php else: ?>
            <a href="index.php" class="navbar-logo" style="text-decoration: none;">✦ Una Página para Ti</a>
        <?php endif; ?>

        <button class="menu-toggle" id="menuToggle" aria-label="Abrir menú">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <nav class="navbar-nav" id="navbarNav">
            <?php foreach ($navItems as $item): ?>
                <?php
                    $key = $item['key'] ?? $item['id'] ?? '';
                    $classes = 'nav-link' . ($activePage === $key ? ' active' : '');
                    if (!empty($item['highlight'])) {
                        $classes .= ' highlight';
                    }

                    if (isset($item['page'])) {
                        $href = $item['page'];
                        $dataTarget = '';
                    } else {
                        $href = ($isHome ? '#' : 'index.php#') . $item['id'];
                        $dataTarget = $isHome ? ' data-target="' . $item['id'] . '"' : '';
                    }
                ?>
                <a href="<?= $href ?>" class="<?= $classes ?>"<?= $dataTarget ?>><?= $item['label'] ?></a>
            <?php endforeach; ?>
        </nav>
    </div>
</header>
