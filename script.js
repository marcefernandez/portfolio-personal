document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: 'Proyecto 1',
            description: 'Descripción del proyecto 1',
            image: 'images/logo-personal.png'
        },
        {
            title: 'Proyecto 2',
            description: 'Descripción del proyecto 2',
            image: 'images/logo-personal.png'
        },
        {
            title: 'Proyecto 3',
            description: 'Descripción del proyecto 3',
            image: 'images/logo-personal.png'
        },
        {
            title: 'Proyecto 4',
            description: 'Descripción del proyecto 4',
            image: 'images/logo-personal.png'
        }
    ];

    const projectContainer = document.getElementById('projects');
    const projectTemplateOriginal = document.getElementById('project-template');

    projects.forEach(project => {
        const projectTemplate = projectTemplateOriginal.cloneNode(true);
        projectTemplate.removeAttribute('id'); // Eliminar el ID del template clonado
        projectTemplate.style.display = 'block'; // Hacer visible el template

        projectTemplate.querySelector('h3').textContent = project.title;
        projectTemplate.querySelector('p').textContent = project.description;
        projectTemplate.querySelector('img').src = project.image;
        projectTemplate.querySelector('img').alt = 'Imagen de ' + project.title;
        projectContainer.appendChild(projectTemplate);
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Formulario enviado');
        contactForm.reset();
    });
});

// Funcionalidad para redes sociales
document.querySelectorAll('.icono-social').forEach(icon => {
    icon.addEventListener('mouseover', () => {
        document.querySelector('.redes-sociales').style.animationPlayState = 'paused';
    });

    icon.addEventListener('mouseout', () => {
        document.querySelector('.redes-sociales').style.animationPlayState = 'running';
    });
});


// Funcionalidad para menú fijo
document.addEventListener('DOMContentLoaded', (event) => {
    window.addEventListener('scroll', function() {
        const heroSection = document.getElementById('hero');
        const menuSection = document.getElementById('seccion-menu');
        const heroHeight = heroSection.offsetHeight; // Altura de la sección #hero

        // Si el scroll es mayor a la altura del hero, agregar la clase fixed-menu
        // Tener en cuenta pageYOffset o scrollY
        if (window.scrollY > heroHeight) {
            menuSection.classList.add('fixed-menu');
        } else {
            menuSection.classList.remove('fixed-menu');
        }
    });
});

// Funcionalidad en about me para que los iconos se muevan dentro del cuadro marcado por el ul
    document.addEventListener("DOMContentLoaded", () => {
        const ul = document.getElementById("habilidades-lista");
        const lis = Array.from(ul.querySelectorAll("li"));

        function getRect(element) {
            const transform = element.style.transform;
            const [x, y] = transform.replace('translate(', '').replace('px)', '').split(', ').map(parseFloat);
            return {
                left: x,
                top: y,
                right: x + element.offsetWidth,
                bottom: y + element.offsetHeight
            };
        }

        function isOverlapping(rect1, rect2) {
            return !(rect1.right < rect2.left ||
                     rect1.left > rect2.right ||
                     rect1.bottom < rect2.top ||
                     rect1.top > rect2.bottom);
        }

        function moveElementRandomly(element, elements) {
            const ulRect = ul.getBoundingClientRect();
            const maxX = ulRect.width - element.offsetWidth;
            const maxY = ulRect.height - element.offsetHeight;
            let randomX, randomY, overlap, attempts = 0;

            do {
                overlap = false;
                randomX = Math.random() * maxX;
                randomY = Math.random() * maxY;
                const newRect = {
                    left: randomX,
                    right: randomX + element.offsetWidth,
                    top: randomY,
                    bottom: randomY + element.offsetHeight
                };

                for (let otherElement of elements) {
                    if (otherElement !== element) {
                        const otherRect = getRect(otherElement);
                        if (isOverlapping(newRect, otherRect)) {
                            overlap = true;
                            break;
                        }
                    }
                }

                attempts++;
                if (attempts > 50) break; // Prevent infinite loops
            } while (overlap);

            element.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }

        function animateElements() {
            lis.forEach(li => {
                moveElementRandomly(li, lis);
            });
        }

        lis.forEach(li => {
            moveElementRandomly(li, lis); // Inicializar posiciones aleatorias
        });

        setInterval(animateElements, 2000); // Mueve las imágenes cada 2 segundos
    });


    document.addEventListener("DOMContentLoaded", () => {
        const ul = document.getElementById("herramientas-lista");
        const lis = Array.from(ul.querySelectorAll("li"));

        function getRect(element) {
            const transform = element.style.transform;
            const [x, y] = transform.replace('translate(', '').replace('px)', '').split(', ').map(parseFloat);
            return {
                left: x,
                top: y,
                right: x + element.offsetWidth,
                bottom: y + element.offsetHeight
            };
        }

        function isOverlapping(rect1, rect2) {
            return !(rect1.right < rect2.left ||
                     rect1.left > rect2.right ||
                     rect1.bottom < rect2.top ||
                     rect1.top > rect2.bottom);
        }

        function moveElementRandomly(element, elements) {
            const ulRect = ul.getBoundingClientRect();
            const maxX = ulRect.width - element.offsetWidth;
            const maxY = ulRect.height - element.offsetHeight;
            let randomX, randomY, overlap, attempts = 0;

            do {
                overlap = false;
                randomX = Math.random() * maxX;
                randomY = Math.random() * maxY;
                const newRect = {
                    left: randomX,
                    right: randomX + element.offsetWidth,
                    top: randomY,
                    bottom: randomY + element.offsetHeight
                };

                for (let otherElement of elements) {
                    if (otherElement !== element) {
                        const otherRect = getRect(otherElement);
                        if (isOverlapping(newRect, otherRect)) {
                            overlap = true;
                            break;
                        }
                    }
                }

                attempts++;
                if (attempts > 50) break; // Prevent infinite loops
            } while (overlap);

            element.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }

        function animateElements() {
            lis.forEach(li => {
                moveElementRandomly(li, lis);
            });
        }

        lis.forEach(li => {
            moveElementRandomly(li, lis); // Inicializar posiciones aleatorias
        });

        setInterval(animateElements, 2000); // Mueve las imágenes cada 2 segundos
    });
