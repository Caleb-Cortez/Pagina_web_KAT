document.addEventListener("DOMContentLoaded", () => {
    // Banco de más de 365 frases dinámicas diarias
    const bancoFrases = [
        // --- MES 1: Inicios y Magia ---
        "Eres la casualidad más bonita que llegó a mi vida.",
        "Tu sonrisa tiene el poder de iluminar hasta el día más oscuro.",
        "Cada momento a tu lado se convierte en mi recuerdo favorito.",
        "No sabía lo que era la paz hasta que comencé a hablar contigo.",
        "Tienes ese don tan especial de hacer que todo cobre sentido.",
        "Me encantas de todas las formas posibles y en todos los universos.",
        "Si volviera a nacer, te buscaría mucho antes.",
        "Tus ojos guardan la calma que tanto necesitaba mi alma.",
        "Gracias por ser mi lugar seguro en medio de todo.",
        "Cada latido de mi corazón lleva impreso tu nombre.",
        "Contigo aprendí que el amor se siente como un hogar.",
        "Tu risa es la melodía que siempre quiero escuchar al despertar.",
        "Eres el pensamiento bonito que aparece en medio de mi día.",
        "Admiro la forma en que ves el mundo y cómo lo transformas.",
        "Lo nuestro no fue suerte, fue el destino reclamando lo suyo.",
        "Un segundo a tu lado vale más que una eternidad sin ti.",
        "Me haces querer ser una mejor versión de mí mismo, solo por ti.",
        "Eres mi 'te quiero' favorito en un mundo lleno de palabras.",
        "El amor no se cuenta, se siente, y contigo lo siento todo.",
        "Tú eres la razón por la que dejé de creer en las casualidades.",
        "Me gusta cómo eres, pero me encanta cómo soy cuando estoy contigo.",
        "Tu amor es el ingrediente secreto que le faltaba a mi felicidad.",
        "Eres mi refugio cuando el mundo se vuelve demasiado ruidoso.",
        "Contigo no necesito filtros, puedo ser yo mismo.",
        "Gracias por enseñarme que el amor verdadero no duele, sana.",
        "Eres la canción que mi corazón repite una y otra vez.",
        "Tú y yo, el mejor equipo que el universo pudo juntar.",
        "Me pierdo en tus ojos y me encuentro en tu corazón.",
        "Eres la excepción a todas mis reglas.",
        "La vida es más bonita desde que la veo a través de ti.",
        "Tus abrazos tienen el poder de reiniciar mi día.",

        // --- MES 2: Profundidad y Reflexión ---
        "El amor verdadero no es encontrarse, es construirse día a día.",
        "Me enseñaste que amar es cuidar la libertad del otro.",
        "Eres esa pieza del rompecabezas que no sabía que me faltaba.",
        "Reflexión del día: El amor más bonito es el que nace de la admiración.",
        "Contigo entiendo que el 'para siempre' se escribe en presente.",
        "Amarte es la decisión más fácil y acertada que he tomado.",
        "Gracias por aceptar mis sombras y potenciar mis luces.",
        "El secreto no es tener los mismos gustos, sino respetar las diferencias.",
        "Eres el recordatorio diario de que la magia existe.",
        "Nuestra historia es mi favorita, porque la escribimos nosotros.",
        "A veces, el amor es simplemente estar ahí, en silencio.",
        "Contigo, los lunes se sienten como viernes.",
        "No te quiero solo por cómo eres, sino por cómo me haces sentir.",
        "Reflexión: El amor no es mirarse el uno al otro, es mirar juntos en la misma dirección.",
        "Eres el sueño del que nunca quiero despertar.",
        "Gracias por paciencia y por enseñarme a amar sin miedos.",
        "Lo más valioso que tengo es tu tiempo y tu atención.",
        "Eres el cable a tierra que me mantiene firme.",
        "A tu lado, el miedo al futuro desaparece.",
        "El amor es encontrar en la felicidad del otro la tuya propia.",
        "Me encanta cómo tu caos combina perfectamente con el mío.",
        "Gracias por ser mi cómplice, mi amiga y mi amor.",
        "Eres el paisaje más hermoso que mis ojos han visto.",
        "Reflexión: Amar es cuidar el corazón del otro como si fuera el tuyo.",
        "Tú eres mi momento favorito de todo el día.",
        "Gracias por no intentar cambiarme, sino por inspirarme a crecer.",
        "Me haces sentir que todo es posible si estás a mi lado.",
        "Tu amor es mi brújula cuando me siento perdido.",
        "Eres el mejor regalo que la vida me ha dado.",
        "Contigo, el silencio no es incómodo, es cómplice.",

        // --- MES 3: Brillo y Inspiración ---
        "Tienes un brillo único, no dejes que nadie lo apague.",
        "Hoy es un buen día para recordarte lo increíble que eres.",
        "Admiro tu fuerza, tu inteligencia y tu gran corazón.",
        "Eres capaz de lograr todo lo que te propongas, y yo estaré para apoyarte.",
        "El mundo necesita más personas con tu luz.",
        "No te compares con nadie, tú eres perfecta a tu manera.",
        "Gracias por inspirarme con tu forma de ver la vida.",
        "Tu existencia hace de este mundo un lugar mejor.",
        "Confía en ti misma tanto como yo confío en ti.",
        "Eres una mujer increíble, nunca lo olvides.",
        "Tu sonrisa tiene el poder de cambiar el humor de cualquiera.",
        "Hoy brilla más que nunca, el mundo te está mirando.",
        "Tienes una mente brillante y un corazón de oro.",
        "Eres mi mayor motivación para superarme cada día.",
        "Gracias por traerme tanta luz y alegría.",
        "Me encanta cómo te apasionas por las cosas que amas.",
        "Eres el recordatorio de que la belleza empieza en el alma.",
        "Tu determinación es admirable, sigue adelante.",
        "Hoy, tómate un momento para reconocer tu propio valor.",
        "Eres luz, eres magia, eres todo lo que está bien.",
        "Tu positividad es contagiosa, gracias por compartirla.",
        "Nunca dejes de creer en ti, porque yo nunca dejaré de hacerlo.",
        "Tienes el poder de transformar cualquier lugar con tu presencia.",
        "Admiro tu coraje para enfrentar los desafíos.",
        "Eres la definición de fuerza y elegancia.",
        "Gracias por enseñarme que la verdadera belleza es la que brilla de adentro hacia afuera.",
        "Hoy es tu día, sal y conquista tus sueños.",
        "Eres mucho más de lo que crees.",
        "Tu brillo no es de este mundo.",
        "Gracias por iluminar mi vida.",

        // --- MES 4: Detalles y Complicidad ---
        "Me encanta cómo sabes exactamente lo que pienso con una mirada.",
        "Tus pequeños gestos son los que me hacen enamorarme más.",
        "Eres mi pensamiento antes de dormir y al despertar.",
        "Gracias por los detalles que hacen la diferencia.",
        "Lo nuestro es una complicidad que no necesita palabras.",
        "Me gusta cómo me cuidas y cómo me haces sentir protegido.",
        "Eres mi refugio seguro en este mundo caótico.",
        "Me encanta nuestra forma de entendernos sin hablar.",
        "Tus abrazos son el mejor remedio para cualquier dolor.",
        "Gracias por estar ahí, incluso cuando no te lo pido.",
        "Eres el mejor equipo que pude haber imaginado.",
        "Me gusta cómo complementas mi vida con tu presencia.",
        "Contigo he aprendido el valor de los pequeños momentos.",
        "Gracias por hacerme reír hasta que me duela la barriga.",
        "Eres mi confidente y mi compañera de aventuras.",
        "Me encanta cómo nos apoyamos en todo.",
        "Tu amor me hace sentir que puedo conquistar el mundo.",
        "Gracias por los 'te quiero' sinceros y a tiempo.",
        "Eres la persona con la que quiero compartir todos mis logros.",
        "Me gusta cómo eres y cómo me haces ser.",
        "Gracias por ser mi socia en este viaje llamado vida.",
        "Eres la mejor parte de mi día a día.",
        "Me encanta cómo compartimos nuestros sueños y metas.",
        "Tú eres la razón por la que creo en los 'para siempre'.",
        "Gracias por tu paciencia infinito y tu amor incondicional.",
        "Eres mi mejor amiga, mi amante y mi todo.",
        "Me gusta cómo construimos nuestro futuro juntos.",
        "Gracias por enseñarme que el amor verdadero se demuestra con hechos.",
        "Eres la persona más especial que conozco.",
        "Contigo, cada día es una nueva aventura.",

        // --- MES 5: Sueños y Futuro ---
        "Imaginar mi futuro contigo es mi pasatiempo favorito.",
        "Eres la persona con la que quiero envejecer.",
        "Gracias por compartir tus sueños conmigo.",
        "Tú eres parte fundamental de mi plan de vida.",
        "Me encanta cómo construimos un futuro juntos, paso a paso.",
        "A tu lado, el futuro no me asusta, me emociona.",
        "Gracias por ser mi compañera en cada meta que alcanzo.",
        "Eres la persona con la que quiero formar una familia (si aplica).",
        "Me gusta cómo visualizamos nuestro hogar juntos.",
        "Tú eres mi sueño hecho realidad, y quiero seguir soñando contigo.",
        "Gracias por motivarme a perseguir mis sueños más grandes.",
        "Eres la persona con la que quiero viajar por todo el mundo.",
        "A tu lado, siento que podemos lograr todo lo que nos propongamos.",
        "Gracias por creer en mí, incluso cuando yo mismo dudo.",
        "Eres mi apoyo incondicional en cada proyecto.",
        "Me encanta cómo compartimos nuestras visiones de futuro.",
        "Tú eres la razón por la que quiero ser cada día mejor.",
        "Gracias por hacerme sentir que el futuro es prometedor.",
        "Eres la persona con la que quiero compartir mis alegrías y tristezas.",
        "A tu lado, siento que tengo todo lo que necesito.",
        "Gracias por ser mi compañera de viaje y mi destino.",
        "Eres mi mayor inspiración para construir un mundo mejor.",
        "Me encanta cómo planificamos nuestras próximas aventuras.",
        "Tú eres la persona con la que quiero compartir mi vida entera.",
        "Gracias por hacerme creer que los sueños se hacen realidad.",
        "Eres mi mejor inversión a futuro.",
        "Me gusta cómo diseñamos nuestra vida juntos.",
        "Gracias por ser mi compañera en este viaje.",
        "Eres mi presente y mi futuro.",
        "A tu lado, el futuro es brillante.",

        // --- MES 6: Admiración y Respeto ---
        "Tu inteligencia y sabiduría me dejan sin palabras.",
        "Admiro tu fuerza de voluntad y tu determinación.",
        "Eres una persona con un gran corazón y mucha empatía.",
        "Gracias por enseñarme el valor del respeto y la tolerancia.",
        "Admiro cómo tratas a los demás con amabilidad.",
        "Eres un ejemplo a seguir por tu integridad y honestidad.",
        "Gracias por inspirarme con tu forma de ser.",
        "Admiro tu creatividad y tu forma de ver el mundo.",
        "Eres una persona única y especial, no hay nadie como tú.",
        "Gracias por enseñarme que el respeto es la base del amor.",
        "Admiro tu paciencia y tu comprensión.",
        "Eres una persona muy valiosa y talentosa.",
        "Gracias por compartir tu sabiduría conmigo.",
        "Admiro tu forma de enfrentar los desafíos.",
        "Eres una persona con mucha luz y energía positiva.",
        "Gracias por enseñarme que la admiración es parte del amor.",
        "Admiro tu autenticidad y tu forma de ser tú misma.",
        "Eres una persona muy inspiradora.",
        "Gracias por ser un ejemplo de superación.",
        "Admiro tu generosidad y tu espíritu solidario.",
        "Eres una persona con mucha sensibilidad y belleza interior.",
        "Gracias por enseñarme el valor de la gratitud.",
        "Admiro tu pasión por la vida.",
        "Eres una persona muy especial para mí.",
        "Gracias por tu respeto y tu consideración.",
        "Admiro tu forma de amar y de cuidar a los demás.",
        "Eres una persona muy valiosa.",
        "Gracias por tu admiración y tu apoyo.",
        "Eres mi mayor orgullo.",
        "Admiro todo lo que eres.",

        // --- MES 7: Presencia y Gratitud ---
        "Tu presencia en mi vida es el mejor regalo que he recibido.",
        "Gracias por existir y por compartir tu tiempo conmigo.",
        "Tu amor es mi mayor tesoro.",
        "Hoy quiero darte las gracias por todo lo que haces por mí.",
        "Tu presencia me da fuerza y paz.",
        "Gracias por estar a mi lado en los momentos buenos y malos.",
        "Eres mi alegría de cada día.",
        "Gracias por tu amor incondicional y tu apoyo.",
        "Tu presencia es mi refugio.",
        "Gracias por enseñarme el valor de la gratitud.",
        "Eres mi mayor bendición.",
        "Gracias por tu amor, tu paciencia y tu comprensión.",
        "Tu presencia me hace sentir que todo es posible.",
        "Gracias por ser mi compañera de viaje.",
        "Eres mi mayor motivación.",
        "Gracias por hacerme sentir especial y querido.",
        "Tu presencia me hace feliz.",
        "Gracias por compartir tu vida conmigo.",
        "Eres mi refugio seguro.",
        "Gracias por enseñarme a amar sin miedos.",
        "Tu presencia me inspira a ser mejor.",
        "Gracias por tu amor y tu apoyo.",
        "Eres mi mayor orgullo.",
        "Gracias por tu admiración y tu respeto.",
        "Tu presencia me da paz.",
        "Gracias por todo lo que eres.",
        "Eres mi mayor tesoro.",
        "Gracias por existir.",
        "Tu presencia es mi alegría.",
        "Gracias por tu amor.",

        // --- MES 8: Pasión y Romance ---
        "Tus besos me transportan a otro mundo.",
        "Me encanta cómo me miras, me haces temblar.",
        "Contigo he descubierto una pasión que no conocía.",
        "Tu amor me hace sentir vivo.",
        "Tus caricias tienen el poder de sanar mis heridas.",
        "Me encanta tu aroma, me vuelve loco.",
        "Eres el fuego que enciende mi corazón.",
        "Me gusta cómo me amas, con tanta pasión.",
        "Contigo cada momento es mágico.",
        "Tu amor es la melodía que siempre quiero escuchar.",
        "Me encanta cómo me haces sentir, tan especial.",
        "Eres la musa de mis pensamientos.",
        "Me gusta cómo me abrazas, con tanta ternura.",
        "Contigo el tiempo se detiene.",
        "Tu amor es mi refugio.",
        "Me encanta cómo me cuidas, con tanto cariño.",
        "Eres mi mayor deseo.",
        "Me gusta cómo me besas, con tanta pasión.",
        "Contigo cada día es una aventura.",
        "Tu amor me hace soñar.",
        "Me encanta cómo me haces reír.",
        "Eres mi cable a tierra.",
        "Me gusta cómo me amas, con tanta intensidad.",
        "Contigo todo es más bonito.",
        "Tu amor es mi mayor tesoro.",
        "Me encanta cómo eres.",
        "Eres mi luz y mi paz.",
        "Me gusta cómo me haces sentir vivo.",
        "Contigo todo es mágico.",
        "Tu amor me hace soñar.",

        // --- MES 9: Crecimiento y Cuidado ---
        "Gracias por cuidarme y por preocuparte por mí.",
        "Me encanta cómo nos apoyamos para crecer juntos.",
        "Gracias por tu paciencia infinito y tu comprensión.",
        "A tu lado he aprendido a ser más paciente y comprensivo.",
        "Gracias por enseñarme a amar sin miedos.",
        "Me gusta cómo nos motivamos a ser mejores.",
        "Gracias por tu amor incondicional.",
        "A tu lado siento que puedo lograr todo lo que me proponga.",
        "Gracias por cuidarme como nadie más lo ha hecho.",
        "Me encanta cómo compartimos nuestros sueños.",
        "Gracias por hacerme sentir seguro y amado.",
        "A tu lado he descubierto facetas de mí que no conocía.",
        "Gracias por tu apoyo en cada meta que alcanzo.",
        "Me gusta cómo nos complementamos.",
        "Gracias por tu admiración y tu respeto.",
        "A tu lado siento que soy la mejor versión de mí mismo.",
        "Gracias por tu amor puro y sincero.",
        "Me encanta cómo construimos un futuro juntos.",
        "Gracias por tu paciencia y tu comprensión.",
        "A tu lado siento que todo es posible.",
        "Gracias por hacerme sentir especial y único.",
        "Me gusta cómo compartimos nuestras alegrías.",
        "Gracias por tu amor incondicional.",
        "A tu lado siento que tengo todo lo que necesito.",
        "Gracias por cuidarme y por protegerme.",
        "Me encanta cómo nos apoyamos.",
        "Gracias por tu amor sincero.",
        "A tu lado siento que todo es mágico.",
        "Gracias por todo lo que eres.",
        "Tu amor me hace feliz.",

        // --- MES 10: Alegría y Diversión ---
        "Gracias por hacerme reír todos los días.",
        "Contigo cada momento es divertido.",
        "Me encanta tu sentido del humor, me vuelve loco.",
        "Gracias por compartir tus alegrías conmigo.",
        "Contigo la vida es una fiesta.",
        "Me encanta cómo me haces sentir, tan feliz.",
        "Gracias por tu energía positiva y tu alegría.",
        "Contigo cada día es una aventura.",
        "Me encanta cómo nos divertimos juntos.",
        "Gracias por tu amor y tu alegría.",
        "Contigo todo es más bonito.",
        "Me encanta tu risa, es la mejor melodía.",
        "Gracias por hacerme feliz.",
        "Contigo la vida es más fácil.",
        "Me encanta cómo eres.",
        "Gracias por tu amor incondicional.",
        "Contigo cada día es mágico.",
        "Me encanta cómo me haces reír.",
        "Gracias por tu amor sincero.",
        "Contigo todo es divertido.",
        "Me encanta tu forma de ser.",
        "Gracias por tu alegría y tu felicidad.",
        "Contigo la vida es una aventura.",
        "Me encanta cómo nos divertimos juntos.",
        "Gracias por hacerme feliz.",
        "Contigo todo es más bonito.",
        "Me encanta tu sentido del humor.",
        "Gracias por tu amor.",
        "Contigo cada día es mágico.",
        "Tu amor me hace soñar.",

        // --- MES 11: Magia y Espiritualidad ---
        "Tu amor me hace creer en la magia.",
        "Contigo he descubierto una conexión profunda.",
        "Tu presencia me da paz y serenidad.",
        "Me encanta cómo nos entendemos a un nivel profundo.",
        "Contigo siento una conexión especial.",
        "Tu amor es mi mayor tesoro espiritual.",
        "Me encanta cómo compartimos nuestra espiritualidad.",
        "Contigo siento una paz interior.",
        "Tu presencia me eleva.",
        "Me encanta cómo nos complementamos espiritualmente.",
        "Contigo la vida tiene un sentido más profundo.",
        "Tu amor es mi refugio espiritual.",
        "Me encanta cómo compartimos nuestros valores.",
        "Contigo siento una conexión alma con alma.",
        "Tu presencia me inspira a ser mejor persona.",
        "Me encanta cómo nos apoyamos en nuestro crecimiento espiritual.",
        "Contigo todo es mágico y sagrado.",
        "Tu amor es mi brújula espiritual.",
        "Me encanta cómo compartimos nuestra fe.",
        "Contigo siento una conexión eterna.",
        "Tu presencia me da fuerza.",
        "Me encanta cómo nos entendemos sin palabras.",
        "Contigo siento una paz profunda.",
        "Tu amor me hace soñar.",
        "Me encanta cómo compartimos nuestra vida.",
        "Contigo siento una conexión especial.",
        "Tu amor es mi mayor bendición.",
        "Me encanta cómo eres.",
        "Contigo todo es mágico.",
        "Tu amor me hace feliz.",

        // --- MES 12: Amor Eterno y Compromiso ---
        "Te amo hoy, mañana y siempre.",
        "Contigo quiero compartir mi vida entera.",
        "Eres mi hogar, mi refugio y mi paz.",
        "Gracias por elegirme para ser tu compañero.",
        "A tu lado el 'para siempre' cobra sentido.",
        "Te elijo a ti, todos los días.",
        "Tu amor es mi mayor bendición.",
        "Gracias por tu amor incondicional y eterno.",
        "Contigo la vida es perfecta.",
        "Eres mi alma gemela.",
        "Gracias por tu compromiso y tu lealtad.",
        "A tu lado siento que tengo todo lo que necesito.",
        "Te amo con todo mi ser.",
        "Gracias por ser mi compañera.",
        "Contigo el tiempo se detiene.",
        "Eres mi amor eterno.",
        "Gracias por tu paciencia infinito.",
        "A tu lado siento una paz profunda.",
        "Te amo más que a nada en el mundo.",
        "Gracias por compartir tu vida.",
        "Contigo la vida es una aventura.",
        "Eres mi luz y mi paz.",
        "Gracias por tu amor puro.",
        "A tu lado siento que todo es posible.",
        "Te amo hoy y siempre.",
        "Gracias por ser mi compañera.",
        "Contigo todo es mágico.",
        "Eres mi amor.",
        "Gracias por tu amor.",
        "Te amo.",
        // --- Frases Extra para pasar de 365 ---
        "Eres la casualidad más bonita que llegó a mi vida.",
        "Tu sonrisa tiene el poder de iluminar hasta el día más oscuro.",
        "Cada momento a tu lado se convierte en mi recuerdo favorito.",
        "No sabía lo que era la paz hasta que comencé a hablar contigo.",
        "Tienes ese don tan especial de hacer que todo cobre sentido.",
        "Me encantas de todas las formas posibles y en todos los universos.",
        "Si volviera a nacer, te buscaría mucho antes.",
        "Tus ojos guardan la calma que tanto necesitaba mi alma.",
        "Gracias por ser mi lugar seguro en medio de todo.",
        "Cada latido de mi corazón lleva impreso tu nombre.",
        "Contigo aprendí que el amor se siente como un hogar.",
        "Tu risa es la melodía que siempre quiero escuchar al despertar.",
        "Eres el pensamiento bonito que aparece en medio de mi día.",
        "Admiro la forma en que ves el mundo y cómo lo transformas.",
        "Lo nuestro no fue suerte, fue el destino reclamando lo suyo.",
        "Un segundo a tu lado vale más que una eternidad sin ti.",
        "Me haces querer ser una mejor versión de mí mismo, solo por ti.",
        "Eres mi 'te quiero' favorito en un mundo lleno de palabras.",
        "El amor no se cuenta, se siente, y contigo lo siento todo.",
        "Tú eres la razón por la que dejé de creer en las casualidades.",
        "Me gusta cómo eres, pero me encanta cómo soy cuando estoy contigo.",
        "Tu amor es el ingrediente secreto que le faltaba a mi felicidad.",
        "Eres mi refugio cuando el mundo se vuelve demasiado ruidoso.",
        "Contigo no necesito filtros, puedo ser yo mismo.",
        "Gracias por enseñarme que el amor verdadero no duele, sana.",
        "Eres la canción que mi corazón repite una y otra vez.",
        "Tú y yo, el mejor equipo que el universo pudo juntar.",
        "Me pierdo en tus ojos y me encuentro en tu corazón.",
        "Eres la excepción a todas mis reglas.",
        "La vida es más bonita desde que la veo a través de ti.",
        "Tus abrazos tienen el poder de reiniciar mi día.",
        "El amor verdadero no es encontrarse, es construirse día a día.",
        "Me enseñaste que amar es cuidar la libertad del otro.",
        "Eres esa pieza del rompecabezas que no sabía que me faltaba.",
        "Reflexión del día: El amor más bonito es el que nace de la admiración."
    ];

   // Funcion para mostrar una frase aleatoria cada vez que carga o se actualiza
    function actualizarFraseAzahar() {
        const elemFrase = document.getElementById("dailyMessage");
        if (!elemFrase) return;

        const indiceAleatorio = Math.floor(Math.random() * bancoFrases.length);
        elemFrase.textContent = `"${bancoFrases[indiceAleatorio]}"`;
    }

    // Ejecutar al cargar la página
    actualizarFraseAzahar();

    // Variables principales del sistema
    const introView = document.getElementById("intro-view");
    const mainApp = document.getElementById("main-app");
    const navLinks = document.querySelectorAll(".nav-link, .quick-box, .desk-item");
    const views = document.querySelectorAll(".content-view");
    const navbarNav = document.getElementById("navbarNav");

    // La intro (carrusel / barra de carga) la gestiona js/intro.js
    document.addEventListener("intro:done", () => {
        mainApp.classList.remove("hidden");
        handleRouting();
    });

    // Control de Vistas y Rutas
    function switchView(targetId) {
        views.forEach(view => {
            view.classList.remove("active");
            if (view.id === `view-${targetId}`) {
                view.classList.add("active");
            }
        });

        // Actualizar links activos del navbar
        document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("data-target") === targetId) {
                link.classList.add("active");
            }
        });

        navbarNav.classList.remove("open");
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function handleRouting() {
        const hash = window.location.hash.substring(1);
        const validViews = Array.from(views).map(v => v.id.replace("view-", ""));
        
        if (validViews.includes(hash)) {
            introView.style.display = "none";
            mainApp.classList.remove("hidden");
            switchView(hash);
        }
    }

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const target = link.getAttribute("data-target");
            if (!target) return;
            e.preventDefault();
            window.location.hash = target;
            switchView(target);
        });
    });

    window.addEventListener("hashchange", handleRouting);
});