/*al cargar la pagina*/
window.addEventListener('load', function(){
    const letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


letras.forEach(letra => {


const divletra = document.createElement("div");
let abecedarioCaja = document.getElementById("abecedarioCaja");
// Asignar atributos al div
divletra.id = `IdLetra${letra}`;  // Ejemplo: ClaseLetraA
divletra.classList.add("letras");    // Añadir la clase "letras"
divletra.innerText = letra;          // El contenido del div será la letra

// Asignar la función de click al div
divletra.onclick = function() {
  redirectToPage(letra);        // Llamar a la función con el argumento de la letra
};

// Agregar el div al cuerpo del documento (o a cualquier contenedor)
abecedarioCaja.appendChild(divletra);  // Puedes reemplazar "document.body" por otro contenedor




})
colorearLetra();



    const juegos = [
        {
            id: 1,
            nombre: "Astro Bot",
            foto: "img/juegosFotos/astrobot.jpeg",
            precio: 29,
            letra: "A",
            descripcion: "Astro Bot es un juego de plataformas desarrollado por Team Asobi y publicado por Sony Interactive Entertainment para PlayStation 5. El simpático robot protagoniza una nueva aventura de plataformas, continuación de Astro's Playroom, ahora con un juego mucho más ambicioso formado por más de 80 niveles y con cientos de cameos del universo PlayStation."
        },
        {
            id: 2,
            nombre: "ARK: Survival Evolved",
            foto: "img/juegosFotos/ark.jpg",
            precio: 39,
            letra: "A",
            descripcion: "ARK: Survival Evolved para PC es un nuevo juego de supervivencia y mundo abierto. A lo largo de la aventura tendremos que cazar para sobrevivir, crear objetos, mejorar nuestra tecnología, construir refugios, etcétera. Todo ello mientras exploramos una gigantesca isla repleta de dinosaurios."
        },
        {
            id: 3,
            nombre: "Batman: Arkham Knight",
            foto: "img/juegosFotos/batman.jpeg",
            precio: 34,
            letra: "B",
            descripcion: "Batman: Arkham Knight para PS4 es un nuevo videojuego de Batman que cerrará la saga 'Arkham' del personaje de DC Comics. Desarrollado por los creadores de Arkham Asylum y Arkham City, el título tiene lugar un año después de los sucesos de éste."
        },
        {
            id: 4,
            nombre: "Battlefield 4",
            foto: "img/juegosFotos/Battlefield4.jpg",
            precio: 47,
            letra: "B",
            descripcion: "Battlefield 4 es un shooter en primera persona desarrollado por DICE y publicado por Electronic Arts. Un juego de acción ambientado en la guerra moderna, con una espectacular campaña para un jugador y un ambicioso multijugador competitivo."
        },
        {
            id: 5,
            nombre: "Cyberpunk 2077",
            foto: "img/juegosFotos/Cyberpunk2077.jpg",
            precio: 49,
            letra: "C",
            descripcion: "Cyberpunk 2077 es el nuevo videojuego de rol en primera persona con estructura de mundo abierto de CD Projekt RED, donde encarnamos un personaje diseñado a nuestra medida y tenemos que sobrevivir en una peligrosa urbe."
        },
        {
            id: 6,
            nombre: "Cuphead",
            foto: "img/juegosFotos/Cuphead.jpeg",
            precio: 19,
            letra: "C",
            descripcion: "Cuphead es un videojuego de plataformas y acción en 2D desarrollado por Studio MDHR, conocido por su estilo visual de dibujos animados de la década de 1930."
        },
        {
            id: 7,
            nombre: "Disney Epic Mickey Rebrushed",
            foto: "img/juegosFotos/DisneyEpicMickeyRebrushed.jpeg",
            precio: 25,
            letra: "D",
            descripcion: "Disney Epic Mickey Rebrushed es un juego de plataformas desarrollado por Purple Lamp y publicado por THQ Nordic, donde Mickey Mouse regresa en una aventura completamente remasterizada."
        },
        {
            id: 8,
            nombre: "Days Gone",
            foto: "img/juegosFotos/DaysGone.jpg",
            precio: 44,
            letra: "D",
            descripcion: "Days Gone es un videojuego de acción y supervivencia en mundo abierto exclusivo para PlayStation 4. Encarnamos a Deacon St. John, un motero en un mundo post-apocalíptico."
        },
        {
            id: 9,
            nombre: "Elden Ring",
            foto: "img/juegosFotos/EldenRing.jpeg",
            precio: 52,
            letra: "E",
            descripcion: "Elden Ring es el nuevo videojuego de FromSoftware, que presenta un mundo abierto más grande y ambicioso, con una mitología firmada por George R.R. Martin."
        },
        {
            id: 10,
            nombre: "Euro Truck Simulator 2",
            foto: "img/juegosFotos/EuroTruckSimulator2.jpeg",
            precio: 35,
            letra: "E",
            descripcion: "Euro Truck Simulator 2 es un simulador de camiones que permite ponernos en la piel de un conductor de camión entregando mercancías a través de Europa."
        },
        {
            id: 11,
            nombre: "FIFA 19",
            foto: "img/juegosFotos/FIFA19.jpeg",
            precio: 27,
            letra: "F",
            descripcion: "FIFA 19 es la nueva entrega de la saga de videojuegos de fútbol de EA Sports, mejorando los avances en jugabilidad y gráficos, incluyendo la UEFA Champions League."
        },
        {
            id: 12,
            nombre: "Fortnite Battle Royale",
            foto: "img/juegosFotos/fortnite.jpeg",
            precio: 0, // Fortnite es gratuito
            letra: "F",
            descripcion: "Fortnite Battle Royale es la variante ‘battle royale’ gratuita de Fortnite, diseñada con sus propias ideas y mecánicas para ofrecer una experiencia única."
        },
        {
            id: 13,
            nombre: "Grand Theft Auto V",
            foto: "img/juegosFotos/GrandTheftAutoV.jpeg",
            precio: 60,
            letra: "G",
            descripcion: "Grand Theft Auto V es una versión mejorada de un videojuego de acción en mundo abierto que presenta la historia de Michael, Franklin y Trevor en la ciudad de Los Santos."
        },
        {
            id: 14,
            nombre: "God of War: Ragnarok",
            foto: "img/juegosFotos/GodofWarRagnarok.jpg",
            precio: 55,
            letra: "G",
            descripcion: "God of War: Ragnarok es la nueva aventura de acción y rol que continúa la historia de Kratos, enfrentándose a enemigos de inspiración nórdica."
        },
        {
            id: 15,
            nombre: "Horizon: Zero Dawn",
            foto: "img/juegosFotos/HorizonZeroDawn.jpeg",
            precio: 39,
            letra: "H",
            descripcion: "Horizon: Zero Dawn es un juego de aventuras en mundo abierto donde encarnamos a Aloy, una cazadora en un futuro apocalíptico plagado de criaturas robóticas."
        },
        {
            id: 16,
            nombre: "Halo Infinite",
            foto: "img/juegosFotos/HaloInfinite.jpg",
            precio: 45,
            letra: "H",
            descripcion: "Halo Infinite es un juego de acción en primera persona que reinicia varios apartados artísticos y jugables de la saga, ofreciendo grandes escenarios y gráficos en 4K."
        },
        {
            id: 17,
            nombre: "It Takes Two",
            foto: "img/juegosFotos/ItTakesTwo.jpg",
            precio: 40,
            letra: "I",
            descripcion: "It Takes Two es una aventura de acción y plataformas cooperativa que solo se puede disfrutar entre dos jugadores en una experiencia de pantalla partida."
        },
        {
            id: 18,
            nombre: "Ice Age 3: Dawn of the Dinosaurs",
            foto: "img/juegosFotos/IceAge3DawnoftheDinosaurs.jpeg",
            precio: 30,
            letra: "I",
            descripcion: "Ice Age 3: Dawn of the Dinosaurs es un videojuego de plataformas y aventuras basado en la película animada del mismo nombre, parte de la franquicia de Ice Age."
        },
        {
            id: 19,
            nombre: "Just Dance 2022",
            foto: "img/juegosFotos/JustDance2022.jpeg",
            precio: 25,
            letra: "J",
            descripcion: "Just Dance 2022 es un juego de baile con 40 nuevas canciones para disfrutar en fiestas y celebraciones, forma parte de la saga de juegos de baile más exitosa."
        },
        {
            id: 20,
            nombre: "Just Cause 2",
            foto: "img/juegosFotos/JustCause2.jpg",
            precio: 28,
            letra: "J",
            descripcion: "Just Cause 2 es un videojuego de acción y aventura en mundo abierto, conocido por su enorme mundo y jugabilidad extremadamente libre."
        },
        {
            id: 21,
            nombre: "Kirby y la tierra olvidada",
            foto: "img/juegosFotos/KirbyylaTierraOlvidada.jpg",
            precio: 39,
            letra: "K",
            descripcion: "Kirby y la tierra olvidada es un juego de aventura y plataformas en 3D de la célebre saga Kirby para Nintendo Switch. En esta ocasión, tendremos que viajar a través de un desolado panorama postapocalíptico en una odisea repleta de plataformas, puzles y acción que hace de la exploración y de sus combates sus principales fortalezas."
        },
        {
            id: 22,
            nombre: "Kena: Bridge of the Spirits",
            foto: "img/juegosFotos/KenaBridgeoftheSpirits.png",
            precio: 49,
            letra: "K",
            descripcion: "Kena: Bridge of the Spirits es un videojuego de aventura y acción para PlayStation 5 y PC que nos ofrece, además de una enternecedora y épica historia, un apartado visual muy inspirado en la animación en 3D. El título, obra de Ember Lab, se ha desarrollado en colaboración con Sony para poder ofrecer una experiencia más enriquecedora, inmersiva y completa en términos de mecánicas."
        },
        {
            id: 23,
            nombre: "Left 4 Dead 2",
            foto: "img/juegosFotos/Left4Dead2.jpeg",
            precio: 19,
            letra: "L",
            descripcion: "Left 4 Dead 2 es un shooter multijugador desarrollado por Turtle Rock Studios y publicado por Valve para Xbox 360 y PC. La secuela del juego de acción cooperativa en primera persona en el que formando un equipo de cuatro jugadores hay que combatir contra peligrosas hordas de zombis, ampliando notablemente la fórmula original con nuevos personajes, escenarios, enemigos y mecánicas de juego."
        },
        {
            id: 24,
            nombre: "LEGO Indiana Jones: The Original Adventures",
            foto: "img/juegosFotos/LEGOIndiana JonesTheOriginalAdventures.jpeg",
            precio: 29,
            letra: "L",
            descripcion: "LEGO Indiana Jones: The Original Adventures es un videojuego de acción y aventura desarrollado por Traveller's Tales y publicado por LucasArts. Fue lanzado en 2008 para múltiples plataformas, incluyendo PlayStation 2, PlayStation 3, Xbox 360, Wii, Nintendo DS, PSP, y PC. Este juego lleva las icónicas películas de Indiana Jones al universo LEGO, recreando las tres primeras películas de la franquicia con un toque de humor y creatividad característico de los juegos LEGO."
        },
        {
            id: 25,
            nombre: "Minecraft PlayStation 3 Edition",
            foto: "img/juegosFotos/minecraft.jpeg",
            precio: 19,
            letra: "M",
            descripcion: "Minecraft PlayStation 3 Edition es un sandbox desarrollado por 4J Studios y publicado por Mojang Studios para PS3. La adaptación a PlayStation 3 del clásico juego indie, uno de los más populares y vendidos de la historia, una aventura de construcción, exploración y supervivencia en mundo abierto que ha hecho furor entre el público infantil y juvenil, pudiendo vivir todo tipo de aventuras solos o en compañía de otros jugadores."
        },
        {
            id: 26,
            nombre: "Mortal Kombat X",
            foto: "img/juegosFotos/MortalKombatX.jpeg",
            precio: 49,
            letra: "M",
            descripcion: "Mortal Kombat X es un juego de lucha desarrollado por NetherRealm Studios para PlayStation 4, Xbox One, PC, iOS y Android. La saga de lucha más violenta, sangrienta y espectacular regresa con su décima entrega que eleva el listón para convertirse en uno de los Mortal Kombat más queridos."
        },
        {
            id: 27,
            nombre: "New Super Mario Bros",
            foto: "img/juegosFotos/NewSuperMarioBros.jpeg",
            precio: 29,
            letra: "N",
            descripcion: "New Super Mario Bros., desarrollado y publicado por Nintendo, es un videojuego de plataformas lanzado en 2006 para la Nintendo DS. Este título marcó el regreso de Mario a sus raíces en el juego de plataformas 2D, combinando el encanto clásico de los juegos originales de Super Mario con nuevas mecánicas, gráficos mejorados y elementos innovadores."
        },
        {
            id: 28,
            nombre: "NBA 2K17",
            foto: "img/juegosFotos/NBA2K17.jpeg",
            precio: 39,
            letra: "N",
            descripcion: "NBA 2K17 es un videojuego de simulación de baloncesto desarrollado por Visual Concepts y publicado por 2K Sports. Lanzado en 2016, es parte de la franquicia anual de NBA 2K y es ampliamente reconocido por su realismo, profundidad de juego y mejoras significativas en gráficos y jugabilidad."
        },
        {
            id: 29,
            nombre: "Outlast Trinity",
            foto: "img/juegosFotos/OutlastTrinity.jpeg",
            precio: 29,
            letra: "O",
            descripcion: "Outlast Trinity es una colección de terror en primera persona desarrollada por Red Barrels. Publicada en 2017, esta colección para PlayStation 4, Xbox One y PC incluye los tres títulos principales de la franquicia Outlast: Outlast, Outlast: Whistleblower y Outlast 2."
        },
        {
            id: 30,
            nombre: "Ori and the Blind Forest: Definitive Edition",
            foto: "img/juegosFotos/Ori.jpeg",
            precio: 29,
            letra: "O",
            descripcion: "Ori and the Blind Forest: Definitive Edition es un juego de acción y plataformas desarrollado por Moon Studios y publicado por Xbox Game Studios. Un aclamado metroidvania en 2D que incluye nuevas zonas, habilidades y modos de dificultad, mejorando un juego que ya era redondo."
        },
        {
            id: 31,
            nombre: "Pragmata",
            foto: "img/juegosFotos/Pragmata.jpeg",
            precio: 59,
            letra: "P",
            descripcion: "Pragmata es una aventura de acción desarrollada y publicada por Capcom para PlayStation 5, Xbox Series y PC. Este juego de ciencia ficción está ambientado en un futuro distópico en la Luna, protagonizado por una misteriosa niña y un soldado que tiene que protegerla."
        },
        {
            id: 32,
            nombre: "Pro Evolution Soccer 2014",
            foto: "img/juegosFotos/ProEvolutionSoccer2014.jpeg",
            precio: 29,
            letra: "P",
            descripcion: "Pro Evolution Soccer 2014 es un videojuego de simulación de fútbol desarrollado por Konami. Fue lanzado en 2013 como la 13ª entrega de la serie Pro Evolution Soccer, notable por ser el primero en utilizar el Fox Engine."
        },
        {
            id: 33,
            nombre: "Quake",
            foto: "img/juegosFotos/Quake.jpeg",
            precio: 19,
            letra: "Q",
            descripcion: "Quake es un videojuego de disparos en primera persona desarrollado por id Software y publicado por GT Interactive en 1996. Conocido por ser pionero en el género FPS, innovó con gráficos completamente en 3D y un enfoque en el juego multijugador."
        },
        {
            id: 34,
            nombre: "Quake 4",
            foto: "img/juegosFotos/Quake4.jpeg",
            precio: 29,
            letra: "Q",
            descripcion: "Quake 4 es un videojuego de disparos en primera persona desarrollado por Raven Software en colaboración con id Software. Como secuela directa de Quake II, lleva a los jugadores de nuevo a la guerra contra la raza alienígena conocida como los Strogg."
        },
        {
            id: 35,
            nombre: "Red Dead Redemption 2",
            foto: "img/juegosFotos/RedDeadRedemption2.jpeg",
            precio: 59,
            letra: "R",
            descripcion: "Red Dead Redemption 2 es la secuela del aclamado videojuego de Rockstar. Nos trasladará al Salvaje Oeste para vivir una historia sobre forajidos, venganza y atracos en un mundo abierto impresionante."
        },
        {
            id: 36,
            nombre: "Resident Evil 4 Remake",
            foto: "img/juegosFotos/ResidentEvil4Remake.jpeg",
            precio: 49,
            letra: "R",
            descripcion: "Resident Evil 4 Remake es la reimaginación del clásico juego de acción y terror, una ambiciosa puesta al día que nos devuelve a Leon S. Kennedy en su misión de rescate en un pueblo de España."
        },
        {
            id: 37,
            nombre: "Super Mario Bros. Wonder",
            foto: "img/juegosFotos/SuperMarioBros.Wonder.jpeg",
            precio: 49,
            letra: "S",
            descripcion: "Super Mario Bros. Wonder es un encantador juego de plataformas 2D que introduce nuevas habilidades y transformaciones en una aventura cooperativa para hasta cuatro jugadores."
        },
        {
            id: 38,
            nombre: "Spider-Man",
            foto: "img/juegosFotos/Spider-Man.jpeg",
            precio: 59,
            letra: "S",
            descripcion: "Spider-Man para PS4 es un juego de acción y aventura en un mundo abierto, permitiendo al jugador explorar la ciudad de Nueva York mientras lucha contra villanos icónicos."
        },
        {
            id: 39,
            nombre: "The Last of Us 2",
            foto: "img/juegosFotos/TheLastofUs2.jpeg",
            precio: 59,
            letra: "T",
            descripcion: "The Last of Us 2 es la secuela aclamada de uno de los mejores juegos de la PS3, profundizando en temas de venganza y supervivencia en un mundo post-apocalíptico."
        },
        {
            id: 40,
            nombre: "The Legend of Zelda: Tears of the Kingdom",
            foto: "img/juegosFotos/TheLegendofZeldaTearsoftheKingdom.jpeg",
            precio: 69,
            letra: "T",
            descripcion: "The Legend of Zelda: Tears of the Kingdom es la secuela de Breath of the Wild, que continúa la historia de Link en Hyrule con nuevas mecánicas y vastas áreas para explorar."
        },
        {
            id: 41,
            nombre: "Until Dawn",
            foto: "img/juegosFotos/UntilDawn.jpeg",
            precio: 39,
            letra: "U",
            descripcion: "Until Dawn es una aventura narrativa de terror interactiva donde las decisiones del jugador determinan el destino de un grupo de jóvenes perseguidos por un asesino."
        },
        {
            id: 42,
            nombre: "Uncharted 4: El Desenlace del Ladrón",
            foto: "img/juegosFotos/Uncharted4.jpg",
            precio: 59,
            letra: "U",
            descripcion: "Uncharted 4: El Desenlace del Ladrón lleva a Nathan Drake a nuevas aventuras llenas de acción, exploración y misterios en paisajes exóticos."
        },
        {
            id: 43,
            nombre: "Valorant",
            foto: "img/juegosFotos/Valorant.jpeg",
            precio: 0, // Valorant es gratuito
            letra: "V",
            descripcion: "Valorant es un shooter multijugador táctico de Riot Games que combina la acción de los shooters en primera persona con habilidades únicas de personajes en combates 5v5."
        },
        {
            id: 44,
            nombre: "Vigor",
            foto: "img/juegosFotos/Vigor.jpg",
            precio: 29,
            letra: "V",
            descripcion: "Vigor es un juego de acción y supervivencia ambientado en una Noruega postapocalíptica, donde los jugadores buscan recursos y luchan por sobrevivir en un mundo hostil."
        },
        {
            id: 45,
            nombre: "Watch Dogs",
            foto: "img/juegosFotos/WatchDogs.jpeg",
            precio: 39,
            letra: "W",
            descripcion: "Watch Dogs es una aventura de acción en mundo abierto que nos coloca en la piel de un hacker en una Chicago futurista, usando tecnología para lograr sus objetivos."
        },
        {
            id: 46,
            nombre: "Watch Dogs Legion",
            foto: "img/juegosFotos/WatchDogsLegion.jpeg",
            precio: 49,
            letra: "W",
            descripcion: "Watch Dogs Legion ofrece una experiencia de juego en un Londres distópico, donde puedes reclutar y controlar a diversos personajes para llevar a cabo tus misiones."
        },
        {
            id: 47,
            nombre: "X-Men Orígenes: Lobezno",
            foto: "img/juegosFotos/X-MenOrígenesLobezno.jpeg",
            precio: 29,
            letra: "X",
            descripcion: "X-Men Orígenes: Lobezno es un juego de acción basado en la película que narra la historia del popular personaje de Marvel, con combates espectaculares y una narrativa intensa."
        },
        {
            id: 48,
            nombre: "XIII",
            foto: "img/juegosFotos/XIII.jpeg",
            precio: 39,
            letra: "X",
            descripcion: "XIII es un shooter en primera persona con una estética de novela gráfica, que sigue la historia de un hombre amnésico enredado en una conspiración política."
        },
        {
            id: 49,
            nombre: "Yakuza: Like a Dragon",
            foto: "img/juegosFotos/YakuzaLikeaDragon.jpg",
            precio: 49,
            letra: "Y",
            descripcion: "Yakuza: Like a Dragon reinventa la serie con un sistema de combate por turnos, llevando a los jugadores a una narrativa rica en el mundo de la mafia japonesa."
        },
        {
            id: 50,
            nombre: "Youtubers Life 2",
            foto: "img/juegosFotos/youtuberslife.jpg",
            precio: 39,
            letra: "Y",
            descripcion: "Youtubers Life 2 es un simulador de vida que permite a los jugadores vivir la experiencia de ser un creador de contenido en una ciudad virtual llena de oportunidades."
        },
        {
            id: 51,
            nombre: "Zombie Army 4: Dead War",
            foto: "img/juegosFotos/Zombi.jpeg",
            precio: 39,
            letra: "Z",
            descripcion: "Zombie Army 4: Dead War es un shooter cooperativo que enfrenta a los jugadores a hordas de zombis en una versión alternativa de la Segunda Guerra Mundial."
        },
        {
            id: 52,
            nombre: "Zelda: Majora's Mask",
            foto: "img/juegosFotos/ZeldaMajora'sMask.jpg",
            precio: 29,
            letra: "Z",
            descripcion: "Zelda: Majora's Mask es una aventura oscura y enigmática donde Link debe detener la caída de la luna y salvar Termina en un mundo lleno de misterios y retos."
        }

    ];
    
    //console.log(juegos);

    //esto hace que al clickar la letra te lleve a la pagina con la letra selecionada


    if (window.location.href.includes('letras.php')) {
        
        const params = new URLSearchParams(window.location.search);
        const letter = params.get('letra');
        juegos.forEach(juego => {
            if (juego.letra === letter) {
                


                let Guardarjuegos = document.getElementById("Guardarjuegos");


                

            
            let juegodiv = document.createElement('div');
            juegodiv.id=`juego_${juego.id}`;
            juegodiv.classList.add("juegodiv");
            juegodiv.onclick = () => funcionprueba(juego.id, juego.letra);
            Guardarjuegos.appendChild(juegodiv);



            let imagenjuego1 = document.createElement('img');
            imagenjuego1.classList.add("imagenjuego1");
            imagenjuego1.alt= juego.nombre;
            imagenjuego1.src= juego.foto;
            juegodiv.appendChild(imagenjuego1);



            let precioyTitulo = document.createElement('div');
            precioyTitulo.classList.add("precioyTitulo")
            juegodiv.appendChild(precioyTitulo);



            let nombrejuego = document.createElement('div');
            nombrejuego.innerHTML=juego.nombre;
            precioyTitulo.appendChild(nombrejuego);

            
            let preciojuego = document.createElement('div');
            preciojuego.innerHTML=`${juego.precio}€`;
            precioyTitulo.appendChild(preciojuego);














            }
        });
        

    }
    








    
    if (window.location.href.includes('juego.php')) {
        //colorearLetra();
        const params = new URLSearchParams(window.location.search);
        const juegoidselecionado = params.get('juego_id');
    
        console.log(juegoidselecionado);

        
        juegos.forEach(juego => {
            if (juego.id.toString() === juegoidselecionado) {
                console.log(juego.nombre);



         // Contenedor principal donde se añadirá el nuevo contenido
        let JuegoElegido = document.getElementById('JuegoElegido');

        // Crear el contenedor principal del juego
        let juegodiv = document.createElement('div');
        juegodiv.className = 'clase1';

        // Título del juego
        let tituloDiv = document.createElement('div');
        tituloDiv.className = 'clase2';
        tituloDiv.innerHTML = juego.nombre;
        JuegoElegido.appendChild(tituloDiv);

        // Contenedor para la imagen y las estrellas
        let fotoEstrellasDiv = document.createElement('div');
        fotoEstrellasDiv.className = 'clase3';

        // Imagen del juego
        let imagenDiv = document.createElement('div');
        imagenDiv.className = 'clase4';
        let imagenjuego = document.createElement('img');
        imagenjuego.src = juego.foto;
        imagenjuego.alt = juego.nombre;
        imagenjuego.classList = "imagenjuego11"
        imagenDiv.appendChild(imagenjuego);
        fotoEstrellasDiv.appendChild(imagenDiv);

        //crea las imagenes de las estrellas
        let estrellas = document.createElement('div');
        estrellas.className = 'estrellasClase';
        for (let i = 0; i < 5; i++) {
            let imagenestrella = document.createElement('img');
            imagenestrella.alt = `imagenestrella_ ${i}`;
            imagenestrella.src = "img/otros/estrellas.png";
            imagenestrella.className = 'estrellasClase1';

            estrellas.appendChild(imagenestrella);
        
        }
        fotoEstrellasDiv.appendChild(estrellas);


        juegodiv.appendChild(fotoEstrellasDiv);

        // Contenedor para la descripción y datos
        let descripcionDatosDiv = document.createElement('div');
        descripcionDatosDiv.className = 'clase6';

        // Descripción
        let descripcionDiv = document.createElement('div');
        descripcionDiv.className = 'clase7';
        let descripcionTituloDiv = document.createElement('div');
        descripcionTituloDiv.className = 'clase8';
        descripcionTituloDiv.innerHTML = 'Descripcion';
        let descripcionTextoDiv = document.createElement('div');
        descripcionTextoDiv.className = 'clase9';
        descripcionTextoDiv.innerHTML = juego.descripcion;

        descripcionDiv.appendChild(descripcionTituloDiv);
        descripcionDiv.appendChild(descripcionTextoDiv);
        descripcionDatosDiv.appendChild(descripcionDiv);

        // Contenedor de comprar y precio
        let comprarPrecioDiv = document.createElement('div');
        comprarPrecioDiv.className = 'clase10';

        // Botón de comprar
        let comprarDiv = document.createElement('div');
        comprarDiv.className = 'clase11';
        comprarDiv.innerHTML = ` Comprar por: ${juego.precio}€ `;
        comprarPrecioDiv.appendChild(comprarDiv);


        descripcionDatosDiv.appendChild(comprarPrecioDiv);
        juegodiv.appendChild(descripcionDatosDiv);

        // Añadir el juego completo al contenedor principal
        JuegoElegido.appendChild(juegodiv);









            }
        });
    }

})


// Función de redirección
function funcionprueba(id, letter) {
    window.location.href = 'juego.php?juego_id=' + id; //+ '&letras.php?letra=' + letter;

}

// Función de redirección
function redirectToPage(letter) {
    window.location.href = 'letras.php?letra=' + letter;
}


function colorearLetra() {
    const params = new URLSearchParams(window.location.search);
    const letter = params.get('letra');

const letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    // Assuming 'letras' is an array of DOM elements or letter strings
    for (let i = 0; i < letras.length; i++) {
        
        const divletra = document.getElementById(`IdLetra${letras[i]}`);

        if (divletra) {
            if (letras[i] === letter) {
                divletra.classList.add("coloreado");  // Add 'coloreado' class if it matches
            } else {
                divletra.classList.remove("coloreado");  // Remove class if it doesn't match
            }
        }
    }
}
